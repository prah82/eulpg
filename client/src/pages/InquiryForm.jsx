import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    city: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const courses = [
    "MERN Stack Development",
    "Web Development",
    "Python Programming",
    "Laravel Development",
    "Graphic Design",
    "Video Editing",
    "Digital Marketing",
    "UI/UX Design",
    "React JS",
    "Node JS",
    "PHP & MySQL",
    "WordPress Development"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5000/api/mail/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || errorData.error || 'Failed to submit inquiry');
      }

      const data = await response.json();
      console.log('Inquiry submitted:', data);

      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', course: '', city: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Submit error:', error);
      alert('Failed to submit inquiry: ' + error.message);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Text */}
          <div className="lg:w-5/12 flex flex-col justify-center">
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Admission</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 mb-6">
              Ready to Upgrade Your Skills?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Fill out the inquiry form and our admission counselor will get back to you with course details, batch timings, and fee structure.
            </p>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-6">
              <h4 className="font-bold text-navy-900 mb-2">Need immediate assistance?</h4>
              <p className="text-slate-600 mb-4">Call us directly to speak with our experts.</p>
              <a href="tel:+910000000000" className="text-primary-600 font-extrabold text-xl hover:underline">
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:w-7/12">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100 relative">
              
              {isSubmitted && (
                <div className="absolute inset-0 z-10 bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-300">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="text-green-500 w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Inquiry Submitted!</h3>
                  <p className="text-slate-600 text-lg">Thank you for reaching out. Our team will contact you shortly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} method='post' className="space-y-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">City</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Your City" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Select Course <span className="text-red-500">*</span></label>
                  <select required name="course" value={formData.course} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white appearance-none">
                    <option value="" disabled>-- Select a Course --</option>
                    {courses.map((c, i) => <option key={i} value={c}>{c}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message (Optional)</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Any specific requirements or questions?" className="w-full px-2  py-0 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-slate-50 focus:bg-white resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-navy-900 hover:bg-primary-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-navy-900/20 hover:shadow-primary-600/30 flex items-center justify-center group">
                  Submit Inquiry
                  <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
