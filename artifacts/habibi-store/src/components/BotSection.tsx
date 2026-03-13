import { FaCheck, FaCartPlus, FaWhatsapp, FaShieldAlt, FaRobot, FaUserPlus, FaCode, FaPhone } from "react-icons/fa";
import { botProducts, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

const iconMap: Record<string, React.ElementType> = {
  "bot-jaga-grup": FaShieldAlt,
  "bot-pushkontak": FaRobot,
  "bot-jpm": FaUserPlus,
  "script-bot": FaCode,
  "nokos-wa": FaPhone,
};

function ServiceCard({ product }: { product: Product }) {
  const { addItem, setIsOpen } = useCart();
  const Icon = iconMap[product.id] || FaRobot;

  const handleBuy = () => {
    const msg = `Halo, saya ingin membeli/sewa ${product.name} - Rp ${product.price.toLocaleString("id-ID")}`;
    window.open(`https://wa.me/628131919213?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleCart = () => {
    addItem({ id: product.id, name: product.name, price: product.price });
    setIsOpen(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col border border-gray-100">
      <div className="p-6 flex flex-col flex-1">
        <div className="w-14 h-14 bg-gradient-to-br from-[#1abc9c] to-[#3498db] rounded-full flex items-center justify-center mb-4">
          <Icon className="text-white text-xl" />
        </div>
        <h3 className="text-lg font-bold text-[#1a252f] mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-4 flex-1">{product.description}</p>
        <ul className="space-y-1 mb-5">
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
            <FaWhatsapp /> Order
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

export default function BotSection() {
  return (
    <section id="bot" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a252f] inline-block relative mb-4">
            🤖 Bot WhatsApp
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1abc9c] rounded-full" />
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Layanan sewa bot WhatsApp untuk berbagai keperluan dengan harga terjangkau dan fitur lengkap.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {botProducts.map((p) => (
            <ServiceCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
