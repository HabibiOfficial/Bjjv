import { FaCheck, FaCartPlus, FaWhatsapp, FaStar, FaFire, FaBolt, FaShareAlt } from "react-icons/fa";
import { panelProducts, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

const badgeConfig = {
  TERLARIS: { label: "TERLARIS", icon: FaFire, className: "bg-[#e74c3c] text-white" },
  BARU: { label: "BARU", icon: FaBolt, className: "bg-blue-500 text-white" },
  PROMO: { label: "PROMO", icon: FaStar, className: "bg-yellow-400 text-[#1a252f]" },
};

function PanelCard({ product }: { product: Product }) {
  const { addItem, setIsOpen } = useCart();
  const badge = product.badge ? badgeConfig[product.badge] : null;

  const handleBuy = () => {
    const msg = `Halo, saya ingin membeli *Panel ${product.name}* - Rp ${product.price.toLocaleString("id-ID")}/bulan`;
    window.open(`https://wa.me/628131919213?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price });
    setIsOpen(true);
  };

  const handleShare = () => {
    const text = `Cek Panel WhatsApp *${product.name}* di Habibi Store! Hanya Rp ${product.price.toLocaleString("id-ID")}/bulan. Server 24 jam, anti delete, anti DDOS 🔥\n\nOrder: https://wa.me/628131919213`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div
      className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col ${
        product.popular
          ? "border-2 border-[#1abc9c] ring-2 ring-[#1abc9c]/20 scale-105"
          : "border border-gray-100"
      }`}
    >
      {product.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#1abc9c] text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1 whitespace-nowrap">
          <FaStar className="text-yellow-300 text-xs" /> POPULER
        </div>
      )}

      {badge && !product.popular && (
        <div className={`absolute -top-3 left-4 ${badge.className} text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 whitespace-nowrap`}>
          <badge.icon className="text-[10px]" /> {badge.label}
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-xl font-bold text-[#1a252f]">{product.name}</h3>
          <button
            onClick={handleShare}
            title="Bagikan ke WhatsApp"
            className="w-7 h-7 flex items-center justify-center text-gray-300 hover:text-[#25D366] transition-colors shrink-0 -mt-0.5"
          >
            <FaShareAlt className="text-sm" />
          </button>
        </div>
        <div className="text-3xl font-bold text-[#e74c3c] mb-4">
          Rp {product.price.toLocaleString("id-ID")}
          <span className="text-sm text-gray-400 font-normal">/bulan</span>
        </div>
        <ul className="space-y-2 mb-6 flex-1">
          {product.features?.map((f) => (
            <li key={f} className="flex items-center gap-2 text-gray-600 text-sm">
              <FaCheck className="text-[#1abc9c] shrink-0 text-xs" />
              {f}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 mt-auto">
          <button
            onClick={handleBuy}
            className="flex-1 flex items-center justify-center gap-2 bg-[#1abc9c] hover:bg-[#16a085] text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-200"
          >
            <FaWhatsapp /> Beli
          </button>
          <button
            onClick={handleCart}
            className="w-11 h-11 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-[#1a252f] rounded-xl transition-all duration-200"
          >
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PanelSection() {
  return (
    <section id="panel" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a252f] inline-block relative mb-4">
            💻 Panel Private WhatsApp
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1abc9c] rounded-full" />
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Panel hosting bot WhatsApp dengan spesifikasi RAM berbeda-beda. Server online 24 jam, anti delete, anti maling script, tidak boros kuota, dan anti DDOS.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {panelProducts.map((p) => (
            <PanelCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
