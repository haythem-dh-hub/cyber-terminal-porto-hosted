"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Terminal } from "lucide-react";

const projects = [
  {
    title: "luxery-ecommerce",
    description: "Advanced modern e-commerce starter built with Next.js, Tailwind CSS, MUI, Mongoose, Node-based API routes, and an AI chatbot shell.",
    tags: ["Rust", "Solidity", "ZK-SNARKs"],
    stats: { nodes: "1.2k", uptime: "99.99%", users: "45k" },
    links: { demo: "#", code: "https://github.com/haythem-dh-hub/luxery-ecommerce" },
  },
  {
    title: "Medispark-ai",
    description: "MediSpark AI is a modular healthcare AI platform for cardiovascular disease prediction on large medical datasets. It separates the Streamlit frontend, Flask REST API, Spark ETL layer, ML training layer, inference, and PostgreSQL persistence so each part can scale independently.",
    tags: ["Next.js", "Go", "EVM"],
    stats: { vol: "$2.4B", latency: "12ms", pairs: "800+" },
    links: { demo: "#", code: "https://github.com/haythem-dh-hub/medispark-ai" },
  },
  {
    title: "VOID_OS",
    description: "Browser-based terminal environment for secure smart contract auditing and deployment.",
    tags: ["TypeScript", "Wasm", "Tailwind"],
    stats: { security: "A+", tools: "12", audits: "250+" },
    links: { demo: "#", code: "#" },
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-center space-x-4 mb-12">
        <Terminal className="text-terminal-green w-8 h-8" />
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white">
          $ ls ./projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-terminal-green/5 blur-xl group-hover:bg-terminal-green/10 transition-colors duration-500 rounded-xl" />
            
            <div className="relative h-full p-6 border border-terminal-green/20 glass-card rounded-xl hover:border-terminal-green/50 transition-all duration-300 group-hover:-translate-y-2">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-mono font-bold text-terminal-green neon-text-green">
                  {project.title}
                </h3>
                <div className="flex space-x-3 text-terminal-gray">
                  <a href={project.links.code} className="hover:text-terminal-green transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.links.demo} className="hover:text-terminal-cyan transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <p className="text-sm text-terminal-gray mb-6 font-mono leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-1 rounded border border-terminal-cyan/30 bg-terminal-cyan/5 text-terminal-cyan"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-terminal-green/10 pt-4 mt-auto">
                {Object.entries(project.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-[10px] text-terminal-gray font-mono uppercase opacity-60">
                      {key}
                    </div>
                    <div className="text-xs text-terminal-green font-mono font-bold">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
