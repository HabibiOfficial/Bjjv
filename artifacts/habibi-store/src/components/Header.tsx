import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { FaStore, FaShoppingCart, FaListAlt, FaBars, FaTimes, FaSearch } from "react-icons/fa";

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Kategori", href: "#categories" },
  { label: "Panel", href: "#panel" },
  { label: "Bot WhatsApp", href: "#bot" },
  { label: "Script", href: "#script" },
  { label: "NOKOS", href: "#nokos" },
  { label: "Sosmed", href: "#sosmed" },
  { label: "Kontak", href: "#contact" },
];

interface HeaderProps {
  onSalesOpen: () => void;
  onSearchOpen: () => void;
}

export default function Header({ onSalesOpen, onSearchOpen }: HeaderProps) {
  const { count, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onSearchOpen();
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onSearchOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1a252f]/98 backdrop-blur-md py-2 shadow-2xl"
            : "bg-[#1a252f] py-3 shadow-lg"
        }`}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <nav className="flex items-center justify-between gap-4">
            <a href="#home" className="flex items-center gap-2 text-white font-bold text-xl font-['Montserrat'] shrink-0">
              <FaStore className="text-[#1abc9c] text-2xl" />
              <span>HABIBI<span className="text-[#1abc9c]">STORE</span></span>
            </a>

            <ul className="hidden lg:flex items-center gap-1 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-[#1abc9c] text-sm font-medium px-2 py-1 transition-colors duration-200 relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1abc9c] group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={onSearchOpen}
                className="hidden sm:flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white/70 hover:text-white text-sm rounded-full pl-3 pr-3 py-1.5 transition-all duration-200 group"
              >
                <FaSearch className="text-xs" />
                <span className="text-xs">Cari layanan...</span>
                <kbd className="hidden lg:block text-[10px] bg-white/10 border border-white/20 text-white/50 px-1.5 py-0.5 rounded-md ml-1">
                  ⌘K
                </kbd>
              </button>

              <button
                onClick={onSearchOpen}
                className="sm:hidden text-white hover:text-[#1abc9c] transition-colors p-1"
              >
                <FaSearch className="text-lg" />
              </button>

              <button
                onClick={() => setIsOpen(true)}
                className="relative text-white hover:text-[#1abc9c] transition-colors p-1"
              >
                <FaShoppingCart className="text-lg" />
                {count > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#e74c3c] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {count}
                  </span>
                )}
              </button>

              <button
                onClick={onSalesOpen}
                className="hidden sm:flex items-center gap-1.5 text-white text-sm font-medium px-3 py-1.5 bg-white/10 rounded-full hover:bg-[#1abc9c] transition-all duration-200"
              >
                <FaListAlt />
                <span>Penjualan</span>
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-white text-xl p-1"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-[#1a252f] z-40 flex flex-col items-center justify-start pt-10 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-[#1abc9c] text-lg font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); onSearchOpen(); }}
            className="flex items-center gap-2 mt-4 text-white/70 text-base"
          >
            <FaSearch /> Cari Layanan
          </button>
        </div>
      )}
    </>
  );
}
