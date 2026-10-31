"use client";

import { motion } from "framer-motion";
import me from "./me.png"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 border border-terminal-green/30 bg-terminal-green/5 text-terminal-green text-xs font-mono uppercase tracking-widest">
              System initialization complete
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-terminal-green neon-text-green leading-none">
              HAYTHEM <br /> DIFALLAH
            </h1>
            
            <p className="text-xl md:text-2xl text-terminal-cyan font-mono">
              Full-Stack Developer
            </p>

            <div className="mt-12 p-6 border border-terminal-green/20 glass-card font-mono space-y-3 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-terminal-green/50 shadow-[0_0_10px_#00ff88]" />
              <div className="flex items-center space-x-4">
                <span className="text-terminal-gray">$ whoami</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm pt-2">
                <div className="flex space-x-2">
                  <span className="text-terminal-green">Name:</span>
                  <span className="text-white">HAYTHEM DIFALLAH</span>
                </div>
                <div className="flex space-x-2">
                  <span className="text-terminal-green">Based:</span>
                  <span className="text-white">TUNISIA, NORTH AFRICA</span>
                </div>
                <div className="flex space-x-2">
                  <span className="text-terminal-green">Role:</span>
                  <span className="text-white">full-stack developer + Data Analyst + data scientist </span>
                </div>
                <div className="flex space-x-2">
                  <span className="text-terminal-green">Open:</span>
                  <span className="text-white">August 2026</span>
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
                <span className="text-terminal-green">Status:</span>
                <span className="text-terminal-cyan animate-pulse">Online_And_Building...</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Holographic Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 group">
            {/* Holographic Container */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full h-full border-2 border-terminal-green/30 rounded-2xl overflow-hidden glass-card group-hover:border-terminal-green/60 transition-colors"
            >
              {/* Placeholder for Image */}
              <div className="absolute inset-0 bg-terminal-dim flex items-center justify-center">
                <div className="text-terminal-green/20 font-black text-9xl select-none"> <img
                src={me.src}
                 alt="Profile"
                  className="w-full h-full object-cover opacity-80"/></div>
                <div className="absolute inset-0 bg-gradient-to-t from-terminal-green/20 to-transparent opacity-50" />
              </div>

              {/* Holographic Overlay Lines */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                  animate={{ y: ["0%", "100%", "0%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-full h-[2px] bg-terminal-green shadow-[0_0_10px_#00ff88] opacity-50"
                />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px]" />
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-terminal-cyan/50" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-terminal-green/50" />
            
            {/* Particles glow */}
            <div className="absolute -inset-10 bg-terminal-green/5 blur-[80px] rounded-full -z-10 animate-pulse-glow" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
