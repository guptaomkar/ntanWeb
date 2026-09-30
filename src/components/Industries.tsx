import React from 'react';
import { motion } from 'framer-motion';
import { industries } from '../data/industries';
import { staggerContainer, fadeUp } from '../animations/variants';

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-[#F5F7F6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#17212B] mb-4">
            Industries We Serve
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-[#667085] max-w-2xl mx-auto">
            Cross-industry expertise delivering tailored solutions that drive innovation and competitive advantage.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl p-5 border border-[rgba(23,33,43,0.06)] cursor-pointer group hover:border-[#0B6B57]/20 transition-all duration-300"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-[#0B6B57] group-hover:rotate-6 transition-transform duration-300" />
                </div>
                <h3 className="text-sm font-semibold text-[#17212B] mt-3 group-hover:text-[#0B6B57] transition-colors duration-300">
                  {industry.title}
                </h3>
                <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <p className="text-xs text-[#667085] mt-2">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
