import { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import StatsSection from "@/components/StatsSection";
import CategorySection from "@/components/CategorySection";
import PanelSection from "@/components/PanelSection";
import BotSection from "@/components/BotSection";
import ScriptSection from "@/components/ScriptSection";
import NokosSection from "@/components/NokosSection";
import SosmedSection from "@/components/SosmedSection";
import KontakSection from "@/components/KontakSection";
import Footer from "@/components/Footer";
import CartModal from "@/components/CartModal";
import SalesModal from "@/components/SalesModal";
import SearchModal from "@/components/SearchModal";
import FloatingButtons from "@/components/FloatingButtons";

export default function App() {
  const [salesOpen, setSalesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header
          onSalesOpen={() => setSalesOpen(true)}
          onSearchOpen={() => setSearchOpen(true)}
        />
        <HeroSlider />
        <StatsSection />
        <CategorySection />
        <PanelSection />
        <BotSection />
        <ScriptSection />
        <NokosSection />
        <SosmedSection />
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
