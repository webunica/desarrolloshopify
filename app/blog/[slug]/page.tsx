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
                                "@type": "ImageObject",
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

            <Footer />
        </main>
    );
}
