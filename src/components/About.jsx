import { motion } from 'framer-motion';
import { Server, Shield, Zap, GraduationCap } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Scalable Architecture',
      description: 'Designing distributed systems and robust APIs using Spring Boot and Hibernate.'
    },
    {
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
      title: 'Security First',
      description: 'Implementing robust RBAC, JWT, OAuth2, and Keycloak integrations.'
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Cloud Integration',
      description: 'Leveraging AWS services to deploy highly available and cost-effective solutions.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <GraduationCap className="text-blue-500"/> Educaton & Journey
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Currently pursuing my B.Tech in CSE (Cloud Computing) at VIT Bhopal (2022–2026). My focus lies entirely on backend engineering where I thrive on optimizing architectures, securing data flows, and bringing structure to complex applications.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                From developing QR-validated event platforms to high-concurrency AI systems, I enjoy the challenge of writing clean, maintainable, and highly efficient server-side code.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {cards.map((card, idx) => (
              <motion.div 
                key={idx}
                className={`glass-card p-6 ${idx === 2 ? 'md:col-span-2' : ''}`}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 bg-slate-100 dark:bg-slate-800/50 w-16 h-16 rounded-2xl flex items-center justify-center">
                  {card.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{card.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
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
