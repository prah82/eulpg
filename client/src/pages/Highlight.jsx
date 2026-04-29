import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';

const Highlight = () => {
  const stack = [
    "HTML, CSS, JavaScript",
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "REST API",
    "Authentication",
    "Deployment Basics"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Content */}
            <div className="lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-700 font-bold text-xs mb-6 w-max uppercase tracking-wider">
                <Zap size={14} className="mr-1" />
                Most Popular Program
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-extrabold text-navy-900 mb-4">
                Master the <span className="text-primary-600">MERN Stack</span> Development
              </h2>
              
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Become a highly demanded Full-Stack Developer. Learn to build complex, scalable, and fully functional web applications from scratch using the most popular JavaScript stack.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
                {stack.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircle2 className="text-primary-500 mr-2 flex-shrink-0" size={20} />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary-500/30 self-start hover:-translate-y-1">
                Start MERN Stack Course
              </button>
            </div>
            
            {/* Right Image area */}
            <div className="lg:w-1/2 relative min-h-[400px] bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="React and Code" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <h4 className="text-white font-bold text-xl mb-2">Build 5+ Real Projects</h4>
                  <p className="text-slate-300">Including E-commerce, Social Media App, and Admin Dashboards.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlight;
