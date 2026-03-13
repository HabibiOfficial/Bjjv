import { FaUserTie, FaHeadset, FaTools, FaComments, FaStar, FaWhatsapp, FaTelegram, FaCircle } from "react-icons/fa";

const admins = [
  {
    icon: FaHeadset,
    title: "Customer Support",
    desc: "Tim support kami siap membantu Anda dalam proses order, konfirmasi pembayaran, dan troubleshooting.",
    contacts: [
      { icon: FaWhatsapp, label: "628131919213", href: "https://wa.me/628131919213" },
      { icon: FaWhatsapp, label: "6285187443525", href: "https://wa.me/6285187443525" },
    ],
  },
  {
    icon: FaTools,
    title: "Technical Support",
    desc: "Tim teknis kami membantu instalasi panel, setting bot, dan troubleshooting teknis lainnya.",
    contacts: [
      { icon: FaTelegram, label: "@habibihosting10", href: "https://t.me/habibihosting10" },
    ],
  },
  {
    icon: FaComments,
    title: "Grup Komunitas",
    desc: "Bergabunglah dengan grup komunitas untuk berbagi pengalaman dan mendapatkan info terbaru.",
    contacts: [
      { icon: FaWhatsapp, label: "Marketplace Habibi Store", href: "https://chat.whatsapp.com/BrS9ir3Ck6oDTK1RA0iGJp" },
    ],
  },
  {
    icon: FaStar,
    title: "Testimoni & Review",
    desc: "Lihat testimoni dari pelanggan kami yang sudah menggunakan layanan Habibi Store.",
    contacts: [
      { icon: FaWhatsapp, label: "Saluran Testimoni", href: "https://whatsapp.com/channel/0029Vb6SDXJDDmFXx0cHwF3f" },
    ],
  },
];

export default function AdminSection() {
  return (
    <section id="admin" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a252f] inline-block relative mb-4">
            👑 Admin & Support
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1abc9c] rounded-full" />
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Tim admin dan support siap membantu Anda 24/7 untuk semua kebutuhan layanan.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#2d3e50] to-[#1a252f] rounded-2xl overflow-hidden shadow-2xl">
          <div className="px-8 py-5 bg-black/20 flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-white text-xl font-bold flex items-center gap-3">
              <FaUserTie className="text-[#1abc9c] text-2xl" />
              Admin Habibi Store
            </h3>
            <div className="flex items-center gap-2 bg-[#1abc9c] text-white text-sm font-semibold px-4 py-2 rounded-full">
              <FaCircle className="text-green-300 text-xs animate-pulse" />
              Online 24/7
            </div>
          </div>

          <div className="p-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {admins.map((admin) => (
              <div
                key={admin.title}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <h4 className="text-[#1abc9c] font-semibold flex items-center gap-2 mb-3">
                  <admin.icon /> {admin.title}
                </h4>
                <p className="text-white/70 text-sm mb-4">{admin.desc}</p>
                {admin.contacts.map((c) => (
                  <a
                    key={c.href}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-[#1abc9c] text-sm transition-colors mb-1"
                  >
                    <c.icon className="text-[#1abc9c] shrink-0" />
                    {c.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
