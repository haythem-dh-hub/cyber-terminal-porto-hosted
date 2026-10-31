"use client";

import { motion } from "framer-motion";
import { History } from "lucide-react";

const experiences = [
  {
    company: "ETHER_TECH",
    role: "web app developer ",
    period: "2023 - PRESENT",
    description: "Architecting decentralized identity solutions and cross-chain messaging protocols. Reduced gas costs by 40% through custom op-code optimizations.",
  },
  {
    company: "QUANTUM_LABS",
    role: "Smart Contract Engineer",
    period: "2021 - 2023",
    description: "Lead developer for a top-tier DeFi lending protocol. Managed $500M+ TVL and executed 3 successful audits with zero critical vulnerabilities.",
  },
  {
    company: "NEXUS_SYSTEMS",
    role: "Full Stack Developer",
    period: "2019 - 2021",
    description: "Built high-performance trading dashboards and real-time data visualization tools for institutional clients.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-center space-x-4 mb-12">
        <History className="text-terminal-green w-8 h-8" />
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white">
          $ cat ./history.log
        </h2>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-[1px] before:bg-terminal-green/20">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-terminal-green bg-terminal-black rounded-full z-10 shadow-[0_0_10px_#00ff88]" />

            {/* Content Card */}
            <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
              <div className="p-6 border border-terminal-green/20 glass-card rounded-xl hover:border-terminal-cyan/50 transition-colors group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono text-terminal-cyan font-bold">
                    {exp.period}
                  </span>
                  <span className="text-[10px] font-mono text-terminal-green opacity-50">
                    ID: 0x{index}A7F...
                  </span>
                </div>
                <h3 className="text-xl font-mono font-bold text-white mb-1 group-hover:text-terminal-green transition-colors">
                  {exp.company}
                </h3>
                <p className="text-sm font-mono text-terminal-green mb-4">
                  {exp.role}
                </p>
                <p className="text-sm text-terminal-gray font-mono leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
