import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import { technologies } from '../data/technologies';
import { Sparkles } from 'lucide-react';

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'frontend': return '#3B82F6';
    case 'backend': return '#0B6B57';
    case 'database': return '#8B5CF6';
    case 'integration': return '#F59E0B';
    case 'automation': return '#20C997';
    case 'ai': return '#EC4899';
    case 'infrastructure': return '#64748B';
    default: return '#667085';
  }
};

const categories = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'integration', label: 'Integration' },
  { id: 'automation', label: 'Automation' },
  { id: 'ai', label: 'AI & ML' },
  { id: 'infrastructure', label: 'Infrastructure' },
];

export const TechnologyStack: React.FC = () => {
  return (
    <section id="technology" className="py-24 lg:py-32 bg-[#F5F7F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div 
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(23,33,43,0.10)] bg-white text-xs font-semibold uppercase tracking-wider text-[#0B6B57] mb-4"
          >
            <Sparkles size={14} className="text-[#20C997]" />
            Engineering Constellation
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-bold text-[#17212B] tracking-tight mb-4">
            Our Technology Stack
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#667085] max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            At <strong className="text-[#17212B] font-semibold">Ntan LLP</strong>, we build with enterprise-proven frameworks, secure databases, resilient cloud infrastructure, and intelligent automation engines.
          </motion.p>
        </motion.div>

        {/* Constellation Badges Container */}
        <div className="relative max-w-4xl mx-auto mb-14">
          
          {/* Subtle connecting ambient lines */}
          <div className="absolute inset-0 pointer-events-none opacity-15 overflow-hidden">
            <svg width="100%" height="100%" viewBox="0 0 800 300" preserveAspectRatio="none">
              <path d="M50,150 Q400,20 750,150" fill="none" stroke="#0B6B57" strokeWidth="1" strokeDasharray="4 6" />
              <path d="M100,220 Q400,280 700,220" fill="none" stroke="#20C997" strokeWidth="1" strokeDasharray="4 6" />
            </svg>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-3 relative z-10"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-white rounded-xl px-5 py-3 border border-[rgba(23,33,43,0.08)] hover:border-[#0B6B57]/30 text-sm font-semibold text-[#17212B] inline-flex items-center gap-2.5 shadow-xs hover:shadow-md transition-all duration-300 cursor-default"
              >
                <span 
                  className="w-2.5 h-2.5 rounded-full shrink-0 shadow-xs" 
                  style={{ backgroundColor: getCategoryColor(tech.category) }} 
                />
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Category Legend */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-6 border-t border-[rgba(23,33,43,0.08)] max-w-3xl mx-auto"
        >
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center gap-2 text-xs font-medium text-[#667085]">
              <span 
                className="w-2 h-2 rounded-full shrink-0" 
                style={{ backgroundColor: getCategoryColor(cat.id) }} 
              />
              {cat.label}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
