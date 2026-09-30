import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

const navLinks = [
  { name: 'Digital Signature', href: '#digital-signature' },
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Automation', href: '#automation' },
  { name: 'Technology', href: '#technology' },
  { name: 'About', href: '#about' },
];

export const Navbar: React.FC<NavbarProps> = ({ onMenuToggle, isMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${isScrolled ? 'bg-[#fffefa]/95 border-[rgba(24,41,35,0.10)] shadow-sm py-2.5 sm:py-3' : 'bg-[#102C24]/90 border-white/10 py-3.5 sm:py-4'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        
        {/* Ntan LLP Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <img 
            src={isScrolled ? '/logo.png' : '/logo-white.png'}
            alt="Ntan LLP" 
            className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <span className={`font-mono text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${isScrolled ? 'text-[#182923]/75 bg-black/5' : 'text-white/75 bg-white/10'}`}>
            LLP
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`hover:text-[#d8a647] text-sm font-semibold transition-colors relative py-1 group ${isScrolled ? 'text-[#182923]' : 'text-white/85'}`}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d8a647] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <motion.a
            href="#digital-signature"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 transition-colors ${isScrolled ? 'bg-[#164b3d] hover:bg-[#0d342a] text-white' : 'bg-[#d8a647] hover:bg-[#e7bd70] text-[#182923]'}`}
          >
            <span>Get Started</span>
            <ArrowRight size={16} />
          </motion.a>

          {/* Mobile hamburger menu */}
          <button
            onClick={onMenuToggle}
            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-[#182923] hover:bg-black/5' : 'text-white hover:bg-white/10'}`}
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <Menu size={24} />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
