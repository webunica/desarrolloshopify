
import { prisma } from "@/lib/prisma";
import HomeClient from "@/components/HomeClient";

// Force dynamic rendering to ensure fresh CMS data
export const dynamic = "force-dynamic";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agencia Shopify Chile | Desarrollo y Diseño de Tiendas Online Expertos",
  description: "Desarrollo de tiendas Shopify en Chile. Creamos e-commerce de alto rendimiento, migración, diseño UX/UI y expertos en conversión. Cotiza tu proyecto hoy.",
};

export default async function Home() {
  let sections: any[] = [];

  try {
    const homePage = await prisma.sitePage.findUnique({
      where: { slug: "home" },
      include: { sections: true }
    });
    if (homePage) {
      sections = homePage.sections;
    }
  } catch (e) {
    console.error("CMS Fetch Error:", e);
    // Fallback to empty sections (default static mode)
  }

  return <HomeClient sections={sections} />;
}
