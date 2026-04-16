import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, X, Database, ShieldCheck } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "Event Booking Backend System",
    summary: "Complete backend for event management with robust role-based access.",
    tech: ["Spring Boot", "Spring Security", "Keycloak", "PostgreSQL", "JWT"],
    architecture: "Microservice-oriented monolithic design dividing domain layers clearly. Spring Security handles JWT token parsing while Keycloak manages the overall Identity setup. Custom @ControllerAdvice handles all validation errors neatly.",
    backendHighlights: [
      "Secured API endpoints utilizing RBAC",
      "Event creation, user registration & deep relational mapping",
      "QR-based ticket validation algorithm",
      "Global exception handling for consistent error responses"
    ],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Smart Email Assistant",
    summary: "AI-generated email replies using Gemini API integrated via Chrome Extension.",
    tech: ["Spring Boot", "React", "Gemini API", "Material UI"],
    architecture: "The extension intercepts Gmail's DOM to fetch contexts, sending requests to a Spring Boot server. The server interfaces with Gemini AI via REST, applies rate-limiting, and returns parsed contextual responses to the client.",
    backendHighlights: [
      "Robust REST controller acting as a proxy to Gemini API",
      "Tone adjustment parsing logic (Formal/Friendly/Professional)",
      "High-speed parsing ensuring minimal latency",
      "Full-stack architecture deployed via Chrome Web Store"
    ],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "AI Video Generation & Scoring System",
    summary: "High-concurrency AI processing bridging Gemini Flash & Kling AI.",
    tech: ["FastAPI", "Python", "Gemini Flash", "Kling AI", "AsyncIO"],
    architecture: "Stateful async application built with FastAPI. It queues video generation requests, streams the status via webhooks/websockets, and processes automated QA scoring through pipelined multimodal LLMs.",
    backendHighlights: [
      "Handled high concurrent async requests using FastAPI",
      "Automated video evaluation matching against parameters",
      "Reduced manual QA workload by 60%",
      "Fault-tolerant worker queues for third-party AI APIs"
    ],
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "IPL Betting Platform",
    summary: "Simulation platform for live cricket betting with mock transactions.",
    tech: ["MERN Stack / Full-Stack", "JWT", "WebSockets"],
    architecture: "Client communicates via API and WebSockets for live odds updates. The backend enforces transactional integrity for simulated currency using ACID compliant processes.",
    backendHighlights: [
      "Simulated real-time betting logic and match resolution",
      "Secure authentication and balance deductions",
      "Real-time event broadcasting handling",
      "Concurrency control to prevent double-spending"
    ],
    github: "#",
    demo: "#"
  },
  {
    id: 5,
    title: "Brain Tumor Detection System",
    summary: "Machine learning application for analyzing MRI scans with high accuracy.",
    tech: ["Python", "TensorFlow/Keras", "Flask", "OpenCV"],
    architecture: "CNN based model exposed via a lightweight Flask web interface, handling image arrays, processing them through a trained model, and returning diagnostic probabilities.",
    backendHighlights: [
      "Image processing and tensor conversions in Python backend",
      "High accuracy CNN model integration",
      "Memory efficient batch processing",
      "REST endpoint for clinical software integration"
    ],
    github: "#",
    demo: null
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Complex backend architectures and full-stack solutions built to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={project.id}
              className="glass-card p-6 flex flex-col h-full cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0,3).map(t => (
                    <span key={t} className="text-xs px-2 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-slate-200 dark:bg-slate-800 text-slate-500 rounded">+{project.tech.length - 3}</span>
                  )}
                </div>
              </div>
              <button className="text-sm font-semibold flex items-center text-slate-600 dark:text-slate-300">
                Deep Dive <Layers className="ml-2 w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Deep Dive Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div 
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              />
              <motion.div 
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[90vh] overflow-y-auto glass glass-card shadow-2xl z-[101] p-8 m-4 rounded-2xl"
                initial={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
                animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                exit={{ opacity: 0, scale: 0.95, x: '-50%', y: '-50%' }}
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-200 dark:bg-slate-800 rounded-full hover:rotate-90 transition-transform"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <h2 className="text-2xl md:text-4xl font-bold mb-4 pr-10">{selectedProject.title}</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="text-sm px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-600 dark:text-blue-300 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-8">
                  <div className="bg-slate-100 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                    <h4 className="flex items-center text-lg font-bold mb-3"><Layers className="mr-2 text-purple-500"/> System Architecture</h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                      {selectedProject.architecture}
                    </p>
                  </div>

                  <div>
                    <h4 className="flex items-center text-lg font-bold mb-4"><Database className="mr-2 text-emerald-500"/> Backend & DB Highlights</h4>
                    <ul className="space-y-3">
                      {selectedProject.backendHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start">
                          <ShieldCheck className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 dark:text-slate-300 text-sm md:text-base">{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 flex gap-4 border-t border-slate-200 dark:border-slate-700 pt-6">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" className="flex items-center px-5 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                      <FaGithub className="w-5 h-5 mr-2" /> Repo
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} target="_blank" className="flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
