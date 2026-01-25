"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, RefreshCw, FileText } from "lucide-react";
import { toast } from "sonner";

interface SitePage {
    id: string;
    title: string;
    slug: string;
    _count: { sections: number };
}

export default function CMSDashboard() {
    const [pages, setPages] = useState<SitePage[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchPages = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/cms/pages");
            if (res.ok) {
                const data = await res.json();
                setPages(data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSeed = async () => {
        const promise = fetch("/api/cms/seed", { method: "POST" });
        toast.promise(promise, {
            loading: "Inicializando base de datos...",
            success: () => {
                fetchPages();
                return "Base de datos actualizada";
            },
            error: "Error al inicializar"
        });
    };

    useEffect(() => {
        fetchPages();
    }, []);

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-5xl mx-auto">
                <header className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
                    <div className="flex items-center gap-4">
                        <Link href="/admin">
                            <Button variant="ghost" size="icon"><ArrowLeft className="w-5 h-5" /></Button>
                        </Link>
                        <h1 className="text-3xl font-bold">Gestor de Contenido</h1>
                    </div>
                    <Button variant="outline" onClick={handleSeed} className="gap-2">
                        <RefreshCw className="w-4 h-4" /> Restaurar / Inicializar
                    </Button>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pages.map((page) => (
                        <div key={page.id} className="bg-neutral-900 border border-white/10 p-6 rounded-xl hover:border-purple-500/50 transition-all group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <span className="bg-white/5 text-xs px-2 py-1 rounded text-gray-400">
                                    /{page.slug}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{page.title}</h3>
                            <p className="text-sm text-gray-400 mb-6">{page._count?.sections || 0} secciones configurables</p>

                            <Button className="w-full bg-white text-black hover:bg-gray-200" asChild>
                                <Link href={`/admin/cms/${page.slug}`}>Editar Contenido</Link>
                            </Button>
                        </div>
                    ))}

                    {pages.length === 0 && !loading && (
                        <div className="col-span-full text-center py-20 text-gray-500">
                            No se encontraron páginas. Pulsa "Inicializar" para comenzar.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
