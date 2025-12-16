import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-fade-in relative">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 lg:py-32">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
              SafeMeds
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Innovation at your fingertips. The future of smart technology is here today, designed to elevate your everyday experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/contact" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30 text-center inline-block focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            {/* Device Image Placeholder */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-full group-hover:bg-blue-500/30 transition-colors duration-500"></div>
              <img 
                src="https://via.placeholder.com/600x400" 
                alt="SafeMeds Device" 
                className="relative rounded-2xl shadow-2xl border border-slate-700 z-10 transform rotate-[-2deg] group-hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">About the Device</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            The SafeMeds device is the culmination of years of research and engineering, built to provide an unparalleled user experience through adaptive intelligence. With its sleek ergonomic design and robust build quality, it seamlessly integrates into both your professional workflow and personal life.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Features</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="mt-1 flex-shrink-0">
                <i className="fa-solid fa-check-circle text-green-500 text-2xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Advanced Processing Unit</h3>
                <p className="text-slate-600">Next-generation silicon delivering lightning-fast speeds for all your multitasking needs.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
               <div className="mt-1 flex-shrink-0">
                <i className="fa-solid fa-check-circle text-green-500 text-2xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">All-Day Battery Life</h3>
                <p className="text-slate-600">Optimized power management ensures your device stays active from morning coffee to late-night work.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
               <div className="mt-1 flex-shrink-0">
                <i className="fa-solid fa-check-circle text-green-500 text-2xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Military-Grade Security</h3>
                <p className="text-slate-600">End-to-end encryption and biometric authentication to keep your personal data strictly private.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
               <div className="mt-1 flex-shrink-0">
                <i className="fa-solid fa-check-circle text-green-500 text-2xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">Universal Connectivity</h3>
                <p className="text-slate-600">Seamlessly connects with 5G, Wi-Fi 6E, and all your smart home peripherals instantly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">See it in Action</h2>
          <div className="max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden bg-slate-900 focus-within:ring-4 focus-within:ring-blue-500/50">
            <video 
              controls 
              className="w-full h-auto aspect-video focus:outline-none"
              poster="https://via.placeholder.com/1200x675?text=SafeMeds+Demo+Video"
            >
              <source src="video/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Fixed Bottom Right Arrow - Only on Home Page */}
      <Link 
        to="/contact" 
        className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-700 hover:scale-110 transition-all duration-300 z-50 group border-2 border-white/20 focus:outline-none focus:ring-4 focus:ring-blue-600/50"
        aria-label="Go to Contact Page"
      >
        <i className="fa-solid fa-arrow-right text-lg group-hover:translate-x-1 transition-transform"></i>
      </Link>
    </div>
  );
};

export default Home;