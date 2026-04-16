import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-slate-800 pb-12">
          
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gradient mb-2">Priyanshu.DEV</h2>
            <p className="text-slate-400 max-w-sm">
              Architecting secure backend services and scalable cloud integrations.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/priyanshu1645" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors group">
              <FaGithub className="w-5 h-5 text-slate-300 group-hover:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/priyanshu-singh-tomar-1279b5253/" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors group">
              <FaLinkedin className="w-5 h-5 text-slate-300 group-hover:text-white" />
            </a>
            <a href="mailto:priyanshusinghtomar1645@gmail.com" className="p-3 bg-slate-800 hover:bg-blue-600 rounded-full transition-colors group">
              <FaEnvelope className="w-5 h-5 text-slate-300 group-hover:text-white" />
            </a>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Priyanshu Singh Tomar. All rights reserved.</p>
          
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            className="mt-4 md:mt-0 p-2 bg-slate-800 rounded-lg hover:bg-blue-600 hover:text-white transition-colors cursor-pointer flex items-center gap-2"
          >
            Back to Top <ArrowUp className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
