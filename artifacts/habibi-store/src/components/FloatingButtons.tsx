import { useState, useEffect } from "react";
import { FaWhatsapp, FaChevronUp } from "react-icons/fa";

function isAdminOnline(): boolean {
  const now = new Date();
  const jakartaOffset = 7 * 60;
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const jakarta = new Date(utc + jakartaOffset * 60000);
  const hour = jakarta.getHours();
  return hour >= 8 && hour < 23;
}

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  const [online, setOnline] = useState(isAdminOnline());

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    const tick = setInterval(() => setOnline(isAdminOnline()), 60000);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(tick);
    };
  }, []);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Kembali ke atas"
            className="w-11 h-11 bg-[#1a252f] hover:bg-[#2d3e50] text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <FaChevronUp />
          </button>
        )}

        <div className="relative group">
          <a
            href="https://wa.me/628131919213"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat WhatsApp Admin"
            className="w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
          >
            <FaWhatsapp />
          </a>

          <span
            className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
              online ? "bg-green-400" : "bg-gray-400"
            }`}
          >
            {online && (
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
            )}
          </span>

          <div className="absolute bottom-full right-0 mb-2 hidden group-hover:flex flex-col items-end gap-1 pointer-events-none">
            <div className="bg-[#1a252f] text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap">
              {online ? "✅ Admin Online — Chat Sekarang!" : "🕐 Admin Offline (08:00–23:00 WIB)"}
            </div>
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#1a252f] mr-5" />
          </div>
        </div>
      </div>
    </>
  );
}
