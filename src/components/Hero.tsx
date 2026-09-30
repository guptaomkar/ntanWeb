import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Check, ShieldCheck, Zap } from 'lucide-react';
import { DigitalSignatureToken } from './DigitalSignatureToken';
import { fadeUp } from '../animations/variants';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section relative min-h-[92svh] flex items-center overflow-hidden bg-[#102C24] pt-28 pb-16 lg:pt-32 lg:pb-20">
      <div className="hero-grid absolute inset-0 pointer-events-none" />
      <div className="hero-index absolute right-8 top-1/2 hidden -translate-y-1/2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/25 xl:block [writing-mode:vertical-rl]">
        NTAN LLP / DIGITAL SYSTEMS / 2026
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-8">
        <div className="grid min-w-0 grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6">
          <div className="flex min-w-0 flex-col items-start text-left lg:col-span-7">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-7 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#d8a647]"
            >
              <span className="h-px w-8 bg-[#d8a647]" />
              Digital identity, thoughtfully engineered
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-[760px] text-[42px] font-semibold leading-[1.02] text-[#fffefa] sm:text-[58px] lg:text-[72px]"
            >
              Security you can hold.
              <span className="mt-1 block text-[#d8a647]">Technology that moves you forward.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-7 max-w-[570px] text-base leading-8 text-white/70 sm:text-lg"
            >
              Protect every digital signature, then give your business the software, automation and insight to do its best work.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            >
              <motion.a
                href="#digital-signature"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 bg-[#d8a647] px-6 py-3.5 text-sm font-bold text-[#182923] transition-colors hover:bg-[#e7bd70]"
              >
                Explore digital signatures
                <ArrowRight size={17} />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/5"
              >
                Discover our services
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-5 text-xs font-medium text-white/60"
            >
              <span className="inline-flex items-center gap-2"><Check size={14} className="text-[#d8a647]" /> IT Act compliant</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck size={14} className="text-[#d8a647]" /> Hardware-backed security</span>
              <span className="inline-flex items-center gap-2"><Zap size={14} className="text-[#d8a647]" /> Built for business</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-w-0 overflow-hidden flex items-center justify-center lg:col-span-5"
          >
            <div className="absolute inset-x-4 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-[#d8a647]/30 to-transparent" />
            <DigitalSignatureToken />
          </motion.div>
        </div>

        <a href="#digital-signature" className="mt-10 hidden items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/45 transition-colors hover:text-white/80 lg:inline-flex">
          Explore the platform <ArrowDown size={13} />
        </a>
      </div>
    </section>
  );
};

export default Hero;