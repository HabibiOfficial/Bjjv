import { FaWhatsapp, FaTelegram, FaStar, FaCircle, FaHeadset, FaTools, FaCheckCircle } from "react-icons/fa";

const contacts = [
  {
    icon: FaWhatsapp,
    color: "bg-[#25D366]",
    label: "WhatsApp Utama",
    value: "628131919213",
    href: "https://wa.me/628131919213?text=Halo+Habibi+Store%2C+saya+ingin+order",
    badge: "Aktif 24/7",
  },
  {
    icon: FaTelegram,
    color: "bg-[#229ED9]",
    label: "Telegram",
    value: "@habibihosting10",
    href: "https://t.me/habibihosting10",
    badge: null,
  },
  {
    icon: FaStar,
    color: "bg-yellow-400",
    label: "Saluran Testimoni",
    value: "Lihat Review",
    href: "https://whatsapp.com/channel/0029Vb6SDXJDDmFXx0cHwF3f",
    badge: null,
  },
];

const supports = [
  {
    icon: FaHeadset,
    title: "Customer Support",
    desc: "Bantu proses order, konfirmasi pembayaran, dan kendala umum.",
    contact: { label: "628131919213", href: "https://wa.me/628131919213" },
  },
  {
    icon: FaTools,
    title: "Technical Support",
    desc: "Instalasi panel, setting bot, rename script, dan troubleshooting teknis.",
    contact: { label: "@habibihosting10", href: "https://t.me/habibihosting10" },
  },
];

const otherServices = [
  "Panel RAM 1GB - Unlimited",
  "Reseller Panel",
  "VPS Digital Ocean",
  "Jual Script Bot WhatsApp",
  "NOKOS WhatsApp All Negara",
  "Jasa Install Panel Pterodactyl",
  "Suntik All Sosmed",
  "Jasa Setting CPanel",
  "Jasa Rename SC / Script",
  "Jasa Bikin Website Payment",
  "Jasa Unban WA Spam / Permanen",
  "Jasa Run Bot",
  "All Aplikasi Premium",
  "Jasa Up Dana Premium",
];

export default function KontakSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1abc9c] bg-[#1abc9c]/10 px-4 py-1 rounded-full mb-3">
            Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a252f] relative inline-block mb-4">
            📞 Kontak & Support
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1abc9c] rounded-full" />
          </h2>
          <div className="flex items-center justify-center gap-2 mt-5">
            <FaCircle className="text-green-400 text-xs animate-pulse" />
            <span className="text-sm font-semibold text-gray-600">Admin Online 24/7 · Respon Cepat</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-3">
            <h3 className="font-bold text-[#1a252f] text-sm uppercase tracking-wider mb-4">Kontak Langsung</h3>
            {contacts.map((c) => (
              <a
                key={c.href}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md border border-gray-100 hover:border-[#1abc9c]/40 transition-all duration-200 group"
              >
                <div className={`w-9 h-9 ${c.color} rounded-full flex items-center justify-center shrink-0`}>
                  <c.icon className="text-white text-sm" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-400">{c.label}</p>
                  <p className="font-semibold text-[#1a252f] text-sm truncate group-hover:text-[#1abc9c] transition-colors">{c.value}</p>
                </div>
                {c.badge && (
                  <span className="shrink-0 text-xs bg-green-100 text-green-600 font-semibold px-2 py-0.5 rounded-full">
                    {c.badge}
                  </span>
                )}
              </a>
            ))}

            <div className="pt-4 grid grid-cols-2 gap-3">
              {supports.map((s) => (
                <a
                  key={s.title}
                  href={s.contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-[#1a252f] to-[#2d3e50] rounded-xl p-4 hover:opacity-90 transition-opacity"
                >
                  <s.icon className="text-[#1abc9c] text-xl mb-2" />
                  <p className="text-white font-semibold text-sm">{s.title}</p>
                  <p className="text-white/60 text-xs mt-1">{s.desc}</p>
                  <p className="text-[#1abc9c] text-xs font-semibold mt-2">{s.contact.label}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-[#1a252f] to-[#2d3e50] px-6 py-4 flex items-center justify-between">
              <h3 className="text-white font-bold flex items-center gap-2">
                ✅ Layanan Tersedia
              </h3>
              <span className="text-xs text-white/60">{otherServices.length} layanan</span>
            </div>
            <div className="p-6">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {otherServices.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-gray-600 text-sm">
                    <FaCheckCircle className="text-[#1abc9c] shrink-0 text-sm mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                <a
                  href="https://wa.me/628131919213?text=Halo+Habibi+Store%2C+saya+ingin+order+layanan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 rounded-xl transition-all duration-200"
                >
                  <FaWhatsapp /> Order via WhatsApp
                </a>
                <a
                  href="https://t.me/habibihosting10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#229ED9] hover:bg-[#1a7aab] text-white font-semibold py-3 rounded-xl transition-all duration-200"
                >
                  <FaTelegram /> Hubungi via Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
