import { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import StatsSection from "@/components/StatsSection";
import CategorySection from "@/components/CategorySection";
import SearchResults from "@/components/SearchResults";
import PanelSection from "@/components/PanelSection";
import BotSection from "@/components/BotSection";
import ScriptSection from "@/components/ScriptSection";
import NokosSection from "@/components/NokosSection";
import SosmedSection from "@/components/SosmedSection";
import AdminSection from "@/components/AdminSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CartModal from "@/components/CartModal";
import SalesModal from "@/components/SalesModal";
import FloatingButtons from "@/components/FloatingButtons";

export default function App() {
  const [salesOpen, setSalesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header
          onSalesOpen={() => setSalesOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <HeroSlider />
        <StatsSection />
        <CategorySection />
        <SearchResults query={searchQuery} onClear={() => setSearchQuery("")} />
        <PanelSection />
        <BotSection />
        <ScriptSection />
        <NokosSection />
        <SosmedSection />
        <AdminSection />
        <ContactSection />
        <Footer />
        <CartModal />
        <SalesModal isOpen={salesOpen} onClose={() => setSalesOpen(false)} />
        <FloatingButtons />
      </div>
    </CartProvider>
  );
}
