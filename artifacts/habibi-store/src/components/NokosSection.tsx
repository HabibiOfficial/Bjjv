import { FaWhatsapp, FaCartPlus, FaSimCard } from "react-icons/fa";
import { nokosProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function NokosSection() {
  const { addItem, setIsOpen } = useCart();

  const handleOrder = (country: string, code: string, price: number) => {
    const msg = `Halo, saya ingin membeli *NOKOS WhatsApp ${country} (${code})*\nHarga: Rp ${price.toLocaleString("id-ID")}`;
    window.open(`https://wa.me/628131919213?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleCart = (id: string, country: string, code: string, price: number) => {
    addItem({ id, name: `NOKOS WA ${country} ${code}`, price });
    setIsOpen(true);
  };

  return (
    <section id="nokos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1abc9c] bg-[#1abc9c]/10 px-4 py-1 rounded-full mb-3">
            Nomor Virtual
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a252f] relative inline-block mb-4">
            🌏 NOKOS WhatsApp
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1abc9c] rounded-full" />
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Nomor kosong WhatsApp virtual dari berbagai negara. Cocok untuk registrasi akun, verifikasi, dan keperluan lainnya.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {nokosProducts.map((n) => (
            <div
              key={n.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col border border-gray-100 overflow-hidden group"
            >
              <div className="bg-gradient-to-br from-[#1a252f] to-[#2d3e50] p-4 text-center">
                <span className="text-4xl">{n.flag}</span>
                <p className="text-white/80 text-xs font-semibold mt-1">{n.code}</p>
              </div>
              <div className="p-4 flex flex-col flex-1 text-center">
                <h3 className="font-bold text-[#1a252f] text-sm mb-1">{n.country}</h3>
                <p className="text-[#e74c3c] font-bold text-lg mb-3">
                  Rp {n.price.toLocaleString("id-ID")}
                </p>
                <div className="flex flex-col gap-1.5 mt-auto">
                  <button
                    onClick={() => handleOrder(n.country, n.code, n.price)}
                    className="flex items-center justify-center gap-1.5 bg-[#1abc9c] hover:bg-[#16a085] text-white font-semibold py-2 rounded-xl transition-all duration-200 text-xs"
                  >
                    <FaWhatsapp /> Pesan
                  </button>
                  <button
                    onClick={() => handleCart(n.id, n.country, n.code, n.price)}
                    className="flex items-center justify-center gap-1.5 bg-gray-100 hover:bg-gray-200 text-[#1a252f] font-semibold py-2 rounded-xl transition-all duration-200 text-xs"
                  >
                    <FaCartPlus /> Keranjang
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#1a252f] rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1abc9c]/20 rounded-xl flex items-center justify-center">
              <FaSimCard className="text-[#1abc9c] text-lg" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Butuh negara lain?</p>
              <p className="text-white/60 text-xs">Tersedia NOKOS untuk semua negara via request</p>
            </div>
          </div>
          <a
            href="https://wa.me/628131919213?text=Halo%2C+saya+ingin+tanya+NOKOS+WhatsApp+negara+lain"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1abc9c] hover:bg-[#16a085] text-white font-semibold py-2.5 px-5 rounded-xl transition-all duration-200 text-sm"
          >
            <FaWhatsapp /> Tanya Negara Lain
          </a>
        </div>
      </div>
    </section>
  );
}
