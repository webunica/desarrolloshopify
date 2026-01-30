
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const id = (await params).id;
    try {
        const body = await request.json();
        const { content, isVisible } = body;

        // Mock update for build
        // const updated = await prisma.siteSection.update(...)
        const updated = { id, content, isVisible };

        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
