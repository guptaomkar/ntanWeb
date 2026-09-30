import React from 'react';
import { motion } from 'framer-motion';
import { digitalSignatureFeatures } from '../data/services';
import { fadeUp, staggerContainer } from '../animations/variants';

export const DigitalSignatureSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 w-full bg-[#F5F7F6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-3xl lg:text-5xl font-bold text-[#17212B] mb-4"
          >
            Your Digital Identity, in Your Hands.
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-base lg:text-lg text-[#667085] max-w-2xl mx-auto"
          >
            Secure, reliable, and compliant digital signature tokens for your business needs.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {digitalSignatureFeatures.map((feature: any, index: number) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.015 }}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-[rgba(23,33,43,0.06)] hover:border-[rgba(23,33,43,0.15)] hover:bg-[#FAFCFB] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B6B57]/5 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#0B6B57]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#17212B]">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
