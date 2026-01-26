import type { Metadata } from 'next';
import ContactoClient from './ContactoClient';

export const metadata: Metadata = {
    title: 'Contacto | DesarrolloShopify.cl - Hablemos de tu Proyecto',
    description: 'Contáctanos para desarrollar tu tienda Shopify. Expertos en e-commerce en Chile. Te respondemos en menos de 24 horas.',
    keywords: ['contacto shopify chile', 'cotización tienda shopify', 'desarrollo shopify contacto', 'agencia shopify chile'],
    openGraph: {
        title: 'Contacto - DesarrolloShopify.cl',
        description: 'Hablemos de tu proyecto. Expertos en desarrollo Shopify en Chile.',
        type: 'website',
    },
};

export default function ContactoPage() {
    return <ContactoClient />;
}
