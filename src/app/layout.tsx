import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "IA Marquesano | Estúdio de vídeos com IA",
  description: "Plataforma de geração de vídeos com inteligência artificial. Integração inicial com Kling AI.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
