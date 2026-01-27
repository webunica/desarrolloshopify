import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function AdminDashboard() {
    const headersList = await headers();
    const cookie = headersList.get("cookie");

    if (!cookie?.includes("admin_token=secret")) {
        redirect("/admin/login");
    }

    const projects = await prisma.project.findMany({
        include: { lead: true },
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
                    <h1 className="text-3xl font-bold">Panel de Administración</h1>
                    <Button variant="outline" asChild>
                        <Link href="/">Ir al Sitio</Link>
                    </Button>
                </header>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-neutral-900 border border-white/10 p-6 rounded-xl hover:border-purple-500/50 transition-colors">
                        <h2 className="text-xl font-bold mb-2">Editor Web</h2>
                        <p className="text-gray-400 text-sm mb-4">Gestiona el contenido de las páginas y secciones.</p>
                        <Button className="w-full" asChild>
                            <Link href="/admin/cms">Ir al Editor</Link>
                        </Button>
                    </div>

                    <div className="bg-neutral-900 border border-white/10 p-6 rounded-xl hover:border-purple-500/50 transition-colors">
                        <h2 className="text-xl font-bold mb-2">Gestor de Blog</h2>
                        <p className="text-gray-400 text-sm mb-4">Crea y edita artículos, guías y noticias.</p>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" asChild>
                            <Link href="/admin/blog">Gestionar Artículos</Link>
                        </Button>
                    </div>
                </div>

                <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 text-gray-400">
                            <tr>
                                <th className="p-4">Email Lead</th>
                                <th className="p-4">ID / Token</th>
                                <th className="p-4">Estado</th>
                                <th className="p-4">Fecha</th>
                                <th className="p-4">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {projects.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="p-8 text-center text-gray-500">No hay proyectos aún.</td>
                                </tr>
                            )}
                            {projects.map((proj) => (
                                <tr key={proj.id} className="hover:bg-white/[0.02]">
                                    <td className="p-4 font-medium">{proj.lead.email}</td>
                                    <td className="p-4 font-mono text-xs text-gray-500">
                                        ID: {proj.id.slice(0, 6)}...<br />
                                        TK: {proj.token.slice(0, 6)}...
                                    </td>
                                    <td className="p-4">
                                        <span className="bg-white/10 px-2 py-1 rounded text-xs">{proj.status}</span>
                                    </td>
                                    <td className="p-4 text-gray-400">
                                        {format(proj.createdAt, "d MMM HH:mm", { locale: es })}
                                    </td>
                                    <td className="p-4">
                                        <Button size="sm" variant="ghost" asChild>
                                            <Link href={`/panel/${proj.token}`} target="_blank">Ver Panel</Link>
                                        </Button>
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
