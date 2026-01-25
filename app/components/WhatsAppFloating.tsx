"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppFloating() {
    const [isVisible, setIsVisible] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        // Show button entrance animation
        const timer = setTimeout(() => setIsVisible(true), 500);

        // Show greetings tooltip a bit later
        const tooltipTimer = setTimeout(() => setShowTooltip(true), 2000);

        return () => {
            clearTimeout(timer);
            clearTimeout(tooltipTimer);
        };
    }, []);

    return (
        <div className={`fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-2 transition-transform duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>

            {/* Tooltip / Burbuja de saludo */}
            <div className={`bg-white text-slate-900 p-4 rounded-2xl rounded-br-none shadow-xl border border-slate-100 max-w-[250px] transition-all duration-300 transform origin-bottom-right mb-2 relative ${showTooltip ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                {/* Close button for tooltip */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        setShowTooltip(false);
                    }}
                    className="absolute -top-2 -right-2 bg-slate-200 hover:bg-slate-300 text-slate-500 rounded-full p-1"
                >
                    <X className="w-3 h-3" />
                </button>

                <p className="font-semibold text-sm mb-1">¡Hola! 👋</p>
                <p className="text-xs text-slate-600 leading-snug">
                    ¿Tienes dudas sobre tu proyecto? Hablemos directamente por aquí.
                </p>
            </div>

            <a
                href="https://wa.me/56984410379?text=Hola,%20vi%20su%20web%20y%20me%20interesa%20asesor%C3%ADa%20para%20crear%20mi%20tienda%20online."
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-3"
                onMouseEnter={() => setShowTooltip(true)}
            >
                {/* WhatsApp Icon SVG */}
                <svg
                    viewBox="0 0 24 24"
                    className="w-9 h-9 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>

                {/* Status Indicator */}
                <span className="absolute top-0 right-0 h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-50"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-[#25D366]"></span>
                </span>
            </a>
        </div>
    );
}
