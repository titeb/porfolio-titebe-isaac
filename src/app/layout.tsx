import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "H. ISAAC TITEBE | Développeur Fullstack & AI Engineer",
  description: "Développeur Fullstack spécialisé en Flutter et Firebase, j'intègre l'Intelligence Artificielle pour créer des solutions innovantes, automatisées et scalables. Lauréat du concours panafricain Pitch My APP 2020.",
  keywords: ["Développeur Fullstack", "Flutter", "Firebase", "Intelligence Artificielle", "IA", "Portfolio", "H. ISAAC TITEBE", "Mobile Developer", "Web Developer", "AI Engineer"],
  authors: [{ name: "H. ISAAC TITEBE" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "H. ISAAC TITEBE | Développeur Fullstack & AI Engineer",
    description: "Transformer des idées complexes en expériences numériques fluides",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "H. ISAAC TITEBE | Développeur Fullstack & AI Engineer",
    description: "Transformer des idées complexes en expériences numériques fluides",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
