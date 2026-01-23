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
