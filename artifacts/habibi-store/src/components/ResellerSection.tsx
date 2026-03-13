import { FaWhatsapp, FaCheck, FaUsers, FaChartLine, FaHeadset, FaGift, FaShieldAlt, FaStar } from "react-icons/fa";

const benefits = [
  { icon: FaChartLine, title: "Komisi Menarik", desc: "Dapatkan komisi dari setiap penjualan yang berhasil kamu bawa ke Habibi Store." },
  { icon: FaUsers, title: "Harga Reseller Khusus", desc: "Akses harga grosir eksklusif untuk semua produk: panel, bot, script, NOKOS, dan sosmed." },
  { icon: FaHeadset, title: "Dukungan Penuh", desc: "Admin siap membantu kamu dalam melayani pelanggan, mulai dari info produk hingga after-sales." },
  { icon: FaShieldAlt, title: "Produk Berkualitas", desc: "Jual produk terpercaya yang sudah dipakai 3000+ pelanggan, minim komplain, dan reputasi terjaga." },
  { icon: FaGift, title: "Bonus & Reward", desc: "Reseller aktif mendapatkan bonus bulanan, akses produk gratis, dan hadiah spesial dari admin." },
  { icon: FaStar, title: "No Target", desc: "Tidak ada target penjualan bulanan. Jual sesukamu, kapanpun dan dimanapun kamu mau." },
];

const steps = [
  { num: "01", title: "Hubungi Admin", desc: "Chat admin WhatsApp dan beritahu ingin bergabung sebagai reseller Habibi Store." },
  { num: "02", title: "Daftar & Verifikasi", desc: "Admin akan memandu proses pendaftaran dan memberikan akun reseller beserta price list khusus." },
  { num: "03", title: "Mulai Jualan", desc: "Gunakan materi promosi dari kami, jual ke jaringanmu, dan nikmati komisi setiap transaksi." },
];

const products = [
  { label: "Panel WhatsApp", harga: "Rp 800–10.500/bulan" },
  { label: "Sewa Bot (Jaga Grup / Pushkontak / JPM)", harga: "Harga reseller khusus" },
  { label: "Script Bot WhatsApp", harga: "Negosiasi langsung" },
  { label: "NOKOS Virtual Number", harga: "Per-unit diskon khusus" },
  { label: "Layanan Sosial Media", harga: "Harga grosir tersedia" },
];

export default function ResellerSection() {
  const waMsg = "Halo Habibi Store, saya tertarik untuk bergabung sebagai *Reseller*. Mohon info lebih lanjut mengenai program reseller dan price list khususnya. Terima kasih!";

  return (
    <section id="reseller" className="py-20 bg-gradient-to-b from-[#1a252f] to-[#0f1a23] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1abc9c] bg-[#1abc9c]/10 px-4 py-1 rounded-full mb-3">
            Program Mitra
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white relative inline-block mb-4">
            🤝 Jadi Reseller Habibi Store
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1abc9c] rounded-full" />
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto leading-relaxed">
            Bergabunglah sebagai mitra reseller dan raih penghasilan tambahan dengan menjual layanan digital terlengkap dari Habibi Store. Daftar gratis, harga khusus, support penuh!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#1abc9c]/30 rounded-2xl p-5 transition-all duration-200 group"
            >
              <div className="w-11 h-11 bg-[#1abc9c]/20 group-hover:bg-[#1abc9c]/30 rounded-xl flex items-center justify-center mb-4 transition-all">
                <b.icon className="text-[#1abc9c] text-lg" />
              </div>
              <h3 className="text-white font-bold mb-2">{b.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#1abc9c]">📋</span> Cara Bergabung
            </h3>
            <div className="space-y-5">
              {steps.map((s) => (
                <div key={s.num} className="flex gap-4 group">
                  <div className="w-12 h-12 bg-[#1abc9c]/20 group-hover:bg-[#1abc9c]/30 rounded-2xl flex items-center justify-center shrink-0 transition-all border border-[#1abc9c]/20">
                    <span className="text-[#1abc9c] font-black text-sm">{s.num}</span>
                  </div>
                  <div className="pt-1">
                    <p className="text-white font-semibold mb-1">{s.title}</p>
                    <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/628131919213?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-lg" /> Daftar Reseller Sekarang
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <span className="text-[#1abc9c]">💰</span> Produk Tersedia untuk Reseller
            </h3>
            <div className="space-y-3 mb-6">
              {products.map((p) => (
                <div key={p.label} className="flex items-start justify-between gap-3 py-3 border-b border-white/5 last:border-0">
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-[#1abc9c] shrink-0 mt-0.5 text-xs" />
                    <span className="text-white/80 text-sm">{p.label}</span>
                  </div>
                  <span className="text-[#1abc9c] text-xs font-semibold shrink-0 text-right">{p.harga}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#1abc9c]/10 border border-[#1abc9c]/20 rounded-xl p-4 text-center">
              <p className="text-[#1abc9c] text-sm font-semibold mb-1">🎁 Bergabung Sekarang — Gratis!</p>
              <p className="text-white/50 text-xs">
                Tidak ada biaya pendaftaran. Price list khusus reseller dikirim setelah verifikasi oleh admin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
