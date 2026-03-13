import { FaServer, FaRobot, FaCode, FaPhone, FaHashtag, FaUserPlus, FaCogs } from "react-icons/fa";
import { categories } from "@/data/products";

const iconMap: Record<string, React.ElementType> = {
  server: FaServer,
  robot: FaRobot,
  code: FaCode,
  phone: FaPhone,
  hashtag: FaHashtag,
  "user-plus": FaUserPlus,
  cogs: FaCogs,
};

export default function CategorySection() {
  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a252f] inline-block relative mb-4">
            Kategori Layanan
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#1abc9c] rounded-full" />
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">Pilih kategori layanan yang Anda butuhkan</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || FaCogs;
            return (
              <a
                key={cat.id}
                href={`#${cat.id === 'other' ? 'admin' : cat.id}`}
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1abc9c] to-[#3498db] rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="text-white text-xl" />
                </div>
                <h3 className="font-semibold text-[#1a252f] text-sm mb-1">{cat.name}</h3>
                <p className="text-gray-400 text-xs mb-2 hidden lg:block line-clamp-2">{cat.desc}</p>
                <span className="bg-[#1abc9c] text-white text-xs font-semibold px-3 py-1 rounded-full">{cat.count}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
