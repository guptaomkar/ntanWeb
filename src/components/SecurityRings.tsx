import React from 'react';
import { motion } from 'framer-motion';

export const SecurityRings: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      {/* Outer Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full border border-dashed border-[#0B6B57]/15 flex items-center justify-center"
      >
        {/* Subtle glowing orbital node */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#20C997] shadow-[0_0_8px_#20C997]" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#0B6B57] opacity-60" />
      </motion.div>

      {/* Middle Counter-Rotating Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[290px] sm:w-[380px] h-[290px] sm:h-[380px] rounded-full border border-[#0B6B57]/15"
      >
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#20C997]/80 shadow-[0_0_6px_#20C997]" />
      </motion.div>

      {/* Inner Pulsing Ring */}
      <motion.div
        animate={{ scale: [0.96, 1.04, 0.96], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] rounded-full border border-[#20C997]/30"
      />

      {/* Clean Static Perimeter Indicators that never spin upside-down */}
      <div className="absolute w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] pointer-events-none hidden sm:block">
        <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[9px] font-bold text-[#0B6B57]/70 uppercase tracking-widest bg-white/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#0B6B57]/10 shadow-xs">
          Identity
        </span>
        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-bold text-[#0B6B57]/70 uppercase tracking-widest bg-white/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#0B6B57]/10 shadow-xs">
          Encryption
        </span>
        <span className="absolute left-1 top-1/2 -translate-y-1/2 text-[9px] font-bold text-[#0B6B57]/70 uppercase tracking-widest bg-white/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#0B6B57]/10 shadow-xs">
          Auth
        </span>
        <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[9px] font-bold text-[#0B6B57]/70 uppercase tracking-widest bg-white/80 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#0B6B57]/10 shadow-xs">
          Verified
        </span>
      </div>
    </div>
  );
};
