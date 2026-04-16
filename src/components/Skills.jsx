import { motion } from 'framer-motion';
import { Database, Server, Code, Cloud, Lock, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Core",
      icon: <Server className="w-6 h-6 mb-3 text-blue-500" />,
      skills: ["Java (Core, 8+)", "Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs", "Python"]
    },
    {
      title: "Security & Auth",
      icon: <Lock className="w-6 h-6 mb-3 text-indigo-500" />,
      skills: ["Spring Security", "OAuth2", "JWT", "Keycloak", "RBAC"]
    },
    {
      title: "Databases & Data",
      icon: <Database className="w-6 h-6 mb-3 text-purple-500" />,
      skills: ["PostgreSQL", "SQL Complex Queries", "Database Design", "JPA Entity Mapping"]
    },
    {
      title: "Cloud & Ops",
      icon: <Cloud className="w-6 h-6 mb-3 text-sky-500" />,
      skills: ["AWS Essentials", "Cloud Computing", "Deployment", "High Concurrency"]
    },
    {
      title: "Tools & Workflow",
      icon: <GitBranch className="w-6 h-6 mb-3 text-emerald-500" />,
      skills: ["Git / GitHub", "Maven", "Postman", "Agile / Scrum"]
    },
    {
      title: "AI Integration",
      icon: <Code className="w-6 h-6 mb-3 text-pink-500" />,
      skills: ["Gemini API", "Kling AI", "FastAPI AI Bridges", "Machine Learning Basics"]
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
    <section id="skills" className="py-20 bg-slate-100/50 dark:bg-slate-900/20 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive toolkit for building secure, scalable, and robust backend systems.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((cat, index) => (
            <motion.div key={index} variants={item} className="glass-card p-6 border-t-4 border-t-blue-500">
              {cat.icon}
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-100">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 text-sm bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-colors cursor-default"
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
