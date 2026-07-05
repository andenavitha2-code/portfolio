import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      
      {/* Contact Title Card */}
      <div className="bg-[#161920] border border-[#222731] rounded-2xl py-8 text-center">
        <h1 className="font-display text-5xl md:text-6xl tracking-widest text-white uppercase select-none">
          Contact
        </h1>
      </div>

      {/* Main Form container (Neon Yellow Card) */}
      <div className="bg-[#ccff00] text-black rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Heading and Info */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-none text-black">
              Get in Touch
            </h2>
            <p className="text-black/80 text-sm md:text-base font-semibold leading-relaxed max-w-md mx-auto lg:mx-0">
              If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.
            </p>
          </div>

          {/* Right Column: Interactive Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-5 w-full">
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-black">
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white border border-transparent rounded-xl px-4 py-3 text-sm text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
                placeholder="Rahul Kumar"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-black">
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white border border-transparent rounded-xl px-4 py-3 text-sm text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
                placeholder="rahul@example.com"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-black">
                Message
              </label>
              <textarea 
                id="message" 
                rows="6"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white border border-transparent rounded-xl px-4 py-3 text-sm text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Action button */}
            <div className="pt-2">
              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#0d0f12] text-white hover:bg-zinc-800 disabled:bg-zinc-700 font-bold px-6 py-4 rounded-xl text-sm uppercase tracking-wider hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-md flex items-center justify-center gap-2"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <svg className="w-5 h-5 text-[#ccff00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    Sent Successfully!
                  </>
                ) : 'Send'}
              </button>
            </div>
          </form>

        </div>
      </div>

    </div>
  );
}
