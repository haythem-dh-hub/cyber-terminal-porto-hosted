import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
      
      <footer className="py-12 border-t border-terminal-green/10 bg-terminal-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-terminal-gray">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span>&copy; 2026 Haythem_d.</span>
            <span className="opacity-30">|</span>
            <span className="text-terminal-green">BUILD_v2.0.4-STABLE</span>
          </div>
          <div className="flex space-x-6">
            <span className="hover:text-terminal-green cursor-default transition-colors">LATENCY: 14ms</span>
            <span className="hover:text-terminal-cyan cursor-default transition-colors">ENCRYPTION: AES-256</span>
            <span className="text-terminal-green">● SYSTEM_OPTIMAL</span>
          </div>
        </div>
      </footer>
    </>
  );
}
