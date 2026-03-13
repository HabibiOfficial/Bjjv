import { FaServer, FaRobot, FaUsers, FaThumbsUp } from "react-icons/fa";

const stats = [
  { icon: FaServer, value: "500+", label: "Panel Terjual" },
  { icon: FaRobot, value: "1200+", label: "Bot Disewa" },
  { icon: FaUsers, value: "3000+", label: "Pelanggan" },
  { icon: FaThumbsUp, value: "99%", label: "Kepuasan Pelanggan" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#1a252f] py-10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <stat.icon className="text-[#1abc9c] text-4xl mb-1" />
              <span className="text-white text-3xl font-bold">{stat.value}</span>
              <span className="text-white/60 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
