import { FaStore, FaWhatsapp, FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a252f] text-white py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl font-['Montserrat'] mb-4">
              <FaStore className="text-[#1abc9c] text-2xl" />
              HABIBI<span className="text-[#1abc9c]">STORE</span>
            </div>
            <p className="text-white/60 text-sm mb-4 leading-relaxed">
              Penyedia layanan panel WhatsApp, bot WhatsApp, script, dan jasa sosial media terlengkap dengan harga terjangkau dan kualitas terbaik.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaWhatsapp, href: "https://wa.me/628131919213" },
                { icon: FaTelegram, href: "https://t.me/habibihosting10" },
                { icon: FaInstagram, href: "#" },
                { icon: FaFacebook, href: "#" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-[#1abc9c] rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4 pb-2 border-b border-[#1abc9c] inline-block">Layanan</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              {[
                { label: "Panel WhatsApp", href: "#panel" },
                { label: "Bot WhatsApp", href: "#bot" },
                { label: "Script Bot", href: "#script" },
                { label: "NOKOS WhatsApp", href: "#nokos" },
                { label: "Jasa Sosial Media", href: "#sosmed" },
                { label: "Kontak & Support", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#1abc9c] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4 pb-2 border-b border-[#1abc9c] inline-block">Link Cepat</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              {[
                { label: "Beranda", href: "#home" },
                { label: "Kategori", href: "#categories" },
                { label: "Harga Panel", href: "#panel" },
                { label: "Sewa Bot", href: "#bot" },
                { label: "Sosial Media", href: "#sosmed" },
                { label: "Kontak", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#1abc9c] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base mb-4 pb-2 border-b border-[#1abc9c] inline-block">Informasi</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              {["Syarat & Ketentuan", "Kebijakan Privasi", "Cara Order", "Pembayaran", "Testimoni", "FAQ"].map((label) => (
                <li key={label}>
                  <a href="#contact" className="hover:text-[#1abc9c] transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-white/50 text-sm">
          &copy; {year} HABIBI STORE MARKETPLACE. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
