import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const TechArchitecture = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-100 dark:bg-[#0F172A]/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-poppins">System <span className="text-gradient">Design</span> Philosophy</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6 relative">
             <div className="absolute inset-0 bg-blue-500 blur-sm opacity-50"></div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A visual overview of how I structure scalable, secure backend architectures.
          </p>
        </div>

        <div className="relative p-8 glass-card border border-slate-200 dark:border-white/10">
          <div className="hidden lg:block absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #8b5cf6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          
          <div className="flex flex-col items-center space-y-6 relative z-10 w-full">
            {/* Client Layer */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-2/3 p-6 glass hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 rounded-xl text-center cursor-default group"
            >
              <h3 className="font-bold text-lg font-poppins text-slate-800 dark:text-slate-200 group-hover:text-purple-500 transition-colors">Client Applications (Web / Mobile)</h3>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="text-purple-500" />
            </motion.div>

            {/* Gateway & Security Layer */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full md:w-3/4 p-6 glass border-blue-500/30 hover:border-blue-500/60 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 rounded-xl flex flex-col md:flex-row justify-around items-center gap-6 text-center cursor-default group"
            >
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 w-full md:w-1/2">
                <h4 className="font-bold text-blue-600 dark:text-blue-400 font-poppins">API Gateway</h4>
                <p className="text-sm text-slate-500 mt-1">Routing & Rate Limiting</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 w-full md:w-1/2">
                <h4 className="font-bold text-indigo-600 dark:text-indigo-400 font-poppins">OAuth2 / JWT</h4>
                <p className="text-sm text-slate-500 mt-1">Keycloak & Spring Security</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
            >
              <ArrowDown className="text-blue-500" />
            </motion.div>

            {/* Services Layer */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="w-full grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="p-6 glass border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300 rounded-xl cursor-default">
                <h4 className="font-bold mb-2 font-poppins text-slate-800 dark:text-slate-200">Auth Service</h4>
                <p className="text-sm text-slate-500">Handles permissions logic and token validation</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-500/[0.15] to-blue-500/[0.15] backdrop-blur-lg border border-purple-500/40 hover:border-purple-500/80 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300 transform md:scale-110 relative z-10 rounded-xl cursor-default">
                <h4 className="font-bold mb-2 font-poppins text-slate-800 dark:text-white">Core Business Logic</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">Spring Boot, Transaction Mgmt, Exceptions, Complex Mapping</p>
              </div>
              <div className="p-6 glass border-pink-500/30 hover:border-pink-500/60 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] transition-all duration-300 rounded-xl cursor-default">
                <h4 className="font-bold mb-2 font-poppins text-slate-800 dark:text-slate-200">AI / Async Workers</h4>
                <p className="text-sm text-slate-500">FastAPI, LLM integrations, Batch Processing Queue</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
            >
              <ArrowDown className="text-purple-500" />
            </motion.div>

            {/* Persistence Layer */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="w-full md:w-2/3 p-6 glass border-orange-500/30 hover:border-orange-500/60 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] transition-all duration-300 rounded-xl flex flex-col md:flex-row justify-around items-center gap-6 text-center cursor-default group"
            >
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 w-full md:w-1/2">
                <h4 className="font-bold font-poppins text-slate-800 dark:text-slate-200 group-hover:text-orange-500 transition-colors">PostgreSQL DB</h4>
                <p className="text-sm text-slate-500 mt-1">ACID Relational Persistence</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/5 w-full md:w-1/2">
                <h4 className="font-bold font-poppins text-slate-800 dark:text-slate-200 group-hover:text-orange-500 transition-colors">S3 / Cloud Storage</h4>
                <p className="text-sm text-slate-500 mt-1">Files, Models & Media</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechArchitecture;
