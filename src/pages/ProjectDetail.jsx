import React from 'react';
import { useNavigate } from 'react-router-dom';
import TechIcon from '../components/TechIcon';
import ProjectMockup from '../components/ProjectMockup';
import { projects } from '../data/projects';

export default function ProjectDetail({ selectedProjectIndex }) {
  const navigate = useNavigate();
  const project = projects[selectedProjectIndex] || projects[0];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      
      {/* Back Button */}
      <div>
        <button 
          onClick={() => navigate('/projects')}
          className="bg-[#161920] border border-[#222731] text-zinc-300 hover:text-white hover:border-zinc-700 px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200 shadow-md"
        >
          <span>&larr;</span> Back
        </button>
      </div>

      {/* Main Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Huge Mockup */}
        <div className="lg:col-span-7 bg-[#161920] border border-[#222731] rounded-3xl overflow-hidden shadow-xl flex flex-col justify-center min-h-[350px]">
          <div className="p-4 bg-[#0d0f12]/50 border-b border-[#222731] flex items-center gap-2">
            {/* Chrome-like dots */}
            <div className="w-3 h-3 rounded-full bg-red-500/75"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/75"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/75"></div>
            <span className="text-[10px] text-zinc-500 font-mono ml-4 truncate">{project.demoUrl}</span>
          </div>
          <div className="flex-1 flex items-center justify-center p-4">
            <ProjectMockup type={project.imageType} className="w-full h-80 rounded-2xl shadow-inner" />
          </div>
        </div>

        {/* Right Column: Descriptions & Actions */}
        <div className="lg:col-span-5 bg-[#161920] border border-[#222731] rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-display text-white tracking-tight leading-none">
                {project.title}
              </h1>
              <span className="text-xs text-[#ccff00] font-bold tracking-widest uppercase mt-2 block">
                {project.type}
              </span>
            </div>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack List */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Tech Stack
              </h3>
              <div className="flex gap-3">
                {project.tech.map((t) => (
                  <div 
                    key={t} 
                    className="w-10 h-10 rounded-xl bg-[#0d0f12] flex items-center justify-center border border-zinc-800 hover:border-[#ccff00]/40 transition-colors" 
                    title={t}
                  >
                    <TechIcon name={t} className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 bg-[#ccff00] text-black hover:bg-lime-400 font-bold px-6 py-3.5 rounded-2xl text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-95 transition-all duration-200 shadow-lg shadow-[#ccff00]/10"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Demo
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex-1 bg-[#ccff00] text-black hover:bg-lime-400 font-bold px-6 py-3.5 rounded-2xl text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-95 transition-all duration-200 shadow-lg shadow-[#ccff00]/10"
            >
              <TechIcon name="github" className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>

      </div>

      {/* Main Features Details section */}
      <div className="bg-[#161920] border border-[#222731] rounded-3xl p-6 md:p-8 shadow-xl">
        <h3 className="font-display text-2xl sm:text-3xl tracking-wide uppercase text-white border-b border-[#222731] pb-4 mb-6">
          Main Features
        </h3>
        
        <ul className="space-y-6">
          {project.features.map((feature, index) => (
            <li key={index} className="flex gap-4 items-start">
              {/* Feature bullet indicator */}
              <div className="w-2.5 h-2.5 rounded-full bg-[#ccff00] mt-1.5 shrink-0 animate-pulse"></div>
              <div>
                <h4 className="text-base font-bold text-white leading-normal">
                  {feature.title}:
                </h4>
                <p className="text-zinc-400 text-sm mt-1 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
