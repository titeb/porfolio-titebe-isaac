import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Portfolio from "@/components/sections/Portfolio";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/sections/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white overflow-x-hidden flex flex-col">
      {/* Subtle texture */}
      <div className="noise-overlay" />

      <Header />

      <main className="flex-1">
        <Hero />
        <Portfolio />
      </main>

      <Footer />

      {/* Floating WhatsApp button */}
      <WhatsAppFloat />
    </div>
  );
}
