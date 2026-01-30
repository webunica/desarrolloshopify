
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        // Mock pages for build
        // const pages = await prisma.sitePage.findMany(...)
        const pages: any[] = [];
        return NextResponse.json(pages);
    } catch (error) {
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
