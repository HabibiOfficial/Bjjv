import { FaCheck, FaTimes, FaWhatsapp } from "react-icons/fa";

const plans = [
  {
    name: "RAM 1GB",
    price: "Rp 1.000",
    badge: "TERLARIS",
    badgeColor: "bg-[#e74c3c]",
    highlight: false,
  },
  {
    name: "RAM 5GB",
    price: "Rp 5.000",
    badge: "POPULER",
    badgeColor: "bg-[#1abc9c]",
    highlight: true,
  },
  {
    name: "UNLIMITED",
    price: "Rp 12.000",
    badge: "PREMIUM",
    badgeColor: "bg-yellow-400 text-[#1a252f]",
    highlight: false,
  },
  {
    name: "RESELLER",
    price: "Rp 15.000",
    badge: "MITRA",
    badgeColor: "bg-violet-500",
    highlight: false,
  },
];

const features = [
  { label: "Server 24 Jam Online", values: [true, true, true, true] },
  { label: "Anti Delete / Anti Rusuh", values: [true, true, true, true] },
  { label: "Anti Maling Script", values: [true, true, true, true] },
  { label: "Anti DDOS Protection", values: [true, true, true, true] },
  { label: "Tidak Boros Kuota", values: [true, true, true, true] },
  { label: "Priority Support", values: [false, true, true, true] },
  { label: "RAM Tidak Terbatas", values: [false, false, true, true] },
  { label: "Premium Support 24/7", values: [false, false, true, true] },
  { label: "Dashboard Reseller", values: [false, false, false, true] },
  { label: "Harga Jual Kembali", values: [false, false, false, true] },
];

export default function CompareSection() {
  return (
    <section id="compare" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#1abc9c] bg-[#1abc9c]/10 px-4 py-1 rounded-full mb-3">
            Perbandingan Paket
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a252f] relative inline-block mb-4">
            📊 Bandingkan Paket Panel
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1abc9c] rounded-full" />
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Pilih paket yang paling sesuai dengan kebutuhan dan budget kamu.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl shadow-xl border border-gray-100 bg-white">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left p-5 text-gray-400 text-sm font-semibold w-44">Fitur</th>
                {plans.map((plan) => (
                  <th key={plan.name} className={`p-5 text-center ${plan.highlight ? "bg-[#1abc9c]/5" : ""}`}>
                    <div className="flex flex-col items-center gap-1.5">
                      <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full text-white ${plan.badgeColor}`}>
                        {plan.badge}
                      </span>
                      <span className="text-[#1a252f] font-black text-sm">{plan.name}</span>
                      <span className="text-[#e74c3c] font-bold text-lg">{plan.price}</span>
                      <span className="text-gray-400 text-[10px]">/bulan</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feat, fi) => (
                <tr
                  key={feat.label}
                  className={`border-b border-gray-50 hover:bg-gray-50/50 transition-colors ${fi % 2 === 0 ? "" : "bg-gray-50/30"}`}
                >
                  <td className="p-4 pl-5 text-gray-600 text-sm font-medium">{feat.label}</td>
                  {feat.values.map((val, vi) => (
                    <td key={vi} className={`p-4 text-center ${plans[vi].highlight ? "bg-[#1abc9c]/5" : ""}`}>
                      {val ? (
                        <FaCheck className="text-[#1abc9c] mx-auto text-base" />
                      ) : (
                        <FaTimes className="text-gray-200 mx-auto text-base" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-5" />
                {plans.map((plan) => (
                  <td key={plan.name} className={`p-4 text-center ${plan.highlight ? "bg-[#1abc9c]/5" : ""}`}>
                    <a
                      href={`https://wa.me/628131919213?text=${encodeURIComponent(`Halo, saya ingin beli Panel ${plan.name} - ${plan.price}/bulan`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-1.5 text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                        plan.highlight
                          ? "bg-[#1abc9c] hover:bg-[#16a085] text-white shadow-md"
                          : "bg-gray-100 hover:bg-gray-200 text-[#1a252f]"
                      }`}
                    >
                      <FaWhatsapp /> Pilih
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
