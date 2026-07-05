import React from 'react';
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d0f12] border-t border-[#1d222b] py-12 px-6 md:px-12 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left Side: Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="logo"
            className="w-32 h-auto object-contain"
          />
        </div>

        {/* Right Side: Quote and Copyright */}
        <div className="text-center md:text-right">
          <h3 className="font-display text-3xl md:text-4xl text-[#64748b] leading-tight tracking-wide">
            Designing the{" "}
            <span className="text-outline-green text-[#ccff00]">
              extraordinary
            </span>
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