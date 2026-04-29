import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 pt-20 pb-10 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div>
            <div className="text-3xl font-extrabold text-white tracking-tight mb-6">Euonus IT</div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering the next generation of tech professionals with industry-ready skills, practical training, and career guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-600 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 ">
              {['Home', 'About Us', 'Why Choose Us', 'Student Testimonials', 'Contact Us', 'Privacy Policy'].map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-primary-400 hover:text-yellow-600 transition-colors transition-colors flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Top Courses</h4>
            <ul className="space-y-3">
              {['MERN Stack Development', 'Python Programming', 'Graphic Design', 'Digital Marketing', 'UI/UX Design', 'Web Development'].map((course, i) => (
                <li key={i}>
                  <a href="#" className="hover:text-primary-400 hover:text-yellow-600 transition-colors transition-colors flex items-center group">
                    <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white hover:text-yellow-600 transition-colors text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-primary-500 mr-3 hover:text-yellow-600 transition-colors flex-shrink-0 mt-1" size={20} />
                <span className='hover:text-yellow-600 transition-colors'>Your City, India<br/>Tech Park Building, 4th Floor</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary-500 mr-3 hover:text-yellow-600 transition-colors flex-shrink-0" size={20} />
                <span className='hover:text-yellow-600 transition-colors'>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary-500 mr-3 hover:text-yellow-600 transition-colors flex-shrink-0" size={20} />
                <span className='hover:text-yellow-600 transition-colors'>info@euonusit.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2026 Euonus IT. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Future Tech Leaders</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
