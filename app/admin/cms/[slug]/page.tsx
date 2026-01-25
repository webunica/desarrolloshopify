"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface SiteSection {
    id: string;
    name: string;
    component: string;
    content: any;
    isVisible: boolean;
}

interface SitePage {
    id: string;
    title: string;
    slug: string;
    sections: SiteSection[];
}

export default function PageEditor({ params }: { params: Promise<{ slug: string }> }) {
    const slug = use(params).slug;
    const [page, setPage] = useState<SitePage | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchPage = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/cms/pages/${slug}`);
            if (res.ok) {
                const data = await res.json();
                setPage(data);
            } else {
                toast.error("Página no encontrada");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPage();
    }, [slug]);

    if (loading) return <div className="p-10 text-white">Cargando editor...</div>;
    if (!page) return <div className="p-10 text-white">No se pudo cargar la página.</div>;

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-4xl mx-auto">
                <header className="flex justify-between items-center mb-8 border-b border-white/10 pb-6">
                    <div className="flex items-center gap-4">
                        <Link href="/admin/cms">
                            <Button variant="ghost" size="icon"><ArrowLeft className="w-5 h-5" /></Button>
                        </Link>
                        <div>
                            <span className="text-gray-400 text-sm block">Editando Página</span>
                            <h1 className="text-2xl font-bold">{page.title}</h1>
                        </div>
                    </div>
                </header>

                <div className="space-y-6">
                    {page.sections.map((section) => (
                        <SectionEditor key={section.id} section={section} />
                    ))}

                    {page.sections.length === 0 && (
                        <div className="p-8 border border-white/10 rounded-xl text-center text-gray-500">
                            Esta página no tiene secciones configurables aún.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function SectionEditor({ section }: { section: SiteSection }) {
    const [content, setContent] = useState(JSON.stringify(section.content, null, 2));
    const [isVisible, setIsVisible] = useState(section.isVisible);
    const [isDirty, setIsDirty] = useState(false);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSave = async () => {
        setSaving(true);
        setError(null);
        try {
            const parsed = JSON.parse(content); // Validate JSON
            const res = await fetch(`/api/cms/sections/${section.id}`, {
                method: "PUT",
                body: JSON.stringify({ content: parsed, isVisible }),
                headers: { "Content-Type": "application/json" }
            });

            if (res.ok) {
                toast.success("Sección actualizada correctamente");
                setIsDirty(false);
            } else {
                throw new Error("Error al guardar");
            }
        } catch (e) {
            setError("JSON Inválido o error de red");
            toast.error("Error al guardar cambios");
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className={`bg-neutral-900 border rounded-xl overflow-hidden transition-all ${isDirty ? "border-purple-500/50" : "border-white/10"}`}>
            <div className="p-4 bg-white/5 flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-lg text-white">{section.name}</h3>
                    <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">
                        &lt;{section.component} /&gt;
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => { setIsVisible(!isVisible); setIsDirty(true); }}
                        className={!isVisible ? "text-gray-500" : "text-green-400"}
                    >
                        {isVisible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </Button>
                </div>
            </div>

            <div className="p-4">
                <div className="mb-2 flex justify-between items-end">
                    <label className="text-xs text-gray-400 uppercase font-bold tracking-wider">Configuración (JSON)</label>
                    {error && <span className="text-xs text-red-500 font-bold">{error}</span>}
                </div>
                <textarea
                    value={content}
                    onChange={(e) => { setContent(e.target.value); setIsDirty(true); }}
                    className="w-full h-48 bg-black/50 border border-white/10 rounded-lg p-4 font-mono text-sm text-green-400 focus:outline-none focus:border-purple-500/50 resize-y"
                    spellCheck={false}
                />

                <div className="mt-4 flex justify-end">
                    <Button
                        onClick={handleSave}
                        disabled={!isDirty || saving}
                        className={isDirty ? "bg-purple-600 hover:bg-purple-700" : "bg-white/10 text-gray-400"}
                    >
                        {saving ? "Guardando..." : <><Save className="w-4 h-4 mr-2" /> Guardar Cambios</>}
                    </Button>
                </div>
            </div>
        </div>
    );
}
