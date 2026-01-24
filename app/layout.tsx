import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Desarrollo Tienda Shopify | Expertos en E-commerce Chile",
  description: "Diseño y desarrollo de tiendas Shopify de alto impacto. Creamos experiencias de compra únicas que convierten visitantes en clientes.",
  keywords: ["desarrollo tienda shopify", "diseño tienda shopify", "shopify chile", "ecommerce", "agencia shopify"],
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://desarrolloshopify.cl",
    title: "Desarrollo Tienda Shopify | Tu Partner E-commerce",
    description: "Lleva tu negocio al siguiente nivel con una tienda Shopify profesional.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${fontSans.className} antialiased`}>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
