import { useState, useEffect } from "react";
import { FaWhatsapp, FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext";

export default function MobileOrderBar() {
  const [show, setShow] = useState(false);
  const { setIsOpen, items } = useCart();
  const totalItems = items.reduce((s, i) => s + i.qty, 0);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-100 shadow-2xl px-4 py-3 flex gap-3 items-center">
      <button
        onClick={() => setIsOpen(true)}
        className="relative flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#1a252f] font-semibold py-3 px-4 rounded-xl transition-all text-sm"
      >
        <FaShoppingCart />
        Keranjang
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#e74c3c] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      <a
        href="https://wa.me/628131919213?text=Halo%20Habibi%20Store%2C%20saya%20ingin%20order!"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 rounded-xl transition-all text-sm shadow"
      >
        <FaWhatsapp className="text-lg" /> Order Sekarang
      </a>
    </div>
  );
}
