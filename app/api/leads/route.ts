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
            create: { email },
        });

        // 2. Create Draft Project with a unique token
        // Generate a friendly token or a secure random one. 
        // For a client panel, a shorter, enterable token might be nice, but UUID is safer.
        // Let's use a random hex string for now.
        const token = randomBytes(16).toString('hex');

        const project = await prisma.project.create({
            data: {
                leadId: lead.id,
                token: token,
                statusString: 'DRAFT',
            },
        });

        return NextResponse.json({
            success: true,
            token: project.token,
            projectId: project.id
        });

    } catch (error) {
        console.error('Lead creation error:', error);
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: 'Email inválido', details: (error as any).errors }, { status: 400 });
        }
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}
