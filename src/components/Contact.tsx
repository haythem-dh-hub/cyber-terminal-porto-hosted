"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-center space-x-4 mb-12">
        <MessageSquare className="text-terminal-green w-8 h-8" />
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white">
          $ ssh Haythem.dhfallah9@gmail.com
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="p-8 border border-terminal-green/20 glass-card rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <TerminalIcon />
            </div>
            
            <h3 className="text-2xl font-mono font-bold text-terminal-green mb-6">
              SYSTEM_LINKS
            </h3>

            <div className="space-y-6 font-mono">
              <a href="#" className="flex items-center space-x-4 group/link">
                <div className="p-3 border border-terminal-green/20 rounded-lg group-hover/link:border-terminal-green transition-colors">
                  <Mail className="text-terminal-green" size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-terminal-gray uppercase">Email</div>
                  <div className="text-white group-hover/link:text-terminal-green transition-colors">haythem.dhfallah9@gmail.com</div>
                </div>
              </a>

              <a href="https://github.com/haythem-dh-hub/" target="_blank" className="flex items-center space-x-4 group/link">
                <div className="p-3 border border-terminal-green/20 rounded-lg group-hover/link:border-terminal-green transition-colors">
                  <Github className="text-terminal-green" size={20} />
                </div>
                <div>
                  

                  <div className="text-[10px] text-terminal-gray uppercase">GitHub</div>
                  <div className="text-white group-hover/link:text-terminal-green transition-colors">github.com/haythem-dh-hub/</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/haythem-dhifallah-330716325/" target="_blank" className="flex items-center space-x-4 group/link">
                <div className="p-3 border border-terminal-green/20 rounded-lg group-hover/link:border-terminal-green transition-colors">
                  <Linkedin className="text-terminal-green" size={20} />
                </div>
                <div>
                  <div className="text-[10px] text-terminal-gray uppercase">LinkedIn</div>
                  <div className="text-white group-hover/link:text-terminal-green transition-colors">https://www.linkedin.com/in/haythem-dhifallah-330716325/</div>
                </div>
              </a>
            </div>

            <div className="mt-12 p-4 border border-terminal-cyan/20 bg-terminal-cyan/5 rounded-lg">
              <p className="text-xs text-terminal-cyan font-mono leading-relaxed">
                <span className="font-bold">[REMOTE_ENCRYPTION_ACTIVE]</span><br />
                All communications are routed through secure decentralized channels. 
                Expect a response within 24 standard cycles.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-8 border border-terminal-green/20 glass-card rounded-2xl h-full">
            <form className="space-y-6 font-mono">
              <div>
                <label className="block text-xs text-terminal-green uppercase mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="New project inquiry..."
                  className="w-full bg-terminal-black/50 border border-terminal-green/20 rounded-lg p-4 text-white placeholder:text-terminal-gray focus:outline-none focus:border-terminal-green transition-all"
                />
              </div>

              <div>
                <label className="block text-xs text-terminal-green uppercase mb-2">Message Payload</label>
                <textarea
                  rows={6}
                  placeholder="Initiate communication sequence..."
                  className="w-full bg-terminal-black/50 border border-terminal-green/20 rounded-lg p-4 text-white placeholder:text-terminal-gray focus:outline-none focus:border-terminal-green transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full group relative overflow-hidden p-4 border border-terminal-green/40 hover:border-terminal-green transition-all rounded-lg flex items-center justify-center space-x-2"
              >
                <div className="absolute inset-0 bg-terminal-green opacity-0 group-hover:opacity-10 transition-opacity" />
                <span className="text-terminal-green font-bold uppercase tracking-widest group-hover:scale-105 transition-transform">
                  Send Sequence
                </span>
                <Send className="text-terminal-green group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TerminalIcon() {
  return (
    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-terminal-green">
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </svg>
  );
}
