import { useState } from "react";
import { FaWhatsapp, FaCheck, FaUsers, FaChartLine, FaHeadset, FaGift, FaShieldAlt, FaStar, FaCalculator } from "react-icons/fa";

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

const calcProducts = [
  { label: "Panel RAM 1GB", modal: 800, jual: 2000 },
  { label: "Panel RAM 5GB", modal: 4000, jual: 7000 },
  { label: "Panel UNLIMITED", modal: 10000, jual: 15000 },
  { label: "Bot Jaga Grup 30 Hari", modal: 25000, jual: 35000 },
  { label: "NOKOS Indonesia", modal: 5500, jual: 8000 },
];

function ResellerCalculator() {
  const [prodIdx, setProdIdx] = useState(0);
  const [qty, setQty] = useState(5);
  const sel = calcProducts[prodIdx];
  const modal = sel.modal * qty;
  const pendapatan = sel.jual * qty;
  const untung = pendapatan - modal;
  const margin = Math.round((untung / pendapatan) * 100);

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <h3 className="text-white font-bold mb-5 flex items-center gap-2">
        <FaCalculator className="text-[#1abc9c]" /> Kalkulator Keuntungan Reseller
      </h3>

      <div className="space-y-4 mb-5">
        <div>
          <label className="text-white/60 text-xs mb-1.5 block">Produk</label>
          <select
            value={prodIdx}
            onChange={(e) => setProdIdx(Number(e.target.value))}
            className="w-full bg-black/30 border border-white/10 text-white rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-[#1abc9c]/50"
          >
            {calcProducts.map((p, i) => (
              <option key={p.label} value={i} className="bg-[#1a252f]">{p.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-white/60 text-xs mb-1.5 block">Jumlah Pelanggan: <span className="text-[#1abc9c] font-bold">{qty} orang</span></label>
          <input
            type="range"
            min={1}
            max={50}
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="w-full accent-[#1abc9c]"
          />
          <div className="flex justify-between text-white/30 text-xs mt-1">
            <span>1</span><span>50</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { label: "Modal", value: `Rp ${modal.toLocaleString("id-ID")}`, color: "text-[#e74c3c]" },
          { label: "Pendapatan", value: `Rp ${pendapatan.toLocaleString("id-ID")}`, color: "text-white" },
          { label: "Keuntungan", value: `Rp ${untung.toLocaleString("id-ID")}`, color: "text-[#1abc9c]" },
        ].map((item) => (
          <div key={item.label} className="bg-black/20 rounded-xl p-3 text-center">
            <p className="text-white/40 text-[10px] mb-1">{item.label}</p>
            <p className={`${item.color} font-bold text-xs`}>{item.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#1abc9c]/10 border border-[#1abc9c]/20 rounded-xl p-3 flex items-center justify-between">
        <span className="text-white/60 text-sm">Margin keuntungan</span>
        <span className="text-[#1abc9c] font-black text-xl">{margin}%</span>
      </div>

      <p className="text-white/30 text-[10px] mt-3 text-center">
        *Estimasi berdasarkan harga rata-rata. Harga reseller aktual diberikan setelah verifikasi.
      </p>
    </div>
  );
}

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-[#1abc9c]">📋</span> Cara Bergabung
            </h3>
            <div className="space-y-5 mb-8">
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

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-5">
              <h4 className="text-white font-bold mb-3 text-sm flex items-center gap-2">
                <span className="text-[#1abc9c]">💰</span> Produk untuk Reseller
              </h4>
              <div className="space-y-2">
                {products.map((p) => (
                  <div key={p.label} className="flex items-start justify-between gap-2 py-2 border-b border-white/5 last:border-0">
                    <div className="flex items-start gap-1.5">
                      <FaCheck className="text-[#1abc9c] shrink-0 mt-0.5 text-[10px]" />
                      <span className="text-white/70 text-xs">{p.label}</span>
                    </div>
                    <span className="text-[#1abc9c] text-[10px] font-semibold shrink-0">{p.harga}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://wa.me/628131919213?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-full justify-center bg-[#25D366] hover:bg-[#128C7E] text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <FaWhatsapp className="text-lg" /> Daftar Reseller Sekarang
            </a>
          </div>

          <div className="lg:col-span-2">
            <ResellerCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}
