import React from 'react';
import { ArrowRight, BookOpen, Users, Trophy, Briefcase } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-100 to-primary-100">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-100 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-100 opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-primary-100 shadow-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary-500 mr-2"></span>
              <span className="text-sm font-semibold text-primary-700">#1 IT Institute in the City</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-navy-900 leading-tight mb-6">
              Build Your IT Career With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Euonus IT</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Learn job-ready skills from industry experts and start your career in web development, programming, design, editing, and digital marketing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a href="#courses" className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-xl text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-1">
                Explore Courses
                <ArrowRight className="ml-2 -mr-1" size={18} />
              </a>
              <a href="#contact" className="inline-flex justify-center items-center px-8 py-3.5 border-2 border-slate-200 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1 shadow-sm">
                Apply Now
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 w-full max-w-3xl border-t border-slate-200 pt-8">
              <div className="flex flex-col items-center lg:items-start">
                <BookOpen className="text-primary-500 mb-2" size={24} />
                <span className="text-2xl font-bold text-navy-900">10+</span>
                <span className="text-sm font-medium text-slate-500">Courses</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Users className="text-purple-500 mb-2" size={24} />
                <span className="text-2xl font-bold text-navy-900">Expert</span>
                <span className="text-sm font-medium text-slate-500">Trainers</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Trophy className="text-amber-500 mb-2" size={24} />
                <span className="text-2xl font-bold text-navy-900">100%</span>
                <span className="text-sm font-medium text-slate-500">Practical</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Briefcase className="text-green-500 mb-2" size={24} />
                <span className="text-2xl font-bold text-navy-900">Job</span>
                <span className="text-sm font-medium text-slate-500">Guidance</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative mt-10 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 transform lg:-rotate-2 transition-transform hover:rotate-0 duration-500">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students learning coding at Euonus IT" 
                className="w-full h-auto object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <Trophy className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Placement</p>
                  <p className="text-sm font-bold text-navy-900">Top Companies</p>
                </div>
              </div>
            </div>
            
            {/* Decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-dots pattern-dots text-primary-200 z-0"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
