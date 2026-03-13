import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaWhatsapp, FaRobot, FaThumbsUp } from "react-icons/fa";

const slides = [
  {
    gradient: "from-[#0f2027] via-[#1a3a2e] to-[#1a252f]",
    accent: "#1abc9c",
    badge: "⚡ SERVER 24 JAM",
    title: "Panel WhatsApp\nTerlengkap",
    desc: "Hosting bot WhatsApp dengan spesifikasi RAM berbeda-beda. Anti delete, anti maling script, tidak boros kuota, dan anti DDOS.",
    cta: "Lihat Panel",
    href: "#panel",
    icon: FaWhatsapp,
    decoration: [
      { size: "w-64 h-64", pos: "-top-16 -right-16", opacity: "opacity-[0.06]" },
      { size: "w-40 h-40", pos: "bottom-8 right-32", opacity: "opacity-[0.04]" },
      { size: "w-20 h-20", pos: "top-12 left-8", opacity: "opacity-[0.05]" },
    ],
    pills: ["RAM 1GB – 12GB", "Anti DDOS", "Mulai Rp 1.000"],
  },
  {
    gradient: "from-[#0d1f2d] via-[#1a2a3e] to-[#1a252f]",
    accent: "#3b82f6",
    badge: "🤖 3 JENIS BOT",
    title: "Bot WhatsApp\nPremium",
    desc: "Sewa bot untuk jaga grup, pushkontak, dan JPM. Fitur lengkap, harga terjangkau, bisa custom sesuai kebutuhan kamu.",
    cta: "Sewa Bot",
    href: "#bot",
    icon: FaRobot,
    decoration: [
      { size: "w-64 h-64", pos: "-top-16 -right-16", opacity: "opacity-[0.07]" },
      { size: "w-32 h-32", pos: "bottom-6 right-20", opacity: "opacity-[0.04]" },
      { size: "w-16 h-16", pos: "top-16 left-12", opacity: "opacity-[0.05]" },
    ],
    pills: ["Jaga Grup", "Pushkontak", "Bot JPM"],
  },
  {
    gradient: "from-[#1a0a2e] via-[#2d1a3e] to-[#1a252f]",
    accent: "#a855f7",
    badge: "📱 TIKTOK • IG • WA",
    title: "Jasa Sosial Media\nMurah & Cepat",
    desc: "Tingkatkan engagement akun sosmed kamu dengan layanan likes, views, followers, dan subscribers berkualitas tinggi.",
    cta: "Lihat Layanan",
    href: "#sosmed",
    icon: FaThumbsUp,
    decoration: [
      { size: "w-64 h-64", pos: "-top-16 -right-16", opacity: "opacity-[0.07]" },
      { size: "w-36 h-36", pos: "bottom-4 right-24", opacity: "opacity-[0.04]" },
      { size: "w-20 h-20", pos: "top-10 left-6", opacity: "opacity-[0.05]" },
    ],
    pills: ["TikTok Likes", "IG Followers", "WA Channel"],
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="home" className="relative mt-[92px] h-[480px] sm:h-[520px] lg:h-[580px] overflow-hidden rounded-b-2xl shadow-2xl">
      {slides.map((slide, i) => {
        const Icon = slide.icon;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {slide.decoration.map((d, di) => (
                <Icon
                  key={di}
                  className={`absolute ${d.size} ${d.pos} ${d.opacity} text-white`}
                />
              ))}
              <div className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 80% 50%, ${slide.accent}15 0%, transparent 60%)`,
                }}
              />
              {[...Array(6)].map((_, gi) => (
                <div
                  key={gi}
                  className="absolute rounded-full border border-white/5"
                  style={{
                    width: `${120 + gi * 60}px`,
                    height: `${120 + gi * 60}px`,
                    right: `${-30 + gi * 10}px`,
                    top: `50%`,
                    transform: "translateY(-50%)",
                  }}
                />
              ))}
            </div>

            <div className="relative h-full flex items-center">
              <div className="text-white max-w-2xl px-8 lg:px-16">
                <div
                  className="inline-block text-xs font-black px-3 py-1 rounded-full mb-4 tracking-widest"
                  style={{ backgroundColor: `${slide.accent}25`, color: slide.accent, border: `1px solid ${slide.accent}40` }}
                >
                  {slide.badge}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight whitespace-pre-line">
                  {slide.title.split("\n").map((line, li) => (
                    <span key={li}>
                      {li === 1 ? <span style={{ color: slide.accent }}>{line}</span> : line}
                      {li === 0 && <br />}
                    </span>
                  ))}
                </h1>

                <p className="text-base sm:text-lg mb-6 text-white/75 max-w-lg leading-relaxed">
                  {slide.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {slide.pills.map((pill) => (
                    <span
                      key={pill}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10"
                    >
                      ✓ {pill}
                    </span>
                  ))}
                </div>

                <a
                  href={slide.href}
                  className="inline-block px-8 py-3.5 font-bold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-white"
                  style={{ backgroundColor: slide.accent }}
                >
                  {slide.cta} →
                </a>
              </div>
            </div>
          </div>
        );
      })}

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all">
        <FaChevronLeft />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all">
        <FaChevronRight />
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-7 bg-[#1abc9c]" : "w-2 bg-white/30"}`}
          />
        ))}
      </div>
    </section>
  );
}
