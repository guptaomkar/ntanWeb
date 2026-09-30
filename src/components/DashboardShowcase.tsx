import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeUp, staggerContainer, fadeIn } from '../animations/variants';
import { Database, LayoutDashboard, Settings, Users, Activity, BarChart3, TrendingUp } from 'lucide-react';

const AnimatedCounter = ({ value, duration = 2, suffix = '' }: { value: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;

    const end = value;
    let timer: ReturnType<typeof setInterval>;
    
    // Smooth counter animation
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
                setCount(Math.floor(current));
            }
        }, stepTime);
    }
    
    animate();

    return () => clearInterval(timer);
  }, [value, duration, inView]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const DashboardShowcase: React.FC = () => {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-[#17212B] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <motion.h2 variants={fadeUp} className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Dashboards That Drive Decisions
          </motion.h2>
          <motion.p variants={fadeUp} className="text-white/60 text-lg max-w-2xl mx-auto">
            Transform complex data streams into clear, actionable insights. Our custom dashboards are designed to give you a comprehensive view of your operations in real-time.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="bg-[#1a2332] rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col">
            {/* Top Bar */}
            <div className="flex items-center justify-between h-12 px-4 border-b border-white/10 shrink-0 bg-[#141c28]">
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs text-white/60 font-mono tracking-wider font-semibold">Ntan Enterprise Suite — v4.2</div>
              <div className="flex items-center gap-1.5 text-[10px] text-[#20C997] font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-[#20C997] animate-pulse" />
                Live
              </div>
            </div>

            <div className="flex flex-1">
              {/* Sidebar */}
              <div className="hidden lg:flex flex-col w-48 bg-[#141c28] border-r border-white/10 p-4 shrink-0">
                <div className="space-y-1">
                  <div className="flex items-center space-x-3 text-white bg-white/10 rounded-lg p-2 text-sm font-medium">
                    <LayoutDashboard size={16} className="text-[#20C997]" />
                    <span>Overview</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/50 hover:text-white hover:bg-white/5 rounded-lg p-2 text-sm transition-colors cursor-pointer">
                    <Activity size={16} />
                    <span>Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/50 hover:text-white hover:bg-white/5 rounded-lg p-2 text-sm transition-colors cursor-pointer">
                    <Database size={16} />
                    <span>Data Sources</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/50 hover:text-white hover:bg-white/5 rounded-lg p-2 text-sm transition-colors cursor-pointer">
                    <Users size={16} />
                    <span>Team</span>
                  </div>
                </div>
                <div className="mt-12">
                  <div className="flex items-center space-x-3 text-white/40 hover:text-white hover:bg-white/5 rounded-lg p-2 text-sm transition-colors cursor-pointer">
                    <Settings size={16} />
                    <span>Settings</span>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-5 sm:p-8 bg-[#1a2332]">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Total Records', value: 24892, suffix: '' },
                    { label: 'Processed', value: 21450, suffix: '' },
                    { label: 'Automation Rate', value: 94, suffix: '.8%' },
                    { label: 'Reports Generated', value: 1284, suffix: '' },
                  ].map((kpi, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx, duration: 0.5 }}
                      className="bg-[#1e2a3a] rounded-xl p-4 border border-white/5"
                    >
                      <div className="text-xs text-white/40 mb-2">{kpi.label}</div>
                      <div className="text-xl sm:text-2xl font-bold text-white">
                        <AnimatedCounter value={kpi.value} suffix={kpi.suffix} />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Processing Activity Chart */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="bg-[#1e2a3a] rounded-xl p-5 border border-white/5"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm font-medium text-white/80">Processing Activity</div>
                      <BarChart3 size={16} className="text-white/40" />
                    </div>
                    <div className="h-48 flex items-end justify-between gap-2">
                      {[40, 70, 45, 90, 65, 80, 55].map((height, i) => (
                        <div key={i} className="w-full bg-[#141c28] rounded-t-sm h-full relative overflow-hidden group">
                          <motion.div
                            initial={{ height: '0%' }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: "easeOut" }}
                            className="absolute bottom-0 w-full bg-[#0B6B57] rounded-t-sm group-hover:bg-[#20C997] transition-colors"
                          />
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Automation Status */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="bg-[#1e2a3a] rounded-xl p-5 border border-white/5 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm font-medium text-white/80">Automation Status</div>
                      <TrendingUp size={16} className="text-white/40" />
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      {[
                        { label: 'Running', color: 'bg-green-500', value: 65 },
                        { label: 'Completed', color: 'bg-blue-500', value: 85 },
                        { label: 'Pending', color: 'bg-amber-500', value: 30 },
                      ].map((status, i) => (
                        <div key={i} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <div className="flex items-center space-x-2">
                              <div className={`w-2 h-2 rounded-full ${status.color}`} />
                              <span className="text-white/60">{status.label}</span>
                            </div>
                            <span className="text-white/80">{status.value}%</span>
                          </div>
                          <div className="h-1.5 bg-[#141c28] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: '0%' }}
                              whileInView={{ width: `${status.value}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.6 + i * 0.2, duration: 0.8, ease: "easeOut" }}
                              className={`h-full ${status.color} rounded-full`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/5">
                      <div className="text-xs text-white/40 mb-3">Efficiency Trend</div>
                      <div className="h-16 w-full">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 200 50">
                          <motion.polyline
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                            fill="none"
                            stroke="#20C997"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            points="0,40 30,35 60,45 90,20 120,25 150,10 180,15 200,5"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
