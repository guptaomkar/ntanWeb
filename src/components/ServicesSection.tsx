import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/services';
import { fadeUp, staggerContainer } from '../animations/variants';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 lg:py-32 w-full bg-[#FFFFFF] border-t border-[rgba(23,33,43,0.06)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-3xl lg:text-5xl font-bold text-[#17212B] mb-6"
          >
            Technology That Works Around Your Business
          </motion.h2>
          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-base lg:text-lg text-[#667085] max-w-2xl mx-auto"
          >
            From websites and dashboards to automation and intelligent reporting, we build technology that removes manual work and gives your team better visibility.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service: any, index: number) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative bg-white rounded-2xl p-6 lg:p-8 border border-[rgba(23,33,43,0.08)] cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-[#0B6B57]/30 flex flex-col justify-between h-full"
              >
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-[#0B6B57]" />
                </div>
                
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0B6B57]/5 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-[5deg]">
                    <Icon className="w-6 h-6 text-[#0B6B57]" />
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2 text-[#17212B]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#667085] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                {service.items && service.items.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[rgba(23,33,43,0.06)] mt-auto">
                    {service.items.slice(0, 5).map((item: string, tagIndex: number) => (
                      <span 
                        key={tagIndex} 
                        className="text-[11px] font-semibold bg-[#F5F7F6] text-[#17212B]/85 rounded-md px-2.5 py-1 border border-slate-200/90 group-hover:border-[#0B6B57]/30 group-hover:bg-[#0B6B57]/5 group-hover:text-[#0B6B57] transition-all inline-flex items-center"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
