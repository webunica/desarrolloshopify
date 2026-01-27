
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

async function main() {
    console.log("Limpiando secciones duplicadas...");

    // Delete all site sections to start fresh
    await prisma.siteSection.deleteMany({});

    console.log("Secciones eliminadas. Ejecutando seed limpio...");

    // Re-run the logic from the API seed text but purely via script for guaranteed cleanup
    const homePage = await prisma.sitePage.upsert({
        where: { slug: "home" },
        update: {},
        create: { slug: "home", title: "Página de Inicio" }
    });

    await prisma.siteSection.createMany({
        data: [
            {
                pageId: homePage.id,
                component: "CodeLeftRain",
                name: "Hero Animation (Code Rain)",
                content: JSON.stringify({ enabled: true }),
                order: 0
            },
            {
                pageId: homePage.id,
                component: "ShopifyInfoTabs",
                name: "Tabs de Información (Servicios)",
                content: JSON.stringify({ title: "Desarrollo de Tiendas Shopify en Chile" }),
                order: 1
            }
        ]
    });

    console.log("¡Limpieza completada!");
}

main()
    .catch(e => { console.error(e); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });
