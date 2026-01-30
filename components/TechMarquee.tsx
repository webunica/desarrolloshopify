'use client';

import { cn } from "@/lib/utils";

interface TechMarqueeProps {
    className?: string;
}

export function TechMarquee({ className }: TechMarqueeProps) {
    const brands = [
        "Shopify Partner",
        "Webpay Plus",
        "MercadoPago",
        "Starken/Blue",
        "Google Ads",
        "Meta Ads",
        "Shipit",
        "Sendu"
    ];

    return (
        <div className={cn("w-full bg-primary border-y-2 border-border overflow-hidden py-3", className)}>
            <div className="relative w-full flex overflow-x-hidden">
                <div className="flex animate-marquee whitespace-nowrap">
                    {/* Primera tira de marcas */}
                    <div className="flex items-center mx-4">
                        {brands.map((brand, index) => (
                            <div key={index} className="flex items-center">
                                <span className="text-primary-foreground font-extrabold text-xl md:text-2xl uppercase tracking-tight mx-6 md:mx-10 whitespace-nowrap">
                                    {brand}
                                </span>
                                <span className="text-primary-foreground text-2xl font-black opacity-50">*</span>
                            </div>
                        ))}
                    </div>
                    {/* Segunda tira (duplicada) para el loop infinito */}
                    <div className="flex items-center mx-4">
                        {brands.map((brand, index) => (
                            <div key={`dup-${index}`} className="flex items-center">
                                <span className="text-primary-foreground font-extrabold text-xl md:text-2xl uppercase tracking-tight mx-6 md:mx-10 whitespace-nowrap">
                                    {brand}
                                </span>
                                <span className="text-primary-foreground text-2xl font-black opacity-50">*</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

