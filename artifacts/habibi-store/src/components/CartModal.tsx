import { useCart } from "@/context/CartContext";
import { FaShoppingCart, FaTimes, FaTrash, FaWhatsapp } from "react-icons/fa";

export default function CartModal() {
  const { items, removeItem, clearCart, total, isOpen, setIsOpen, checkout } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-[1999]"
        onClick={() => setIsOpen(false)}
      />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-[2000] shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h3 className="text-lg font-bold text-[#1a252f] flex items-center gap-2">
            <FaShoppingCart className="text-[#1abc9c]" />
            Keranjang Belanja
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-red-500 transition-colors text-lg"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-gray-400">
              <FaShoppingCart className="text-5xl opacity-30" />
              <p className="font-semibold text-base">Keranjang belanja kosong</p>
              <p className="text-sm">Tambahkan layanan ke keranjang untuk memulai</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-gray-50 rounded-xl p-4">
                  <div className="flex-1">
                    <p className="font-semibold text-[#1a252f] text-sm">{item.name}</p>
                    <p className="text-[#e74c3c] font-bold text-sm">
                      Rp {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-5 border-t border-gray-100 bg-white">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-[#1a252f]">Total:</span>
            <span className="text-[#e74c3c] font-bold text-xl">
              Rp {total.toLocaleString("id-ID")}
            </span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={clearCart}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold py-3 rounded-xl transition-all"
            >
              Kosongkan
            </button>
            <button
              onClick={checkout}
              disabled={items.length === 0}
              className="flex-1 flex items-center justify-center gap-2 bg-[#1abc9c] hover:bg-[#16a085] disabled:opacity-50 text-white font-semibold py-3 rounded-xl transition-all"
            >
              <FaWhatsapp /> Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
