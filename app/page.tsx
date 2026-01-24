"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, BarChart3, Rocket, CheckCircle2, Star, Smartphone, CreditCard, LayoutTemplate } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-purple-100 selection:text-purple-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tighter bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent">
            DesarrolloShopify.cl
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#metodo" className="hover:text-purple-600 transition-colors">Método</a>
            <a href="#servicios" className="hover:text-purple-600 transition-colors">Servicios</a>
            <a href="#faq" className="hover:text-purple-600 transition-colors">FAQ</a>
          </div>
          <Link href="/iniciar">
            <Button variant="default" size="sm" className="bg-slate-900 text-white hover:bg-slate-800 shadow-md">
              Iniciar Proyecto <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50 bg-grid-pattern">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent z-0 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-purple-200 bg-white/60 px-4 py-1.5 text-sm font-semibold text-purple-900 mb-8 backdrop-blur-md shadow-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            Partner Certificado Shopify en Chile
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 text-slate-900 drop-shadow-sm">
            Tu Tienda Shopify,
            <span className="block gradient-text pb-2">Lista para Vender en Chile</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Diseñamos e-commerces de alto rendimiento integrados con Webpay, envíos locales y todo lo que tu Pyme necesita para escalar.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:border-purple-200 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-green-600" /> Integración Transbank & MercadoPago
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:border-purple-200 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-green-600" /> Autoadministrable 100%
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:border-purple-200 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-green-600" /> Facturación Automática (SII)
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link href="/iniciar">
              <Button size="lg" className="h-14 px-8 text-lg bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-lg shadow-slate-200 hover:shadow-xl hover:-translate-y-0.5 transition-all font-bold">
                Cotizar mi Tienda (Gratis)
              </Button>
            </Link>
            <a href="#portfolio">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg border-2 border-slate-200 bg-white hover:border-purple-200 hover:bg-purple-50 text-slate-700 rounded-full shadow-sm font-semibold transition-all">
                Ver Tiendas Realizadas
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Stats / Social Proof - Trust Bar */}
      <section className="py-10 border-y border-slate-100 bg-white">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Tecnologías & Partners Integrados
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 filter text-slate-500 font-semibold">
            {/* Replaced generic placeholders with localized relevant tech text names for now (logos would be images in real assets) */}
            <span className="flex items-center gap-2 text-xl hover:text-[#95BF47] transition-colors"><ShoppingBag className="w-5 h-5" /> Shopify Partner</span>
            <span className="flex items-center gap-2 text-xl hover:text-[#d3002d] transition-colors">Webpay Plus</span>
            <span className="flex items-center gap-2 text-xl hover:text-[#009ee3] transition-colors">MercadoPago</span>
            <span className="flex items-center gap-2 text-xl hover:text-[#f26522] transition-colors">Starken/Blue</span>
            <span className="flex items-center gap-2 text-xl hover:text-[#005c96] transition-colors">Google Ads</span>
          </div>
        </div>
      </section>

      {/* Services / Benefits (Problema/Solución) */}
      <section id="servicios" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">¿Por qué elegirnos?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Entendemos el mercado chileno. No te entregamos solo una web, te entregamos un canal de ventas operativo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<CreditCard className="w-6 h-6 text-green-600" />}
              title="Vende en Pesos"
              desc="Pasarelas locales listas (Webpay, Fintoc) para que el dinero llegue directo a tu cuenta bancaria."
            />
            <ServiceCard
              icon={<Rocket className="w-6 h-6 text-purple-600" />}
              title="Envíos Automáticos"
              desc="Conecta con Starken, Chilexpress o BlueExpress y olvida las planillas y etiquetas manuales."
            />
            <ServiceCard
              icon={<CheckCircle2 className="w-6 h-6 text-blue-600" />}
              title="Facturación SII"
              desc="Integraciones sugeridas para emitir boletas y facturas electrónicas automáticamente."
            />
            <ServiceCard
              icon={<BarChart3 className="w-6 h-6 text-orange-600" />}
              title="Diseño UX/UI"
              desc="No usamos plantillas básicas; adaptamos la experiencia visual para generar confianza."
            />
          </div>
        </div>
      </section>

      {/* Feature / Method Grid */}
      <section id="metodo" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-100/50 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16">
            <span className="text-purple-600 font-bold tracking-wider uppercase text-sm mb-2 block">Nuestro Proceso</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Método de 3 Pasos</h2>
            <p className="text-slate-500 max-w-2xl text-lg">
              Simplificamos lo complejo para que tú solo te preocupes de vender.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              number="01"
              title="Estrategia & Diseño"
              desc="Analizamos tu marca y creamos un diseño único que te diferencie de la competencia."
            />
            <FeatureCard
              number="02"
              title="Desarrollo Shopify"
              desc="Construimos tu tienda con código limpio, apps esenciales y configuraciones pro."
            />
            <FeatureCard
              number="03"
              title="Lanzamiento & Escala"
              desc="Te entregamos la llave y te acompañamos en tus primeras ventas."
            />
          </div>
        </div>
      </section>

      {/* Portfolio Mockup - Redesign based on user reference */}
      <section id="portfolio" className="py-32 bg-slate-950 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="mb-16 max-w-5xl">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-tight">
              La plataforma de comercio <br />
              <span className="text-slate-500">detrás de todo.</span>
            </h2>
            <p className="text-2xl md:text-3xl text-slate-400 font-medium leading-snug max-w-4xl">
              <span className="text-white">Vende online y en persona.</span> Vende a nivel local y mundial.
              Vende de forma directa y mayorista. Diseñamos para que tu marca brille en computadoras y dispositivos móviles.
            </p>
          </div>

          {/* Scrolling Cards Container */}
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:grid md:grid-cols-3 md:gap-8 md:px-0 md:overflow-visible">

            {/* Project Card 1 */}
            <div className="min-w-[85vw] md:min-w-0 snap-center group cursor-pointer relative rounded-[32px] overflow-hidden aspect-[4/5] md:aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop"
                alt="Fashion Store"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-4xl font-bold text-white mb-2">Glossier Vibes</h3>
                <p className="text-slate-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Beauty & Skincare</p>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="min-w-[85vw] md:min-w-0 snap-center group cursor-pointer relative rounded-[32px] overflow-hidden aspect-[4/5] md:aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1000&auto=format&fit=crop"
                alt="Tech Store"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-4xl font-bold text-white mb-2">Simply Organic</h3>
                <p className="text-slate-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Lifestyle & Home</p>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="min-w-[85vw] md:min-w-0 snap-center group cursor-pointer relative rounded-[32px] overflow-hidden aspect-[4/5] md:aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop"
                alt="Sneaker Store"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-4xl font-bold text-white mb-2">Nike Redesign</h3>
                <p className="text-slate-200 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Sportswear & Shoes</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Security / Management Section - New based on User Request */}
      <section className="py-32 bg-slate-950 text-white border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <span className="text-[#00dec4] font-medium text-lg tracking-wide">Computadoras y dispositivos móviles</span>
            <h2 className="text-5xl md:text-6xl font-bold mt-4 tracking-tight">Cuida tu negocio</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-[#0f1f21] rounded-[32px] overflow-hidden border border-white/5 group hover:border-white/10 transition-all flex flex-col">
              <div className="aspect-[16/10] bg-gradient-to-br from-slate-900 to-slate-800 relative p-8 flex items-end justify-center overflow-hidden">
                {/* Dashboard representation */}
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                  className="w-[90%] h-auto rounded-t-xl shadow-2xl translate-y-4 group-hover:scale-105 transition-transform duration-500"
                  alt="Shopify Dashboard"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f21] via-transparent to-transparent opacity-50" />
              </div>
              <div className="p-10 mt-auto">
                <h3 className="text-2xl font-bold mb-4">Gestiona todo en un solo lugar</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  Desde la oficina administrativa hasta la tienda, siempre tendrás el poder con el <span className="underline decoration-1 underline-offset-4 decoration-slate-600 text-white">panel de control de Shopify</span> totalmente centralizado.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0f1f21] rounded-[32px] overflow-hidden border border-white/5 group hover:border-white/10 transition-all flex flex-col">
              <div className="aspect-[16/10] bg-gradient-to-br from-slate-900 to-slate-800 relative p-8 flex items-center justify-center overflow-hidden">
                {/* Mobile App representation */}
                <img
                  src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=1000&auto=format&fit=crop"
                  className="h-[110%] w-auto object-contain shadow-2xl rotate-12 group-hover:rotate-6 transition-transform duration-500"
                  alt="Shopify Mobile App"
                />
              </div>
              <div className="p-10 mt-auto">
                <h3 className="text-2xl font-bold mb-4">Gestiona tu tienda desde cualquier lugar</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  Haz todo desde tu bolsillo con la completa <span className="underline decoration-1 underline-offset-4 decoration-slate-600 text-white">aplicación móvil de Shopify</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Increíble trabajo. Nuestra tasa de conversión se duplicó en el primer mes de lanzamiento."
              author="Carlos M."
              role="CEO, FashionShoes"
            />
            <TestimonialCard
              quote="Entendieron perfectamente la estética que buscábamos. Soporte 10/10."
              author="Andrea R."
              role="Marketing, OrganicFood"
            />
            <TestimonialCard
              quote="La migración de WooCommerce a Shopify fue transparente y sin perder datos. Un alivio."
              author="Felipe S."
              role="Fundador, TechGear"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-slate-900">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            <FaqItem question="¿Cuánto tiempo toma desarrollar una tienda?" answer="Normalmente entre 2 a 4 semanas dependiendo de la complejidad y cantidad de productos." />
            <FaqItem question="¿Incluye dominio y hosting?" answer="Shopify incluye hosting de clase mundial. Nosotros te asesoramos en la compra y conexión de tu dominio .cl o .com." />
            <FaqItem question="¿Es autoadministrable?" answer="Totalmente. Una de las ventajas de Shopify es su panel amigable. Te entregamos videos tutoriales para que manejes tu stock y pedidos." />
            <FaqItem question="¿Qué pasarelas de pago configuran?" answer="Configuramos MercadoPago, Webpay Plus (Transbank), Fintoc, entre otras opciones disponibles en Chile." />
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600 pointer-events-none" />
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        <div className="container mx-auto px-6 text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            ¿Listo para vender más?
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto font-medium">
            Agenda una llamada de descubrimiento o inicia tu proyecto hoy mismo con nuestro wizard interactivo.
          </p>
          <Link href="/iniciar">
            <Button size="lg" className="h-16 px-10 text-xl font-bold bg-white text-purple-600 hover:bg-purple-50 shadow-2xl transition-all hover:scale-105 border-0">
              Iniciar Mi Proyecto
            </Button>
          </Link>
        </div>
      </section>

      {/* SEO Content Block (Hidden / Structured) - Kept from previous step */}
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

      <footer className="py-12 border-t border-slate-100 bg-white text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Desarrolloshopify.cl. Todos los derechos reservados.</p>
        <p className="mt-2">Santiago, Chile.</p>
      </footer>
    </main>
  );
}

