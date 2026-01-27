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
    const project = await prisma.project.findUnique({
        where: { token },
        include: {
            answers: true,
            files: true,
            lead: true,
        },
    });

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

    // Group answers by step/key helper
    const getAnswer = (key: string) => project.answers.find(a => a.key === key)?.value;

    const statusColors = {
        DRAFT: "bg-gray-500",
        SUBMITTED: "bg-blue-500",
        PAID: "bg-green-500",
        IN_PROGRESS: "bg-purple-500",
        REVIEW: "bg-yellow-500",
        COMPLETED: "bg-green-600",
    };

    const statusLabel = {
        DRAFT: "Borrador",
        SUBMITTED: "En Revisión",
        PAID: "Pagado",
        IN_PROGRESS: "En Desarrollo",
        REVIEW: "Revisión Cliente",
        COMPLETED: "Completado",
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
            <nav className="border-b border-white/10 bg-neutral-900/50 backdrop-blur-md sticky top-0 z-10">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="font-bold text-lg">Panel de Cliente</div>
                    <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColors[project.statusString as keyof typeof statusColors] || "bg-gray-500"}`}>
                            {statusLabel[project.statusString as keyof typeof statusLabel] || project.statusString}
                        </span>
                        <div className="text-sm text-gray-400">{project.lead.email}</div>
                    </div>
                </div>
            </nav>

            <main className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Left Column: Project Status & Actions */}
                    <div className="space-y-6">
                        <div className="bg-neutral-900 border border-white/10 rounded-xl p-6">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Briefcase className="text-purple-400" /> Estado del Proyecto
                            </h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                                    <span className="text-gray-400">ID Referencia</span>
                                    <span className="font-mono">{project.id.slice(0, 8)}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                                    <span className="text-gray-400">Creado</span>
                                    <span>{format(project.createdAt, "d MMM yyyy", { locale: es })}</span>
                                </div>
                                <div className="mt-4 pt-2">
                                    <p className="text-sm text-gray-300 mb-4">
                                        Tu proyecto está siendo evaluado por nuestro equipo. Te contactaremos pronto.
                                    </p>
                                    <Button className="w-full mb-2" variant="outline">
                                        <FileText className="mr-2 h-4 w-4" /> Editar Brief
                                    </Button>
                                    <Button className="w-full" variant="ghost">
                                        <Download className="mr-2 h-4 w-4" /> Descargar Resumen PDF
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-900 border border-white/10 rounded-xl p-6">
                            <h3 className="font-bold mb-4">Archivos ({project.files.length})</h3>
                            <ul className="space-y-3">
                                {project.files.length === 0 && <li className="text-gray-500 text-sm">No hay archivos.</li>}
                                {project.files.map(file => (
                                    <li key={file.id} className="text-sm flex items-center justify-between bg-white/5 p-2 rounded">
                                        <span className="truncate max-w-[150px]">{file.name}</span>
                                        <Link href={file.path} target="_blank" className="text-blue-400 hover:underline text-xs">Ver</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Brief Summary */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="bg-neutral-900 border border-white/10 rounded-xl p-8">
                            <h2 className="text-2xl font-bold mb-6">Resumen del Brief</h2>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-1">
                                    <h4 className="text-sm text-gray-400 uppercase tracking-widest">Negocio</h4>
                                    <p className="text-lg font-medium">{getAnswer("business_name") || "No definido"}</p>
                                    <p className="text-sm text-gray-500">{getAnswer("industry")}</p>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm text-gray-400 uppercase tracking-widest">Alcance</h4>
                                    <p className="text-lg font-medium">{getAnswer("scope_type") || "No definido"}</p>
                                </div>

                                <div className="col-span-2 border-t border-white/10 pt-4 mt-2">
                                    <h4 className="text-sm text-gray-400 uppercase tracking-widest mb-2">Funcionalidades</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {/* Features are stored as JSON stirng in value usually, need parsing if consistent */}
                                        {/* For MVP, simplistic display */}
                                        {((): React.ReactNode => {
                                            try {
                                                const raw = getAnswer("features");
                                                const feats = raw ? JSON.parse(raw) : [];
                                                return Array.isArray(feats) ? feats.map((f: string) => (
                                                    <span key={f} className="text-xs bg-purple-900/50 text-purple-200 px-2 py-1 rounded border border-purple-500/20">{f}</span>
                                                )) : <span>{String(raw)}</span>
                                            } catch (e) { return <span className="text-gray-500">Error visualizando funcionalidades</span> }
                                        })()}
                                    </div>
                                </div>

                                <div className="col-span-2 space-y-2 border-t border-white/10 pt-4">
                                    <h4 className="text-sm text-gray-400 uppercase tracking-widest">Estructura / Páginas</h4>
                                    <p className="text-gray-300 whitespace-pre-wrap text-sm">{getAnswer("pages_list") || "No especificado"}</p>
                                </div>

                                <div className="space-y-1 border-t border-white/10 pt-4">
                                    <h4 className="text-sm text-gray-400 uppercase tracking-widest">Presupuesto</h4>
                                    <p className="text-lg font-medium">{getAnswer("budget") || "No definido"}</p>
                                </div>
                                <div className="space-y-1 border-t border-white/10 pt-4">
                                    <h4 className="text-sm text-gray-400 uppercase tracking-widest">Deadline</h4>
                                    <p className="text-lg font-medium">{getAnswer("deadline") || "No definido"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
