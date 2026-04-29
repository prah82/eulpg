import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Sharma",
      course: "MERN Stack Development",
      text: "Joining Euonus IT was the best decision for my career. The practical training and live projects helped me clear my interviews with ease. I am now working as a Full Stack Developer.",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Priya Patel",
      course: "UI/UX Design",
      text: "The trainers are extremely knowledgeable and supportive. They focus on real industry requirements. The portfolio I built here helped me secure a great internship.",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Amit Kumar",
      course: "Python Programming",
      text: "Excellent institute for beginners. They start from the basics and take you to an advanced level. The mock interviews and resume building sessions were highly beneficial.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50 rounded-b-[100px] sm:rounded-b-[200px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-4">What Our Students Say</h2>
          <p className="text-lg text-slate-600">Discover the success stories of our students who have transformed their careers with us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-[0_10px_80px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] border border-slate-100 relative mt-10 transition-all duration-500 hover:-translate-y-3 group">
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white shadow-[0_5px_15px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-500 group-hover:scale-110">
                <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
              </div>

              <div className="text-primary-200 absolute top-8 right-8 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                <Quote size={40} className="opacity-40" />
              </div>

              <div className="pt-10 text-center">
                <div className="flex justify-center text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 italic mb-6">"{review.text}"</p>
                <h4 className="font-bold text-navy-900 text-lg">{review.name}</h4>
                <p className="text-sm font-medium text-primary-600">{review.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
