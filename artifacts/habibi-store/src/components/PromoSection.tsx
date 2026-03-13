import { useState } from "react";
import { FaWhatsapp, FaCopy, FaCheck, FaGift, FaClock, FaUserPlus } from "react-icons/fa";

const PROMO_CODE = "NEWHABIBI20";

export default function PromoSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const waMsg = `Halo Habibi Store, saya pengguna baru dan ingin menggunakan kode promo *${PROMO_CODE}* untuk mendapatkan diskon 20%! 🎉`;

  return (
    <section id="promo" className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative bg-gradient-to-r from-[#1a252f] via-[#2d3e50] to-[#1a252f] rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#1abc9c]/10 rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-[#1abc9c]/10 rounded-full" />
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/3 rounded-full" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-[#e74c3c] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 animate-pulse">
                  <FaClock className="text-[10px]" /> PENAWARAN TERBATAS
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-[#1abc9c]/20 rounded-2xl flex items-center justify-center shrink-0">
                  <FaGift className="text-[#1abc9c] text-3xl" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    Diskon <span className="text-[#1abc9c]">20%</span>
                  </h2>
                  <p className="text-white/80 text-lg font-semibold">untuk Pengguna Baru!</p>
                </div>
              </div>

              <p className="text-white/70 text-sm mb-5 leading-relaxed max-w-sm">
                Daftar sebagai pelanggan baru Habibi Store dan dapatkan diskon <strong className="text-white">20%</strong> untuk pembelian pertama Anda. Berlaku untuk semua layanan panel, bot, script, NOKOS, dan sosmed.
              </p>

              <div className="flex flex-wrap gap-3 text-sm text-white/70">
                <div className="flex items-center gap-1.5">
                  <FaCheck className="text-[#1abc9c] text-xs" />
                  Berlaku semua layanan
                </div>
                <div className="flex items-center gap-1.5">
                  <FaCheck className="text-[#1abc9c] text-xs" />
                  Hanya 1x per pengguna
                </div>
                <div className="flex items-center gap-1.5">
                  <FaCheck className="text-[#1abc9c] text-xs" />
                  Tidak ada minimum order
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 w-full max-w-sm">
                <div className="flex items-center gap-2 mb-3">
                  <FaUserPlus className="text-[#1abc9c]" />
                  <p className="text-white/80 text-sm font-medium">Kode Promo Pengguna Baru</p>
                </div>

                <div className="flex items-center gap-2 bg-black/30 border border-[#1abc9c]/30 rounded-xl px-4 py-3 mb-4">
                  <span className="flex-1 text-[#1abc9c] font-mono font-bold text-xl tracking-widest">
                    {PROMO_CODE}
                  </span>
                  <button
                    onClick={handleCopy}
                    className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                      copied
                        ? "bg-green-500 text-white"
                        : "bg-[#1abc9c]/20 hover:bg-[#1abc9c]/40 text-[#1abc9c]"
                    }`}
                  >
                    {copied ? <FaCheck /> : <FaCopy />}
                    {copied ? "Tersalin!" : "Salin"}
                  </button>
                </div>

                <p className="text-white/50 text-xs mb-4 text-center">
                  Kirim kode ini ke admin saat order pertama Anda
                </p>

                <a
                  href={`https://wa.me/628131919213?text=${encodeURIComponent(waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <FaWhatsapp className="text-lg" /> Klaim Diskon Sekarang
                </a>
              </div>

              <p className="text-white/40 text-xs text-center max-w-xs">
                *Diskon berlaku untuk pembelian pertama. Konfirmasi ke admin WhatsApp dengan menyertakan kode promo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
