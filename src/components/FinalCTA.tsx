import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer } from '../animations/variants';

export const FinalCTA: React.FC = () => {
  return (
    <section id="get-started" className="relative overflow-hidden bg-[#102C24] py-20 text-white lg:py-28">
      <div className="hero-grid absolute inset-0 pointer-events-none opacity-50" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_auto]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-3xl"
        >
          <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#d8a647]">
            <span className="h-px w-8 bg-[#d8a647]" />
            The next step is yours
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Make room for better work.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            From trusted digital signatures to thoughtful business software, let’s build the right solution for your team.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-start gap-3 sm:flex-row lg:flex-col"
        >
          <motion.a
            href="#digital-signature"
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 bg-[#d8a647] px-6 py-3.5 text-sm font-bold text-[#182923] transition-colors hover:bg-[#e7bd70]"
          >
            Get started <ArrowRight size={17} />
          </motion.a>
          <a href="#services" className="px-2 py-2 text-sm font-medium text-white/65 transition-colors hover:text-white">
            Explore our services
          </a>
        </motion.div>
      </div>
    </section>
  );
};