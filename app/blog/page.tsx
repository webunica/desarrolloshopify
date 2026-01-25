import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Shopify Chile | Guías, Tips y Estrategias E-commerce",
    description: "Aprende a vender más con nuestros artículos expertos sobre Shopify, pagos online, logística y marketing digital en Chile.",
};

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-8">Blog & Recursos</h1>
                <p className="text-xl text-slate-400 max-w-2xl mb-12">
                    Guías prácticas para potenciar tu tienda online en el mercado chileno.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Artículos Placeholder - En el futuro se pueden cargar del CMS */}
                    {[1, 2, 3].map((i) => (
                        <article key={i} className="group cursor-pointer">
                            <div className="aspect-video bg-white/5 rounded-xl mb-4 border border-white/5 group-hover:border-purple-500/50 transition-colors"></div>
                            <span className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-2 block">Guías</span>
                            <h2 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition-colors">Cómo configurar Webpay en Shopify (Guía 2025)</h2>
                            <p className="text-slate-400 text-sm">Paso a paso para integrar pagos locales en tu e-commerce sin dolores de cabeza.</p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
