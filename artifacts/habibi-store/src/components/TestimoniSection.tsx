import { FaStar, FaQuoteLeft, FaWhatsapp } from "react-icons/fa";

const testimonials = [
  {
    name: "Rizki A.",
    avatar: "R",
    color: "bg-[#1abc9c]",
    service: "Panel RAM 5GB",
    rating: 5,
    text: "Panel sangat stabil, sudah pakai lebih dari 3 bulan tidak pernah down. Admin responsif dan cepat kalau ada kendala. Recommended banget!",
    date: "2 hari lalu",
  },
  {
    name: "Farhan D.",
    avatar: "F",
    color: "bg-[#3498db]",
    service: "Bot Jaga Grup – 1 Bulan",
    rating: 5,
    text: "Bot jaga grup keren banget, spammer langsung keban otomatis. Prosesnya cepet, bayar langsung aktif. Pasti order lagi bulan depan.",
    date: "5 hari lalu",
  },
  {
    name: "Bagas P.",
    avatar: "B",
    color: "bg-purple-500",
    service: "Script JPM",
    rating: 5,
    text: "Script JPM tanpa encrypt, bisa modif sesuai kebutuhan. Harga murah tapi kualitas oke. Admin sabar jelasin cara pakainya juga.",
    date: "1 minggu lalu",
  },
  {
    name: "Nanda S.",
    avatar: "N",
    color: "bg-[#e74c3c]",
    service: "TikTok Followers 500",
    rating: 5,
    text: "Order 500 follower TikTok, masuk dalam 30 menit. Tidak drop sama sekali sampai sekarang. Kualitasnya beda dari tempat lain yang pernah saya coba.",
    date: "1 minggu lalu",
  },
  {
    name: "Hendra M.",
    avatar: "H",
    color: "bg-[#f39c12]",
    service: "Panel Unlimited",
    rating: 5,
    text: "Panel unlimited worth it banget buat yang sering ganti-ganti RAM. Server anti DDOS terbukti, pernah kena serangan tapi bot tetap jalan.",
    date: "2 minggu lalu",
  },
  {
    name: "Siti R.",
    avatar: "S",
    color: "bg-pink-500",
    service: "NOKOS WA Indonesia",
    rating: 5,
    text: "NOKOS Indonesia murah, cepat dapet nomornya. Langsung bisa dipake daftar WA. Sudah order 3x, selalu berhasil. Makasih Habibi Store!",
    date: "3 minggu lalu",
  },
];

export default function TestimoniSection() {
  return (
    <section id="testimoni" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1abc9c] bg-[#1abc9c]/10 px-4 py-1 rounded-full mb-3">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a252f] relative inline-block mb-4">
            ⭐ Apa Kata Pelanggan
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1abc9c] rounded-full" />
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Ribuan pelanggan sudah mempercayakan kebutuhan digitalnya kepada Habibi Store.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#1a252f]">3000+</p>
              <p className="text-gray-400 text-xs">Pelanggan</p>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center mb-1">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400 text-sm" />)}
              </div>
              <p className="text-gray-400 text-xs">4.9/5 Rating</p>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="text-center">
              <p className="text-3xl font-bold text-[#1a252f]">99%</p>
              <p className="text-gray-400 text-xs">Kepuasan</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg hover:border-[#1abc9c]/20 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a252f] text-sm">{t.name}</p>
                    <p className="text-[#1abc9c] text-xs font-medium">{t.service}</p>
                  </div>
                </div>
                <FaQuoteLeft className="text-gray-200 text-2xl shrink-0" />
              </div>

              <div className="flex gap-0.5 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1">{t.text}</p>

              <p className="text-gray-400 text-xs mt-4 pt-3 border-t border-gray-100">{t.date}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">Ingin lihat lebih banyak testimoni dari pelanggan nyata?</p>
          <a
            href="https://whatsapp.com/channel/0029Vb6SDXJDDmFXx0cHwF3f"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200"
          >
            <FaWhatsapp /> Lihat Semua Testimoni
          </a>
        </div>
      </div>
    </section>
  );
}
