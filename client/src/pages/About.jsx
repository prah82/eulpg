import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const points = [
    "Industry-expert trainers",
    "Real-world projects",
    "100% Practical approach",
    "Placement assistance"
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl z-10 border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="About Euonus IT Institute"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Background offset element */}
            <div className="absolute top-8 -right-6 lg:-right-10 w-full h-full bg-primary-600 rounded-2xl z-0 opacity-10"></div>

            <div className="absolute -bottom-10 left-10 bg-white p-6 rounded-2xl shadow-xl z-20 border border-slate-100 hidden sm:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-black text-primary-600">5+</div>
                <div>
                  <div className="font-bold text-navy-900">Years of</div>
                  <div className="text-slate-500 font-medium">Excellence</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2 block">About Euonus IT</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-6 leading-tight">
              Empowering Students with <span className="text-primary-600">Future-Ready</span> Tech Skills
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Euonus IT is a professional IT training institute focused on practical learning, real projects, and career-oriented courses. Our mission is to help students, freshers, and working professionals build strong technical skills and become job-ready in the competitive tech industry.
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We bridge the gap between academic knowledge and industry requirements by providing hands-on training tailored to current market demands.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-center">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                  <span className="font-semibold text-navy-900">{point}</span>
                </div>
              ))}
            </div>

            <button className="bg-navy-900 hover:bg-gradient-to-r from-primary-700 to-purple-600 text-white px-8 py-3.5 rounded-xl font-medium shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 hover:shadow-2xl">
              Read Our Story
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
