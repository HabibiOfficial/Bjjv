import { FaPhoneAlt, FaTelegram, FaUsers, FaStar, FaWhatsapp, FaPaperPlane } from "react-icons/fa";

const contactItems = [
  {
    icon: FaPhoneAlt,
    title: "Telepon / WhatsApp",
    items: [
      { label: "628131919213 (Nomor Utama)", href: "https://wa.me/628131919213" },
      { label: "6285187443525 (Nomor Cadangan)", href: "https://wa.me/6285187443525" },
    ],
  },
  {
    icon: FaTelegram,
    title: "Telegram",
    items: [{ label: "t.me/habibihosting10", href: "https://t.me/habibihosting10" }],
  },
  {
    icon: FaUsers,
    title: "Grup WhatsApp",
    items: [{ label: "Marketplace Habibi Store", href: "https://chat.whatsapp.com/BrS9ir3Ck6oDTK1RA0iGJp" }],
  },
  {
    icon: FaStar,
    title: "Testimoni",
    items: [{ label: "Saluran Testimoni", href: "https://whatsapp.com/channel/0029Vb6SDXJDDmFXx0cHwF3f" }],
  },
];

const otherServices = [
  "Panel RAM 1GB - Unlimited",
  "Reseller Panel",
  "VPS Digital Ocean",
  "Jual Script Bot WhatsApp",
  "NOKOS WhatsApp All Negara",
  "Jasa Install Panel",
  "Suntik All Sosmed",
  "Jasa Setting CPanel",
  "Jasa Rename Script",
  "Jasa Bikin Website Payment",
  "Jasa Unban WA Spam / Permanen",
  "Jasa Run Bot",
  "All Aplikasi Premium",
  "Jasa Up Dana Premium",
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a252f] inline-block relative mb-4">
            📞 Hubungi Kami
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1abc9c] rounded-full" />
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Pesan layanan sekarang melalui kontak di bawah ini atau kunjungi grup WhatsApp kami.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            {contactItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 bg-[#1abc9c] rounded-full flex items-center justify-center">
                  <item.icon className="text-white text-lg" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a252f] mb-1">{item.title}</h4>
                  {item.items.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-gray-500 hover:text-[#1abc9c] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="w-14 h-14 bg-gradient-to-br from-[#1abc9c] to-[#3498db] rounded-full flex items-center justify-center mb-4">
              <FaPaperPlane className="text-white text-xl" />
            </div>
            <h3 className="text-xl font-bold text-[#1a252f] mb-2">Layanan Lainnya</h3>
            <p className="text-gray-500 text-sm mb-4">Kami juga menyediakan berbagai layanan digital lainnya:</p>
            <ul className="grid grid-cols-2 gap-1 mb-6">
              {otherServices.map((s) => (
                <li key={s} className="flex items-center gap-2 text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-[#1abc9c] rounded-full shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/628131919213"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#1abc9c] hover:bg-[#16a085] text-white font-semibold py-3 rounded-xl transition-all duration-200"
            >
              <FaWhatsapp /> Tanya Layanan Lain
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
