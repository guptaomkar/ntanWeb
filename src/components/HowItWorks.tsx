import React from 'react';
import { motion } from 'framer-motion';
import { howItWorksSteps } from '../data/services';
import { staggerContainer, fadeUp } from '../animations/variants';
import { Sparkles } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-32 w-full bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.div 
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(23,33,43,0.10)] bg-[#F5F7F6] text-xs font-semibold uppercase tracking-wider text-[#0B6B57] mb-4"
          >
            <Sparkles size={14} className="text-[#20C997]" />
            Delivery Methodology
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#17212B] mb-4 tracking-tight">
            How We Work
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed">
            At <strong className="text-[#17212B] font-semibold">Ntan LLP</strong>, our proven 4-stage process ensures seamless execution from architecture discovery to automated production deployment.
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Subtle horizontal connecting bar on desktop */}
          <div className="hidden lg:block absolute top-12 left-16 right-16 h-[2px] bg-gradient-to-r from-[#0B6B57]/10 via-[#20C997]/30 to-[#0B6B57]/10 z-0" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
          >
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-[#F5F7F6]/80 hover:bg-white rounded-2xl p-6 sm:p-7 border border-[rgba(23,33,43,0.06)] hover:border-[#0B6B57]/20 hover:shadow-[0_12px_30px_rgba(11,107,87,0.06)] transition-all duration-300 flex flex-col group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl lg:text-5xl font-black text-[#0B6B57]/20 group-hover:text-[#0B6B57] transition-colors font-mono">
                    {step.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#20C997]/60 group-hover:bg-[#20C997] transition-colors" />
                </div>
                
                <h3 className="text-lg font-bold text-[#17212B] mb-2 group-hover:text-[#0B6B57] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
