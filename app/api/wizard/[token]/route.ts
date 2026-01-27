import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ token: string }> }
) {
    const token = (await params).token;

    try {
        const project = await prisma.project.findUnique({
            where: { token },
            include: {
                lead: true,
                answers: true,
                files: true,
            },
        });

        if (!project) {
            return NextResponse.json(
                { error: "Proyecto no encontrado" },
                { status: 404 }
            );
        }

        // Convert answers list to record/object format for frontend
        const answersRecord: Record<string, any> = {};
        project.answers.forEach((ans) => {
            try {
                // If it looks like JSON array/object, parse it? 
                // Currently value is just string in schema.
                // But in logic we JSON.stringify objects.
                // Let's try to parse if it looks like JSON, else string.
                if (ans.value.startsWith('[') || ans.value.startsWith('{')) {
                    answersRecord[ans.key] = JSON.parse(ans.value);
                } else {
                    answersRecord[ans.key] = ans.value;
                }
            } catch {
                answersRecord[ans.key] = ans.value;
            }
        });

        // Add uploaded files urls to answers if needed for preview
        if (project.files.length > 0) {
            answersRecord.uploaded_files = project.files.map(f => f.path);
            answersRecord.file_ids = project.files.map(f => f.id);
        }

        return NextResponse.json({
            project: {
                id: project.id,
                status: project.statusString,
                leadEmail: project.lead.email,
            },
            answers: answersRecord,
        });
    } catch (error) {
        console.error("Error fetching wizard state:", error);
        return NextResponse.json(
            { error: "Error interno" },
            { status: 500 }
        );
    }
}
