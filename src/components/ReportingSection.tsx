import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import { Database, Cpu, CheckCircle2, LineChart, FileText, Download } from 'lucide-react';

const AnimatedCounter = ({ value, duration = 2, prefix = '', suffix = '', isDecimal = false }: { value: number; duration?: number; prefix?: string; suffix?: string; isDecimal?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;

    const end = value;
    let timer: ReturnType<typeof setInterval>;
    
    const animate = () => {
        let current = 0;
        const stepTime = Math.abs(Math.floor(duration * 1000 / 60)); // 60fps
        const step = end / (duration * 1000 / stepTime);
        
        timer = setInterval(() => {
            current += step;
            if (current >= end) {
                clearInterval(timer);
                setCount(end);
            } else {
                setCount(current);
            }
        }, stepTime);
    }
    
    animate();

    return () => clearInterval(timer);
  }, [value, duration, inView]);

  return (
    <span ref={ref}>
      {prefix}{isDecimal ? count.toFixed(1) : Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
};

const steps = [
  { icon: Database, label: 'Raw Data Extraction' },
  { icon: Cpu, label: 'Data Processing' },
  { icon: CheckCircle2, label: 'Validation' },
  { icon: LineChart, label: 'Analysis' },
  { icon: FileText, label: 'Automated Report' },
];

export const ReportingSection: React.FC = () => {
  return (
    <section id="reporting" className="py-24 lg:py-32 bg-[#F5F7F6] text-[#17212B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-bold mb-6 text-[#17212B]">
            From Data to Decisions
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#667085] text-lg max-w-2xl mx-auto">
            Automate your reporting pipeline. Go from raw datasets to boardroom-ready insights in seconds, without lifting a finger.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Left Column: Flow */}
          <div className="relative py-8">
            <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-black/5" />
            
            {/* Animated glowing dot */}
            <motion.div 
              className="absolute left-[31px] w-1.5 h-12 bg-gradient-to-b from-transparent via-[#20C997] to-transparent rounded-full shadow-[0_0_10px_rgba(32,201,151,0.8)] z-10"
              initial={{ top: "10%" }}
              whileInView={{ top: "85%" }}
              viewport={{ once: true }}
              transition={{ duration: 3, ease: "linear" }}
            />

            <div className="space-y-12 relative z-20">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: idx * 0.4, duration: 0.5 }}
                    className="flex items-center space-x-6"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg border border-[rgba(23,33,43,0.06)] flex items-center justify-center shrink-0">
                      <Icon className="text-[#0B6B57]" size={24} />
                    </div>
                    <div className="font-semibold text-lg text-[#17212B]">{step.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Report Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-[rgba(23,33,43,0.06)] relative overflow-hidden"
          >
            {/* Shimmer effect to indicate generation */}
            <motion.div
              initial={{ left: '-100%' }}
              whileInView={{ left: '200%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] z-10 pointer-events-none"
            />

            {/* Header */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex justify-between items-start mb-8"
            >
              <div>
                <h3 className="text-xl font-bold text-[#17212B]">Monthly Business Report</h3>
                <p className="text-sm text-[#667085] mt-1">Generated: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
              </div>
              <button className="p-2 bg-[#F5F7F6] text-[#0B6B57] rounded-lg hover:bg-[#0B6B57] hover:text-white transition-colors">
                <Download size={20} />
              </button>
            </motion.div>

            {/* KPIs */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1, duration: 0.4 }}
                className="bg-[#F5F7F6] p-4 rounded-xl"
              >
                <div className="text-[10px] sm:text-xs text-[#667085] uppercase tracking-wider mb-1">Revenue</div>
                <div className="text-lg sm:text-xl font-bold text-[#17212B]"><AnimatedCounter value={2.4} isDecimal prefix="$" suffix="M" duration={1.5} /></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3, duration: 0.4 }}
                className="bg-[#F5F7F6] p-4 rounded-xl"
              >
                <div className="text-[10px] sm:text-xs text-[#667085] uppercase tracking-wider mb-1">Growth</div>
                <div className="text-lg sm:text-xl font-bold text-[#20C997]"><AnimatedCounter value={18.2} isDecimal prefix="+" suffix="%" duration={1.5} /></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 0.4 }}
                className="bg-[#F5F7F6] p-4 rounded-xl"
              >
                <div className="text-[10px] sm:text-xs text-[#667085] uppercase tracking-wider mb-1">Efficiency</div>
                <div className="text-lg sm:text-xl font-bold text-[#17212B]"><AnimatedCounter value={94.8} isDecimal suffix="%" duration={1.5} /></div>
              </motion.div>
            </div>

            {/* Bar Chart */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="mb-8"
            >
              <div className="h-24 flex items-end justify-between gap-3">
                {[30, 45, 35, 60, 80, 95].map((height, i) => (
                  <div key={i} className="w-full bg-[#F5F7F6] rounded-t-md h-full relative overflow-hidden">
                    <motion.div
                      initial={{ height: '0%' }}
                      whileInView={{ height: `${height}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 2 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                      className="absolute bottom-0 w-full bg-[#0B6B57] rounded-t-md"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Line Chart */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="mb-8 h-12 w-full"
            >
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 300 50">
                <motion.polyline
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 2.4, duration: 1, ease: "easeInOut" }}
                  fill="none"
                  stroke="#20C997"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="0,40 50,35 100,20 150,25 200,10 250,15 300,5"
                />
              </svg>
            </motion.div>

            {/* Table */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 2.6, duration: 0.5 }}
            >
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-[#667085] border-b border-black/5">
                    <th className="pb-2 font-medium">Item</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium text-right">Value</th>
                  </tr>
                </thead>
                <tbody className="text-[#17212B]">
                  <tr className="border-b border-black/5">
                    <td className="py-2">Platform Subs</td>
                    <td className="py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">Active</span></td>
                    <td className="py-2 text-right font-medium">$1,240K</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-2">API Usage</td>
                    <td className="py-2"><span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs">Active</span></td>
                    <td className="py-2 text-right font-medium">$850K</td>
                  </tr>
                  <tr className="border-b border-black/5">
                    <td className="py-2">Consulting</td>
                    <td className="py-2"><span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs">Pending</span></td>
                    <td className="py-2 text-right font-medium">$310K</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
