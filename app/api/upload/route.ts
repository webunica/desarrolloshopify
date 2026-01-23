import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { prisma } from '@/lib/prisma';
import { randomBytes } from 'crypto';

export async function POST(req: Request) {
    try {
        const data = await req.formData();
        const file: File | null = data.get('file') as unknown as File;
        const projectId = data.get('projectId') as string;

        if (!file || !projectId) {
            return NextResponse.json({ success: false, error: "No file or projectId" });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Sanitize name
        const ext = file.name.split('.').pop();
        const safeName = `${Date.now()}-${randomBytes(4).toString('hex')}.${ext}`;

        // Save to public/uploads (Note: In production (Vercel), this filesystem is ephemeral. 
        // You must use S3/Blob storage. This is for local MVP as requested).
        const path = join(process.cwd(), 'public/uploads', safeName);
        await writeFile(path, buffer);

        const publicUrl = `/uploads/${safeName}`;

        // Save metadata to DB
        const dbFile = await prisma.file.create({
            data: {
                name: file.name,
                path: publicUrl,
                size: file.size,
                mimeType: file.type,
                projectId: projectId
            }
        });

        return NextResponse.json({ success: true, url: publicUrl, id: dbFile.id });

    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ success: false, error: "Internal Error" });
    }
}
