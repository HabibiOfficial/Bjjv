import { useState } from "react";
import { FaTiktok, FaInstagram, FaWhatsapp, FaCartPlus, FaHeart, FaEye, FaUserPlus } from "react-icons/fa";
import { sosmedCategories, SosmedCategory } from "@/data/products";
import { useCart } from "@/context/CartContext";

const typeIcon: Record<string, React.ElementType> = {
  Likes: FaHeart,
  Views: FaEye,
  Followers: FaUserPlus,
};

const platformIcon: Record<string, React.ElementType> = {
  TikTok: FaTiktok,
  Instagram: FaInstagram,
  "WA Channel": FaWhatsapp,
};

const platforms = [
  { key: "TikTok", label: "TikTok", grad: "from-black to-pink-600" },
  { key: "Instagram", label: "Instagram", grad: "from-orange-400 to-pink-600" },
  { key: "WA Channel", label: "WA Channel", grad: "from-[#25D366] to-[#128C7E]" },
];

function CategoryTable({ cat }: { cat: SosmedCategory }) {
  const { addItem, setIsOpen } = useCart();
  const Icon = typeIcon[cat.type] || FaHeart;

  const handleOrder = (label: string, price: number) => {
    const msg = `Halo, saya ingin memesan *${cat.platform} ${cat.type} - ${label}*\nHarga: Rp ${price.toLocaleString("id-ID")}`;
    window.open(`https://wa.me/628131919213?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleCart = (label: string, price: number) => {
    addItem({ id: `${cat.id}-${label}`, name: `${cat.platform} ${cat.type} ${label}`, price });
    setIsOpen(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      <div className={`bg-gradient-to-r ${cat.colorClass} p-4 flex items-center gap-3`}>
        <Icon className="text-white text-xl" />
        <div>
          <h3 className="text-white font-bold">{cat.platform} {cat.type}</h3>
          <p className="text-white/80 text-xs">{cat.items.length} paket tersedia</p>
        </div>
      </div>
      <div className="divide-y divide-gray-50">
        {cat.items.map((item, i) => (
          <div key={i} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors group">
            <span className="text-sm font-medium text-[#1a252f]">{item.label}</span>
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#e74c3c] text-sm">
                Rp {item.price.toLocaleString("id-ID")}
              </span>
              <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => handleOrder(item.label, item.price)}
                  className="flex items-center gap-1 bg-[#1abc9c] hover:bg-[#16a085] text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-all"
                >
                  <FaWhatsapp className="text-xs" /> Pesan
                </button>
                <button
                  onClick={() => handleCart(item.label, item.price)}
                  className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 text-[#1a252f] text-xs font-semibold px-2 py-1.5 rounded-lg transition-all"
                >
                  <FaCartPlus className="text-xs" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SosmedSection() {
  const [activePlatform, setActivePlatform] = useState("TikTok");
  const filtered = sosmedCategories.filter(c => c.platform === activePlatform);

  return (
    <section id="sosmed" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1abc9c] bg-[#1abc9c]/10 px-4 py-1 rounded-full mb-3">
            Jasa Sosmed
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a252f] relative inline-block mb-4">
            💫 Suntik Sosial Media
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1abc9c] rounded-full" />
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Tingkatkan engagement akun Anda dengan layanan Like, Views, dan Followers berkualitas untuk TikTok, Instagram, dan WhatsApp Channel. Layanan permanen &amp; proses cepat.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {platforms.map((p) => {
            const Icon = platformIcon[p.key];
            const isActive = activePlatform === p.key;
            return (
              <button
                key={p.key}
                onClick={() => setActivePlatform(p.key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200 ${
                  isActive
                    ? `bg-gradient-to-r ${p.grad} text-white shadow-lg scale-105`
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Icon className="text-base" />
                {p.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cat) => (
            <CategoryTable key={cat.id} cat={cat} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            ✅ Semua layanan bersifat <strong>permanen</strong> · ⚡ Proses cepat dalam hitungan menit · 🔒 Aman &amp; terpercaya
          </p>
        </div>
      </div>
    </section>
  );
}
