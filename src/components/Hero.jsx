import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FileDown, ChevronRight, Terminal } from 'lucide-react';
import { FaJava, FaAws } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(intervalId);
    }, 100);
    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{displayText}<span className="animate-pulse">|</span></span>;
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column */}
          <motion.div 
            className="flex-1 text-center lg:text-left pt-10 lg:pt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6 text-sm font-medium text-purple-600 dark:text-purple-400 border-purple-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Terminal className="w-4 h-4" />
              <span>Available for new opportunities</span>
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-4 leading-tight font-poppins">
              Hi, I'm <br className="hidden lg:block"/>
              <span className="text-gradient">Priyanshu</span> <motion.span 
                className="inline-block"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
              >
                👋
              </motion.span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-6 h-[40px]">
              <TypewriterText text="Java Backend Developer | Cloud Enthusiast" />
            </h2>
            
            <motion.p 
              className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              I build scalable backend systems, secure APIs, and real-world solutions that drive performance and reliability.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Link 
                to="projects" 
                smooth={true} 
                duration={500}
                className="group relative px-8 py-3.5 bg-gradient-primary text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
              >
                View Projects
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href="/resume.pdf" 
                target="_blank" 
                className="group px-8 py-3.5 border-2 border-purple-500/30 hover:border-purple-500 text-slate-800 dark:text-white font-semibold rounded-xl hover:bg-purple-500/10 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <FileDown className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="flex-1 w-full flex justify-center lg:justify-end xl:pr-10 z-10 hidden sm:flex pt-10 lg:pt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-72 h-72 lg:w-[400px] lg:h-[400px] animate-float">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-blue-500 to-emerald-400 blur-2xl opacity-40 animate-pulse"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-purple-500 to-blue-500 shadow-2xl glass">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0F172A] bg-slate-800">
                  <img 
                    src="/profile.jpg" 
                    alt="Priyanshu" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/600x600/1e293b/a855f7?text=Photo';
                    }}
                  />
                </div>
              </div>

              {/* Floating Tech Icons */}
              <motion.div 
                className="absolute top-10 -left-6 lg:-left-12 glass p-4 rounded-full shadow-lg border border-purple-500/30 text-purple-500"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <SiSpringboot className="w-8 h-8" />
              </motion.div>

              <motion.div 
                className="absolute top-10 -right-6 lg:-right-4 glass p-4 rounded-full shadow-lg border border-orange-500/30 text-orange-500"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <FaJava className="w-8 h-8" />
              </motion.div>

              <motion.div 
                className="absolute bottom-10 left-10 lg:left-0 glass p-4 rounded-full shadow-lg border border-blue-500/30 text-blue-500"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <FaAws className="w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
