import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ token: string }> }
) {
    const token = (await params).token;

    try {
        // Mock project fetch (Schema missing Project)
        // const project = await prisma.project.findUnique(...)

        // Mock not found for now to pass build
        return NextResponse.json(
            { error: "Wizard disabled temporarily" },
            { status: 404 }
        );
    } catch (error) {
        console.error("Error fetching wizard state:", error);
        return NextResponse.json(
            { error: "Error interno" },
            { status: 500 }
        );
    }
}
