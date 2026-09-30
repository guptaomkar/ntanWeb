import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, LockKeyhole, Fingerprint, Webhook, Database, FileCheck } from 'lucide-react';
import { staggerContainer, fadeUp, fadeIn } from '../animations/variants';

const securityLayers = [
  { label: 'Digital Identity', icon: Fingerprint },
  { label: 'Authentication', icon: LockKeyhole },
  { label: 'Encryption', icon: Database },
  { label: 'API Security', icon: Webhook },
  { label: 'Data Protection', icon: ShieldCheck },
  { label: 'Auditability', icon: FileCheck },
];

const badges = [
  'Secure-by-Design',
  'Controlled Access',
  'Encryption-Ready',
  'Audit-Friendly'
];

export const SecuritySection: React.FC = () => {
  return (
    <section id="security" className="relative py-24 lg:py-32 bg-[#0d1520] text-white overflow-hidden">
      {/* Animated Circuit Background Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <style>
            {`
              .circuit-line {
                stroke-dasharray: 20 15;
                animation: dash 25s linear infinite;
              }
              @keyframes dash {
                to {
                  stroke-dashoffset: -1000;
                }
              }
            `}
          </style>
          <path className="circuit-line" d="M 0,100 L 200,100 L 300,300 L 800,300 L 1200,300" stroke="#20C997" strokeWidth="0.8" fill="none" />
          <path className="circuit-line" d="M 0,200 L 400,200 L 500,450 L 1000,450 L 1200,450" stroke="#20C997" strokeWidth="0.8" fill="none" />
          <path className="circuit-line" d="M 0,400 L 300,400 L 400,150 L 1000,150 L 1200,150" stroke="#20C997" strokeWidth="0.8" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Security Built Into Every Layer
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            At <strong className="text-white font-semibold">Ntan LLP</strong>, our defense-in-depth architecture ensures your digital signatures, APIs, workflows, and enterprise data remain tamper-proof and fully auditable.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-2xl mx-auto flex flex-col items-center mb-20"
        >
          {securityLayers.map((layer, index) => (
            <React.Fragment key={index}>
              <motion.div
                variants={fadeUp}
                className="w-full sm:w-2/3 bg-white/5 rounded-xl p-4 px-6 border border-white/10 flex items-center gap-4 backdrop-blur-sm shadow-xl"
              >
                <div className="bg-transparent p-2 rounded-lg">
                  <layer.icon className="w-6 h-6 text-[#20C997]" />
                </div>
                <span className="text-lg font-medium text-white">{layer.label}</span>
              </motion.div>
              {index < securityLayers.length - 1 && (
                <motion.div
                  variants={fadeIn}
                  className="h-8 border-l border-white/10"
                />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="border border-white/10 rounded-full px-4 py-2 text-xs text-white/60 bg-white/5 backdrop-blur-sm"
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
