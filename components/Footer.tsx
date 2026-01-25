"use client";

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 bg-slate-950 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Desarrolloshopify.cl. Todos los derechos reservados.</p>
            <p className="mt-2">Santiago, Chile.</p>
        </footer>
    );
}
