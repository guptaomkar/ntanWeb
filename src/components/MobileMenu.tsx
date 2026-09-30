import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { mobileMenuOverlay, mobileMenuSheet, mobileMenuTransition, staggerItem } from '../animations/variants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: 'Digital Signature', href: '#digital-signature' },
  { name: 'Services', href: '#services' },
  { name: 'Solutions', href: '#solutions' },
  { name: 'Automation', href: '#automation' },
  { name: 'Technology', href: '#technology' },
  { name: 'About', href: '#about' },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/35 backdrop-blur-[8px] z-50"
            variants={mobileMenuOverlay}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          {/* Sheet */}
          <motion.div
            className="fixed right-0 top-0 w-[min(88vw,380px)] h-dvh bg-[#F5F7F6] z-50 p-8 flex flex-col shadow-2xl"
            variants={mobileMenuSheet}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={mobileMenuTransition}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-10 pb-4 border-b border-gray-200/60">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Ntan LLP" className="h-7 w-auto object-contain" />
                <span className="font-bold text-xs uppercase tracking-wider text-[#17212B]/70 font-mono">LLP</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#17212B] hover:bg-gray-200/50 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav Links */}
            <motion.nav
              className="flex flex-col gap-6 flex-1"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-[#17212B] font-medium text-lg border-b border-gray-200/50 pb-4 last:border-0 hover:text-[#0B6B57] transition-colors"
                  variants={staggerItem}
                  onClick={onClose}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.nav>

            {/* Footer / CTA */}
            <motion.div
              className="mt-auto pt-8 border-t border-gray-200/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#get-started"
                className="flex items-center justify-center gap-2 bg-[#0B6B57] text-white px-6 py-4 rounded-full font-medium w-full transition-colors hover:bg-[#064B3E]"
                onClick={onClose}
              >
                Get Started
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
