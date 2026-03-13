import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const notifications = [
  { name: "Budi S.", city: "Jakarta", product: "Panel RAM 1GB", time: "2 menit" },
  { name: "Rizki A.", city: "Bandung", product: "Bot Jaga Grup 30 Hari", time: "5 menit" },
  { name: "Siti N.", city: "Surabaya", product: "TikTok Likes 1.000", time: "8 menit" },
  { name: "Andi P.", city: "Medan", product: "NOKOS Indonesia", time: "11 menit" },
  { name: "Dewi R.", city: "Yogyakarta", product: "Panel RAM 5GB", time: "14 menit" },
  { name: "Fajar M.", city: "Makassar", product: "Script Bot WhatsApp", time: "3 menit" },
  { name: "Hana L.", city: "Semarang", product: "IG Followers 500", time: "6 menit" },
  { name: "Irfan T.", city: "Palembang", product: "Panel UNLIMITED", time: "9 menit" },
  { name: "Julia K.", city: "Balikpapan", product: "Bot JPM 7 Hari", time: "1 menit" },
  { name: "Kevin O.", city: "Tangerang", product: "WA Channel Subscribers", time: "4 menit" },
];

export default function SocialProofNotif() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      setVisible(true);
    }, 5000);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const show = () => {
      setVisible(true);
      const hide = setTimeout(() => setVisible(false), 4000);
      return hide;
    };

    const hideTimer = setTimeout(() => setVisible(false), 4000);

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % notifications.length);
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    }, 7000);

    return () => {
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, [visible]);

  const notif = notifications[current];

  return (
    <div
      className={`fixed bottom-24 left-4 z-50 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3.5 flex items-center gap-3 max-w-[260px]">
        <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shrink-0 shadow">
          <FaWhatsapp className="text-white text-lg" />
        </div>
        <div className="min-w-0">
          <p className="text-[#1a252f] font-bold text-xs truncate">
            {notif.name} <span className="text-gray-400 font-normal">dari {notif.city}</span>
          </p>
          <p className="text-gray-500 text-xs truncate">
            Baru membeli <span className="text-[#1abc9c] font-semibold">{notif.product}</span>
          </p>
          <p className="text-gray-300 text-[10px] mt-0.5">{notif.time} yang lalu</p>
        </div>
      </div>
    </div>
  );
}
