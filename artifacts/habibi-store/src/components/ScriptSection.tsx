import { FaCode, FaWhatsapp, FaCartPlus, FaCheckCircle } from "react-icons/fa";
import { scriptProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";

const scriptIcons: Record<string, string> = {
  "script-jpm": "🚀",
  "script-cpanel": "💻",
  "script-jaga-grup": "🛡️",
  "script-pushkontak": "📢",
};

const scriptDescs: Record<string, string> = {
  "script-jpm": "Script bot push member WhatsApp, kirim member masuk grup otomatis.",
  "script-cpanel": "Script bot CPanel dengan fitur lengkap untuk pengelolaan.",
  "script-jaga-grup": "Script bot penjaga grup WhatsApp dari spam dan link berbahaya.",
  "script-pushkontak": "Script bot kirim pesan ke kontak secara massal dan efisien.",
};

export default function ScriptSection() {
  const { addItem, setIsOpen } = useCart();

  const handleOrder = (name: string, price: number) => {
    const msg = `Halo, saya ingin membeli *${name}* (Tanpa Encrypt)\nHarga: Rp ${price.toLocaleString("id-ID")}`;
    window.open(`https://wa.me/628131919213?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleCart = (id: string, name: string, price: number) => {
    addItem({ id, name, price });
    setIsOpen(true);
  };

  return (
    <section id="script" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1abc9c] bg-[#1abc9c]/10 px-4 py-1 rounded-full mb-3">
            Jual Script
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a252f] relative inline-block mb-4">
            📂 Jual Script Bot WhatsApp
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1abc9c] rounded-full" />
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Script bot WhatsApp siap pakai, <strong className="text-[#1a252f]">tanpa encrypt</strong> — kode sumber terbuka, bisa dikustomisasi sesuai kebutuhan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scriptProducts.map((s) => (
            <div
              key={s.id}
              className="bg-gradient-to-br from-[#1a252f] to-[#2d3e50] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col text-white overflow-hidden"
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="text-4xl mb-4">{scriptIcons[s.id]}</div>
                <h3 className="text-lg font-bold mb-2">{s.name}</h3>
                <p className="text-white/70 text-sm mb-4 flex-1">{scriptDescs[s.id]}</p>
                <div className="flex items-center gap-2 text-xs text-[#1abc9c] mb-4">
                  <FaCheckCircle />
                  <span className="font-semibold">Tanpa Encrypt (Source Terbuka)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#1abc9c] mb-5">
                  <FaCode />
                  <span className="font-semibold">Langsung Bisa Digunakan</span>
                </div>
                <div className="text-2xl font-bold text-[#e74c3c] mb-4">
                  Rp {s.price.toLocaleString("id-ID")}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleOrder(s.name, s.price)}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#1abc9c] hover:bg-[#16a085] text-white font-semibold py-2.5 px-3 rounded-xl transition-all duration-200 text-sm"
                  >
                    <FaWhatsapp /> Beli
                  </button>
                  <button
                    onClick={() => handleCart(s.id, s.name, s.price)}
                    className="w-11 h-11 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-200"
                  >
                    <FaCartPlus />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
