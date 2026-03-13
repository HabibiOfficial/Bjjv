import { useState } from "react";
import { FaWhatsapp, FaShieldAlt, FaBroadcastTower, FaRocket, FaInfinity } from "react-icons/fa";
import { botProducts, BotProduct } from "@/data/products";

const iconMap: Record<string, React.ElementType> = {
  shield: FaShieldAlt,
  broadcast: FaBroadcastTower,
  rocket: FaRocket,
};

const gradients: Record<string, string> = {
  shield: "from-blue-500 to-cyan-400",
  broadcast: "from-[#1abc9c] to-green-400",
  rocket: "from-purple-500 to-pink-500",
};

function BotCard({ bot }: { bot: BotProduct }) {
  const [selected, setSelected] = useState(0);
  const Icon = iconMap[bot.icon] || FaRocket;
  const grad = gradients[bot.icon] || "from-[#1abc9c] to-teal-400";
  const tier = bot.tiers[selected];

  const handleOrder = () => {
    const msg = `Halo, saya ingin sewa *${bot.name}*\nDurasi: ${tier.label}\nHarga: Rp ${tier.price.toLocaleString("id-ID")}`;
    window.open(`https://wa.me/628131919213?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100 overflow-hidden">
      <div className={`bg-gradient-to-br ${grad} p-6 text-white`}>
        <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-3">
          <Icon className="text-white text-2xl" />
        </div>
        <h3 className="text-xl font-bold">{bot.name}</h3>
        <p className="text-white/80 text-sm mt-1">{bot.description}</p>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Pilih Durasi Sewa</p>
        <div className="grid grid-cols-2 gap-2 mb-5">
          {bot.tiers.map((tier, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`relative flex flex-col items-center justify-center py-2.5 px-2 rounded-xl border-2 text-center transition-all duration-200 ${
                selected === i
                  ? "border-[#1abc9c] bg-[#1abc9c]/10 text-[#1abc9c]"
                  : "border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300"
              }`}
            >
              {tier.isPermanent && (
                <FaInfinity className="text-xs mb-0.5" />
              )}
              <span className="text-xs font-semibold leading-tight">{tier.label}</span>
              <span className={`text-xs font-bold mt-0.5 ${selected === i ? "text-[#e74c3c]" : "text-gray-500"}`}>
                Rp {tier.price.toLocaleString("id-ID")}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-500">{tier.label}</span>
            <span className="text-xl font-bold text-[#e74c3c]">Rp {tier.price.toLocaleString("id-ID")}</span>
          </div>
          <button
            onClick={handleOrder}
            className="w-full flex items-center justify-center gap-2 bg-[#1abc9c] hover:bg-[#16a085] text-white font-semibold py-3 rounded-xl transition-all duration-200"
          >
            <FaWhatsapp /> Pesan Sekarang
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
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1abc9c] bg-[#1abc9c]/10 px-4 py-1 rounded-full mb-3">
            Sewa Bot
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a252f] relative inline-block mb-4">
            🤖 Sewa Bot WhatsApp
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1abc9c] rounded-full" />
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Sewa bot WhatsApp untuk jaga grup, kirim pesan massal (pushkontak), dan push member (JPM). Pilih durasi sesuai kebutuhan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {botProducts.map((bot) => (
            <BotCard key={bot.id} bot={bot} />
          ))}
        </div>
      </div>
    </section>
  );
}
