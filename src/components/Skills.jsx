import { motion } from 'framer-motion';
import { Database, Server, Code, Cloud, Lock, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Core",
      icon: <Server className="w-8 h-8 mb-4 text-purple-500 group-hover:scale-110 transition-transform duration-300" />,
      skills: ["Java (Core, 8+)", "Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs", "Python"]
    },
    {
      title: "Security & Auth",
      icon: <Lock className="w-8 h-8 mb-4 text-blue-500 group-hover:scale-110 transition-transform duration-300" />,
      skills: ["Spring Security", "OAuth2", "JWT", "Keycloak", "RBAC"]
    },
    {
      title: "Databases & Data",
      icon: <Database className="w-8 h-8 mb-4 text-emerald-500 group-hover:scale-110 transition-transform duration-300" />,
      skills: ["PostgreSQL", "SQL Complex Queries", "Database Design", "JPA Entity Mapping"]
    },
    {
      title: "Cloud & Ops",
      icon: <Cloud className="w-8 h-8 mb-4 text-sky-500 group-hover:scale-110 transition-transform duration-300" />,
      skills: ["AWS Essentials", "Cloud Computing", "Deployment", "High Concurrency"]
    },
    {
      title: "Tools & Workflow",
      icon: <GitBranch className="w-8 h-8 mb-4 text-orange-500 group-hover:scale-110 transition-transform duration-300" />,
      skills: ["Git / GitHub", "Maven", "Postman", "Agile / Scrum"]
    },
    {
      title: "AI Integration",
      icon: <Code className="w-8 h-8 mb-4 text-pink-500 group-hover:scale-110 transition-transform duration-300" />,
      skills: ["Gemini API", "Kling AI", "FastAPI AI Bridges", "Machine Learning"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-[#0F172A] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-poppins">Technical <span className="text-gradient">Arsenal</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6 relative">
             <div className="absolute inset-0 bg-blue-500 blur-sm opacity-50"></div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive toolkit for building secure, scalable, and robust backend systems.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((cat, index) => (
            <motion.div 
              key={index} 
              variants={item} 
              className="glass-card p-8 group hover:-translate-y-2 border border-slate-200 dark:border-white/10 hover:border-purple-500/50 hover:shadow-purple-500/10 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle gradient glow in background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 -z-10"></div>
              
              {cat.icon}
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white font-poppins group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 text-xs font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 rounded-lg group-hover:bg-purple-500/10 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors cursor-default border border-transparent dark:group-hover:border-purple-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
