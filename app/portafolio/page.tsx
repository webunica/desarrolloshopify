import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portafolio de Tiendas Shopify | Nuestros Trabajos",
    description: "Revisa algunas de las tiendas online que hemos diseñado y desarrollado para marcas líderes en Chile y el mundo.",
};

export default function PortafolioPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20 px-6">
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-8">Casos de Éxito</h1>
                <p className="text-xl text-slate-400 max-w-2xl mb-12">
                    Marcas que han confiado en nosotros para escalar sus ventas online.
                </p>

                <div className="grid md:grid-cols-2 gap-12">
                    {[1, 2].map((i) => (
                        <div key={i} className="group relative">
                            <div className="aspect-[16/9] bg-white/5 rounded-2xl overflow-hidden mb-6">
                                {/* Placeholder IMG */}
                                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 group-hover:scale-105 transition-transform duration-700"></div>
                            </div>
                            <h2 className="text-2xl font-bold mb-2">Proyecto {i}</h2>
                            <p className="text-slate-400 mb-4">Migración completa y rediseño de marca para empresa de retail.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
