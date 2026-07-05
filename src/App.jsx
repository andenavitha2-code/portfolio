import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';

export default function App() {
  const [page, setPage] = useState('home');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home setPage={setPage} setSelectedProjectIndex={setSelectedProjectIndex} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects setPage={setPage} setSelectedProjectIndex={setSelectedProjectIndex} />;
      case 'project-detail':
        return <ProjectDetail setPage={setPage} selectedProjectIndex={selectedProjectIndex} />;
      case 'contact':
        return <Contact />;
      case 'gallery':
        return <Gallery />;
      default:
        return <Home setPage={setPage} setSelectedProjectIndex={setSelectedProjectIndex} />;
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-[#0d0f12] text-zinc-300 flex flex-col font-sans antialiased selection:bg-[#ccff00] selection:text-black">
      
      {/* Centered Minimalist Navigation Header */}
      <header className="w-full py-8 px-6 flex justify-center sticky top-0 bg-[#0d0f12]/95 backdrop-blur-md z-50 border-b border-[#222731]/10">
        <nav className="flex items-center gap-6 sm:gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setPage(item.id)}
              className={`text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 relative py-1 cursor-pointer
                ${(page === item.id || (item.id === 'projects' && page === 'project-detail'))
                  ? 'text-[#ccff00]' 
                  : 'text-zinc-400 hover:text-white'}`}
            >
              {item.label}
              
              {/* Animated underline indication */}
              {(page === item.id || (item.id === 'projects' && page === 'project-detail')) && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ccff00] rounded-full animate-pulse"></span>
              )}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full pb-20">
        {renderPage()}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
