import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
     { name: 'Contact', href: '#contact' },
   { name: 'Home', href: '#home' },
    // { name: 'Courses', href: '#courses' },
    { name: 'About', href: '#about' },
    // { name: 'Why Choose Us', href: '#why-us' },
     
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const navHeight = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-lg shadow-md border-b border-slate-200/70 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-extrabold text-primary-600 tracking-tight">Euonus IT</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex   items-center space-x-14">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-md font-medium  transition-colors  hover:text-primary-600 ${scrolled ? 'text-slate-700' : 'text-slate-800'}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-primary-500/30 transform hover:-translate-y-0.5">
              Enroll Now
            </a>
          </div>








          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-800 hover:text-primary-600 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a href="#courses" onClick={(e) => scrollToSection(e, '#courses')} className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-medium shadow-md transition-transform active:scale-95">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
