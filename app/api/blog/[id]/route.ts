import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Since this is a Next.js 15 app as seen in other files (Promise params)
interface Props {
    params: Promise<{ id: string }>;
}

export async function PUT(req: Request, { params }: Props) {
    try {
        const { id } = await params;
        const body = await req.json();
        const { title, slug, content, category, imageUrl, published, excerpt } = body;

        const updatedArticle = await prisma.blogArticle.update({
            where: { id },
            data: {
                title,
                slug,
                content,
                category,
                imageUrl,
                published,
                excerpt,
                publishedAt: published ? new Date() : null, // Update published date if publishing
            },
        });

        return NextResponse.json(updatedArticle);
    } catch (error) {
        console.error("Error updating article:", error);
        return NextResponse.json({ error: "Error updating article" }, { status: 500 });
    }
}

export async function DELETE(req: Request, { params }: Props) {
    try {
        const { id } = await params;
        await prisma.blogArticle.delete({
            where: { id },
        });
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Error deleting article" }, { status: 500 });
    }
}
