import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AgenciasSection } from "@/components/AgenciasSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
    title: "Portafolio Javier Millar | Experto Shopify & WooCommerce Chile",
    description: "Más de 15 años liderando proyectos digitales. Revisa mi portafolio de tiendas Shopify, plataformas LMS y sitios corporativos desarrollados con tecnología de punta.",
};

export default function PortafolioPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Navbar />

            <main className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <header className="mb-20 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Portafolio & Trayectoria</h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                            Liderando <strong>Webunica.cl</strong> por más de 15 años. Especialista en arquitectura eCommerce,
                            ecosistemas educativos (LMS) y desarrollo a medida enfocado en performance.
                        </p>
                    </header>

                    {/* Shopify Projects */}
                    <section className="mb-24">
                        <h2 className="text-3xl font-bold mb-10 flex items-center gap-4 border-b border-white/10 pb-4 text-green-400">
                            <span className="bg-green-500/10 p-2 rounded-lg">🛍️</span> Shopify E-commerce (OS 2.0 & Liquid)
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { name: "Kine Lawen", cat: "Salud" },
                                { name: "AntarctiCare", cat: "Cosmética" },
                                { name: "SpinMedical", cat: "Equipamiento Médico" },
                                { name: "Divan Tienda", cat: "Mobiliario y Diseño" },
                                { name: "Librería Bazarte", cat: "Arte y Cultura" },
                                { name: "Chiletronics", cat: "Tecnología" },
                                { name: "Altavis Chile", cat: "Equipamiento Táctico" },
                                { name: "PHY Waters", cat: "Suplementos" },
                                { name: "Recovery Zone", cat: "Deporte y Recuperación" },
                                { name: "Tecno-Mobile", cat: "Retail Tech" },
                                { name: "Only Jeep", cat: "Automotriz" },
                                { name: "TerraAndes Plus", cat: "Exportación" },
                                { name: "EvertSport", cat: "Indumentaria" },
                                { name: "FuturoTech", cat: "Dropshipping" },
                            ].map((project, i) => (
                                <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-green-500/30 hover:bg-white/10 transition-all">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">{project.name}</h3>
                                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">{project.cat}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* WP & LMS Projects */}
                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-400">
                                <span className="bg-blue-500/10 p-2 rounded-lg">🎓</span> WordPress: LMS & WooCommerce
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { name: "Educontable.cl", cat: "Tutor LMS" },
                                    { name: "Reaprende.cl", cat: "E-learning Híbrido" },
                                    { name: "Jardín de Luz", cat: "Educación" },
                                    { name: "Synergy Links", cat: "Academy Médica" },
                                    { name: "Sonnda", cat: "WooCommerce Construction" },
                                    { name: "Asmed / Bramanic", cat: "Ventas B2B" },
                                ].map((project, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                        <span className="font-bold">{project.name}</span>
                                        <span className="text-xs bg-blue-500/10 text-blue-300 px-2 py-1 rounded">{project.cat}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Corporate Projects */}
                        <section>
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-purple-400">
                                <span className="bg-purple-500/10 p-2 rounded-lg">🏢</span> Corporativos & Inmobiliaria
                            </h2>
                            <div className="space-y-4">
                                {[
                                    { name: "Inovena.cl", cat: "Portal Inmobiliario" },
                                    { name: "Gesche Ingenieros", cat: "Ingeniería" },
                                    { name: "Grúas Acer", cat: "Servicios Industriales" },
                                    { name: "Grupo Kefren / PPI", cat: "Seguridad" },
                                    { name: "Urbatec / Kitsol", cat: "Tecnología Solar" },
                                    { name: "Novosur Propiedades", cat: "Virtual Tours" },
                                ].map((project, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                                        <span className="font-bold">{project.name}</span>
                                        <span className="text-xs bg-purple-500/10 text-purple-300 px-2 py-1 rounded">{project.cat}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    <section className="mt-20 pt-10 border-t border-white/10 text-center">
                        <p className="text-slate-500 mb-6">¿Quieres ver más detalles o solicitar referencias?</p>
                        <a
                            href="https://wa.me/56966198752"
                            target="_blank"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-slate-950 shadow transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950"
                        >
                            Contactar por WhatsApp
                        </a>
                    </section>
                </div>
            </main>

            <AgenciasSection />
            <Footer />
        </div>
    );
}
