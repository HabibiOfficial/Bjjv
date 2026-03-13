import { useState } from "react";
import { FaChevronDown, FaWhatsapp } from "react-icons/fa";

const faqs = [
  {
    q: "Berapa lama proses setelah pembayaran dikonfirmasi?",
    a: "Proses berlangsung sangat cepat, biasanya dalam 5–30 menit setelah pembayaran dikonfirmasi oleh admin. Untuk panel, akses diberikan langsung. Untuk sosmed, waktu dapat bervariasi tergantung jenis layanan.",
  },
  {
    q: "Apakah ada garansi untuk setiap layanan?",
    a: "Ya! Setiap layanan memiliki garansi sesuai jenisnya. Panel: garansi uptime server 24 jam. Sosmed (followers/likes/views): garansi tidak drop dalam periode tertentu. Jika ada masalah, hubungi admin dan kami akan bantu selesaikan.",
  },
  {
    q: "Bagaimana jika saya sudah bayar tapi pesanan belum diproses?",
    a: "Segera kirim bukti pembayaran ke admin WhatsApp. Pesanan yang belum diproses lebih dari 1 jam setelah konfirmasi bayar akan diprioritaskan. Admin kami aktif 24 jam untuk membantu.",
  },
  {
    q: "Apakah panel WhatsApp bisa untuk semua jenis bot?",
    a: "Panel Pterodactyl kami support untuk hampir semua jenis bot berbasis Node.js, Python, dan bahasa populer lainnya. Termasuk bot Baileys, WhiskeySockets, dan lainnya. Hubungi admin untuk konfirmasi kompatibilitas script Anda.",
  },
  {
    q: "Apakah script bot dijual dengan garansi bisa dijalankan?",
    a: "Ya, semua script dijual tanpa encrypt dan sudah kami uji berfungsi dengan baik. Tersedia panduan instalasi, dan admin siap membantu setup jika diperlukan (dengan biaya jasa install terpisah).",
  },
  {
    q: "Apa itu NOKOS WhatsApp dan bagaimana cara pakainya?",
    a: "NOKOS (Nomor Kosong) adalah virtual number yang bisa digunakan untuk verifikasi/registrasi akun WhatsApp. Setelah pembelian, Anda akan mendapat nomor beserta kode OTP untuk aktivasi. Proses sangat mudah dan cepat.",
  },
  {
    q: "Apakah layanan sosmed aman untuk akun saya?",
    a: "Layanan sosmed kami menggunakan metode yang aman dan natural untuk menghindari deteksi algoritma platform. Namun untuk keamanan maksimal, hindari membeli dalam jumlah sangat besar sekaligus. Disarankan bertahap.",
  },
  {
    q: "Apakah bisa dicicil atau bayar DP?",
    a: "Saat ini pembayaran dilakukan penuh di awal untuk semua layanan. Tidak ada sistem cicilan atau DP. Namun dengan harga yang sangat terjangkau, hal ini tidak menjadi masalah bagi sebagian besar pelanggan kami.",
  },
  {
    q: "Apakah ada diskon untuk pembelian dalam jumlah banyak?",
    a: "Ya! Kami memiliki program reseller untuk pembelian panel dalam jumlah banyak. Untuk layanan lainnya, hubungi admin langsung untuk negosiasi harga spesial bulk order.",
  },
  {
    q: "Bagaimana jika saya butuh layanan yang tidak ada di daftar?",
    a: "Hubungi admin via WhatsApp atau Telegram. Kami menyediakan banyak layanan yang mungkin belum tercantum di website, termasuk request khusus seperti jasa rename script, jasa unban WA, install panel, dan masih banyak lagi.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden hover:border-[#1abc9c]/30 transition-colors">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-[#1a252f] text-sm pr-4 leading-snug">{q}</span>
        <FaChevronDown
          className={`text-[#1abc9c] shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <p className="px-5 pb-4 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-3">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1abc9c] bg-[#1abc9c]/10 px-4 py-1 rounded-full mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a252f] relative inline-block mb-4">
            ❓ Pertanyaan Umum
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1abc9c] rounded-full" />
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Jawaban untuk pertanyaan yang paling sering ditanyakan oleh pelanggan kami.
          </p>
        </div>

        <div className="space-y-2 mb-10">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#1abc9c] to-[#3498db] rounded-2xl p-6 text-center text-white">
          <p className="font-bold text-lg mb-1">Masih ada pertanyaan lain?</p>
          <p className="text-white/80 text-sm mb-4">Admin kami siap menjawab pertanyaan Anda kapanpun</p>
          <a
            href="https://wa.me/628131919213?text=Halo%2C+saya+ingin+bertanya+tentang+layanan+Habibi+Store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#1abc9c] font-bold py-2.5 px-6 rounded-xl hover:bg-gray-50 transition-all"
          >
            <FaWhatsapp /> Tanya via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
