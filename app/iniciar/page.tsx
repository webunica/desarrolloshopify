"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import Link from "next/link";
import { ArrowLeft, Loader2, Sparkles } from "lucide-react";

export default function IniciarPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Algo salió mal");
            }

            toast.success("¡Genial! Vamos a crear tu tienda.");
            // Redirect to wizard with token
            router.push(`/wizard?token=${data.token}`);

        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[100px] rounded-full pointing-events-none" />

            <div className="relative z-10 w-full max-w-md">
                <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Volver al inicio
                </Link>

                <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl">
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 mb-4 border border-purple-500/20">
                            <Sparkles className="h-6 w-6 text-purple-400" />
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Empieza tu Viaje</h1>
                        <p className="text-gray-400">Ingresa tu correo para guardar tu progreso y recibir tu cotización.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                                Correo Electrónico
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="ejemplo@tuempresa.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="bg-black/50 border-white/10 text-white placeholder:text-gray-600 focus:border-purple-500 transition-all h-12"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 border border-t-white/20 shadow-lg shadow-purple-900/20"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Creando espacio...
                                </>
                            ) : (
                                "Continuar al Wizard"
                            )}
                        </Button>
                    </form>

                    <p className="mt-6 text-xs text-center text-gray-600">
                        Al continuar, aceptas nuestros términos y condiciones.
                        Tus datos están seguros con nosotros.
                    </p>
                </div>
            </div>
        </div>
    );
}
