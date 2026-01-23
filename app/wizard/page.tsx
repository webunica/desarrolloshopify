"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight, ArrowLeft, Upload, CheckCircle, Save, Loader2 } from "lucide-react";

// Wizard Steps Configuration
const STEPS = [
    { id: 1, title: "Negocio", fields: ["business_name", "industry"] },
    { id: 2, title: "Alcance", fields: ["scope_type"] },
    { id: 3, title: "Branding", fields: ["branding_status", "branding_colors"] },
    { id: 4, title: "Funcionalidad", fields: ["features"] },
    { id: 5, title: "Contenidos", fields: ["pages_list"] },
    { id: 6, title: "Archivos", fields: ["file_ids"] },
    { id: 7, title: "Tiempos", fields: ["budget", "deadline"] },
    { id: 8, title: "Confirmación", fields: [] },
];

function WizardContent() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const router = useRouter();

    const [currentStep, setCurrentStep] = useState(1);
    const [answers, setAnswers] = useState<Record<string, any>>({});
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [projectId, setProjectId] = useState<string | null>(null);

    // Load initial state or at least get project ID if we were to implement load.
    // For now, we assume fresh or just reliance on token.
    // We need projectID for uploads. Ideally we fetch it by token first.

    useEffect(() => {
        // Quick fetch to validate token and get Project ID for uploads
        // In a real app, we'd load previous answers here too.
        if (!token) return;

        // Simulating finding project ID from a "verify" endpoint or just using token for upload 
        // (but upload API wrote to expect projectId... let's simplify and make upload accept token too next time, 
        // but for now let's assume we can save answers without projectId, and uploads need it).
        // Actually, let's fetch the project ID properly.
        // Since I didn't make a "get project" endpoint, I'll rely on the save endpoint logic 
        // but the upload endpoint needs an ID. 
        // WORKAROUND: I'll accept 'token' in the upload endpoint next time or just patch it.
        // For this MVP, let's just use the token as the identifier for logic and maybe pass "token" to upload if I update it?
        // No, I'll update the upload route to find project by token if passed. 
        // Or I'll just accept that I can't upload until I know the ID.
        // Let's creating a quick "check token" helper fetch? 
        // Nah, let's just proceed. The save endpoint returns success.

    }, [token]);

    const handleNext = async () => {
        // Validate current step
        if (!validateStep(currentStep)) return;

        // Save
        setLoading(true);
        try {
            const res = await fetch("/api/wizard/save", {
                method: "POST",
                body: JSON.stringify({ token, step: currentStep, answers }),
            });
            if (!res.ok) throw new Error("Error guardando progreso");

            if (currentStep < STEPS.length) {
                setCurrentStep(s => s + 1);
            } else {
                // Finish
                toast.success("¡Proyecto enviado con éxito!");
                router.push(`/panel/${token}`);
            }
        } catch (e) {
            toast.error("No se pudo guardar");
        } finally {
            setLoading(false);
        }
    };

    const validateStep = (step: number) => {
        // Basic validation logic
        if (step === 1 && (!answers.business_name || !answers.industry)) {
            toast.error("Completa todos los campos");
            return false;
        }
        return true;
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length) return;
        if (!token) { toast.error("No hay token de sesión"); return; }

        setUploading(true);
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        // We need projectId. For MVP, assuming the user has saved at least once 
        // or we send token and backend resolves it. 
        // Let's PATCH the logic: we will send 'token' in the formData and update backend to handle it, 
        // OR we just use a dummy ID and rely on token association later. 
        // BETTER: I'll update the upload endpoint to accept 'token' instead of 'projectId' for convenience.
        formData.append("token", token);

        try {
            const res = await fetch("/api/upload", { method: "POST", body: formData });
            const data = await res.json();
            if (data.success) {
                setAnswers(prev => ({
                    ...prev,
                    file_ids: [...(prev.file_ids || []), data.id],
                    uploaded_files: [...(prev.uploaded_files || []), data.url]
                }));
                toast.success("Archivo subido correctamente");
            } else {
                toast.error("Error subiendo archivo");
            }
        } catch (e) { toast.error("Error de red"); }
        setUploading(false);
    };

    if (!token) return <div className="p-10 text-center text-white">Token inválido. <a href="/iniciar" className="underline">Iniciar</a></div>;

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
            {/* Sidebar */}
            <aside className="w-full md:w-64 bg-neutral-900 border-r border-white/10 p-6 flex flex-col justify-between">
                <div>
                    <div className="text-xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Wizard Pro
                    </div>
                    <nav className="space-y-4">
                        {STEPS.map((step) => (
                            <div
                                key={step.id}
                                className={`flex items-center gap-3 text-sm ${step.id === currentStep ? "text-purple-400 font-bold" :
                                        step.id < currentStep ? "text-green-400" : "text-gray-500"
                                    }`}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${step.id === currentStep ? "border-purple-400 bg-purple-400/10" :
                                        step.id < currentStep ? "border-green-400 bg-green-400/10" : "border-gray-700"
                                    }`}>
                                    {step.id < currentStep ? <CheckCircle className="w-4 h-4" /> : step.id}
                                </div>
                                {step.title}
                            </div>
                        ))}
                    </nav>
                </div>
                <div className="text-xs text-gray-600 mt-8">
                    Token: <span className="font-mono">{token.slice(0, 8)}...</span>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 md:p-12 overflow-y-auto">
                <div className="max-w-2xl mx-auto">
                    <header className="mb-10">
                        <h1 className="text-3xl font-bold mb-2">{STEPS[currentStep - 1].title}</h1>
                        <p className="text-gray-400">Paso {currentStep} de {STEPS.length}</p>
                    </header>

                    <div className="min-h-[300px] mb-10">
                        {/* Dynamic Step Content */}
                        {currentStep === 1 && (
                            <div className="space-y-6">
                                <div>
                                    <label className="block mb-2 text-sm font-medium">Nombre de tu Negocio</label>
                                    <Input
                                        value={answers.business_name || ""}
                                        onChange={e => setAnswers({ ...answers, business_name: e.target.value })}
                                        className="bg-neutral-800 border-neutral-700"
                                        placeholder="Ej: Tienda Cool SpA"
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium">Industria / Nicho</label>
                                    <Input
                                        value={answers.industry || ""}
                                        onChange={e => setAnswers({ ...answers, industry: e.target.value })}
                                        className="bg-neutral-800 border-neutral-700"
                                        placeholder="Ej: Moda, Tecnología, Alimentos..."
                                    />
                                </div>
                            </div>
                        )}

                        {currentStep === 2 && (
                            <div className="grid gap-4">
                                {["Nueva Tienda (Desde Cero)", "Rediseño (Mejorar actual)", "Migración (Desde Woo/Presta)"].map((opt) => (
                                    <div
                                        key={opt}
                                        onClick={() => setAnswers({ ...answers, scope_type: opt })}
                                        className={`p-4 rounded-xl border cursor-pointer transition-all ${answers.scope_type === opt
                                                ? "border-purple-500 bg-purple-500/10"
                                                : "border-white/10 hover:border-white/30 bg-neutral-800"
                                            }`}
                                    >
                                        {opt}
                                    </div>
                                ))}
                            </div>
                        )}

                        {currentStep === 3 && (
                            <div className="space-y-6">
                                <div>
                                    <label className="block mb-2 text-sm font-medium">¿Tienes Branding Definido?</label>
                                    <div className="flex gap-4">
                                        <Button
                                            type="button"
                                            variant={answers.branding_status === "Si" ? "default" : "outline"}
                                            onClick={() => setAnswers({ ...answers, branding_status: "Si" })}
                                        >
                                            Sí, tengo manual
                                        </Button>
                                        <Button
                                            type="button"
                                            variant={answers.branding_status === "No" ? "default" : "outline"}
                                            onClick={() => setAnswers({ ...answers, branding_status: "No" })}
                                        >
                                            No, necesito ayuda
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium">Colores de preferencia</label>
                                    <Input
                                        value={answers.branding_colors || ""}
                                        onChange={e => setAnswers({ ...answers, branding_colors: e.target.value })}
                                        className="bg-neutral-800 border-neutral-700"
                                        placeholder="#000000, Azul, tonos pastel..."
                                    />
                                </div>
                            </div>
                        )}

                        {currentStep === 4 && (
                            <div className="space-y-4">
                                <p className="text-sm text-gray-400 mb-4">Selecciona las funcionalidades clave:</p>
                                {["Suscripciones", "Venta B2B / Mayorista", "Multilenguaje / Multimoneda", "Integración ERP", "Reviews Avanzadas", "Upsell / Cross-sell"].map((feat) => {
                                    const selected = (answers.features || []).includes(feat);
                                    return (
                                        <div
                                            key={feat}
                                            onClick={() => {
                                                const current = answers.features || [];
                                                const updated = selected ? current.filter((f: string) => f !== feat) : [...current, feat];
                                                setAnswers({ ...answers, features: updated });
                                            }}
                                            className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer ${selected ? "border-purple-500 bg-purple-500/10" : "border-white/10 bg-neutral-800"
                                                }`}
                                        >
                                            <div className={`w-5 h-5 rounded border flex items-center justify-center ${selected ? "bg-purple-500 border-purple-500" : "border-gray-500"}`}>
                                                {selected && <CheckCircle className="w-3 h-3 text-white" />}
                                            </div>
                                            {feat}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {currentStep === 5 && (
                            <div className="space-y-6">
                                <label className="block mb-2 text-sm font-medium">Estructura del Sitio (Páginas)</label>
                                <textarea
                                    value={answers.pages_list || ""}
                                    onChange={e => setAnswers({ ...answers, pages_list: e.target.value })}
                                    className="w-full h-40 bg-neutral-800 border-neutral-700 rounded-lg p-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    placeholder="Ej: Inicio, Nosotros, Colecciones, Página de Producto, Blog, Contacto..."
                                />
                            </div>
                        )}

                        {currentStep === 6 && (
                            <div className="space-y-6">
                                <div className="border-2 border-dashed border-white/20 rounded-xl p-10 text-center hover:bg-white/5 transition-colors">
                                    <Upload className="mx-auto h-12 w-12 text-gray-500 mb-4" />
                                    <p className="mb-4 text-gray-300">Sube tu logo, manual de marca o referencias.</p>
                                    <input
                                        type="file"
                                        onChange={handleFileUpload}
                                        className="text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-500 file:text-white hover:file:bg-purple-600"
                                    />
                                    {uploading && <p className="text-sm text-purple-400 mt-2">Subiendo...</p>}
                                </div>

                                {answers.uploaded_files && (
                                    <div className="space-y-2">
                                        <p className="text-sm font-bold">Archivos subidos ({answers.uploaded_files.length})</p>
                                        {answers.uploaded_files.map((url: string, i: number) => (
                                            <div key={i} className="text-xs text-gray-500 truncate">{url}</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {currentStep === 7 && (
                            <div className="space-y-6">
                                <div>
                                    <label className="block mb-2 text-sm font-medium">Presupuesto Estimado (USD)</label>
                                    <select
                                        value={answers.budget || ""}
                                        onChange={e => setAnswers({ ...answers, budget: e.target.value })}
                                        className="w-full bg-neutral-800 border-neutral-700 rounded-lg p-3 text-white"
                                    >
                                        <option value="">Selecciona un rango</option>
                                        <option value="1000-2000">$1,000 - $2,000</option>
                                        <option value="2000-5000">$2,000 - $5,000</option>
                                        <option value="5000+">$5,000+</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium">Fecha ideal de lanzamiento</label>
                                    <Input
                                        type="date"
                                        value={answers.deadline || ""}
                                        onChange={e => setAnswers({ ...answers, deadline: e.target.value })}
                                        className="bg-neutral-800 border-neutral-700"
                                    />
                                </div>
                            </div>
                        )}

                        {currentStep === 8 && (
                            <div className="bg-neutral-800/50 p-6 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold mb-4">¡Casi listo!</h3>
                                <p className="mb-4 text-gray-300">Revisa que toda la información esté correcta antes de enviar.</p>
                                <div className="text-sm text-gray-500 mb-6">
                                    Tu proyecto quedará en estado de pre-lanzamiento hasta que nuestro equipo valide los requerimientos.
                                </div>
                                <div className="flex gap-4 items-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                                    <Sparkles className="text-purple-400" />
                                    <span className="text-purple-200">Recibirás una propuesta en menos de 24 horas.</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-between mt-auto pt-8 border-t border-white/10">
                        <Button
                            variant="outline"
                            onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                            disabled={currentStep === 1}
                            className="bg-transparent border-white/20 text-white hover:bg-white/10"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
                        </Button>

                        <Button
                            variant="premium"
                            onClick={handleNext}
                            disabled={loading}
                            className="px-8"
                        >
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {currentStep === STEPS.length ? "Finalizar y Enviar" : "Siguiente"}
                            {currentStep < STEPS.length && <ArrowRight className="ml-2 h-4 w-4" />}
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default function WizardPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Cargando...</div>}>
            <WizardContent />
        </Suspense>
    )
}
