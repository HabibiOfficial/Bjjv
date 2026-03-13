import { useEffect, useState } from "react";
import { FaWhatsapp, FaTimes, FaCopy, FaCheck, FaGift } from "react-icons/fa";

const STORAGE_KEY = "habibi_welcome_seen";
const PROMO_CODE = "NEWHABIBI20";

export default function WelcomeModal() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      const t = setTimeout(() => setOpen(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const waMsg = `Halo Habibi Store! Saya pengguna baru dan ingin menggunakan kode promo *${PROMO_CODE}* untuk diskon 20% 🎉`;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-[#1a252f] rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-[fadeInScale_0.3s_ease]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1abc9c] via-teal-300 to-[#1abc9c]" />

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all"
        >
          <FaTimes className="text-xs" />
        </button>

        <div className="p-8">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-20 h-20 bg-[#1abc9c]/20 rounded-3xl flex items-center justify-center mb-4">
              <FaGift className="text-[#1abc9c] text-4xl" />
            </div>
            <p className="text-[#1abc9c] text-xs font-bold uppercase tracking-widest mb-2">Selamat Datang!</p>
            <h2 className="text-2xl font-black text-white mb-2">
              Dapatkan Diskon <span className="text-[#1abc9c]">20%</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Khusus untuk kamu yang pertama kali belanja di Habibi Store — gunakan kode promo berikut!
            </p>
          </div>

          <div className="flex items-center gap-2 bg-black/30 border border-[#1abc9c]/30 rounded-xl px-4 py-3 mb-4">
            <span className="flex-1 text-[#1abc9c] font-mono font-black text-xl tracking-widest">
              {PROMO_CODE}
            </span>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all ${
                copied ? "bg-green-500 text-white" : "bg-[#1abc9c]/20 hover:bg-[#1abc9c]/40 text-[#1abc9c]"
              }`}
            >
              {copied ? <FaCheck /> : <FaCopy />}
              {copied ? "Tersalin!" : "Salin"}
            </button>
          </div>

          <a
            href={`https://wa.me/628131919213?text=${encodeURIComponent(waMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl mb-3"
          >
            <FaWhatsapp className="text-lg" /> Klaim Diskon via WhatsApp
          </a>

          <button
            onClick={handleClose}
            className="w-full text-white/40 hover:text-white/60 text-xs py-2 transition-colors"
          >
            Tidak, terima kasih
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
