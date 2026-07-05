import React from 'react';
import TechIcon from '../components/TechIcon';
import ProjectMockup from '../components/ProjectMockup';
import { projects } from '../data/projects';
import herobackground from "../assets/herobackground.png";

export default function Home({ setPage, setSelectedProjectIndex }) {
  // Only display the first 3 projects for the "Recent Projects" section
  const recentProjects = projects.slice(0, 3);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-12 animate-fade-in">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center overflow-hidden py-16">
        {/* Glowing background circles */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#ccff00] opacity-5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#ccff00] opacity-5 blur-3xl translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute inset-0 z-0">
            <img 
            src={herobackground}
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30" />
        

          {/* Social connections */}
          <div className="flex gap-6 mt-8">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#ccff00] hover:scale-110 active:scale-95 transition-transform duration-200" title="LinkedIn">
              <TechIcon name="linkedin" className="w-8 h-8" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#ccff00] hover:scale-110 active:scale-95 transition-transform duration-200" title="GitHub">
              <TechIcon name="github" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION (Bright Lime Green Card) */}
      <section className="w-full">
        <div className="bg-[#ccff00] text-black rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
          {/* Subtle light overlay on hover */}
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
            <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-none text-black">
              About
            </h2>
            <p className="text-black/80 text-sm sm:text-base md:text-lg leading-relaxed font-medium max-w-3xl">
              Hi there! I'm Rahul, a third-year Computer Science student at SRM Institute with a passion for crafting user-centric experiences. I specialize in UI/UX design, front-end development, and graphic design, with expertise in HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, QML, and C++. I thrive on collaboration and bring experience in agile scrum methodologies. Beyond coding, I enjoy photography, graphic design, and exploring music. Let's connect and bring your digital visions to life.
            </p>
            <div className="w-full flex justify-end">
              <button 
                onClick={() => setPage('about')}
                className="bg-[#0d0f12] text-[#ccff00] text-xs font-bold px-6 py-3 rounded-xl uppercase tracking-wider hover:bg-zinc-800 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
              >
                More...
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT PROJECTS */}
      <section className="w-full space-y-8">
        <div className="flex items-center justify-between border-b border-[#222731] pb-4">
          <h2 className="font-display text-3xl sm:text-4xl tracking-wide uppercase">
            Recent Projects
          </h2>
          <button 
            onClick={() => setPage('projects')}
            className="flex items-center gap-2 text-zinc-400 hover:text-[#ccff00] text-sm font-semibold group transition-colors duration-200"
          >
            See all 
            <span className="group-hover:translate-x-1 transition-transform duration-200">&rarr;</span>
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentProjects.map((project, idx) => (
            <div 
              key={project.id}
              onClick={() => {
                setSelectedProjectIndex(idx);
                setPage('project-detail');
              }}
              className="bg-[#161920] border border-[#222731] rounded-2xl overflow-hidden hover:border-[#ccff00]/50 hover:shadow-[0_10px_25px_-5px_rgba(204,255,0,0.05)] cursor-pointer group transition-all duration-300 flex flex-col"
            >
              {/* High-fidelity custom CSS mockup instead of broken image placeholders */}
              <ProjectMockup type={project.imageType} className="w-full h-48" />
              
              {/* Card Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#ccff00] transition-colors duration-200">
                    {project.title}
                  </h3>
                  <span className="text-[10px] text-[#ccff00] font-bold tracking-widest uppercase mt-1 block">
                    {project.type}
                  </span>
                  <p className="text-zinc-400 text-xs mt-3 leading-relaxed line-clamp-3">
                    {project.tagline}
                  </p>
                </div>
                
                {/* Tech Stack Icons */}
                <div className="flex gap-2.5 mt-6 border-t border-[#222731] pt-4">
                  {project.tech.map((t) => (
                    <div key={t} className="w-8 h-8 rounded-lg bg-[#0d0f12] flex items-center justify-center border border-zinc-800 hover:border-zinc-700 transition-colors" title={t}>
                      <TechIcon name={t} className="w-4 h-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GET IN TOUCH SECTION */}
      <section className="w-full">
        <div className="bg-[#ccff00] text-black rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left side: Heading and copy */}
            <div className="max-w-md space-y-4 text-center md:text-left">
              <h2 className="font-display text-5xl md:text-6xl tracking-tight leading-none text-black">
                Get in Touch
              </h2>
              <p className="text-black/80 text-sm font-semibold leading-relaxed">
                If you are interested in my work or want to provide feedback about this website, I am open to exchanging ideas.
              </p>
            </div>

            {/* Right side: Socials and Button */}
            <div className="flex flex-col items-center md:items-end gap-6">
              {/* Mini Social Bar */}
              <div className="flex gap-4">
                {['instagram', 'youtube', 'behance', 'linkedin', 'github'].map((social) => (
                  <a 
                    key={social} 
                    href={`https://${social}.com`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-8 h-8 bg-black text-[#ccff00] rounded-full flex items-center justify-center hover:scale-110 hover:bg-zinc-950 transition-all duration-200"
                    title={social}
                  >
                    <TechIcon name={social} className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Action Button */}
              <button 
                onClick={() => setPage('contact')}
                className="bg-black text-[#ccff00] hover:bg-zinc-900 font-bold px-8 py-3.5 rounded-full uppercase tracking-wider text-sm flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl"
              >
                Contact Me
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
