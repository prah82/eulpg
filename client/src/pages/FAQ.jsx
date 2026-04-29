import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    { q: "Which course is best for beginners?", a: "For absolute beginners, we recommend starting with our Web Development (HTML/CSS/JS) or Python Programming course. They lay a strong foundation for coding." },
    { q: "Do you provide practical training?", a: "Yes, our training methodology is 100% practical. You will be building real-world projects during the course rather than just learning theory." },
    { q: "Is placement guidance available?", a: "Absolutely. We provide comprehensive placement support including resume building, portfolio creation, mock interviews, and direct referrals to hiring companies." },
    { q: "Can I join without coding knowledge?", a: "Yes, most of our beginner-friendly courses are designed from scratch. No prior coding experience is required." },
    { q: "Are classes online or offline?", a: "We offer both online live classes and offline classroom sessions. You can choose the mode that best fits your schedule and location." }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600">Have queries? Find your answers below or contact us directly.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openIdx === idx ? 'border-primary-300 shadow-md ring-1 ring-primary-100' : 'border-slate-200 hover:border-slate-300'}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-semibold text-lg ${openIdx === idx ? 'text-primary-700' : 'text-navy-900'}`}>
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`flex-shrink-0 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-primary-600' : 'text-slate-400'}`} 
                  size={24} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
