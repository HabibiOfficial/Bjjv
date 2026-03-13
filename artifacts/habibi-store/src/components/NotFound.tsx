import { FaWhatsapp, FaHome, FaSearch } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1a252f] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="relative inline-block mb-8">
          <div className="text-[140px] font-black text-[#1abc9c]/10 leading-none select-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2">🔍</div>
              <div className="text-[#1abc9c] font-black text-4xl">404</div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">Halaman Tidak Ditemukan</h1>
        <p className="text-white/60 mb-2">
          Oops! Halaman yang kamu cari tidak ada atau sudah dipindahkan.
        </p>
        <p className="text-white/40 text-sm mb-10">
          Coba kembali ke beranda atau hubungi admin jika kamu merasa ada kesalahan.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-[#1abc9c] hover:bg-[#16a085] text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg"
          >
            <FaHome /> Kembali ke Beranda
          </a>
          <a
            href="/#panel"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            <FaSearch /> Lihat Produk
          </a>
          <a
            href="https://wa.me/628131919213"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            <FaWhatsapp /> Hubungi Admin
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          <span className="text-4xl font-black text-[#1abc9c]">HABIBI</span>
          <span className="text-4xl font-black text-white">STORE</span>
        </div>
      </div>
    </div>
  );
}
