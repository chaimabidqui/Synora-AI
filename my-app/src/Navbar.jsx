import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from './assets/logo.png'

function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes bounce-in {
          0%   { transform: scale(1); }
          30%  { transform: scale(1.2); }
          60%  { transform: scale(0.95); }
          100% { transform: scale(1.1); }
        }
        .nav-link:hover {
          animation: bounce-in 0.4s ease forwards;
          color: #F03C1B;
        }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-8 md:px-16 lg:px-20 h-20 transition-all duration-300
        ${scrolled || menuOpen ? "bg-white/85 backdrop-blur-md" : "bg-transparent"}`}>

        {/* Logo */}
        <span onClick={() => { navigate('/'); window.scrollTo(0, 0); setMenuOpen(false) }}
          className="flex items-center text-xl text-[#F03C1B] cursor-pointer">
          <img src={logo} alt="" className="w-13 h-13" />
          Synora-AI
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center text-xl font-normal justify-center gap-12 lg:gap-16">
          <HashLink smooth to="/#features" className="nav-link text-black transition-colors duration-200">Features</HashLink>
          <HashLink smooth to="/#testimonials" className="nav-link text-black transition-colors duration-200">Testimonials</HashLink>
          <HashLink smooth to="/#pricing" className="nav-link text-black transition-colors duration-200">Pricing</HashLink>
          <HashLink smooth to="/#faq" className="nav-link text-black transition-colors duration-200">FAQ</HashLink>
        </div>

        {/* Desktop button */}
        <div className="hidden md:flex gap-4">
          <button
            onClick={() => navigate('/contact')}
            className="px-6 h-11 bg-gradient-to-r from-[#F99F4B] to-[#F03C1B] border border-[#F03C1B] text-white rounded-full font-medium cursor-pointer hover:bg-none hover:bg-white hover:text-[#F03C1B] transition-all duration-200"
          >
            Contact Us
          </button>
        </div>

        {/* Hamburger button - mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-[#F03C1B] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#F03C1B] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#F03C1B] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 md:hidden
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="flex flex-col px-6 py-6 gap-6">
          <HashLink smooth to="/#features" onClick={() => setMenuOpen(false)}
            className="text-lg font-medium text-black hover:text-[#F03C1B] transition-colors">Features</HashLink>
          <HashLink smooth to="/#testimonials" onClick={() => setMenuOpen(false)}
            className="text-lg font-medium text-black hover:text-[#F03C1B] transition-colors">Testimonials</HashLink>
          <HashLink smooth to="/#pricing" onClick={() => setMenuOpen(false)}
            className="text-lg font-medium text-black hover:text-[#F03C1B] transition-colors">Pricing</HashLink>
          <HashLink smooth to="/#faq" onClick={() => setMenuOpen(false)}
            className="text-lg font-medium text-black hover:text-[#F03C1B] transition-colors">FAQ</HashLink>
          <button
            onClick={() => { navigate('/contact'); setMenuOpen(false) }}
            className="w-full h-11 bg-gradient-to-r from-[#F99F4B] to-[#F03C1B] border border-[#F03C1B] text-white rounded-full font-medium cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;