import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct Mailto Link
    const subject = encodeURIComponent(`Contact Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:support@safemeds.com?subject=${subject}&body=${body}`;

    // Open mail client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="animate-fade-in">
      {/* Contact Form Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
            <p className="text-lg text-slate-600">
              Have questions about the SafeMeds device? We're here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">
            
            {/* Contact Info Sidebar */}
            <div className="bg-slate-900 text-white p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-slate-300 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-slate-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-slate-300">support@safemeds.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 w-8 h-8 rounded bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <p className="font-semibold">Headquarters</p>
                      <p className="text-slate-300">
                        123 Innovation Drive,<br />
                        Tech Valley, CA 94043
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm text-slate-400 mb-4">Follow us</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 group focus:outline-none focus:ring-4 focus:ring-blue-600/50"
                >
                  Send Message
                  <i className="fa-solid fa-paper-plane group-hover:translate-x-1 transition-transform"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Device Specifications Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Device Specifications</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-microchip text-xl"></i>
              </div>
              <h3 className="font-bold text-lg mb-2">Processor</h3>
              <p className="text-slate-600 text-sm">SafeMeds Quantum Core X1 with Neural Engine</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-mobile-screen text-xl"></i>
              </div>
              <h3 className="font-bold text-lg mb-2">Display</h3>
              <p className="text-slate-600 text-sm">6.7" Super OLED Infinite Edge (120Hz)</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-memory text-xl"></i>
              </div>
              <h3 className="font-bold text-lg mb-2">Storage</h3>
              <p className="text-slate-600 text-sm">2TB Holographic Drive (Gen 5 NVMe)</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-slate-800 hover:text-blue-600 transition-colors focus:outline-none">
                What is the warranty period for SafeMeds devices?
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-blue-500">
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                Every SafeMeds device comes with a comprehensive 2-year manufacturer's warranty covering all hardware defects. Extended coverage plans are available for accidental damage protection.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-slate-800 hover:text-blue-600 transition-colors focus:outline-none">
                Does the device work with international carriers?
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-blue-500">
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                Yes, the SafeMeds device is fully unlocked and supports global 5G bands, ensuring seamless connectivity in over 190 countries worldwide without needing to swap SIM cards.
              </div>
            </details>

            <details className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-slate-800 hover:text-blue-600 transition-colors focus:outline-none">
                Is the SafeMeds device water and dust resistant?
                <span className="transform group-open:rotate-180 transition-transform duration-300 text-blue-500">
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                Absolutely. It features an IP68 rating, meaning it can withstand submersion in up to 1.5 meters of fresh water for up to 30 minutes and is completely protected against dust ingress.
              </div>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;