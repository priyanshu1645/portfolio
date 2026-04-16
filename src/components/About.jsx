import { motion } from 'framer-motion';
import { Server, Shield, Zap, GraduationCap, Trophy } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Server className="w-8 h-8 text-white" />,
      title: 'Scalable Architecture',
      description: 'Designing distributed systems and robust APIs using Spring Boot and Hibernate.'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Security First',
      description: 'Implementing robust RBAC, JWT, OAuth2, and Keycloak integrations.'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Cloud Integration',
      description: 'Leveraging AWS services to deploy highly available and cost-effective solutions.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-poppins">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full relative">
             <div className="absolute inset-0 bg-blue-500 blur-sm opacity-50"></div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 md:p-10 relative overflow-hidden group border border-slate-200 dark:border-white/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-[100px] transition-transform duration-500 group-hover:scale-110"></div>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 font-poppins text-slate-800 dark:text-white">
                <GraduationCap className="text-purple-500 w-8 h-8" /> Education & Journey
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                Currently pursuing my B.Tech in CSE (Cloud Computing) at VIT Bhopal (2022–2026). My focus lies entirely on backend engineering where I thrive on optimizing architectures, securing data flows, and bringing structure to complex applications.
              </p>
              <div className="h-px w-full bg-slate-200 dark:bg-white/10 my-6"></div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3 font-poppins text-slate-800 dark:text-white">
                <Trophy className="text-blue-500 w-6 h-6" /> What Drives Me
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                From developing QR-validated event platforms to high-concurrency AI systems, I enjoy the challenge of writing clean, maintainable, and highly efficient server-side code.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                className={`glass glass-card p-8 border border-slate-200 dark:border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300 group ${idx === 2 ? 'sm:col-span-2' : ''}`}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 bg-gradient-to-br from-purple-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-shadow duration-300 transform group-hover:scale-110">
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 font-poppins text-slate-800 dark:text-white group-hover:text-purple-500 transition-colors">{card.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
