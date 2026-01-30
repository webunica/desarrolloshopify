import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, FileText, Download, Briefcase } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

type Props = {
    params: Promise<{ token: string }>
}

export default async function PanelPage({ params }: Props) {
    const { token } = await params;
    // Mock project fetch (Schema missing Project)
    // const project = await prisma.project.findUnique(...)
    const project = null;

    if (!project) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center flex-col">
                <h1 className="text-3xl font-bold mb-4">Proyecto no encontrado</h1>
                <p className="text-gray-400 mb-8">El token de acceso no es válido.</p>
                <Link href="/">
                    <Button>Volver al Inicio</Button>
                </Link>
            </div>
        );
    }

    // Mock logic removed

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center flex-col">
            <h1 className="text-3xl font-bold mb-4">Panel en Mantenimiento</h1>
            <p className="text-gray-400 mb-8">Estamos actualizando nuestros sistemas.</p>
            <Link href="/">
                <Button>Volver al Inicio</Button>
            </Link>
        </div>
    );
}
