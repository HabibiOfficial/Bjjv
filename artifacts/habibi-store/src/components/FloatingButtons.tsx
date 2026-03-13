import { useState, useEffect } from "react";
import { FaWhatsapp, FaChevronUp } from "react-icons/fa";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/628131919213"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 z-50"
      >
        <FaWhatsapp />
      </a>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 w-11 h-11 bg-[#1a252f] hover:bg-[#2d3e50] text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 z-50"
        >
          <FaChevronUp />
        </button>
      )}
    </>
  );
}
