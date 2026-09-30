import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Settings, LayoutDashboard, FileBarChart, Sparkles } from 'lucide-react';
import { fadeUp, staggerContainer } from '../animations/variants';

const workflowSteps = [
  { 
    id: 1, 
    stage: '01 / Input', 
    label: 'Data Collection & Ingestion', 
    description: 'Direct ingestion from Excel spreadsheets, external REST APIs, web scrapers, and database connectors.',
    icon: Database 
  },
  { 
    id: 2, 
    stage: '02 / Engine', 
    label: 'Automated Processing & Validation', 
    description: 'Instant data cleansing, schema reconciliation, and error deduplication running without human intervention.',
    icon: Server 
  },
  { 
    id: 3, 
    stage: '03 / Logic', 
    label: 'Custom Business Rules Execution', 
    description: 'Application of enterprise approval matrices, tax rules, and intelligent conditional triggers.',
    icon: Settings 
  },
  { 
    id: 4, 
    stage: '04 / Visibility', 
    label: 'Real-Time Operational Dashboard', 
    description: 'Live KPI synchronization, anomaly detection alerts, and executive decision telemetry.',
    icon: LayoutDashboard 
  },
  { 
    id: 5, 
    stage: '05 / Output', 
    label: 'Automated Compliance & Reporting', 
    description: 'Scheduled PDF/Excel report generation, automated email distribution, and digitally signed exports.',
    icon: FileBarChart 
  },
];

export const AutomationSection: React.FC = () => {
  return (
    <section id="automation" className="py-24 lg:py-32 w-full bg-[#F5F7F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(23,33,43,0.10)] bg-white text-xs font-semibold uppercase tracking-wider text-[#0B6B57] mb-4"
          >
            <Sparkles size={14} className="text-[#20C997]" />
            Continuous Business Acceleration
          </motion.div>

          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-3xl lg:text-5xl font-bold text-[#17212B] mb-5 tracking-tight"
          >
            Turn Manual Work Into Automated Workflows
          </motion.h2>

          <motion.p 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="text-base lg:text-lg text-[#667085] leading-relaxed"
          >
            Eliminate repetitive tasks with intelligent automation designed by <strong className="text-[#17212B] font-semibold">Ntan LLP</strong>. Our custom workflows seamlessly connect disparate tools, process data in real time, and generate actionable insights.
          </motion.p>
        </div>

        {/* Pipeline Layout */}
        <div className="max-w-4xl mx-auto relative pl-0 sm:pl-2">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="space-y-6 relative"
          >
            {/* Continuous Left Vertical Pipeline Track centered on the node icons */}
            <div className="hidden sm:block absolute left-[31px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[#0B6B57]/30 via-[#20C997] to-[#0B6B57]/30 z-0" />
            
            {/* Traveling Glowing Data Particle */}
            <motion.div 
              className="hidden sm:block absolute left-[30px] w-[4px] h-12 bg-gradient-to-b from-transparent via-[#20C997] to-transparent rounded-full shadow-[0_0_12px_#20C997] z-10 pointer-events-none"
              animate={{ 
                top: ['3%', '94%'],
                opacity: [0, 1, 1, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />

            {workflowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={step.id}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 sm:gap-6 relative z-10 group"
                >
                  {/* Left Node Indicator (Centered on the vertical track at left:31px) */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-white border-2 border-slate-200 group-hover:border-[#0B6B57] flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300 relative z-20">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B6B57] transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Step Information Card */}
                  <div className="flex-1 bg-white rounded-2xl p-5 sm:p-7 border border-[rgba(23,33,43,0.08)] shadow-xs hover:border-[#0B6B57]/30 hover:shadow-md transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-[#0B6B57] uppercase tracking-wider font-mono">
                        {step.stage}
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-[#0B6B57] bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                        Automated
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#17212B] mb-1.5">
                      {step.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
