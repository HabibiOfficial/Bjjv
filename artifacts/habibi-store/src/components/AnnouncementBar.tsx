import { FaBolt } from "react-icons/fa";

const items = [
  "🔥 Panel RAM 1GB hanya Rp 1.000!",
  "⚡ Bot Jaga Grup mulai Rp 2.000/hari",
  "🎯 Script Bot TANPA ENCRYPT — Bisa Dimodifikasi",
  "🌏 NOKOS WhatsApp Indonesia mulai Rp 7.000",
  "💫 TikTok Likes 1.000 hanya Rp 2.000",
  "🤖 Sewa Bot JPM mulai Rp 5.000",
  "📢 Panel Unlimited hanya Rp 12.000!",
  "⭐ 3000+ Pelanggan Puas — Bergabung Sekarang!",
];

export default function AnnouncementBar() {
  const text = items.join("   •   ");

  return (
    <div className="fixed top-0 left-0 w-full z-[60] bg-[#1abc9c] text-white text-xs font-semibold py-2 overflow-hidden whitespace-nowrap">
      <div className="flex items-center gap-3 animate-[marquee_30s_linear_infinite]">
        <FaBolt className="shrink-0 ml-4" />
        <span>{text}</span>
        <FaBolt className="shrink-0" />
        <span>{text}</span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
