import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://freeridez.vercel.app"),
  title: {
    default: "FreeRidez — Controle financeiro para entregadores",
    template: "%s | FreeRidez",
  },
  description:
    "Plataforma de controle financeiro gamificada para entregadores e motoristas de aplicativo. Registre corridas, acompanhe gastos e bata suas metas. Grátis para começar.",
  keywords: [
    "controle financeiro",
    "entregador",
    "motorista de aplicativo",
    "iFood",
    "Uber",
    "Rappi",
    "gestão de ganhos",
    "motoboy",
  ],
  authors: [{ name: "FreeRidez" }],
  creator: "FreeRidez",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://freeridez.vercel.app",
    title: "FreeRidez — Controle financeiro para entregadores",
    description:
      "Sem patrão. Só você e a rua. Controle financeiro gamificado para trabalhadores de app.",
    siteName: "FreeRidez",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FreeRidez - Controle financeiro para entregadores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FreeRidez — Controle financeiro para entregadores",
    description:
      "Sem patrão. Só você e a rua. Controle financeiro gamificado para trabalhadores de app.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#E63946",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
