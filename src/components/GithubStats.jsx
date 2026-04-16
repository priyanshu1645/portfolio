import { motion } from 'framer-motion';
import { GitCommit, GitPullRequest, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const GithubStats = () => {
  const stats = [
    { label: "Total Commits (2024)", value: "1,204+", icon: <GitCommit className="text-emerald-500 w-8 h-8" /> },
    { label: "Pull Requests", value: "85", icon: <GitPullRequest className="text-blue-500 w-8 h-8" /> },
    { label: "Stars Earned", value: "24", icon: <Star className="text-yellow-500 w-8 h-8" /> }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
            <FaGithub className="w-10 h-10" /> GitHub <span className="text-gradient">Activity</span>
          </h2>
          <div className="w-20 h-1 bg-slate-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My open-source contributions and version control footprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              className="glass-card p-6 flex flex-col items-center justify-center text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-full mb-4">
                {stat.icon}
              </div>
              <h4 className="text-4xl font-bold mb-2">{stat.value}</h4>
              <p className="text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="glass-card p-4 overflow-hidden flex justify-center bg-white/50 dark:bg-slate-900/50"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* GitHub Streak API */}
          <img 
            src="https://github-readme-streak-stats.herokuapp.com/?user=priyanshu1645&theme=tokyonight&hide_border=true&border_radius=10&background=transparent" 
            alt="Priyanshu's Github Contribution Streak" 
            className="w-full max-w-2xl opacity-90 hover:opacity-100 transition-opacity"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;
