import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function GlassmorphismNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const menuItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Our Work', href: '#work', id: 'work' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact Us', href: '#contact', id: 'contact' }
  ];

  const handleLinkClick = (id) => {
    setActiveLink(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50">
        {/* Glassmorphism Background */}
        <div className="absolute inset-0 bg-[#2A0A3D]/40 backdrop-blur-xl border-b border-white/10 shadow-xl"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo/Brand */}
            <div className="flex-shrink-0 group cursor-pointer">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D06BE3] to-[#E08AF0] flex items-center justify-center shadow-lg shadow-[#D06BE3]/50 group-hover:shadow-[#E08AF0]/50 transition-all duration-300">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] bg-clip-text text-transparent hidden sm:block">
                  Portfolio
                </h1>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.slice(0, -1).map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                    activeLink === item.id
                      ? 'text-[#E08AF0] bg-white/5'
                      : 'text-[#FFFFFF]/80 hover:text-[#FFFFFF]'
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Hover Background */}
                  <div className={`absolute inset-0 rounded-lg bg-gradient-to-r from-[#D06BE3]/20 to-[#E08AF0]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 -z-10 blur`}></div>
                  
                  {/* Active Underline */}
                  {activeLink === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] rounded-full"></div>
                  )}
                </a>
              ))}
            </div>

            {/* Contact Button - Desktop */}
            <div className="hidden lg:block">
              <button className="relative group px-8 py-2.5 rounded-full font-semibold overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] rounded-full shadow-lg shadow-[#E08AF0]/50 group-hover:shadow-[#E08AF0]/70 transition-all duration-300 group-hover:scale-105"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-all duration-300 translate-x-full group-hover:translate-x-0"></div>
                
                {/* Text */}
                <span className="relative text-white text-sm flex items-center space-x-2">
                  Contact Us
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button className="hidden sm:flex relative group px-6 py-2 rounded-full font-semibold overflow-hidden text-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] rounded-full shadow-lg shadow-[#E08AF0]/50"></div>
                <span className="relative text-white">Contact</span>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-[#FFFFFF]/80 hover:text-[#FFFFFF] hover:bg-white/10 transition-all duration-300"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden border-t border-white/10 py-4 space-y-2 animate-in fade-in slide-in-from-top-2">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleLinkClick(item.id)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeLink === item.id
                      ? 'text-[#E08AF0] bg-gradient-to-r from-[#D06BE3]/20 to-[#E08AF0]/20'
                      : 'text-[#FFFFFF]/80 hover:text-[#FFFFFF] hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-4 relative group px-6 py-3 rounded-full font-semibold overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] rounded-full shadow-lg shadow-[#E08AF0]/50"></div>
                <span className="relative text-white block">Contact Us</span>
              </button>
            </div>
          )}
        </div>
      </nav> 
    </>
  );
}