import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const VerificationCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute -top-4 right-0 sm:-right-4 w-[190px] sm:w-[210px] z-30 pointer-events-none"
    >
      <motion.div 
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="bg-white/95 rounded-xl shadow-[0_12px_32px_rgba(11,107,87,0.12)] p-3.5 border border-[rgba(23,33,43,0.08)] backdrop-blur-md"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.8, duration: 0.4, type: 'spring' }}
              className="w-5 h-5 rounded-full bg-[#20C997]/15 flex items-center justify-center shrink-0"
            >
              <Check size={12} className="text-[#0B6B57] stroke-[3]" />
            </motion.div>
            <span className="text-xs font-bold text-[#17212B]">Digital Identity</span>
          </div>
          <span className="text-[9px] font-bold text-[#20C997] bg-[#20C997]/10 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
            Active
          </span>
        </div>

        <div className="flex items-center justify-between text-[11px] text-[#667085] mb-2 font-mono">
          <span>Certificate 2048-bit</span>
          <span className="text-[#0B6B57] font-bold">Valid</span>
        </div>

        <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-1.5">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 2, duration: 1.2, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-[#0B6B57] to-[#20C997] rounded-full"
          />
        </div>

        <div className="flex items-center justify-between text-[10px]">
          <span className="text-[#667085]">Hardware Token</span>
          <span className="text-[#0B6B57] font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#20C997] animate-pulse" />
            Ntan Secure
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};
