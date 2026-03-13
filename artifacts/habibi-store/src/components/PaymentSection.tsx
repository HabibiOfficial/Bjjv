import { FaShieldAlt, FaBolt, FaHeadset } from "react-icons/fa";

const banks = [
  { name: "BRI", number: "1234 5678 9012 3456", holder: "Habibi Store", color: "bg-[#00529B]", textColor: "text-white", initial: "BRI" },
  { name: "BCA", number: "1234 5678 90", holder: "Habibi Store", color: "bg-[#005CA9]", textColor: "text-white", initial: "BCA" },
  { name: "Mandiri", number: "1234 5678 9012", holder: "Habibi Store", color: "bg-[#003D79]", textColor: "text-white", initial: "MDR" },
  { name: "BSI", number: "1234 5678 901", holder: "Habibi Store", color: "bg-[#3D8B37]", textColor: "text-white", initial: "BSI" },
];

const ewallets = [
  { name: "GoPay", number: "0813 1919 213", color: "bg-[#00AED6]", emoji: "💙" },
  { name: "OVO", number: "0813 1919 213", color: "bg-[#4C3494]", emoji: "💜" },
  { name: "Dana", number: "0813 1919 213", color: "bg-[#118EEA]", emoji: "💎" },
  { name: "ShopeePay", number: "0813 1919 213", color: "bg-[#EE4D2D]", emoji: "🧡" },
  { name: "QRIS", number: "Scan QR via Admin", color: "bg-[#1a252f]", emoji: "📱" },
];

const notes = [
  "Pembayaran dikonfirmasi maks. 1×24 jam setelah transfer",
  "Simpan bukti bayar dan kirim ke admin WhatsApp",
  "Harga sudah termasuk pajak dan biaya layanan",
  "Tidak ada biaya tambahan setelah konfirmasi harga",
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
            Kami menerima berbagai metode pembayaran untuk kemudahan transaksi Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-[#1a252f] mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
              🏦 Transfer Bank
            </h3>
            <div className="space-y-3">
              {banks.map((bank) => (
                <div key={bank.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className={`w-14 h-10 ${bank.color} rounded-lg flex items-center justify-center shrink-0`}>
                    <span className={`${bank.textColor} font-bold text-xs`}>{bank.initial}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[#1a252f] text-sm">{bank.name}</p>
                    <p className="text-gray-500 text-sm font-mono">{bank.number}</p>
                    <p className="text-gray-400 text-xs">a.n. {bank.holder}</p>
                  </div>
                  <button
                    onClick={() => navigator.clipboard.writeText(bank.number.replace(/\s/g, ""))}
                    className="text-xs text-[#1abc9c] hover:text-[#16a085] font-semibold border border-[#1abc9c]/30 hover:border-[#1abc9c] px-3 py-1.5 rounded-lg transition-all"
                  >
                    Salin
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-[#1a252f] mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
              📱 Dompet Digital & QRIS
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {ewallets.map((ew) => (
                <div key={ew.name} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div className={`w-14 h-10 ${ew.color} rounded-lg flex items-center justify-center shrink-0 text-xl`}>
                    {ew.emoji}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-[#1a252f] text-sm">{ew.name}</p>
                    <p className="text-gray-500 text-sm">{ew.number}</p>
                  </div>
                  {ew.name !== "QRIS" && (
                    <button
                      onClick={() => navigator.clipboard.writeText(ew.number.replace(/\s/g, ""))}
                      className="text-xs text-[#1abc9c] hover:text-[#16a085] font-semibold border border-[#1abc9c]/30 hover:border-[#1abc9c] px-3 py-1.5 rounded-lg transition-all"
                    >
                      Salin
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1a252f] to-[#2d3e50] rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-[#1abc9c] text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
              <FaShieldAlt /> Catatan Penting
            </p>
          </div>
          {notes.map((note, i) => (
            <div key={i} className="flex items-start gap-2 text-white/70 text-xs">
              <span className="text-[#1abc9c] shrink-0 mt-0.5">✓</span>
              {note}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
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
