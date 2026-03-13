import { useState, useEffect } from "react";
import { CartProvider } from "@/context/CartContext";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import StatsSection from "@/components/StatsSection";
import CategorySection from "@/components/CategorySection";
import PanelSection from "@/components/PanelSection";
import BotSection from "@/components/BotSection";
import ScriptSection from "@/components/ScriptSection";
import NokosSection from "@/components/NokosSection";
import SosmedSection from "@/components/SosmedSection";
import ResellerSection from "@/components/ResellerSection";
import PromoSection from "@/components/PromoSection";
import HowToOrderSection from "@/components/HowToOrderSection";
import PaymentSection from "@/components/PaymentSection";
import TestimoniSection from "@/components/TestimoniSection";
import FAQSection from "@/components/FAQSection";
import KontakSection from "@/components/KontakSection";
import Footer from "@/components/Footer";
import CartModal from "@/components/CartModal";
import SalesModal from "@/components/SalesModal";
import SearchModal from "@/components/SearchModal";
import FloatingButtons from "@/components/FloatingButtons";
import NotFound from "@/components/NotFound";

function useIs404() {
  const path = window.location.pathname;
  return path !== "/" && path !== "" && !path.startsWith("/#");
}

export default function App() {
  const [salesOpen, setSalesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const is404 = useIs404();

  useEffect(() => {
    const handler = () => setSearchOpen((o) => !o);
    const keydown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        handler();
      }
    };
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, []);

  if (is404) return <NotFound />;

  return (
    <CartProvider>
      <div className="min-h-screen">
        <AnnouncementBar />
        <Header
          onSalesOpen={() => setSalesOpen(true)}
          onSearchOpen={() => setSearchOpen(true)}
        />
        <HeroSlider />
        <StatsSection />
        <PromoSection />
        <CategorySection />
        <PanelSection />
        <BotSection />
        <ScriptSection />
        <NokosSection />
        <SosmedSection />
        <ResellerSection />
        <HowToOrderSection />
        <PaymentSection />
        <TestimoniSection />
        <FAQSection />
        <KontakSection />
        <Footer />
        <CartModal />
        <SalesModal isOpen={salesOpen} onClose={() => setSalesOpen(false)} />
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        <FloatingButtons />
      </div>
    </CartProvider>
  );
}
