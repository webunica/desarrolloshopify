import { Metadata } from 'next';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { es } from "date-fns/locale";

type Props = {
    params: Promise<{ slug: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const article = await prisma.blogArticle.findUnique({
        where: { slug }
    });

    if (!article) {
        return {
            title: "Artículo no encontrado",
        };
    }

    return {
        title: `${article.title} | Blog DesarrolloShopify.cl`,
        description: article.excerpt || `Lee nuestro artículo sobre ${article.title}`,
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;

    // Fetch from DB
    const article = await prisma.blogArticle.findUnique({
        where: { slug, published: true }
    });

    if (!article) {
        notFound();
    }

    // Related Articles Logic
    const candidates = await prisma.blogArticle.findMany({
        where: {
            published: true,
            slug: { not: slug }
        },
        orderBy: { publishedAt: "desc" },
        take: 20
    });

    const currentKeywords = (article.keywords || "").toLowerCase().split(",").map(k => k.trim()).filter(Boolean);

    const related = candidates.map(c => {
        let score = 0;
        if (c.category === article.category) score += 2;

        const cKeywords = (c.keywords || "").toLowerCase().split(",").map(k => k.trim()).filter(Boolean);
        const overlap = currentKeywords.filter(k => cKeywords.includes(k));
        score += overlap.length;

        return { ...c, score };
    }).sort((a, b) => b.score - a.score).slice(0, 3);


    return (
        <main className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-purple-900 selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": article.title,
                        "datePublished": article.publishedAt || article.createdAt,
                        "author": {
                            "@type": "Organization",
                            "name": "DesarrolloShopify.cl"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "DesarrolloShopify.cl",
                            "logo": {
                                "url": "https://desarrolloweb.cl/og-image.png"
                            }
                        }
                    })
                }}
            />
            <Navbar />

            <article className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <Link href="/blog" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8 font-medium">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Volver al Blog
                    </Link>

                    <div className="mb-10 text-center">
                        <div className="flex items-center justify-center gap-4 text-sm text-slate-400 mb-6">
                            <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20 font-bold tracking-wide uppercase text-xs">{article.category}</span>
                            <span className="flex items-center gap-2"><div className="w-1 h-1 rounded-full bg-slate-500"></div> {format(article.publishedAt || article.createdAt, "d MMM, yyyy", { locale: es })}</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8 drop-shadow-lg">
                            {article.title}
                        </h1>
                        {/* Featured Image */}
                        {article.imageUrl && (
                            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-12">
                                <img
                                    src={article.imageUrl}
                                    alt={article.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"></div>
                            </div>
                        )}
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-slate-300 prose-p:leading-relaxed prose-a:text-purple-400 hover:prose-a:text-purple-300 prose-strong:text-white prose-li:text-slate-300 prose-ul:my-6 prose-li:my-2">
                        {/* Dangerous HTML rendering */}
                        <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>
                </div>
            </article>

            {related.length > 0 && (
                <section className="py-20 bg-slate-900 border-t border-white/5">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <h2 className="text-3xl font-bold text-white mb-10 text-center">Artículos Relacionados</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {related.map((post) => (
                                <Link href={`/blog/${post.slug}`} key={post.id} className="group">
                                    <article className="bg-slate-950 border border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all h-full flex flex-col">
                                        <div className="aspect-video relative overflow-hidden">
                                            <img
                                                src={post.imageUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"}
                                                alt={post.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute top-3 left-3 bg-slate-950/80 px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm border border-white/10">
                                                {post.category}
                                            </div>
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center gap-2 text-slate-500 text-xs mb-3">
                                                <span>{new Date(post.publishedAt || post.createdAt).toLocaleDateString("es-CL", { day: "numeric", month: "short", year: "numeric" })}</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-slate-400 text-sm line-clamp-3 mb-4 flex-1">
                                                {post.excerpt}
                                            </p>
                                            <div className="text-purple-400 text-sm font-medium flex items-center mt-auto">
                                                Leer más <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </main>
    );
}
