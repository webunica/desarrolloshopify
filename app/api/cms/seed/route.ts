
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
    try {
        // Mock seeding for build
        return NextResponse.json({ success: true, message: "CMS Seeding disabled temporarily" });

        return NextResponse.json({ success: true, message: "Database seeded" });
    } catch (error) {
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}
