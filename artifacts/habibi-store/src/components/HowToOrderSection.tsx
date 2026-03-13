import { FaSearch, FaWhatsapp, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    number: "01",
    icon: FaSearch,
    title: "Pilih Layanan",
    desc: "Browse kategori atau gunakan fitur pencarian untuk menemukan layanan yang Anda butuhkan. Cek spesifikasi dan harga.",
    color: "from-[#1abc9c] to-[#3498db]",
  },
  {
    number: "02",
    icon: FaWhatsapp,
    title: "Chat Admin",
    desc: "Hubungi admin via WhatsApp dengan menyebutkan layanan yang dipilih. Admin akan memproses pesanan Anda.",
    color: "from-[#25D366] to-[#128C7E]",
  },
  {
    number: "03",
    icon: FaMoneyBillWave,
    title: "Lakukan Pembayaran",
    desc: "Transfer sesuai nominal ke rekening/e-wallet yang diberikan admin. Simpan bukti bayar Anda.",
    color: "from-[#f39c12] to-[#e74c3c]",
  },
  {
    number: "04",
    icon: FaCheckCircle,
    title: "Konfirmasi & Selesai",
    desc: "Kirim bukti bayar ke admin. Pesanan akan diproses dan dikirimkan dalam waktu singkat.",
    color: "from-[#9b59b6] to-[#3498db]",
  },
];

const formatOrder = `Nama     : [Nama Anda]
Layanan  : [Nama Layanan]
Durasi   : [Durasi/Paket]
Kontak   : [No. WA Aktif]`;

export default function HowToOrderSection() {
  return (
    <section id="cara-order" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1abc9c] bg-[#1abc9c]/10 px-4 py-1 rounded-full mb-3">
            Panduan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a252f] relative inline-block mb-4">
            📋 Cara Order
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1abc9c] rounded-full" />
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Pemesanan mudah dan cepat hanya dalam 4 langkah. Proses otomatis setelah konfirmasi pembayaran.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%-1rem)] w-8 h-0.5 bg-gray-200 z-10" />
                )}
                <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                    <Icon className="text-white text-2xl" />
                  </div>
                  <div className="text-xs font-bold text-gray-300 mb-2 tracking-widest">LANGKAH {step.number}</div>
                  <h3 className="font-bold text-[#1a252f] text-base mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-[#1a252f] to-[#2d3e50] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1">
            <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
              📝 Format Pesan Order
            </h3>
            <p className="text-white/70 text-sm mb-4">
              Kirim format berikut ke WhatsApp admin untuk mempercepat proses:
            </p>
            <pre className="bg-black/30 border border-white/10 rounded-xl px-5 py-4 text-[#1abc9c] text-sm font-mono leading-relaxed whitespace-pre">
              {formatOrder}
            </pre>
          </div>
          <div className="flex flex-col gap-3 md:w-52 w-full shrink-0">
            <p className="text-white/70 text-sm">Siap order? Hubungi admin sekarang:</p>
            <a
              href={`https://wa.me/628131919213?text=${encodeURIComponent("Halo, saya ingin order layanan di Habibi Store\n\nNama     : \nLayanan  : \nDurasi   : \nKontak   : ")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-5 rounded-xl transition-all duration-200"
            >
              <FaWhatsapp className="text-lg" /> Order Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
