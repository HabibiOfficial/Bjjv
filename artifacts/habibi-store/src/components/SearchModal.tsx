import { useState, useEffect, useRef } from "react";
import { FaSearch, FaTimes, FaWhatsapp, FaCartPlus, FaServer, FaRobot, FaCode, FaSimCard, FaHashtag } from "react-icons/fa";
import { panelProducts, scriptProducts, nokosProducts, botProducts, sosmedCategories } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface SearchResult {
  id: string;
  name: string;
  price: number;
  category: string;
  categoryLabel: string;
  sectionId: string;
}

const categoryIcon: Record<string, React.ElementType> = {
  panel: FaServer,
  bot: FaRobot,
  script: FaCode,
  nokos: FaSimCard,
  sosmed: FaHashtag,
};

const categoryLabel: Record<string, string> = {
  panel: "Panel WA",
  bot: "Sewa Bot",
  script: "Script Bot",
  nokos: "NOKOS",
  sosmed: "Sosmed",
};

function buildIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  panelProducts.forEach((p) =>
    results.push({ id: p.id, name: p.name, price: p.price, category: "panel", categoryLabel: "Panel WA", sectionId: "panel" })
  );

  botProducts.forEach((b) =>
    b.tiers.forEach((t, i) =>
      results.push({
        id: `${b.id}-${i}`,
        name: `${b.name} — ${t.label}`,
        price: t.price,
        category: "bot",
        categoryLabel: "Sewa Bot",
        sectionId: "bot",
      })
    )
  );

  scriptProducts.forEach((s) =>
    results.push({ id: s.id, name: s.name, price: s.price, category: "script", categoryLabel: "Script Bot", sectionId: "script" })
  );

  nokosProducts.forEach((n) =>
    results.push({
      id: n.id,
      name: `NOKOS ${n.country} (${n.code})`,
      price: n.price,
      category: "nokos",
      categoryLabel: "NOKOS WA",
      sectionId: "nokos",
    })
  );

  sosmedCategories.forEach((cat) =>
    cat.items.forEach((item, i) =>
      results.push({
        id: `${cat.id}-${i}`,
        name: `${cat.platform} ${cat.type} — ${item.label}`,
        price: item.price,
        category: "sosmed",
        categoryLabel: `${cat.platform} ${cat.type}`,
        sectionId: "sosmed",
      })
    )
  );

  return results;
}

const allResults = buildIndex();

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const { addItem, setIsOpen: openCart } = useCart();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!isOpen) return null;

  const results = query.trim().length >= 2
    ? allResults.filter((r) => r.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  const handleOrder = (name: string, price: number, sectionId: string) => {
    const msg = `Halo, saya ingin membeli *${name}*\nHarga: Rp ${price.toLocaleString("id-ID")}`;
    window.open(`https://wa.me/628131919213?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleCart = (r: SearchResult) => {
    addItem({ id: r.id, name: r.name, price: r.price });
    openCart(true);
    onClose();
  };

  const handleGoToSection = (sectionId: string) => {
    onClose();
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const grouped = results.reduce<Record<string, SearchResult[]>>((acc, r) => {
    if (!acc[r.category]) acc[r.category] = [];
    acc[r.category].push(r);
    return acc;
  }, {});

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
          <FaSearch className="text-[#1abc9c] text-lg shrink-0" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari layanan... (panel, bot, script, nokos, sosmed)"
            className="flex-1 text-[#1a252f] text-base placeholder-gray-400 outline-none bg-transparent"
          />
          {query && (
            <button onClick={() => setQuery("")} className="text-gray-400 hover:text-gray-600 transition-colors">
              <FaTimes />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-1 text-gray-400 hover:text-gray-600 text-sm border border-gray-200 px-2 py-0.5 rounded-lg transition-colors"
          >
            ESC
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto">
          {query.trim().length < 2 ? (
            <div className="p-6">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Telusuri Kategori</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.entries(categoryLabel).map(([key, label]) => {
                  const Icon = categoryIcon[key];
                  return (
                    <button
                      key={key}
                      onClick={() => handleGoToSection(key)}
                      className="flex items-center gap-2 bg-gray-50 hover:bg-[#1abc9c]/10 hover:text-[#1abc9c] text-gray-600 text-sm font-medium px-4 py-3 rounded-xl transition-all duration-200 text-left"
                    >
                      <Icon className="text-[#1abc9c]" />
                      {label}
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-gray-400 mt-5 text-center">Ketik minimal 2 karakter untuk mencari produk</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-10 text-center">
              <div className="text-4xl mb-3">🔍</div>
              <p className="text-gray-500 font-medium">Tidak ditemukan untuk "<span className="text-[#1a252f]">{query}</span>"</p>
              <p className="text-gray-400 text-sm mt-1">Coba kata kunci lain seperti "panel", "bot", "tiktok"</p>
            </div>
          ) : (
            <div className="p-3">
              <p className="text-xs text-gray-400 px-2 py-2">
                <span className="font-bold text-[#1abc9c]">{results.length}</span> hasil untuk "{query}"
              </p>
              {Object.entries(grouped).map(([cat, items]) => {
                const Icon = categoryIcon[cat] || FaSearch;
                return (
                  <div key={cat} className="mb-2">
                    <div className="flex items-center gap-2 px-2 py-1.5">
                      <Icon className="text-[#1abc9c] text-xs" />
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                        {categoryLabel[cat]} ({items.length})
                      </span>
                    </div>
                    {items.map((r) => (
                      <div
                        key={r.id}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors group"
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-[#1a252f] truncate">{r.name}</p>
                          <p className="text-xs font-bold text-[#e74c3c]">Rp {r.price.toLocaleString("id-ID")}</p>
                        </div>
                        <div className="flex gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={() => handleOrder(r.name, r.price, r.sectionId)}
                            className="flex items-center gap-1 bg-[#1abc9c] hover:bg-[#16a085] text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-all"
                          >
                            <FaWhatsapp className="text-xs" /> Pesan
                          </button>
                          <button
                            onClick={() => handleCart(r)}
                            className="flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-gray-200 text-[#1a252f] rounded-lg transition-all"
                          >
                            <FaCartPlus className="text-xs" />
                          </button>
                        </div>
                        <button
                          onClick={() => handleGoToSection(r.sectionId)}
                          className="opacity-0 group-hover:opacity-100 text-xs text-[#1abc9c] hover:underline transition-opacity shrink-0"
                        >
                          Lihat →
                        </button>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
