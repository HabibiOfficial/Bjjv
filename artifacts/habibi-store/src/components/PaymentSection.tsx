import { FaShieldAlt, FaBolt, FaHeadset, FaWhatsapp } from "react-icons/fa";

const banks = [
  { name: "BRI", color: "bg-[#00529B]", initial: "BRI", desc: "Bank Rakyat Indonesia" },
  { name: "BCA", color: "bg-[#005CA9]", initial: "BCA", desc: "Bank Central Asia" },
  { name: "Mandiri", color: "bg-[#003D79]", initial: "MDR", desc: "Bank Mandiri" },
  { name: "BSI", color: "bg-[#3D8B37]", initial: "BSI", desc: "Bank Syariah Indonesia" },
  { name: "BNI", color: "bg-[#FF6600]", initial: "BNI", desc: "Bank Negara Indonesia" },
];

const ewallets = [
  { name: "GoPay", emoji: "💙", color: "bg-[#00AED6]" },
  { name: "OVO", emoji: "💜", color: "bg-[#4C3494]" },
  { name: "Dana", emoji: "💎", color: "bg-[#118EEA]" },
  { name: "ShopeePay", emoji: "🧡", color: "bg-[#EE4D2D]" },
  { name: "LinkAja", emoji: "❤️", color: "bg-[#E82529]" },
  { name: "QRIS", emoji: "📱", color: "bg-[#1a252f]" },
];

const notes = [
  "Konfirmasi pembayaran maks. 1×24 jam setelah transfer",
  "Simpan bukti bayar dan kirim ke admin WhatsApp",
  "Harga sudah termasuk semua biaya layanan",
  "Tidak ada biaya tersembunyi setelah konfirmasi harga",
];

export default function PaymentSection() {
  return (
    <section id="pembayaran" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1abc9c] bg-[#1abc9c]/10 px-4 py-1 rounded-full mb-3">
            Pembayaran
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a252f] relative inline-block mb-4">
            💳 Metode Pembayaran
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1abc9c] rounded-full" />
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Kami menerima berbagai metode pembayaran. Hubungi admin untuk detail nomor rekening setelah order.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-[#1a252f] mb-4 text-sm uppercase tracking-wider">🏦 Transfer Bank</h3>
            <div className="grid grid-cols-1 gap-3">
              {banks.map((bank) => (
                <div key={bank.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-4 hover:shadow-md hover:border-[#1abc9c]/20 transition-all">
                  <div className={`w-14 h-10 ${bank.color} rounded-lg flex items-center justify-center shrink-0`}>
                    <span className="text-white font-bold text-xs">{bank.initial}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[#1a252f] text-sm">{bank.name}</p>
                    <p className="text-gray-400 text-xs">{bank.desc}</p>
                  </div>
                  <span className="text-xs bg-green-50 text-green-600 font-semibold px-2.5 py-1 rounded-full border border-green-100">
                    Tersedia
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#1a252f] mb-4 text-sm uppercase tracking-wider">📱 Dompet Digital & QRIS</h3>
            <div className="grid grid-cols-2 gap-3">
              {ewallets.map((ew) => (
                <div key={ew.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-3 hover:shadow-md hover:border-[#1abc9c]/20 transition-all">
                  <div className={`w-10 h-10 ${ew.color} rounded-xl flex items-center justify-center shrink-0 text-xl`}>
                    {ew.emoji}
                  </div>
                  <div>
                    <p className="font-bold text-[#1a252f] text-sm">{ew.name}</p>
                    <span className="text-xs bg-green-50 text-green-600 font-semibold px-2 py-0.5 rounded-full border border-green-100">
                      Aktif
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-[#1a252f] rounded-xl p-4 flex items-start gap-3">
              <span className="text-2xl shrink-0">💬</span>
              <div>
                <p className="text-white font-semibold text-sm">Butuh nomor rekening?</p>
                <p className="text-white/60 text-xs mt-0.5 mb-3">
                  Nomor rekening & e-wallet diberikan admin setelah order dikonfirmasi.
                </p>
                <a
                  href="https://wa.me/628131919213?text=Halo%2C+saya+ingin+tanya+nomor+rekening+untuk+pembayaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs font-semibold px-3 py-2 rounded-lg transition-all"
                >
                  <FaWhatsapp /> Tanya via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1a252f] to-[#2d3e50] rounded-2xl p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="lg:col-span-1 flex items-center gap-2">
            <FaShieldAlt className="text-[#1abc9c] shrink-0" />
            <p className="text-[#1abc9c] text-xs font-bold uppercase tracking-wider">Catatan Penting</p>
          </div>
          {notes.map((note, i) => (
            <div key={i} className="flex items-start gap-2 text-white/70 text-xs">
              <span className="text-[#1abc9c] shrink-0 mt-0.5">✓</span>
              {note}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: FaShieldAlt, title: "Transaksi Aman", desc: "Setiap pembayaran terjamin keamanannya" },
            { icon: FaBolt, title: "Proses Cepat", desc: "Pesanan diproses setelah konfirmasi bayar" },
            { icon: FaHeadset, title: "Support 24/7", desc: "Admin siap membantu kapanpun Anda butuh" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-4 flex items-center gap-3 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-[#1abc9c]/10 rounded-full flex items-center justify-center shrink-0">
                <item.icon className="text-[#1abc9c]" />
              </div>
              <div>
                <p className="font-semibold text-[#1a252f] text-sm">{item.title}</p>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
