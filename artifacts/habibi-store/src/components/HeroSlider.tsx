import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    bg: "https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=1600&q=80",
    title: "Panel WhatsApp Terlengkap",
    desc: "Panel hosting bot WhatsApp dengan spesifikasi RAM berbeda-beda. Server online 24 jam, anti delete, anti maling script, tidak boros kuota, dan anti DDOS.",
    cta: "Lihat Panel",
    href: "#panel",
  },
  {
    bg: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1600&q=80",
    title: "Bot WhatsApp Premium",
    desc: "Sewa bot WhatsApp untuk berbagai keperluan: jaga grup, pushkontak, JPM, dengan harga terjangkau dan fitur lengkap.",
    cta: "Sewa Bot",
    href: "#bot",
  },
  {
    bg: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?auto=format&fit=crop&w=1600&q=80",
    title: "Jasa Sosial Media",
    desc: "Tingkatkan engagement akun sosial media Anda dengan layanan like, views, dan followers berkualitas untuk TikTok, Instagram, dan WhatsApp Channel.",
    cta: "Lihat Layanan",
    href: "#sosmed",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="home" className="relative mt-[60px] h-[480px] sm:h-[520px] lg:h-[600px] overflow-hidden rounded-b-2xl shadow-2xl">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a252f]/85 to-[#1a252f]/60" />
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white max-w-2xl px-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 drop-shadow-lg leading-tight">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg mb-8 opacity-90 max-w-xl mx-auto">
                {slide.desc}
              </p>
              <a
                href={slide.href}
                className="inline-block px-8 py-3 bg-[#1abc9c] hover:bg-[#16a085] text-white font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/15 hover:bg-white/30 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/15 hover:bg-white/30 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
      >
        <FaChevronRight />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? "bg-[#1abc9c] w-6" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  );
}
