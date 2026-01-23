"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Lock } from "lucide-react";

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "admin123") { // Hardcoded for MVP as requested
            document.cookie = "admin_token=secret; path=/";
            router.push("/admin");
        } else {
            toast.error("Contraseña incorrecta");
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="w-full max-w-sm bg-neutral-900 border border-white/10 p-8 rounded-xl">
                <div className="flex justify-center mb-6">
                    <div className="p-3 bg-white/5 rounded-full">
                        <Lock className="w-6 h-6 text-white" />
                    </div>
                </div>
                <h1 className="text-xl font-bold text-center text-white mb-6">Acceso Administrativo</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <Input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="bg-black/50 border-white/10 text-white"
                    />
                    <Button type="submit" className="w-full">Entrar</Button>
                </form>
            </div>
        </div>
    );
}
