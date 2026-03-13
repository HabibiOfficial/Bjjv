import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  total: number;
  count: number;
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  checkout: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      return JSON.parse(localStorage.getItem("habibi-cart") || "[]");
    } catch {
      return [];
    }
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("habibi-cart", JSON.stringify(items));
  }, [items]);

  const addItem = (item: CartItem) => {
    setItems((prev) => [...prev, item]);
  };

  const removeItem = (id: string) => {
    setItems((prev) => {
      const idx = prev.findLastIndex((i) => i.id === id);
      if (idx === -1) return prev;
      return prev.filter((_, i) => i !== idx);
    });
  };

  const clearCart = () => setItems([]);

  const total = items.reduce((sum, i) => sum + i.price, 0);
  const count = items.length;

  const checkout = () => {
    if (items.length === 0) return;
    let message = "Halo, saya ingin membeli layanan berikut:\n\n";
    items.forEach((item, idx) => {
      message += `${idx + 1}. ${item.name} - Rp ${item.price.toLocaleString("id-ID")}\n`;
    });
    message += `\nTotal: Rp ${total.toLocaleString("id-ID")}\n\nSaya sudah siap untuk membayar.`;
    const url = `https://wa.me/628131919213?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearCart, total, count, isOpen, setIsOpen, checkout }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}
