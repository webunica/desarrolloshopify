import { NextResponse } from 'next/server';
import { sendContactEmail, sendConfirmationEmail } from '@/lib/email';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
    email: z.string().email('Email inválido'),
    phone: z.string().optional(),
    company: z.string().optional(),
    message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validar los datos
        const validatedData = contactSchema.parse(body);

        // Enviar el email de notificación al admin
        await sendContactEmail(validatedData);

        // Enviar el email de confirmación al lead
        await sendConfirmationEmail({
            name: validatedData.name,
            email: validatedData.email,
        });

        return NextResponse.json(
            { success: true, message: 'Mensaje enviado correctamente' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error en el formulario de contacto:', error);

        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Datos inválidos',
                    errors: error.issues
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: false,
                message: 'Error al enviar el mensaje. Por favor, intenta nuevamente.'
            },
            { status: 500 }
        );
    }
}
