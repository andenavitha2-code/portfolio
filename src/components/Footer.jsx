import React from 'react';
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d0f12] border-t border-[#1d222b] py-12 px-6 md:px-12 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side: Geometric Logo */}
        <div className="flex items-center gap-3">
            <img
            src={logo}
            alt="logo"
            className="w-32 h-auto object-contain" />
            {/* Geometric interlocking R logo from the screenshots */}
            <path d="M15 15 H 45 L 25 45 H 55 L 35 75 H 65 L 50 90 H 20 Z" fill="currentColor" className="opacity-10" />
            {/* The outer geometric shape */}
            <path d="M20 20 L 50 20 L 30 50 L 60 50 L 35 80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M40 50 L 65 80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20 20 L 20 80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        </div>

        {/* Right Side: Quote and Copyright */}
        <div className="text-center md:text-right">
          <h3 className="font-display text-3xl md:text-4xl text-[#64748b] leading-tight tracking-wide">
            Designing the <span className="text-outline-green text-[#ccff00]">extraordinary</span>
          </h3>
          <h3 className="font-display text-3xl md:text-4xl text-[#64748b] leading-tight tracking-wide">
            one <span className="text-[#ccff00]">pixel</span> at a time.
          </h3>
          <p className="text-zinc-500 text-xs mt-4 tracking-wider">
            Portfolio v2.3 &copy; 2024 Rahul
          </p>
        </div>
      </div>
    </footer>
  );
}
