import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AgenciasSection } from "@/components/AgenciasSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Servicios de Desarrollo Shopify | Migración, Diseño y CRO",
    description: "Servicios especializados en Shopify: Diseño de tiendas a medida, migración desde WooCommerce, optimización de velocidad y consultoría estratégica en Chile.",
};

export default function ServiciosPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Desarrollo y Diseño Shopify",
                        "provider": {
                            "@type": "Organization",
                            "name": "DesarrolloShopify.cl",
                            "url": "https://desarrolloweb.cl"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "Chile"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Servicios Shopify",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Desarrollo a Medida"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Migraciones Seguras"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Diseño UX/UI"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Optimización CRO & WPO"
                                    }
                                }
                            ]
                        }
                    })
                }}
            />
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="container mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-8">Servicios Shopify Especializados</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mb-12">
                        Cubrimos todo el ciclo de vida de tu e-commerce, desde la concepción hasta la optimización de ventas.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                            <h2 className="text-2xl font-bold mb-4">Desarrollo a Medida</h2>
                            <p className="text-slate-400">Creamos funcionalidades únicas usando Liquid, React y Node.js para que tu tienda haga exactamente lo que necesitas.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                            <h2 className="text-2xl font-bold mb-4">Migraciones Seguras</h2>
                            <p className="text-slate-400">Traemos tus productos, clientes y pedidos desde WooCommerce, PrestaShop o Jumpseller sin perder posicionamiento SEO.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                            <h2 className="text-2xl font-bold mb-4">Diseño UX/UI</h2>
                            <p className="text-slate-400">Interfaces hermosas y funcionales diseñadas para maximizar la conversión móvil y desktop.</p>
                        </div>
                        <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                            <h2 className="text-2xl font-bold mb-4">Optimización CRO & WPO</h2>
                            <p className="text-slate-400">Auditorías de rendimiento y mejoras estratégicas para aumentar la velocidad de carga y las ventas.</p>
                        </div>
                    </div>
                </div>
            </main>

            <AgenciasSection />
            <Footer />
        </div>
    );
}
