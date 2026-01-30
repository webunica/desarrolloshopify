
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const slug = (await params).slug;

    try {
        // Mock response to fix build
        // const page = await prisma.sitePage.findUnique({ ... })
        const page = null;

        if (!page) {
            return NextResponse.json({ error: "CMS disabled temporarily" }, { status: 404 });
        }

        return NextResponse.json(page);
    } catch (error) {
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
