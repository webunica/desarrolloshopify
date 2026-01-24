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

      {/* SEO Content Block (Hidden / Structured) */}
      <section className="bg-white text-slate-800">
        <div className="wtn-wrap">
          <div className="wtn-container">
            {/* HERO */}
            <section className="wtn-hero" id="inicio">
              <div className="wtn-badge">Desarrollo Tiendas Shopify Chile</div>
              <h2>Desarrollo de <span style={{ color: "var(--h-primary)" }}>tiendas Shopify en Chile</span> listas para vender</h2>
              <p>
                Diseñamos y desarrollamos <strong>tiendas Shopify profesionales</strong> para pymes y empresas en Chile,
                con integración de medios de pago locales, envíos nacionales y una experiencia de compra optimizada para convertir visitas en ventas.
              </p>
              <div className="wtn-cta">
                <a className="wtn-btn" href="https://wa.me/56984410379" target="_blank" rel="noopener noreferrer">Cotizar tienda Shopify</a>
                <a className="wtn-btn-outline" href="#proceso">Ver cómo trabajamos</a>
              </div>
            </section>

            {/* BENEFICIOS */}
            <section className="wtn-section" id="beneficios">
              <h2>¿Por qué desarrollar tu tienda Shopify con una agencia en Chile?</h2>
              <p className="lead">Aprovecha al máximo Shopify con un desarrollo pensado para el mercado chileno y las necesidades reales de tu negocio.</p>
              <div className="wtn-grid">
                <div className="wtn-card">
                  <h3><span className="ic">1</span>Enfoque en pymes y emprendedores</h3>
                  <p>Trabajamos día a día con pymes y marcas locales, entendemos sus tiempos, presupuestos y la necesidad de tener resultados concretos.</p>
                </div>
                <div className="wtn-card">
                  <h3><span className="ic">2</span>Implementación técnica completa</h3>
                  <p>Nos encargamos del <strong>desarrollo de la tienda Shopify</strong>, estructura, colecciones, páginas informativas y ajustes generales.</p>
                </div>
                <div className="wtn-card">
                  <h3><span className="ic">3</span>Integración con el ecosistema chileno</h3>
                  <p>Configuramos medios de pago y envíos usados en Chile para que tus clientes compren con confianza y sin fricciones.</p>
                </div>
              </div>
            </section>

            {/* CARACTERÍSTICAS / FUNCIONES */}
            <section className="wtn-section" id="caracteristicas">
              <h2>Qué incluye nuestro desarrollo de tiendas Shopify en Chile</h2>
              <p className="lead">Un servicio integral para lanzar tu ecommerce con una base sólida, escalable y fácil de administrar.</p>
              <div className="wtn-list">
                <div className="wtn-item"><strong>Configuración inicial de Shopify:</strong> creación de la tienda, dominios y ajustes generales.</div>
                <div className="wtn-item"><strong>Diseño visual profesional:</strong> personalización de tema premium adaptado a tu marca y rubro.</div>
                <div className="wtn-item"><strong>Estructura de colecciones:</strong> categorías claras para facilitar la navegación y el SEO.</div>
                <div className="wtn-item"><strong>Carga de productos:</strong> subida de productos, variantes (talla, color, etc.) y fichas completas.</div>
                <div className="wtn-item"><strong>Páginas clave:</strong> quiénes somos, contacto, términos, política de envíos y devoluciones.</div>
                <div className="wtn-item"><strong>SEO básico on-page:</strong> optimización de títulos, descripciones y encabezados principales.</div>
                <div className="wtn-item"><strong>Integración con redes sociales:</strong> conexión con Instagram, Facebook y canales de venta externos.</div>
                <div className="wtn-item"><strong>Capacitación:</strong> sesión para aprender a administrar productos, pedidos y contenidos.</div>
              </div>
            </section>

            {/* PROCESO */}
            <section className="wtn-section" id="proceso">
              <h2>Proceso de desarrollo de tu tienda Shopify</h2>
              <p className="lead">Seguimos un flujo claro para que sepas en todo momento en qué etapa va tu proyecto.</p>
              <div className="wtn-list">
                <div className="wtn-item">
                  <strong>1. Diagnóstico y planificación</strong><br />
                  Revisamos tu modelo de negocio, catálogo, tipos de clientes y definimos los objetivos de la tienda.
                </div>
                <div className="wtn-item">
                  <strong>2. Arquitectura y diseño UX/UI</strong><br />
                  Definimos colecciones, navegación, estructura de páginas y el estilo visual de la tienda.
                </div>
                <div className="wtn-item">
                  <strong>3. Desarrollo y configuración en Shopify</strong><br />
                  Implementamos el diseño, cargamos productos, configuramos impuestos, monedas y contenido clave.
                </div>
                <div className="wtn-item">
                  <strong>4. Pagos, envíos y notificaciones</strong><br />
                  Deixamos configurados medios de pago, métodos de envío y correos automáticos de pedidos.
                </div>
                <div className="wtn-item">
                  <strong>5. Pruebas y ajustes finales</strong><br />
                  Probamos el flujo de compra completo, revisamos textos y hacemos ajustes antes del lanzamiento.
                </div>
                <div className="wtn-item">
                  <strong>6. Capacitación y soporte inicial</strong><br />
                  Te enseñamos a administrar tu tienda y resolvemos dudas durante el periodo de puesta en marcha.
                </div>
              </div>
            </section>

            {/* PAGOS Y ENVIOS */}
            <section className="wtn-section" id="pagos-envios">
              <h2>Medios de pago y envíos para Shopify en Chile</h2>
              <p className="lead">Configuramos tu tienda para que puedas cobrar y despachar sin complicaciones.</p>
              <div className="wtn-list">
                <div className="wtn-item">
                  <strong>Medios de pago locales</strong><br />
                  Integración con pasarelas como <strong>Transbank (Webpay)</strong>, <strong>Mercado Pago</strong>, <strong>Flow</strong> y otros proveedores compatibles.
                </div>
                <div className="wtn-item">
                  <strong>Pagos internacionales</strong><br />
                  Configuración de <strong>PayPal</strong> y opciones en dólares para vender fuera de Chile.
                </div>
                <div className="wtn-item">
                  <strong>Envíos nacionales</strong><br />
                  Tarifas por región o comuna, envíos por pagar y opciones de retiro en tienda física.
                </div>
                <div className="wtn-item">
                  <strong>Multicourier</strong><br />
                  Integraciones con soluciones de logística que centralizan transportistas (según plan y requerimientos).
                </div>
              </div>
            </section>

            {/* TIPOS DE PROYECTOS */}
            <section className="wtn-section" id="tipos-proyectos">
              <h2>Tipos de proyectos Shopify que desarrollamos</h2>
              <p className="lead">Adaptamos el alcance del proyecto al momento en que se encuentra tu negocio.</p>
              <div className="wtn-grid">
                <div className="wtn-card">
                  <h3>Tiendas nuevas para pymes</h3>
                  <p>Perfecto para emprender desde cero con una tienda Shopify profesional y lista para crecer.</p>
                </div>
                <div className="wtn-card">
                  <h3>Migración a Shopify</h3>
                  <p>Migramos tu tienda desde WooCommerce u otras plataformas, cuidando productos y clientes.</p>
                </div>
                <div className="wtn-card">
                  <h3>Marcas consolidadas</h3>
                  <p>Proyectos con catálogos grandes, múltiples colecciones y foco en rendimiento y conversión.</p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="wtn-section wtn-faq" id="faq-seo">
              <h2>Preguntas frecuentes sobre desarrollo de tiendas Shopify en Chile</h2>
              <div className="wtn-card">
                <p className="q">¿Cuánto cuesta el desarrollo de una tienda Shopify?</p>
                <p className="a">El valor depende del número de productos, nivel de personalización y requerimientos específicos. Podemos adaptar una propuesta a tu pyme o empresa.</p>
              </div>
              <div className="wtn-card">
                <p className="q">¿En cuánto tiempo estará lista mi tienda Shopify?</p>
                <p className="a">En la mayoría de los proyectos estándar, el tiempo va entre 2 y 4 semanas, siempre que tengamos la información y material (textos, fotos, logo) a tiempo.</p>
              </div>
              <div className="wtn-card">
                <p className="q">¿Necesito saber de diseño o programación?</p>
                <p className="a">No. Nosotros nos encargamos del diseño y del desarrollo. Luego te capacitamos para administrar pedidos, productos y contenidos básicos.</p>
              </div>
              <div className="wtn-card">
                <p className="q">¿Puedo partir con pocos productos y crecer después?</p>
                <p className="a">Sí. Shopify te permite partir con un catálogo pequeño e ir agregando productos, colecciones y funciones a medida que tu negocio crece.</p>
              </div>
              <div className="wtn-card">
                <p className="q">¿Ofrecen soporte después del lanzamiento?</p>
                <p className="a">Incluimos soporte inicial posterior al lanzamiento y, si lo necesitas, planes de mantenimiento mensual para seguir optimizando tu tienda.</p>
              </div>
            </section>
          </div>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cuánto cuesta el desarrollo de una tienda Shopify?",
                "acceptedAnswer": { "@type": "Answer", "text": "El valor depende del número de productos, nivel de personalización y requerimientos específicos. Podemos adaptar una propuesta a tu pyme o empresa." }
              },
              {
                "@type": "Question",
                "name": "¿En cuánto tiempo estará lista mi tienda Shopify?",
                "acceptedAnswer": { "@type": "Answer", "text": "En la mayoría de los proyectos estándar, el tiempo va entre 2 y 4 semanas, siempre que tengamos la información y material (textos, fotos, logo) a tiempo." }
              },
              {
                "@type": "Question",
                "name": "¿Necesito saber de diseño o programación?",
                "acceptedAnswer": { "@type": "Answer", "text": "No. Nosotros nos encargamos del diseño y del desarrollo. Luego te capacitamos para administrar pedidos, productos y contenidos básicos." }
              },
              {
                "@type": "Question",
                "name": "¿Puedo partir con pocos productos y crecer después?",
                "acceptedAnswer": { "@type": "Answer", "text": "Sí. Shopify te permite partir con un catálogo pequeño e ir agregando productos, colecciones y funciones a medida que tu negocio crece." }
              },
              {
                "@type": "Question",
                "name": "¿Ofrecen soporte después del lanzamiento?",
                "acceptedAnswer": { "@type": "Answer", "text": "Incluimos soporte inicial posterior al lanzamiento y, si lo necesitas, planes de mantenimiento mensual para seguir optimizando tu tienda." }
              }
            ]
          })
        }} />
      </section>

      <style jsx global>{`
        :root{
          --h-primary:#673de6; 
          --h-accent:#f50087;  
          --h-dark:#0f172a;
          --h-text:#1f2937;
          --h-muted:#64748b;
          --h-bg:#f8fafc;
          --h-white:#ffffff;
        }
        .wtn-wrap{font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; color:var(--h-text); line-height:1.6; background:var(--h-bg);}
        .wtn-container{max-width:1100px; margin:0 auto; padding:24px;}
        .wtn-hero{
          background: radial-gradient(1200px 500px at 10% 10%, rgba(245,0,135,.10), transparent 50%),
                      radial-gradient(1000px 600px at 90% 20%, rgba(103,61,230,.15), transparent 60%);
          padding:56px 24px; border-radius:24px; text-align:center; position:relative; overflow:hidden; margin-bottom: 2rem;
        }
        .wtn-badge{display:inline-block; font-size:12px; letter-spacing:.04em; text-transform:uppercase; background:rgba(103,61,230,.1); color:var(--h-primary); padding:6px 10px; border-radius:999px; margin-bottom:12px;}
        .wtn-hero h2{font-size:36px; line-height:1.2; margin:0 0 12px; color:var(--h-dark);}
        .wtn-hero p{max-width:800px; margin:0 auto 22px; color:var(--h-muted);}
        .wtn-cta{display:flex; gap:12px; justify-content:center; flex-wrap:wrap;}
        .wtn-btn{
          background:linear-gradient(90deg, var(--h-primary), var(--h-accent));
          color:#fff; padding:12px 18px; border-radius:12px; font-weight:600; text-decoration:none; box-shadow:0 10px 24px rgba(103,61,230,.25);
        }
        .wtn-btn-outline{
          background:#fff; color:var(--h-primary); border:2px solid rgba(103,61,230,.25); padding:10px 16px; border-radius:12px; font-weight:600; text-decoration:none;
        }
      
        .wtn-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:18px;}
        @media (max-width:900px){ .wtn-grid{grid-template-columns:1fr;} }
      
        .wtn-card{
          background:#fff; border:1px solid #e5e7eb; border-radius:16px; padding:20px; box-shadow:0 8px 20px rgba(2,6,23,.04);
        }
        .wtn-card h3{margin:0 0 8px; font-size:18px; color:var(--h-dark);}
        .wtn-card p{margin:0; color:var(--h-muted);}
      
        .wtn-section{margin:48px 0;}
        .wtn-section h2{font-size:28px; margin:0 0 8px; color:var(--h-dark);}
        .wtn-section p.lead{color:var(--h-muted); margin:0 0 14px;}
      
        .wtn-list{display:grid; grid-template-columns:repeat(2,1fr); gap:14px;}
        @media (max-width:900px){ .wtn-list{grid-template-columns:1fr;} }
        .wtn-item{background:#fff; border:1px solid #e5e7eb; border-radius:14px; padding:16px; color: var(--h-muted);}
        .wtn-item strong{color:var(--h-primary)}
      
        .wtn-price{display:grid; grid-template-columns:repeat(3,1fr); gap:18px;}
        @media (max-width:900px){ .wtn-price{grid-template-columns:1fr;} }
        .wtn-price .plan{background:#fff; border:1px solid #e5e7eb; border-radius:16px; padding:22px;}
        .wtn-price .tag{display:inline-block; background:rgba(245,0,135,.08); color:var(--h-accent); font-size:12px; padding:4px 8px; border-radius:999px; margin-bottom:8px;}
        .wtn-price .value{font-size:34px; font-weight:800; margin:6px 0 2px; color:var(--h-dark);}
        .wtn-price ul{list-style:none; padding:0; margin:12px 0;}
        .wtn-price li{margin:8px 0; color:var(--h-muted);}
      
        .wtn-faq .q{font-weight:700; color:var(--h-dark); margin-bottom:6px;}
        .wtn-faq .a{color:var(--h-muted);}
      
        .wtn-foot{
          text-align:center; font-size:14px; color:#475569; padding:24px 0 8px;
        }
      
        /* mini badges */
        .ic{display:inline-flex; width:28px; height:28px; align-items:center; justify-content:center; border-radius:8px; background:rgba(103,61,230,.1); color:var(--h-primary); margin-right:8px; font-weight:700;}
      `}</style>
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
