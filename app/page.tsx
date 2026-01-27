
import { prisma } from "@/lib/prisma";
import HomeClient from "@/components/HomeClient";

// Force dynamic rendering to ensure fresh CMS data
export const dynamic = "force-dynamic";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agencia Shopify Chile | Desarrollo y Diseño de Tiendas Online Expertos",
  description: "Desarrollo de tiendas Shopify en Chile. Creamos e-commerce de alto rendimiento, migración, diseño UX/UI y expertos en conversión. Cotiza tu proyecto hoy.",
  openGraph: {
    title: "Agencia Shopify Chile | Desarrollo y Diseño de Tiendas Online Expertos",
    description: "Desarrollo de tiendas Shopify en Chile. Expertos en e-commerce de alto rendimiento.",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Agencia de Desarrollo Shopify en Chile',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agencia Shopify Chile | Expertos E-commerce",
    description: "Desarrollo de tiendas Shopify de alto rendimiento en Chile.",
    images: ['/og-image.png'],
  },
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

  let latestArticles: any[] = [];
  try {
    latestArticles = await prisma.blogArticle.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      take: 4
    });
  } catch (e) {
    console.error("Blog Fetch Error:", e);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DesarrolloShopify.cl",
            "url": "https://desarrolloweb.cl",
            "description": "Agencia experta en desarrollo y diseño de tiendas Shopify en Chile.",
            "areaServed": "Chile",
            "sameAs": [
              "https://www.instagram.com/desarrolloweb.cl/"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Santiago",
              "addressCountry": "CL"
            }
          })
        }}
      />
      <HomeClient sections={sections} latestArticles={latestArticles} />
    </>
  );
}
