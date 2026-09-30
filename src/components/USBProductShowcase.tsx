import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Fingerprint, FileSignature, CheckCircle, Sparkles } from 'lucide-react';
import { fadeUp, staggerContainer } from '../animations/variants';

interface Stage {
  id: number;
  name: string;
  badge: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  statusColor: string;
  statusText: string;
}

const stages: Stage[] = [
  {
    id: 0,
    name: 'Digital Identity',
    badge: '01 / Storage',
    description: 'Cryptographically bound identity stored inside tamper-resistant hardware microcontrollers.',
    icon: Fingerprint,
    statusColor: '#3B82F6',
    statusText: 'IDENTITY LOADED',
  },
  {
    id: 1,
    name: 'Secure Authentication',
    badge: '02 / Handshake',
    description: 'Two-factor hardware authentication ensuring zero unauthorized access across enterprise & government portals.',
    icon: Lock,
    statusColor: '#F59E0B',
    statusText: 'CHALLENGE VERIFIED',
  },
  {
    id: 2,
    name: 'Digital Signing',
    badge: '03 / Cryptography',
    description: 'SHA-256 asymmetric cryptographic signing executed directly within the onboard crypto processor.',
    icon: FileSignature,
    statusColor: '#20C997',
    statusText: 'SIGNING IN PROGRESS',
  },
  {
    id: 3,
    name: 'Verified',
    badge: '04 / Compliance',
    description: 'Non-repudiation guaranteed. Fully compliant with IT Act, eIDAS, and international legal standards.',
    icon: ShieldCheck,
    statusColor: '#16A085',
    statusText: 'SIGNATURE VALIDATED',
  },
];

const specs = [
  { label: 'Security Standard', value: 'FIPS 140-2 Level 3' },
  { label: 'Key Generation', value: 'Onboard 2048 / 4096-bit RSA' },
  { label: 'Algorithm Support', value: 'SHA-256, ECDSA, AES-256' },
  { label: 'Compliance', value: 'PKCS#11, Microsoft CAPI / CNG' },
];

