
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
    try {
        // 1. Home Page
        const homePage = await prisma.sitePage.upsert({
            where: { slug: "home" },
            update: {},
            create: {
                slug: "home",
                title: "Página de Inicio",
            }
        });

        // Sections for Home
        await prisma.siteSection.createMany({
            data: [
                {
                    pageId: homePage.id,
                    component: "CodeLeftRain",
                    name: "Hero Animation (Code Rain)",
                    content: { enabled: true },
                    order: 0
                },
                {
                    pageId: homePage.id,
                    component: "ShopifyInfoTabs",
                    name: "Tabs de Información (Servicios)",
                    content: {
                        // Default content matching current hardcoded values could go here
                        title: "Desarrollo de Tiendas Shopify en Chile"
                    },
                    order: 1
                }
            ],
            skipDuplicates: true
        });

        // 2. Agencias Page
        const agenciasPage = await prisma.sitePage.upsert({
            where: { slug: "agencias" },
            update: {},
            create: {
                slug: "agencias",
                title: "Página de Agencias",
            }
        });

        await prisma.siteSection.createMany({
            data: [
                {
                    pageId: agenciasPage.id,
                    component: "CodeLeftRain", // Reusing this as requested
                    name: "Hero Animation",
                    content: { enabled: true },
                    order: 0
                }
            ],
            skipDuplicates: true
        });

        return NextResponse.json({ success: true, message: "Database seeded" });
    } catch (error) {
        return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    }
}
