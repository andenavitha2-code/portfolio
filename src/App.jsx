import React, { useState } from 'react';
import {
  Routes,
  Route,
  useNavigate,
  useLocation
} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';

export default function App() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path) => {
    if (path === '/projects' && location.pathname === '/project-detail') {
      return true;
    }

    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-[#0d0f12] text-zinc-300 flex flex-col font-sans antialiased selection:bg-[#ccff00] selection:text-black">

      {/* Navigation Header */}
      <header className="w-full sticky top-0 bg-[#0d0f12]/95 backdrop-blur-md z-50 border-b border-[#222731]/10">

        <div className="py-5 px-6 flex items-center justify-between md:justify-center">

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#ccff00] text-3xl"
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">

            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-semibold tracking-wider transition-all duration-200 relative py-1 cursor-pointer ${
                  isActive(item.path)
                    ? 'text-[#ccff00]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}

                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ccff00] rounded-full"></span>
                )}
              </button>
            ))}

          </nav>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#0d0f12] border-t border-[#222731]">

            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`text-sm font-semibold tracking-wider transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-[#ccff00]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

          </nav>
        )}

      </header>

      {/* React Router Pages */}
      <main className="flex-1 w-full pb-20">

        <Routes>

          <Route
            path="/"
            element={
              <Home
                setSelectedProjectIndex={setSelectedProjectIndex}
              />
            }
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/projects"
            element={
              <Projects
                setSelectedProjectIndex={setSelectedProjectIndex}
              />
            }
          />

          <Route
            path="/project-detail"
            element={
              <ProjectDetail
                selectedProjectIndex={selectedProjectIndex}
              />
            }
          />

          <Route
            path="/gallery"
            element={<Gallery />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </main>

      <Footer />

    </div>
  );
}