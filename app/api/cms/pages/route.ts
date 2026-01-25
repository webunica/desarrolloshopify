
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const pages = await prisma.sitePage.findMany({
            include: {
                _count: {
                    select: { sections: true }
                }
            },
            orderBy: { slug: "asc" }
        });
        return NextResponse.json(pages);
    } catch (error) {
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