export const USBProductShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStage, setActiveStage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Scroll linked subtle movements
  const tokenY = useTransform(scrollYProgress, [0.1, 0.9], [40, -40]);
  const tokenRotate = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [3, 0, -3]);
  const ringsScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.92, 1.05, 0.96]);

  const currentStage = stages[activeStage];

  return (
    <section 
      id="digital-signature" 
      ref={containerRef}
      className="py-24 lg:py-32 w-full bg-[#FFFFFF] relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-15"
          animate={{
            backgroundColor: currentStage.statusColor,
          }}
          transition={{ duration: 1 }}
        />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: 'radial-gradient(#17212B 1px, transparent 1px)',
            backgroundSize: '32px 32px' 
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(23,33,43,0.10)] bg-[#F5F7F6] text-xs font-semibold uppercase tracking-wider text-[#0B6B57] mb-5"
          >
            <Sparkles size={14} className="text-[#20C997]" />
            Hardware Security Module
          </motion.div>

          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-3xl lg:text-5xl font-bold text-[#17212B] mb-6 tracking-tight"
          >
            Your Digital Identity, in Your Hands.
          </motion.h2>

          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-base lg:text-lg text-[#667085] leading-relaxed"
          >
            A dedicated cryptographic token engineered to safeguard digital certificates, encrypt communications, and sign documents with legally irrevocable non-repudiation.
          </motion.p>
        </div>

        {/* Interactive Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-20">
          
          {/* Left Column: Stages Sequence (4 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4 order-2 lg:order-1">
            <div className="text-xs uppercase tracking-wider font-semibold text-[#667085] mb-2 flex items-center justify-between">
              <span>Security Lifecycle</span>
              <span className="text-[#0B6B57]">Click any stage to simulate</span>
            </div>

            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;

              return (
                <motion.div
                  key={stage.id}
                  onClick={() => setActiveStage(idx)}
                  whileHover={{ x: 4 }}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer relative ${
                    isActive 
                      ? 'bg-white border-[#0B6B57]/30 shadow-[0_10px_30px_rgba(11,107,87,0.08)]' 
                      : 'bg-[#F5F7F6]/60 border-transparent hover:bg-white hover:border-[rgba(23,33,43,0.08)]'
                  }`}
                >
                  {/* Left indicator bar */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0B6B57]" />
                  )}

                  <div className="flex items-start gap-4">
                    <div 
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive ? 'bg-[#0B6B57] text-white shadow-md' : 'bg-white text-[#667085]'
                      }`}
                    >
                      <Icon size={20} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold tracking-wider text-[#667085] uppercase">
                          {stage.badge}
                        </span>
                        {isActive && (
                          <span 
                            className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                            style={{ 
                              backgroundColor: `${stage.statusColor}15`,
                              color: stage.statusColor 
                            }}
                          >
                            Active
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-[#17212B] mb-1">
                        {stage.name}
                      </h3>
                      <p className="text-xs text-[#667085] leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: High-Fidelity USB Hardware Representation (7 columns) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center order-1 lg:order-2 relative min-h-[500px]">
            
            {/* Concentric Rotating Security Rings */}
            <motion.div 
              style={{ scale: ringsScale }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {/* Outer Dashed Rotating Ring (No text inside to prevent upside-down rotation) */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full border border-dashed border-[#0B6B57]/20 flex items-center justify-center"
              />

              {/* Static Badges (Always upright, never rotating upside down) */}
              <div className="absolute w-[330px] sm:w-[430px] h-[330px] sm:h-[430px] pointer-events-none flex flex-col justify-between items-center py-0.5">
                <span className="px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest bg-white text-[#0B6B57] border border-[#0B6B57]/25 rounded-full shadow-sm">
                  FIPS 140-2 Level 3
                </span>
                <span className="px-3 py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest bg-white text-[#0B6B57] border border-[#0B6B57]/25 rounded-full shadow-sm">
                  RSA 4096-BIT
                </span>
              </div>

              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute w-[260px] sm:w-[350px] h-[260px] sm:h-[350px] rounded-full border border-[#0B6B57]/20 flex items-center justify-center"
              >
                <div 
                  className="w-2.5 h-2.5 rounded-full absolute -top-1 shadow-md"
                  style={{ backgroundColor: currentStage.statusColor }}
                />
              </motion.div>

              {/* Inner Pulsing Ring */}
              <motion.div
                animate={{ scale: [0.98, 1.04, 0.98], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-[210px] sm:w-[280px] h-[210px] sm:h-[280px] rounded-full border border-[#20C997]/40"
              />
            </motion.div>

            {/* The USB Token Device Representation */}
            <motion.div
              style={{ y: tokenY, rotate: tokenRotate }}
              className="relative z-20 flex flex-col items-center"
            >
              {/* Floating Token Status Bubble with generous spacing */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.id}
                  initial={{ opacity: 0, y: -10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8 px-4 py-2.5 rounded-xl bg-white border border-[rgba(23,33,43,0.12)] shadow-xl flex items-center gap-3"
                >
                  <span 
                    className="w-2.5 h-2.5 rounded-full animate-ping"
                    style={{ backgroundColor: currentStage.statusColor }}
                  />
                  <div className="text-left">
                    <div className="text-[10px] font-semibold text-[#667085] uppercase tracking-wider">HSM Status</div>
                    <div className="text-xs font-bold text-[#17212B] tracking-wide">{currentStage.statusText}</div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Physical Token Chassis */}
              <div className="w-[180px] sm:w-[200px] h-[240px] rounded-2xl bg-gradient-to-b from-[#1C2634] via-[#121A24] to-[#0A1017] p-5 border border-white/20 shadow-[0_25px_60px_rgba(11,107,87,0.25)] flex flex-col relative overflow-hidden">
                {/* Metallic brushed reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                
                {/* Lanyard loop cutout */}
                <div className="w-8 h-2 rounded-full bg-white/10 mx-auto mb-3 border border-white/5" />

                {/* Brandmark */}
                <div className="flex items-center justify-between text-white text-[11px] font-mono tracking-widest border-b border-white/10 pb-2">
                  <span className="font-bold flex items-center gap-1">
                    <span>ntan</span>
                    <span className="text-[#F6B700]">LLP</span>
                  </span>
                  <span className="text-[#20C997] font-sans font-bold text-[10px]">HSM-PRO</span>
                </div>

                {/* Central Security Chip Node */}
                <div className="flex-1 flex flex-col items-center justify-center my-3 relative">
                  <motion.div 
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1F2C3C] to-[#0E1620] border border-white/15 flex items-center justify-center shadow-inner relative"
                    animate={{
                      boxShadow: [
                        `0 0 15px ${currentStage.statusColor}30`,
                        `0 0 30px ${currentStage.statusColor}60`,
                        `0 0 15px ${currentStage.statusColor}30`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <currentStage.icon size={28} className="text-white" />
                  </motion.div>
                  <span className="text-[11px] font-semibold text-white/90 tracking-widest mt-2 uppercase font-mono">
                    {currentStage.name}
                  </span>
                </div>

                {/* Real-time Crypto Activity Bar */}
                <div className="bg-black/40 rounded-lg p-2 border border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: currentStage.statusColor }}
                    />
                    <span className="text-[9px] font-mono text-white/70">
                      AES-256
                    </span>
                  </div>
                  <CheckCircle size={13} className="text-[#20C997]" />
                </div>
              </div>

              {/* USB 3.0 / Gold Contact Plug */}
              <div className="w-[110px] h-[36px] bg-gradient-to-b from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] rounded-b-md border-x border-b border-[#64748B] flex items-center justify-around px-3 pt-1 shadow-md">
                <div className="w-3.5 h-4.5 bg-gradient-to-b from-[#F59E0B] to-[#D97706] rounded-[2px]" />
                <div className="w-3.5 h-4.5 bg-gradient-to-b from-[#F59E0B] to-[#D97706] rounded-[2px]" />
                <div className="w-3.5 h-4.5 bg-gradient-to-b from-[#F59E0B] to-[#D97706] rounded-[2px]" />
                <div className="w-3.5 h-4.5 bg-gradient-to-b from-[#F59E0B] to-[#D97706] rounded-[2px]" />
              </div>
            </motion.div>
          </div>

        </div>

        {/* Technical Hardware Specs Strip */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 mt-12 sm:mt-16 border-t border-[rgba(23,33,43,0.08)]"
        >
          {specs.map((item, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              className="bg-[#F5F7F6] rounded-xl p-4 sm:p-5 border border-[rgba(23,33,43,0.06)] shadow-2xs"
            >
              <div className="text-xs text-[#667085] mb-1 font-medium">{item.label}</div>
              <div className="text-sm font-bold text-[#17212B]">{item.value}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
