import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FileDown, ChevronRight, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <motion.div 
            className="flex-1 text-center lg:text-left z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6 text-sm font-medium text-blue-500 dark:text-blue-400">
              <Terminal className="w-4 h-4" />
              <span>Available for new opportunities</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
              Hi, I'm <span className="text-gradient hover:scale-105 inline-block transition-transform duration-300">Priyanshu</span>
            </h1>
            
            <h2 className="text-2xl lg:text-4xl font-bold text-slate-600 dark:text-slate-300 mb-6">
              Java Backend Developer <br/> & Cloud Enthusiast
            </h2>
            
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
              I architect robust, scalable backend systems and secure APIs. Specializing in Spring Boot, cloud integrations, and high-performance microservices.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Link 
                to="projects" 
                smooth={true} 
                duration={500}
                className="group relative px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
              >
                View Projects
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a 
                href="/resume.pdf" 
                target="_blank" 
                className="group px-8 py-3 glass-card hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-semibold rounded-lg transition-all flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <FileDown className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 hidden lg:flex justify-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-96 xl:w-[320px] xl:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-[2rem] transform rotate-6 border border-slate-700/50 glass"></div>
              <div className="absolute inset-0 bg-slate-900 rounded-[2rem] transform -rotate-3 border border-slate-700/50 shadow-2xl flex items-center justify-center overflow-hidden group">
                <img 
                  src="/profile.jpg" 
                  alt="Priyanshu" 
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x800/1e293b/38bdf8?text=Your+Photo\nHere';
                  }}
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
