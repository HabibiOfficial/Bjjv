import { useState } from "react";
import { FaChartLine, FaTimes } from "react-icons/fa";

interface SalesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const summaryData = [
  { label: "Total Pendapatan", value: "Rp 8.450.000", color: "text-[#1abc9c]" },
  { label: "Total Transaksi", value: "1.247", color: "text-[#1a252f]" },
  { label: "Produk Terjual", value: "3.892", color: "text-[#1a252f]" },
  { label: "Pelanggan Aktif", value: "847", color: "text-[#1a252f]" },
];

const monthData = [
  { label: "Panel WhatsApp", value: "Rp 3.250.000" },
  { label: "Sewa Bot", value: "Rp 2.180.000" },
  { label: "Jasa Sosmed", value: "Rp 1.870.000" },
  { label: "JPM & Lainnya", value: "Rp 1.150.000" },
];

const transactions = [
  { id: "TRX-2024-001", product: "Panel RAM 5GB", customer: "Andi Wijaya", date: "15 Mar 2024", status: "completed", total: "Rp 5.000" },
  { id: "TRX-2024-002", product: "Bot Jaga Grup 1 Bulan", customer: "Sari Dewi", date: "14 Mar 2024", status: "completed", total: "Rp 30.000" },
  { id: "TRX-2024-003", product: "JPM 500 Member", customer: "Budi Santoso", date: "14 Mar 2024", status: "pending", total: "Rp 45.000" },
  { id: "TRX-2024-004", product: "1000 Like TikTok", customer: "Dian Putri", date: "13 Mar 2024", status: "processing", total: "Rp 1.000" },
];

const statusStyle: Record<string, string> = {
  completed: "bg-green-100 text-green-700",
  pending: "bg-yellow-100 text-yellow-700",
  processing: "bg-blue-100 text-blue-700",
};

const statusLabel: Record<string, string> = {
  completed: "Selesai",
  pending: "Pending",
  processing: "Proses",
};

export default function SalesModal({ isOpen, onClose }: SalesModalProps) {
  const [tab, setTab] = useState("summary");

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/70 z-[2001]" onClick={onClose} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-3xl max-h-[85vh] bg-white rounded-2xl shadow-2xl z-[2002] flex flex-col">
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <h3 className="text-lg font-bold text-[#1a252f] flex items-center gap-2">
            <FaChartLine className="text-[#1abc9c]" />
            Daftar Penjualan & Riwayat
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors text-lg">
            <FaTimes />
          </button>
        </div>

        <div className="flex border-b border-gray-100 px-6 overflow-x-auto">
          {[
            { id: "summary", label: "Ringkasan" },
            { id: "transactions", label: "Transaksi" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-5 py-3 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${
                tab === t.id
                  ? "text-[#1abc9c] border-[#1abc9c]"
                  : "text-gray-500 border-transparent hover:text-gray-700"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {tab === "summary" && (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {summaryData.map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-gray-500 text-xs mb-2">{s.label}</p>
                    <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
                  </div>
                ))}
              </div>
              <h4 className="font-semibold text-[#1a252f] mb-3">Penjualan Bulan Ini</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {monthData.map((s) => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center">
                    <p className="text-gray-500 text-xs mb-2">{s.label}</p>
                    <p className="text-lg font-bold text-[#1abc9c]">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "transactions" && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 font-semibold text-[#1a252f] rounded-l-lg">ID</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1a252f]">Produk</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1a252f] hidden md:table-cell">Pelanggan</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1a252f] hidden sm:table-cell">Tanggal</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1a252f]">Status</th>
                    <th className="text-left px-4 py-3 font-semibold text-[#1a252f] rounded-r-lg">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {transactions.map((t) => (
                    <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-gray-500 text-xs">{t.id}</td>
                      <td className="px-4 py-3 font-medium text-[#1a252f]">{t.product}</td>
                      <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{t.customer}</td>
                      <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{t.date}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${statusStyle[t.status]}`}>
                          {statusLabel[t.status]}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-semibold text-[#e74c3c]">{t.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
