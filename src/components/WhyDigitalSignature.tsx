import React from 'react';
import { motion } from 'framer-motion';
import { digitalSignatureFeatures } from '../data/services';
import { fadeUp, staggerContainer } from '../animations/variants';
import { ShieldCheck, FileCheck2, Scale, Zap } from 'lucide-react';

const trustPillars = [
  {
    icon: Scale,
    title: '100% Legally Recognized',
    description: 'Equivalent to traditional wet ink signatures under IT Act 2000, Section 65B, eIDAS, and UNCITRAL model law.',
  },
  {
    icon: ShieldCheck,
    title: 'Cryptographic Non-Repudiation',
    description: 'Any modification post-signing immediately invalidates the signature, guaranteeing tamper-evident audit trails.',
  },
  {
    icon: Zap,
    title: 'Instant Government Portal Access',
    description: 'Seamless integration with MCA, GSTN, Income Tax, DGFT, EPFO, ICEGATE, and e-Tendering procurement portals.',
  },
  {
    icon: FileCheck2,
    title: 'Paperless Efficiency',
    description: 'Slash document approval and dispatch turnaround from 5-7 days down to mere seconds with automated pipelines.',
  },
];

export const WhyDigitalSignature: React.FC = () => {
  return (
    <section id="why-signature" className="py-24 lg:py-32 w-full bg-[#F5F7F6] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(23,33,43,0.10)] bg-white text-xs font-semibold uppercase tracking-wider text-[#0B6B57] mb-4"
          >
            <ShieldCheck size={14} className="text-[#20C997]" />
            Enterprise Digital Trust
          </motion.div>

          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-3xl lg:text-5xl font-bold text-[#17212B] mb-5 tracking-tight"
          >
            Why Digital Signature?
          </motion.h2>

          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-base lg:text-lg text-[#667085] leading-relaxed"
          >
            Modern enterprises cannot afford forged paperwork, compliance delays, or vulnerable logins. <strong className="text-[#17212B] font-semibold">Ntan LLP</strong> delivers hardware-grade digital signatures that guarantee identity, authenticity, and legal validity across all statutory platforms.
          </motion.p>
        </div>

        {/* 6 Feature Cards */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {digitalSignatureFeatures.map((feature: any, index: number) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.015 }}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-[rgba(23,33,43,0.06)] hover:border-[rgba(11,107,87,0.2)] hover:shadow-[0_12px_30px_rgba(11,107,87,0.06)] transition-all duration-300 flex flex-col group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B6B57]/5 group-hover:bg-[#0B6B57]/10 flex items-center justify-center mb-6 transition-colors">
                  <Icon className="w-6 h-6 text-[#0B6B57]" />
                </div>
                <h3 className="text-lg font-bold mb-2.5 text-[#17212B]">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 4 Trust Pillars Banner */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="bg-white rounded-3xl p-8 lg:p-12 border border-[rgba(23,33,43,0.08)] shadow-sm"
        >
          <div className="text-xs uppercase tracking-widest font-bold text-[#0B6B57] mb-6">
            Core Security Guarantees
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div key={i} variants={fadeUp} className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-[#20C997]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#0B6B57]" />
                  </div>
                  <h4 className="text-base font-bold text-[#17212B] mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#667085] leading-relaxed">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
