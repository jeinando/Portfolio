import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/Footer";
import MousePointer from "@/components/MouseSpotlight"; // Asegúrate de importar correctamente el componente

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jacob Portfolio",
  description: "Portfolio personal de Jacob, creado con Next.js y Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}
      >
        <MousePointer /> {/* Aquí lo agregas */}
        <main>{children}</main> {/* Aquí se renderiza el contenido de las páginas */}
        <Footer /> {/* El footer se mantiene */}
      </body>
    </html>
  );
}
