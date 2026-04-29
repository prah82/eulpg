import React from 'react';

const Process = () => {
  const steps = [
    { num: "01", title: "Choose Your Course", desc: "Browse our diverse catalog and pick the skill you want to master." },
    { num: "02", title: "Learn With Experts", desc: "Attend interactive classes and learn concepts from industry veterans." },
    { num: "03", title: "Build Real Projects", desc: "Apply your knowledge by building industry-grade projects." },
    { num: "04", title: "Get Career Support", desc: "Prepare for interviews and get placement guidance to land your dream job." }
  ];

  return (
    <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-900 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Simple Steps To Start Your Career</h2>
          <p className="text-slate-300 text-lg">Our streamlined learning process is designed to take you from a beginner to an industry-ready professional.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector Line for Desktop */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-slate-700 -z-10 group-hover:bg-primary-500 transition-colors duration-500"></div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-2xl font-black text-primary-400 mb-6 group-hover:scale-110 group-hover:border-primary-500 group-hover:bg-primary-900 transition-all duration-300 shadow-xl">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
