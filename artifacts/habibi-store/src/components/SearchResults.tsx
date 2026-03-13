import { allProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { FaWhatsapp, FaCartPlus, FaTimes } from "react-icons/fa";

interface SearchResultsProps {
  query: string;
  onClear: () => void;
}

export default function SearchResults({ query, onClear }: SearchResultsProps) {
  const { addItem, setIsOpen } = useCart();

  if (!query.trim()) return null;

  const results = allProducts.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.description?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 max-w-7xl py-6">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
          <span className="font-semibold text-[#1a252f]">
            Hasil pencarian: <span className="text-[#1abc9c]">{results.length}</span> ditemukan untuk &quot;{query}&quot;
          </span>
          <button
            onClick={onClear}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm px-4 py-2 rounded-full transition-all"
          >
            <FaTimes className="text-xs" /> Clear
          </button>
        </div>

        {results.length === 0 ? (
          <p className="text-gray-400 text-center py-8">Tidak ada layanan ditemukan untuk "{query}"</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {results.map((p) => (
              <div key={p.id} className="bg-gray-50 rounded-xl p-4 border-l-4 border-[#1abc9c]">
                <h4 className="font-semibold text-[#1a252f] text-sm mb-1">{p.name}</h4>
                {p.description && (
                  <p className="text-gray-500 text-xs mb-2 line-clamp-2">{p.description}</p>
                )}
                <p className="text-[#e74c3c] font-bold text-sm mb-3">
                  {p.priceLabel || `Rp ${p.price.toLocaleString("id-ID")}`}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      const msg = `Halo, saya ingin membeli ${p.name}`;
                      window.open(`https://wa.me/628131919213?text=${encodeURIComponent(msg)}`, "_blank");
                    }}
                    className="flex-1 flex items-center justify-center gap-1 bg-[#1abc9c] hover:bg-[#16a085] text-white text-xs font-semibold py-2 rounded-lg transition-all"
                  >
                    <FaWhatsapp /> Beli
                  </button>
                  <button
                    onClick={() => {
                      addItem({ id: p.id, name: p.name, price: p.price });
                      setIsOpen(true);
                    }}
                    className="w-8 h-8 flex items-center justify-center bg-white hover:bg-gray-200 text-[#1a252f] rounded-lg transition-all border border-gray-200"
                  >
                    <FaCartPlus className="text-xs" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
