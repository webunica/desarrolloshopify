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

        const project = await prisma.project.findUnique({
            where: { token },
        });

        if (!project) {
            return NextResponse.json({ error: 'Proyecto no encontrado' }, { status: 404 });
        }

        // Save each answer
        // We use a simple loop with findFirst/upsert logic because we don't have a unique compound index on (projectId, key)
        // This is robust enough for this use case.

        // Note: The above doesn't clear old answers. 
        // A better way is:

        for (const [key, value] of Object.entries(answers)) {
            const stringValue = typeof value === 'object' ? JSON.stringify(value) : String(value);

            // Check if exists
            const existing = await prisma.answer.findFirst({
                where: { projectId: project.id, key }
            });

            if (existing) {
                await prisma.answer.update({
                    where: { id: existing.id },
                    data: { value: stringValue, step }
                });
            } else {
                await prisma.answer.create({
                    data: {
                        projectId: project.id,
                        step,
                        key,
                        value: stringValue
                    }
                });
            }
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Save wizard error:', error);
        return NextResponse.json({ error: 'Error guardando datos' }, { status: 500 });
    }
}
