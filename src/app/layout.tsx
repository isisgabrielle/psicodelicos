import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Atlética Psicodélicos | UNIT",
  description: "Site Oficial da Associação Atlética Acadêmica de Psicologia da UNIT",
  icons: {
    icon: "/lobo.png",
    shortcut: "/lobo.png",
    apple: "/lobo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${bebasNeue.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
