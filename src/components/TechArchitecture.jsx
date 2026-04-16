import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const TechArchitecture = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">System <span className="text-gradient">Design</span> Philosophy</h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A visual overview of how I structure scalable, secure typical backend architectures.
          </p>
        </div>

        <div className="relative p-8 glass-card">
          <div className="hidden lg:block absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #4f46e5 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="flex flex-col items-center space-y-6 relative z-10">
            {/* Client Layer */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="w-full md:w-2/3 p-4 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-300 dark:border-slate-600 text-center shadow-lg"
            >
              <h3 className="font-bold text-lg">Client Applications (Web / Mobile)</h3>
            </motion.div>
            
            <ArrowDown className="text-slate-400 animate-bounce" />

            {/* Gateway & Security Layer */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full md:w-3/4 p-6 glass border-blue-500/50 rounded-xl flex flex-col md:flex-row justify-around items-center gap-4 text-center"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <h4 className="font-bold text-blue-600 dark:text-blue-400">API Gateway</h4>
                <p className="text-xs text-slate-500">Routing & Rate Limiting</p>
              </div>
              <div className="p-3 bg-indigo-500/10 rounded-lg">
                <h4 className="font-bold text-indigo-600 dark:text-indigo-400">OAuth2 / JWT</h4>
                <p className="text-xs text-slate-500">Keycloak & Spring Security</p>
              </div>
            </motion.div>

            <ArrowDown className="text-slate-400 animate-bounce" />

            {/* Services Layer */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="w-full grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl shadow border-t-2 border-green-500">
                <h4 className="font-bold mb-2">Auth Service</h4>
                <p className="text-xs text-slate-500">Handles permissions maps</p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl shadow border-t-2 border-purple-500 transform md:scale-105 relative z-10">
                <h4 className="font-bold mb-2">Core Business Logic (Spring Boot)</h4>
                <p className="text-xs text-slate-500">Transaction Management, JPA, Exceptions</p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-xl shadow border-t-2 border-pink-500">
                <h4 className="font-bold mb-2">AI / Async Workers</h4>
                <p className="text-xs text-slate-500">FastAPI, Python, Gemini</p>
              </div>
            </motion.div>

            <ArrowDown className="text-slate-400 animate-bounce" />

            {/* Persistence Layer */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="w-full md:w-2/3 p-4 glass border-orange-500/50 rounded-xl flex justify-around text-center"
            >
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white">PostgreSQL DB</h4>
                <p className="text-xs text-slate-500">Relational Persistence</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white">S3 / Cloud Storage</h4>
                <p className="text-xs text-slate-500">Assets & Files</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechArchitecture;
