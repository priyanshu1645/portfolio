import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Make sure to replace these with actual EmailJS keys!
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    // Simulated fake delay to represent email sending when no keys are provided
    if (serviceId === 'YOUR_SERVICE_ID') {
      setTimeout(() => {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 5000);
      }, 1500);
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          setStatus('success');
          e.target.reset();
          setTimeout(() => setStatus('idle'), 5000);
      }, (error) => {
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
      });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-100 dark:bg-[#0F172A]/50">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-poppins">Get In <span className="text-gradient">Touch</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6 relative">
             <div className="absolute inset-0 bg-blue-500 blur-sm opacity-50"></div>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Let's discuss architecture, cloud integrations, or your next big project.
          </p>
        </div>

        <motion.div 
          className="glass-card p-8 md:p-12 relative overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-500 to-blue-500"></div>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-8 mt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 tracking-wide">Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  required
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-slate-800 dark:text-white placeholder-slate-400 group"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 tracking-wide">Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-slate-800 dark:text-white placeholder-slate-400"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3 tracking-wide">Message</label>
              <textarea 
                name="message" 
                required
                rows="5"
                className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all text-slate-800 dark:text-white resize-none placeholder-slate-400"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="w-full cursor-pointer py-4 bg-gradient-primary text-white font-bold text-lg rounded-xl flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
            >
              {status === 'idle' && <><Send className="w-5 h-5"/> <span>Send Message</span></>}
              {status === 'sending' && <><span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5" /> <span>Sending...</span></>}
              {status === 'success' && <><CheckCircle2 className="w-5 h-5"/> <span>Message Sent!</span></>}
              {status === 'error' && <><AlertCircle className="w-5 h-5"/> <span>Error Sending</span></>}
            </button>
          </form>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-emerald-500/10 border border-emerald-500/50 text-emerald-500 px-6 py-3 rounded-full font-medium flex items-center shadow-lg backdrop-blur-md whitespace-nowrap"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" /> Message delivered successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-16 text-center text-slate-600 dark:text-slate-400 flex flex-col items-center justify-center space-y-4">
          <a href="mailto:reach.priyanshu@example.com" className="flex items-center text-lg hover:text-purple-500 transition-colors">
            <Mail className="w-6 h-6 mr-3"/> reach.priyanshu@example.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
