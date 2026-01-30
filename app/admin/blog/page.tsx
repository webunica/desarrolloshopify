import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Pencil, Plus, Trash2, Eye } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function AdminBlogList() {
    const articles = await prisma.article.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
                    <div>
                        <Link href="/admin" className="text-sm text-gray-500 hover:text-white mb-2 block">← Volver al Dashboard</Link>
                        <h1 className="text-3xl font-bold">Artículos del Blog</h1>
                    </div>
                    <Link href="/admin/blog/new" className={cn(buttonVariants({ size: "lg" }), "bg-purple-600 hover:bg-purple-700 text-white")}>
                        <Plus className="w-4 h-4 mr-2" /> Nuevo Artículo
                    </Link>
                </header>

                <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 text-gray-400">
                            <tr>
                                <th className="p-4">Título</th>
                                <th className="p-4">Slug</th>
                                <th className="p-4">Categoría</th>
                                <th className="p-4">Estado</th>
                                <th className="p-4">Fecha</th>
                                <th className="p-4 text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {articles.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="p-12 text-center text-gray-500">
                                        No hay artículos creados. ¡Escribe el primero!
                                    </td>
                                </tr>
                            )}
                            {articles.map((article) => (
                                <tr key={article.id} className="hover:bg-white/[0.02]">
                                    <td className="p-4 font-bold text-white max-w-xs truncate" title={article.title}>
                                        {article.title}
                                    </td>
                                    <td className="p-4 text-gray-500 font-mono text-xs max-w-xs truncate">
                                        /{article.slug}
                                    </td>
                                    <td className="p-4">
                                        <span className="bg-white/10 px-2 py-1 rounded text-xs text-purple-300 border border-purple-500/20">
                                            {article.category}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <span className="flex items-center gap-2 text-green-400 text-xs font-bold">
                                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                            Publicado
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-400 text-xs">
                                        {format(article.updatedAt, "d MMM yyyy", { locale: es })}
                                    </td>
                                    <td className="p-4 text-right flex justify-end gap-2">
                                        <Link
                                            href={`/blog/${article.slug}`}
                                            target="_blank"
                                            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-8 w-8 hover:bg-white/10 text-gray-400 hover:text-white")}
                                        >
                                            <Eye className="w-4 h-4" />
                                        </Link>
                                        <Link
                                            href={`/admin/blog/${article.id}`}
                                            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "h-8 w-8 hover:bg-blue-500/20 text-blue-400")}
                                        >
                                            <Pencil className="w-4 h-4" />
                                        </Link>
                                        {/* Delete button would go here */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
