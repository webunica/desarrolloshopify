import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, BarChart3, Rocket, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5 bg-black/50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            desarrolloshopify.cl
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#metodo" className="hover:text-white transition-colors">Método</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portafolio</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          <Link href="/iniciar">
            <Button variant="premium" size="sm">
              Iniciar Proyecto <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black z-0 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
            Tu Tienda
            <span className="block gradient-text">Shopify de Alto Impacto</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Diseñamos experiencias de e-commerce que no solo se ven increíbles,
            sino que convierten visitantes en clientes leales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/iniciar">
              <Button variant="premium" size="lg" className="h-14 px-8 text-lg">
                Comenzar Ahora - Cotizar Gratis
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-white/10 hover:bg-white/5">
              Ver Nuestros Casos de Éxito
            </Button>
          </div>
        </div>

        {/* Abstract shapes/glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      </section>

      {/* Stats / Social Proof */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Tiendas Lanzadas", value: "150+" },
            { label: "Ingresos Generados", value: "$50M+" },
            { label: "Tasa de Conversión", value: "x3" },
            { label: "Soporte", value: "24/7" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature / Method Grid */}
      <section id="metodo" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Nuestro Método</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Un proceso optimizado para lanzar tu tienda en tiempo récord sin sacrificar calidad.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ShoppingBag className="w-8 h-8 text-blue-400" />}
              title="Estrategia & Diseño"
              desc="Analizamos tu mercado y diseñamos una interfaz UI/UX centrada en la conversión y la identidad de marca."
            />
            <FeatureCard
              icon={<Rocket className="w-8 h-8 text-purple-400" />}
              title="Desarrollo Shopify"
              desc="Implementamos tu tienda con las mejores prácticas, código limpio y optimización para móviles."
            />
            <FeatureCard
              icon={<BarChart3 className="w-8 h-8 text-pink-400" />}
              title="Lanzamiento & Growth"
              desc="Configuramos analytics, SEO y te preparamos para escalar tus ventas desde el día uno."
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section Placeholder */}
      <section id="portfolio" className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Trabajos Recientes</h2>
              <p className="text-gray-400">Proyectos que definen estándares.</p>
            </div>
            <Button variant="outline" className="hidden md:flex">Ver Todo</Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Card 1 */}
            <div className="group relative overflow-hidden rounded-xl aspect-video bg-neutral-900 border border-white/10 hover:border-purple-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform">Moda Urbana CL</h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">Rediseño completo + Migración 2.0</p>
              </div>
            </div>
            {/* Project Card 2 */}
            <div className="group relative overflow-hidden rounded-xl aspect-video bg-neutral-900 border border-white/10 hover:border-purple-500/50 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform">Tech Store Pro</h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">Desarrollo Headless & B2B</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <FaqItem question="¿Cuánto tiempo toma desarrollar una tienda?" answer="Normalmente entre 2 a 4 semanas dependiendo de la complejidad y la cantidad de productos." />
            <FaqItem question="¿Incluye dominio y hosting?" answer="Shopify incluye el hosting. Nosotros te ayudamos a configurar tu dominio personalizado." />
            <FaqItem question="¿Puedo editar el contenido yo mismo?" answer="¡Absolutamente! Te entregamos un panel autoadministrable y te capacitamos para usarlo." />
            <FaqItem question="¿Hacen migraciones desde WooCommerce?" answer="Sí, somos expertos en migrar catálogos, clientes y pedidos desde otras plataformas." />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            ¿Listo para escalar tu negocio?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Agenda una llamada de descubrimiento o inicia tu proyecto hoy mismo con nuestro wizard interactivo.
          </p>
          <Link href="/iniciar">
            <Button variant="premium" size="lg" className="h-16 px-10 text-xl shadow-2xl shadow-purple-900/50">
              Comenzar Mi Proyecto
            </Button>
          </Link>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Desarrolloshopify.cl. Todos los derechos reservados.</p>
        <p className="mt-2">Santiago, Chile.</p>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all text-left">
      <div className="mb-6 p-4 rounded-full bg-white/5 w-fit rounded-tl-none border border-white/5">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="border-b border-white/10 py-4">
      <details className="group">
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-2 text-lg hover:text-purple-400 transition-colors">
          <span>{question}</span>
          <span className="transition group-open:rotate-180">
            <ArrowRight className="w-5 h-5 rotate-90" />
          </span>
        </summary>
        <p className="text-gray-400 mt-3 mb-4 leading-relaxed pl-4 border-l-2 border-purple-500/30">
          {answer}
        </p>
      </details>
    </div>
  );
}
