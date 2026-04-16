import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-[#0F172A] text-slate-900 dark:text-white pt-16 pb-8 border-t border-slate-200 dark:border-white/5 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-slate-200 dark:border-white/5 pb-12">
          
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold font-poppins text-gradient mb-2 inline-block">Priyanshu.DEV</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mt-2 text-sm leading-relaxed">
              Architecting secure backend services and scalable cloud integrations for the modern web.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/priyanshu1645" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-purple-500/20 rounded-full transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-1">
              <FaGithub className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
            </a>
            <a href="https://www.linkedin.com/in/priyanshu-singh-tomar-1279b5253/" target="_blank" rel="noreferrer" className="p-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-blue-500/20 rounded-full transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-1">
              <FaLinkedin className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
            <a href="mailto:reach.priyanshu@example.com" className="p-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-emerald-500/20 rounded-full transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-1">
              <FaEnvelope className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
            </a>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 dark:text-slate-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Priyanshu Singh Tomar. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed to Scale</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
