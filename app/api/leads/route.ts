import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { randomBytes } from 'crypto';

const schema = z.object({
    email: z.string().email(),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email } = schema.parse(body);

        // 1. Upsert Lead
        const lead = await prisma.lead.upsert({
            where: { email },
            update: {},
            create: {
                email,
                name: 'Unknown',
                whatsapp: '00000000',
            },
        });

        // 2. Mock Project Creation (Schema missing Project)
        const token = randomBytes(16).toString('hex');
        const projectId = 0; // Mock ID

        // const project = await prisma.project.create(...)

        return NextResponse.json({
            success: true,
            token: token,
            projectId: projectId
        });

    } catch (error) {
        console.error('Lead creation error:', error);
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: 'Email inválido', details: (error as any).errors }, { status: 400 });
        }
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}
