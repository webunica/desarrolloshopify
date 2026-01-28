import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import slugify from "slugify";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { title, content, category, imageUrl, published, excerpt, slug, keywords } = body;

        // Generate slug if not provided
        let finalSlug = slug;
        if (!finalSlug) {
            finalSlug = slugify(title, { lower: true, strict: true });
        }

        // Ensure slug is unique (basic check, Prisma will throw if not)
        // Ideally we append -1, -2 etc. but simple for now.

        const newArticle = await prisma.blogArticle.create({
            data: {
                title,
                slug: finalSlug,
                content,
                category,
                imageUrl,
                published,
                excerpt,
                keywords,
                publishedAt: published ? new Date() : null,
            },
        });

        return NextResponse.json(newArticle);
    } catch (error) {
        console.error("Error creating article:", error);
        return NextResponse.json({ error: "Error creating article" }, { status: 500 });
    }
}

export async function GET() {
    // Public API to fetch published articles
    // Or admin API to fetch all. For now fetching all published.
    // Admin list uses getServerSideProps/Server Component so it calls DB directly.
    // This endpoint is for frontend if needed or Client Components.
    const articles = await prisma.blogArticle.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(articles);
}
