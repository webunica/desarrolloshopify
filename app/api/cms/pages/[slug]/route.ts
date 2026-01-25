
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const slug = (await params).slug;

    try {
        const page = await prisma.sitePage.findUnique({
            where: { slug },
            include: {
                sections: {
                    orderBy: { order: "asc" }
                }
            }
        });

        if (!page) {
            return NextResponse.json({ error: "Page not found" }, { status: 404 });
        }

        return NextResponse.json(page);
    } catch (error) {
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
