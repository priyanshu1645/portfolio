import { motion } from 'framer-motion';
import { GitCommit, GitPullRequest, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const GithubStats = () => {
  const stats = [
    { label: "Total Commits (Cur)", value: "1,204+", icon: <GitCommit className="text-emerald-400 w-8 h-8" /> },
    { label: "Pull Requests", value: "85", icon: <GitPullRequest className="text-blue-400 w-8 h-8" /> },
    { label: "Stars Earned", value: "24", icon: <Star className="text-yellow-400 w-8 h-8" /> }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 dark:bg-[#0F172A]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          className="glass-card p-8 md:p-12 border border-slate-200 dark:border-white/10 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Subtle glow behind the card content */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4 font-poppins text-slate-900 dark:text-white">
              <FaGithub className="w-10 h-10 text-slate-800 dark:text-white" /> GitHub <span className="text-gradient">Activity</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6 relative">
               <div className="absolute inset-0 bg-blue-500 blur-sm opacity-50"></div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              My open-source contributions and version control footprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative z-10">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                className="glass p-8 rounded-2xl flex flex-col items-center justify-center text-center border border-slate-200 dark:border-white/10 hover:border-purple-500/50 hover:-translate-y-2 transition-all duration-300 group"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="bg-slate-100 dark:bg-white/5 p-5 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 border border-transparent dark:group-hover:border-white/10 shadow-lg shadow-black/5">
                  {stat.icon}
                </div>
                <h4 className="text-5xl font-bold mb-3 font-poppins text-slate-800 dark:text-white">{stat.value}</h4>
                <p className="text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="w-full glass p-4 md:p-8 rounded-2xl overflow-hidden flex justify-center bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 shadow-inner relative z-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <img 
              src="https://github-readme-streak-stats.herokuapp.com/?user=priyanshu1645&theme=tokyonight&hide_border=true&border_radius=10&background=transparent" 
              alt="Priyanshu's Github Contribution Streak" 
              className="w-full max-w-3xl opacity-90 hover:opacity-100 transition-opacity drop-shadow-xl"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;