function FeatureCard({ number, title, desc }: { number: string, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all text-left group relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-slate-300 group-hover:text-purple-500 transition-colors pointer-events-none select-none">
        {number}
      </div>
      <div className="mb-6 text-4xl font-bold text-slate-200 group-hover:text-purple-600 transition-colors relative z-10">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-900 relative z-10">{title}</h3>
      <p className="text-slate-600 leading-relaxed font-medium relative z-10">{desc}</p>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-purple-100 transition-all group">
      <div className="mb-4 bg-slate-50 p-3 rounded-xl w-fit shadow-sm border border-slate-100 group-hover:bg-purple-50 group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-bold text-lg mb-2 text-slate-800">{title}</h3>
      <p className="text-sm text-slate-600 font-medium leading-relaxed">{desc}</p>
    </div>
  )
}

function TestimonialCard({ quote, author, role }: { quote: string, author: string, role: string }) {
  return (
    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 relative shadow-2xl shadow-black/20">
      <div className="text-5xl text-purple-500/30 absolute top-4 right-6 font-serif select-none">"</div>
      <p className="text-slate-200 mb-6 relative z-10 italic font-medium leading-relaxed">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-white text-sm">{author}</p>
          <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{role}</p>
        </div>
      </div>
    </div>
  )
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="border-b border-slate-200 py-5">
      <details className="group">
        <summary className="flex justify-between items-center font-semibold cursor-pointer list-none text-lg text-slate-800 hover:text-purple-700 transition-colors select-none">
          <span>{question}</span>
          <span className="transition-transform duration-300 group-open:rotate-180 text-slate-400 group-open:text-purple-600">
            <ArrowRight className="w-5 h-5 rotate-90" />
          </span>
        </summary>
        <p className="text-slate-600 mt-4 mb-2 leading-relaxed pl-4 border-l-2 border-purple-200">
          {answer}
        </p>
      </details>
    </div>
  );
}
