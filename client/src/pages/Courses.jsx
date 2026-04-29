import React from 'react';
import { Code, Monitor, FileCode2, Database, Palette, Video, TrendingUp, Layers, Cpu, Server, Layout, MonitorPlay } from 'lucide-react';

const CourseCard = ({ title, desc, icon: Icon, colorClass }) => (
  <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
      <Icon size={28} className="text-white" />
    </div>
    <h3 className="text-xl font-bold text-navy-900 mb-3">{title}</h3>
    <p className="text-slate-600 text-sm mb-5 line-clamp-2">{desc}</p>
    <div className="flex justify-between items-center mt-auto border-t border-slate-100 pt-4">
      <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded-md">3-6 Months</span>
      <button className="text-sm font-semibold text-slate-700 hover:text-primary-600 flex items-center group-hover:underline">
        View Details <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
      </button>
    </div>
  </div>
);

const Courses = () => {
  const courses = [
    { title: "MERN Stack Dev", desc: "Master MongoDB, Express, React, Node.js and build full-stack apps.", icon: Layers, color: "bg-blue-500" },
    { title: "Web Development", desc: "Learn HTML, CSS, JS, and build responsive websites from scratch.", icon: Layout, color: "bg-orange-500" },
    { title: "Python Programming", desc: "Learn Python for data science, backend, and automation.", icon: FileCode2, color: "bg-yellow-500" },
    { title: "Laravel Development", desc: "Build robust backend applications using PHP and Laravel.", icon: Database, color: "bg-red-500" },
    { title: "Graphic Design", desc: "Master Photoshop, Illustrator, and create stunning visual concepts.", icon: Palette, color: "bg-purple-500" },
    { title: "Video Editing", desc: "Learn Premiere Pro and After Effects for professional video editing.", icon: Video, color: "bg-indigo-500" },
    { title: "Digital Marketing", desc: "Master SEO, SEM, Social Media, and grow businesses online.", icon: TrendingUp, color: "bg-green-500" },
    { title: "UI/UX Design", desc: "Learn Figma, wireframing, and design beautiful user experiences.", icon: Monitor, color: "bg-pink-500" },
    { title: "React JS", desc: "Build dynamic, fast, and modern frontend applications with React.", icon: Code, color: "bg-cyan-500" },
    { title: "Node JS", desc: "Learn backend development and build scalable APIs using Node.js.", icon: Server, color: "bg-emerald-500" },
    { title: "PHP & MySQL", desc: "Master server-side scripting and database management.", icon: Cpu, color: "bg-violet-500" },
    { title: "WordPress Dev", desc: "Create, customize, and manage beautiful websites with WordPress.", icon: MonitorPlay, color: "bg-sky-500" },
  ];

  return (
    <section id="courses" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Programs</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">Explore Our Top Courses</h2>
          <p className="text-lg text-slate-600">Choose from our industry-relevant courses designed to make you a skilled professional ready for the modern job market.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <CourseCard 
              key={idx}
              title={course.title}
              desc={course.desc}
              icon={course.icon}
              colorClass={course.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
