import React from 'react';
import { useNavigate } from 'react-router-dom';
import TechIcon from '../components/TechIcon';
import ProjectMockup from '../components/ProjectMockup';
import { projects } from '../data/projects';

export default function Projects({ setSelectedProjectIndex }) {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      
      {/* Projects Title Card */}
      <div className="bg-[#161920] border border-[#222731] rounded-2xl py-8 text-center">
        <h1 className="font-display text-5xl md:text-6xl tracking-widest text-white uppercase select-none">
          Projects
        </h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div 
            key={project.id}
            onClick={() => {
              setSelectedProjectIndex(idx);
              navigate('/project-detail');
            }}
            className="bg-[#161920] border border-[#222731] rounded-2xl overflow-hidden hover:border-[#ccff00]/50 hover:shadow-[0_10px_25px_-5px_rgba(204,255,0,0.05)] cursor-pointer group transition-all duration-300 flex flex-col"
          >
            {/* Custom high fidelity CSS mockup representation */}
            <ProjectMockup type={project.imageType} className="w-full h-48" />
            
            {/* Details */}
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
              
              {/* Tech stack row */}
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

    </div>
  );
}
