import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Check } from 'lucide-react';

export const DigitalSignatureToken: React.FC = () => {
  return (
    <div className="relative w-full max-w-[440px] flex items-center justify-center select-none py-8">
      
      {/* Ambient Radial Security Glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#0B6B57]/25 via-[#20C997]/20 to-transparent blur-3xl pointer-events-none" />

      {/* Orbiting Concentric Circles with Ambient Nodes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[340px] sm:w-[390px] h-[340px] sm:h-[390px] rounded-full border border-dashed border-[#0B6B57]/20 pointer-events-none flex items-center justify-center"
      >
        <div className="absolute -top-1 w-2.5 h-2.5 rounded-full bg-[#20C997] shadow-[0_0_10px_#20C997]" />
        <div className="absolute -bottom-1 w-2 h-2 rounded-full bg-[#F6B700] shadow-[0_0_8px_#F6B700]" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] rounded-full border border-[#0B6B57]/15 pointer-events-none"
      >
        <div className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-[#20C997]/80" />
      </motion.div>

      {/* Floating Verification Card - Well-contained to prevent clipping */}
      <motion.div
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="absolute top-0 right-0 sm:right-2 z-30"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-[0_12px_32px_rgba(11,107,87,0.15)] border border-[rgba(23,33,43,0.08)] flex flex-col gap-2 min-w-[170px]"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-[#0B6B57]/10 flex items-center justify-center text-[#0B6B57]">
                <Check size={12} className="stroke-[3]" />
              </span>
              <span className="text-xs font-bold text-[#17212B]">Digital ID</span>
            </div>
            <span className="text-[10px] font-bold text-[#20C997] bg-[#20C997]/15 px-2 py-0.5 rounded-full uppercase tracking-wider">
              Active
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#667085] font-mono">
            <span>FIPS 140-2</span>
            <span className="text-[#0B6B57] font-bold">RSA 2048</span>
          </div>

          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#0B6B57] via-[#20C997] to-[#F6B700] rounded-full w-full" />
          </div>

          <div className="flex items-center justify-between text-[10px] text-[#667085]">
            <span>Ntan Secure HSM</span>
            <span className="text-[#0B6B57] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#20C997] animate-ping" />
              Connected
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Professional Hardware Token (Enterprise PKI Security Key) */}
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 mt-4"
        style={{ perspective: 1000 }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotateY: [-10, -6, -10],
            rotateX: [8, 6, 8],
            rotateZ: [2, 1, 2],
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Main Key Body */}
          <div className="w-[185px] sm:w-[205px] h-[250px] sm:h-[270px] rounded-[24px] bg-gradient-to-b from-[#1E293B] via-[#0F172A] to-[#050912] p-5 border border-white/20 shadow-[0_25px_60px_rgba(11,107,87,0.35),0_10px_20px_rgba(0,0,0,0.5)] flex flex-col relative overflow-hidden">
            
            {/* Top Specular Edge Highlight */}
            <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            
            {/* Lanyard Hole */}
            <div className="w-10 h-2 rounded-full bg-black/60 border border-white/10 mx-auto mb-2.5 shadow-inner" />

            {/* Ntan LLP Branding with Gold Accent */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center gap-1.5">
                <span className="text-[15px] font-black tracking-tight text-white">ntan</span>
                <span className="text-[10px] font-bold text-[#F6B700] tracking-widest font-mono">LLP</span>
              </div>
              <div className="w-10 h-[2px] bg-[#F6B700] rounded-full mt-0.5 shadow-[0_0_6px_#F6B700]" />
            </div>

            {/* Capacitive Gold Touch Sensor & Crypto Smart Core */}
            <div className="flex-1 flex flex-col items-center justify-center my-2 relative">
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#1E293B] to-[#0A0F1D] border-2 border-[#F6B700]/60 flex flex-col items-center justify-center shadow-[inset_0_2px_8px_rgba(0,0,0,0.8),0_0_15px_rgba(246,183,0,0.2)] relative">
                
                {/* Gold Inner Concentric Ring */}
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full border border-dashed border-[#F6B700]/40 flex items-center justify-center">
                  <ShieldCheck size={26} className="text-[#20C997] drop-shadow-[0_0_8px_rgba(32,201,151,0.6)]" />
                </div>
              </div>

              <div className="text-white text-[11px] font-bold tracking-widest uppercase mt-3 font-mono">
                SECURE TOKEN
              </div>
              <div className="text-[#20C997] text-[9px] font-mono tracking-wider opacity-90 mt-0.5">
                CLASS 3 CERTIFICATE
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="mt-auto bg-black/60 rounded-xl py-1.5 px-3 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#20C997] animate-pulse shadow-[0_0_8px_#20C997]" />
                <span className="text-[10px] text-white/90 font-mono font-bold tracking-wider">VERIFIED</span>
              </div>
              <span className="text-[9px] font-mono font-bold text-[#F6B700]">SHA-256</span>
            </div>
          </div>

          {/* Genuine Brushed Metal USB 3.0 Connector */}
          <div className="w-[110px] sm:w-[120px] h-[38px] bg-gradient-to-b from-[#CBD5E1] via-[#94A3B8] to-[#64748B] rounded-b-xl border-x border-b border-[#475569] shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),0_10px_20px_rgba(0,0,0,0.3)] relative flex items-center justify-around px-3 pt-1">
            {/* Blue USB 3.0 Core Strip */}
            <div className="absolute inset-x-2.5 top-0 h-[2px] bg-[#2563EB]" />
            {/* 4 Precision Gold Contact Fingers */}
            <div className="w-3.5 h-5 bg-gradient-to-b from-[#F59E0B] to-[#B45309] rounded-xs shadow-xs" />
            <div className="w-3.5 h-5 bg-gradient-to-b from-[#F59E0B] to-[#B45309] rounded-xs shadow-xs" />
            <div className="w-3.5 h-5 bg-gradient-to-b from-[#F59E0B] to-[#B45309] rounded-xs shadow-xs" />
            <div className="w-3.5 h-5 bg-gradient-to-b from-[#F59E0B] to-[#B45309] rounded-xs shadow-xs" />
          </div>

          {/* Contact Drop Shadow */}
          <div className="w-[160px] h-[14px] rounded-full bg-black/20 blur-md mt-1.5" />
        </motion.div>
      </motion.div>

    </div>
  );
};

export default DigitalSignatureToken;
