import type { Metadata } from 'next';
import PreciosClient from './PreciosClient';

export const metadata: Metadata = {
    title: 'Precios Tiendas Shopify Chile | Desarrollo Web E-commerce',
    description: 'Planes desde $580.000 + IVA. Crea tu tienda Shopify con expertos certificados. Pago en 6 cuotas sin interés. Diseño profesional, migración y soporte incluido. ¡Cotiza gratis!',
    keywords: [
        'precios shopify chile',
        'cuanto cuesta shopify',
        'desarrollo shopify precio',
        'tienda online precio chile',
        'crear tienda shopify',
        'shopify chile',
        'ecommerce chile precio',
        'desarrollo web ecommerce'
    ],
    openGraph: {
        title: 'Precios Tiendas Shopify Chile - Desde $580.000',
        description: 'Planes diseñados para tu éxito. Pago en 6 cuotas sin interés. Shopify Partners certificados con +100 proyectos exitosos.',
        type: 'website',
        locale: 'es_CL',
        url: 'https://desarrolloshopify.cl/precios',
        siteName: 'DesarrolloShopify.cl',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Precios Tiendas Shopify Chile',
        description: 'Planes desde $580.000. Desarrollo profesional con expertos certificados.',
    },
    alternates: {
        canonical: 'https://desarrolloshopify.cl/precios',
    },
};

export default function PreciosPage() {
    return <PreciosClient />;
}
