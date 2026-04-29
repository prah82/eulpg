import React from 'react';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Courses from './pages/Courses';
import About from './pages/About';
import WhyChooseUs from './pages/WhyChooseUs';
import Process from './pages/Process';
import Highlight from './pages/Highlight';
import InquiryForm from './pages/InquiryForm';
import Testimonials from './pages/Testimonials';
import FAQ from './pages/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      <main>
          <InquiryForm />
        <Hero />
       <Process />
        {/* <Courses /> */}
        <About />
        {/* <WhyChooseUs /> */}
       
        {/* <Highlight /> */}
        
        {/* <Testimonials /> */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
