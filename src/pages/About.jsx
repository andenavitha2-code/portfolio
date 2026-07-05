import React from 'react';
import TechIcon from '../components/TechIcon';
import profileImg from "../assets/rahul.png";

export default function About() {
  const skills = [
    { name: 'Node.js', icon: 'node' },
    { name: 'HTML5', icon: 'html' },
    { name: 'CSS3', icon: 'css' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'C++', icon: 'cpp' },
    { name: 'Premiere Pro', icon: 'pr' },
    { name: 'React', icon: 'react' },
    { name: 'Figma', icon: 'figma' },
    { name: 'Material UI', icon: 'mui' },
    { name: 'Qt', icon: 'qt' }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      
      {/* Page Title Card */}
      <div className="bg-[#161920] border border-[#222731] rounded-2xl py-8 text-center">
        <h1 className="font-display text-5xl md:text-6xl tracking-widest text-white uppercase select-none">
          About
        </h1>
      </div>

      {/* Main Biography Container */}
      <div className="bg-[#161920] border border-[#222731] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start shadow-xl">
        {/* Left Column: Profile Photo */}
        <div className="w-full md:w-2/5 shrink-0 flex justify-center">
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden aspect-[4/3] md:aspect-square border border-[#ccff00]/30 shadow-lg shadow-black/40 group">
            <img 
              src={profileImg}
              alt="Rahul Profile" 
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            {/* Ambient neon corner overlays */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#ccff00]"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#ccff00]"></div>
          </div>
        </div>

        {/* Right Column: Bio details */}
        <div className="w-full md:w-3/5 space-y-6">
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-medium">
            I'm a Computer Science student at <span className="text-[#ccff00]">SRM Institute of Science and Technology</span>. My passion lies in building user-friendly solutions that enhance overall user experiences. I am currently focused on <span className="text-[#ccff00]">React Native, Expo, Firebase, and React</span>, leveraging these technologies to create responsive and functional applications. One of my ongoing projects is Rescue Paws, a mobile app designed to facilitate the rescue and adoption of stray and pet dogs. The app will soon be published on the <span className="text-[#ccff00]">Play Store and App Store</span>, and it incorporates AI-driven features to guide users through the adoption process. 
          </p>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-medium">
            In addition to app development, I've led the design and development of platforms like the GitHub Community SRM website, which serves as an all-in-one platform for the community. I've also organized and managed events such as hackathons and workshops, mentoring others in UI/UX and graphic design. I thrive in <span className="text-[#ccff00]">Agile Scrum environments</span> and believe collaboration and teamwork are essential to delivering successful projects. 
          </p>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-medium">
            I'm always eager to work on impactful projects that challenge me to grow while also contributing to meaningful outcomes. So, whether you're <span className="text-[#ccff00]">looking for a dedicated developer, a creative designer, or a collaborative team member</span>, I'm here to help bring ideas to life. Let's connect and create innovative solutions together!
          </p>

          {/* Action Button: Download Resume */}
          <div className="pt-2">
            <button 
              onClick={() => alert("Simulating Resume Download...")}
              className="border-2 border-[#ccff00] text-[#ccff00] hover:bg-[#ccff00] hover:text-black font-semibold text-xs px-6 py-3 rounded-lg uppercase tracking-wider flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </button>
          </div>
        </div>
      </div>

      {/* Grid containing Skills & Socials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Skills Section */}
        <div className="md:col-span-2 bg-[#161920] border border-[#222731] rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-6 tracking-wide">
            Skills
          </h3>
          <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className="flex flex-col items-center justify-center p-3 rounded-xl bg-[#0d0f12] border border-zinc-800 hover:border-[#ccff00]/40 transition-colors group cursor-pointer"
                title={skill.name}
              >
                <TechIcon name={skill.icon} className="w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
              </div>
            ))}
          </div>
        </div>

        {/* Socials Card */}
        <div className="bg-[#161920] border border-[#222731] rounded-2xl p-6 flex flex-col justify-center items-center">
          <div className="flex gap-5">
            {['instagram', 'youtube', 'behance', 'linkedin', 'github'].map((social) => (
              <a 
                key={social} 
                href={`https://${social}.com`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#ccff00] hover:scale-125 transition-transform duration-200"
                title={social}
              >
                <TechIcon name={social} className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
