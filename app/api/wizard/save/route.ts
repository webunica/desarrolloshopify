import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const schema = z.object({
    token: z.string(),
    step: z.number(),
    answers: z.record(z.string(), z.any()), // key-value pairs of answers for this step
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { token, step, answers } = schema.parse(body);

        // Mock save logic (Schema missing Project/Answer)
        // const project = await prisma.project.findUnique(...)

        // Return mock success

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Save wizard error:', error);
        return NextResponse.json({ error: 'Error guardando datos' }, { status: 500 });
    }
}
