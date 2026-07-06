import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TikTok Shop Motion Prompts — Guias práticos + prompts prontos para vídeos UGC com IA",
  description:
    "Crie vídeos de roupas para TikTok Shop com modelos IA usando prompts prontos. InfoApp simples, acesso imediato por R$ 19,90.",
  keywords: [
    "TikTok Shop",
    "UGC",
    "modelos IA",
    "prompts prontos",
    "vídeos de roupa",
    "criação de conteúdo",
    "afiliados TikTok",
  ],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "TikTok Shop Motion Prompts",
    description:
      "Crie vídeos de roupas para TikTok Shop com modelos IA usando prompts prontos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`} style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}