import React from 'react';
import { Target, Users, BookOpen, Briefcase, FileCode, MessageSquare, FileText, Compass } from 'lucide-react';

const FeatureCard = ({ title, icon: Icon }) => (
  <div className="flex items-start p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary-200 hover:bg-white hover:shadow-lg transition-all duration-300 group">
    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
      <Icon size={24} />
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-bold text-navy-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-500">Industry standards aligned training focused on building core competencies.</p>
    </div>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    { title: "Practical Project Based Training", icon: Target },
    { title: "Experienced Trainers", icon: Users },
    { title: "Beginner Friendly Classes", icon: BookOpen },
    { title: "Internship Guidance", icon: Briefcase },
    { title: "Portfolio Building", icon: FileCode },
    { title: "Interview Preparation", icon: MessageSquare },
    { title: "Resume Support", icon: FileText },
    { title: "Career Guidance", icon: Compass },
  ];

  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">What Makes Euonus IT Different?</h2>
          <p className="text-lg text-slate-600">We don't just teach theory; we build careers. Here are the core benefits you get when joining our institute.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} title={feature.title} icon={feature.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
