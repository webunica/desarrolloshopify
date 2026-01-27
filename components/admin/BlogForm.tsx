"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BlogFormProps {
    initialData?: any;
    isEditing?: boolean;
}

export default function BlogForm({ initialData, isEditing = false }: BlogFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        slug: initialData?.slug || "",
        excerpt: initialData?.excerpt || "",
        content: initialData?.content || "",
        category: initialData?.category || "Guía Completa",
        imageUrl: initialData?.imageUrl || "",
        published: initialData?.published || false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = isEditing
                ? `/api/blog/${initialData.id}`
                : "/api/blog";

            const method = isEditing ? "PUT" : "POST";

            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Error saving article");

            router.push("/admin/blog");
            router.refresh();
        } catch (error) {
            console.error(error);
            alert("Error al guardar. Revisa la consola.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
                <Link href="/admin/blog" className="text-gray-400 hover:text-white flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Cancelar
                </Link>
                <Button type="submit" disabled={loading} className="bg-purple-600 hover:bg-purple-700">
                    {loading ? (
                        <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Guardando...
                        </>
                    ) : (
                        <>
                            <Save className="w-4 h-4 mr-2" /> {isEditing ? "Actualizar Artículo" : "Publicar Artículo"}
                        </>
                    )}
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-neutral-900 border border-white/10 p-6 rounded-xl space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Título del Artículo</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-500 outline-none"
                                placeholder="Ej: Guía Definitiva de Shopify 2026"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Slug (URL)</label>
                            <input
                                type="text"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded-lg p-2 text-sm text-gray-300 focus:ring-2 focus:ring-purple-500 outline-none font-mono"
                                placeholder="guia-shopify-2026"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Contenido (HTML)</label>
                            <p className="text-xs text-slate-500 mb-2">Puedes escribir HTML directo o texto plano.</p>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                rows={20}
                                className="w-full bg-black border border-white/10 rounded-lg p-4 text-white font-mono text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                                placeholder="<p>Escribe aquí tu contenido...</p>"
                                required
                            />
                        </div>
                    </div>

                    <div className="bg-neutral-900 border border-white/10 p-6 rounded-xl">
                        <label className="block text-sm font-medium text-gray-400 mb-1">Extracto (Resumen SEO)</label>
                        <textarea
                            name="excerpt"
                            value={formData.excerpt}
                            onChange={handleChange}
                            rows={3}
                            className="w-full bg-black border border-white/10 rounded-lg p-3 text-white text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                            placeholder="Breve descripción para Google y tarjetas..."
                        />
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="bg-neutral-900 border border-white/10 p-6 rounded-xl space-y-4">
                        <h3 className="font-bold text-white">Configuración</h3>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Categoría</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded-lg p-2 text-white focus:ring-2 focus:ring-purple-500 outline-none"
                            >
                                <option value="Guía Completa">Guía Completa</option>
                                <option value="Pagos y Logística">Pagos y Logística</option>
                                <option value="Comparativa">Comparativa</option>
                                <option value="Optimización">Optimización</option>
                                <option value="Caso de Éxito">Caso de Éxito</option>
                                <option value="Noticias">Noticias</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Imagen Principal (URL)</label>
                            <input
                                type="text"
                                name="imageUrl"
                                value={formData.imageUrl}
                                onChange={handleChange}
                                className="w-full bg-black border border-white/10 rounded-lg p-2 text-xs text-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                placeholder="https://..."
                            />
                            {formData.imageUrl && (
                                <div className="mt-2 rounded-lg overflow-hidden border border-white/10">
                                    <img src={formData.imageUrl} alt="Preview" className="w-full h-32 object-cover" />
                                </div>
                            )}
                        </div>

                        <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                            <input
                                type="checkbox"
                                name="published"
                                id="published"
                                checked={formData.published}
                                onChange={handleCheckboxChange}
                                className="w-5 h-5 rounded border-gray-600 bg-black text-purple-600"
                            />
                            <label htmlFor="published" className="text-white font-medium cursor-pointer">
                                Publicar inmediatamente
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
