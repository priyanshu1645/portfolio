import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, X, Database, ShieldCheck, Zap, Activity } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "Event Booking Backend System",
    summary: "Complete backend for event management with robust role-based access.",
    tech: ["Spring Boot", "Spring Security", "Keycloak", "PostgreSQL", "JWT"],
    architecture: "Microservice-oriented monolithic design dividing domain layers clearly. Spring Security handles JWT token parsing while Keycloak manages the overall Identity setup. Custom @ControllerAdvice handles all validation errors neatly.",
    problem: "Managing concurrent ticket bookings while enforcing strict role-based access control was causing data races and insecure endpoint exposures.",
    solution: "Implemented a robust Spring Boot backend centralized through Keycloak. Used optimistic locking on PostgreSQL rows to prevent overbooking.",
    backendHighlights: [
      "Secured API endpoints utilizing RBAC via Keycloak",
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
    problem: "Composing professional emails dynamically based on previous contexts is time-consuming for users.",
    solution: "Created an AI proxy service layer in Spring Boot to intelligently parse context and stream appropriate tone-adjusted responses.",
    backendHighlights: [
      "Robust REST controller acting as a proxy to Gemini API",
      "Tone adjustment parsing logic (Formal/Friendly/Professional)",
      "High-speed parsing ensuring minimal latency",
      "Built resilient rate-limiting mechanisms"
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
    problem: "Manual QA for generated videos was tedious. Existing synchronous pipelines blocked entire API threads.",
    solution: "Transitioned to an asynchronous FastAPI architecture leveraging background tasks and persistent queues for heavy AI processing.",
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
    problem: "Real-time odds updating caused frontend desynchronization and potential double spending during transaction execution.",
    solution: "Utilized WebSockets for sub-second odds broadcasting, and implemented transactional sessions in MongoDB to ensure state integrity.",
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
    problem: "Analyzing raw MRI sets automatically required an extensible web interface that doctors could intuitively use.",
    solution: "Built an efficient Flask middleware bridging the heavy TensorFlow computation model with a simplified web entry point.",
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

  // Lock body scroll when modal is open
  if (typeof window !== 'undefined') {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-poppins">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6 relative">
             <div className="absolute inset-0 bg-blue-500 blur-sm opacity-50"></div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Complex backend architectures and full-stack solutions built to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={project.id}
              className="glass-card p-6 flex flex-col h-full cursor-pointer group border border-slate-200 dark:border-white/10 hover:border-purple-500/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="flex-grow z-10">
                <h3 className="text-xl font-bold mb-3 font-poppins group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0,3).map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 rounded font-medium group-hover:bg-purple-500/10 group-hover:text-purple-600 dark:group-hover:text-purple-300 group-hover:border-purple-500/20 transition-colors">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2.5 py-1 bg-slate-200 dark:bg-slate-800 text-slate-500 rounded border border-transparent">+{project.tech.length - 3}</span>
                  )}
                </div>
              </div>
              <div className="mt-auto z-10 pt-4 border-t border-slate-100 dark:border-white/5">
                <button className="text-sm font-semibold flex items-center text-slate-600 dark:text-slate-300 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors">
                  Deep Dive <Layers className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deep Dive Modal */}
        <AnimatePresence>
          {selectedProject && (
            <>
              <motion.div 
                className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[100]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              />
              <motion.div 
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-purple-500/20 shadow-2xl z-[101] p-0 md:p-0 rounded-2xl flex flex-col hide-scrollbar"
                initial={{ opacity: 0, scale: 0.9, y: '-45%' }}
                animate={{ opacity: 1, scale: 1, y: '-50%' }}
                exit={{ opacity: 0, scale: 0.9, y: '-45%' }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                {/* Modal Header */}
                <div className="sticky top-0 z-20 bg-slate-50/90 dark:bg-[#0F172A]/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 p-6 md:px-10 flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-poppins text-slate-900 dark:text-white mb-2">{selectedProject.title}</h2>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map(t => (
                        <span key={t} className="text-xs font-medium px-3 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-white rounded-full hover:bg-red-500 hover:text-white dark:hover:bg-red-500 transition-colors ml-4 flex-shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Modal Body */}
                <div className="p-6 md:p-10 space-y-10">
                  {/* Overview Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <h4 className="flex items-center text-lg font-bold font-poppins text-slate-800 dark:text-slate-200">
                        <Activity className="w-5 h-5 mr-2 text-blue-500"/> Problem Statement
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed bg-slate-100 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10">
                        {selectedProject.problem}
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="flex items-center text-lg font-bold font-poppins text-slate-800 dark:text-slate-200">
                        <Zap className="w-5 h-5 mr-2 text-yellow-500"/> Solution Approach
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed bg-slate-100 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Architecture */}
                  <div className="bg-gradient-to-br from-purple-500/[0.05] to-blue-500/[0.05] border border-purple-500/20 p-6 rounded-xl">
                    <h4 className="flex items-center text-lg font-bold font-poppins mb-3 text-slate-800 dark:text-slate-200">
                      <Layers className="w-5 h-5 mr-2 text-purple-500"/> Architectural Flow
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                      {selectedProject.architecture}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="flex items-center text-lg font-bold font-poppins mb-4 text-slate-800 dark:text-slate-200">
                      <Database className="w-5 h-5 mr-2 text-emerald-500"/> Core Backend Implementations
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.backendHighlights.map((hl, i) => (
                        <div key={i} className="flex items-start bg-slate-50 dark:bg-[#0F172A] border border-slate-200 dark:border-white/10 p-4 rounded-xl transition-transform hover:-translate-y-1">
                          <ShieldCheck className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="mt-auto bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-white/10 p-6 md:px-10 flex gap-4 flex-wrap">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" className="flex-1 min-w-[140px] flex items-center justify-center px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white dark:bg-slate-800 dark:hover:bg-slate-700 font-medium rounded-xl transition-all shadow-lg hover:shadow-xl">
                      <FaGithub className="w-5 h-5 mr-2" /> View Repository
                    </a>
                  )}
                  {selectedProject.demo && (
                    <a href={selectedProject.demo} target="_blank" className="flex-1 min-w-[140px] flex items-center justify-center px-6 py-3 bg-gradient-primary text-white font-medium rounded-xl transition-all shadow-lg hover:shadow-xl">
                      <ExternalLink className="w-5 h-5 mr-2" /> View Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </section>
  );
};

export default Projects;
