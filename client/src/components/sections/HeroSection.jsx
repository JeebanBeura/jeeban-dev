import React from 'react';
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Instagram,
  Mail,
  ChevronDown,
  Sparkles,
  Facebook
} from 'lucide-react';

import heroImage from '../../assets/jeeban1.png';
export default function HeroSection() {
  return (
    <section id='home' className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-[#1A0626] dark:via-[#4B0F6B] dark:to-[#8A2BAE] pt-24 pb-16 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-[#B84FD6] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 sm:w-80 sm:h-80 bg-[#E08AF0] rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[calc(100vh-150px)] sm:min-h-[calc(100vh-200px)]">

          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            {/* Welcome Text */}
            <div className="space-y-2 flex justify-center lg:justify-start">
              <p className="text-gray-500 dark:text-[#CFC7D8] text-xs sm:text-sm font-medium uppercase tracking-widest flex items-center space-x-2">
                <Sparkles size={16} className="text-[#D06BE3] animate-pulse" />
                <span>WELCOME TO MY WORLD</span>
              </p>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row items-center lg:items-baseline justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-3">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-[#FFFFFF] leading-tight">
                  Hi, I'm
                </h1>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] bg-clip-text text-transparent">
                  Jeeban
                </span>
              </div>
            </div>

            {/* Job Title */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold">
                <span className="text-purple-600 dark:text-[#D06BE3]">Software</span> <span className="text-gray-900 dark:text-[#FFFFFF]">Developer</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-[#CFC7D8] text-sm sm:text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              MERN Stack Developer with 1+ year experience building responsive web and mobile applications. Proficient in React.js, React Native, Node.js, Express.js, and MongoDB.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
              {/* Primary Button */}
              <a href="#work" className="group relative px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-semibold overflow-hidden w-full sm:w-auto flex justify-center items-center shadow-lg shadow-purple-500/20 dark:shadow-none">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 dark:from-[#FFFFFF] dark:to-[#CFC7D8] rounded-full transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/40 dark:group-hover:shadow-white/30"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-all duration-500 translate-x-full group-hover:translate-x-0"></div>
                <span className="relative text-white dark:text-[#1A0626] flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300">
                  <span>My Projects</span>
                  <ExternalLink size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </a>

              {/* Resume Button */}
              <a
                href="https://res.cloudinary.com/dwwdodtcr/raw/upload/v1769600392/dmploi/resumes/egvhvq4nnhav89cu1xjo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-semibold border-2 border-purple-200 dark:border-[#E08AF0] overflow-hidden w-full sm:w-auto flex justify-center items-center hover:border-purple-400 dark:hover:border-[#E08AF0] transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-purple-50/50 dark:from-[#E08AF0]/20 dark:to-[#B84FD6]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"></div>
                <span className="relative text-gray-700 dark:text-[#FFFFFF] flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300">
                  <span>Resume</span>
                  <Download size={18} className="group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </a>

              {/* Secondary Button */}
              <a href="#contact" className="group relative px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-semibold border-2 border-purple-200 dark:border-[#B84FD6] overflow-hidden w-full sm:w-auto flex justify-center items-center hover:border-purple-400 dark:hover:border-[#B84FD6] transition-colors">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 to-purple-50/50 dark:from-[#B84FD6]/20 dark:to-[#E08AF0]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"></div>
                <span className="relative text-gray-700 dark:text-[#FFFFFF] flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300">
                  <span>Contact Me</span>
                  <Mail size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center lg:items-start space-y-4 pt-4 sm:pt-6">
              <p className="text-[#9C8FB1] text-sm font-medium">Follow me:</p>
              <div className="flex gap-3 flex-wrap justify-center">
                <a href="https://www.instagram.com/_decoding__life_" target="_blank" rel="noopener noreferrer" className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-100 dark:bg-white/5 dark:border-[#FFFFFF]/20 flex items-center justify-center hover:border-purple-400 dark:hover:border-[#B84FD6]/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-[#B84FD6]/30">
                  <Instagram size={18} className="text-gray-500 dark:text-[#CFC7D8] group-hover:text-purple-600 dark:group-hover:text-[#E08AF0] group-hover:scale-110 transition-all duration-300 sm:w-5 sm:h-5" />
                </a>
                <a href="https://www.linkedin.com/in/jeeban-beura/" target="_blank" rel="noopener noreferrer" className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-100 dark:bg-white/5 dark:border-[#FFFFFF]/20 flex items-center justify-center hover:border-purple-400 dark:hover:border-[#B84FD6]/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-[#B84FD6]/30">
                  <Linkedin size={18} className="text-gray-500 dark:text-[#CFC7D8] group-hover:text-purple-600 dark:group-hover:text-[#E08AF0] group-hover:scale-110 transition-all duration-300 sm:w-5 sm:h-5" />
                </a>
                <a href="https://github.com/jeebanbeura" target="_blank" rel="noopener noreferrer" className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-100 dark:bg-white/5 dark:border-[#FFFFFF]/20 flex items-center justify-center hover:border-purple-400 dark:hover:border-[#B84FD6]/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-[#B84FD6]/30">
                  <Github size={18} className="text-gray-500 dark:text-[#CFC7D8] group-hover:text-purple-600 dark:group-hover:text-[#E08AF0] group-hover:scale-110 transition-all duration-300 sm:w-5 sm:h-5" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61550493356002" target="_blank" rel="noopener noreferrer" className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-100 dark:bg-white/5 dark:border-[#FFFFFF]/20 flex items-center justify-center hover:border-purple-400 dark:hover:border-[#B84FD6]/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-[#B84FD6]/30">
                  <Facebook size={18} className="text-gray-500 dark:text-[#CFC7D8] group-hover:text-purple-600 dark:group-hover:text-[#E08AF0] group-hover:scale-110 transition-all duration-300 sm:w-5 sm:h-5" />
                </a>
                <a href="mailto:jb.jeebanbeura@gmail.com" className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-100 dark:bg-white/5 dark:border-[#FFFFFF]/20 flex items-center justify-center hover:border-purple-400 dark:hover:border-[#B84FD6]/60 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-[#B84FD6]/30">
                  <Mail size={18} className="text-gray-500 dark:text-[#CFC7D8] group-hover:text-purple-600 dark:group-hover:text-[#E08AF0] group-hover:scale-110 transition-all duration-300 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - SQUARE Avatar Frame */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 mt-8 lg:mt-0">
            {/* Outer Glow */}
            <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-br from-[#B84FD6] to-[#E08AF0] rounded-3xl opacity-20 blur-2xl"></div>

            {/* Main Frame Container - Responsive Size */}
            <div className="relative w-72 h-72 sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">

              {/* Glassmorphism Frame Background */}
              <div className="absolute inset-0 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-[#B84FD6]/15 to-[#E08AF0]/10 border-2 border-[#B84FD6]/40 shadow-2xl shadow-[#B84FD6]/20"></div>

              {/* Inner Content */}
              <div className="absolute inset-0 rounded-3xl p-4 sm:p-6 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">

                  {/* Avatar Card - Responsive Size */}
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#B84FD6]/40 to-[#E08AF0]/30 backdrop-blur-sm border border-[#E08AF0]/20 flex items-center justify-center relative overflow-hidden group/avatar">

                    {/* Avatar Content */}
                    <div className="z-10 w-full h-full rounded-xl overflow-hidden">
                      <img
                        src={heroImage}
                        alt="Jeeban Beura"
                        className="w-full h-full object-cover rounded-xl shadow-2xl group-hover/avatar:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 w-16 h-16 sm:w-24 sm:h-24 bg-[#B84FD6]/30 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-12 h-12 sm:w-20 sm:h-20 bg-[#E08AF0]/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-8 right-4 sm:top-12 sm:right-6 w-8 h-8 sm:w-12 sm:h-12 bg-[#D06BE3]/20 rounded-full blur-lg animate-bounce"></div>
                  </div>

                  {/* Floating Accent Shapes */}
                  <div className="absolute top-6 right-8 sm:top-8 sm:right-12 w-10 h-10 sm:w-16 sm:h-16 rounded-xl bg-[#B84FD6]/20 blur-xl animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute bottom-8 left-6 sm:bottom-12 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 rounded-lg bg-[#E08AF0]/20 blur-lg animate-pulse"></div>
                  <div className="absolute top-1/2 -right-2 sm:-right-4 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#D06BE3]/30 to-[#E08AF0]/20 blur-xl"></div>
                </div>
              </div>

              {/* Frame Border Details */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B84FD6] to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E08AF0] to-transparent opacity-50"></div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#B84FD6]/50 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-[#E08AF0]/50 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-[#E08AF0]/50 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#B84FD6]/50 rounded-br-2xl"></div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="hidden lg:flex justify-center mt-16 absolute bottom-10 left-1/2 -translate-x-1/2">
          <div
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group cursor-pointer"
          >
            <div className="w-8 h-12 rounded-full border-2 border-[#B84FD6] flex justify-center p-2 animate-bounce">
              <ChevronDown size={20} className="text-[#B84FD6] group-hover:text-[#E08AF0] transition-colors duration-300 animate-bounce" />
            </div>
            <p className="text-gray-500 dark:text-[#CFC7D8] text-xs mt-4 text-center group-hover:text-purple-600 dark:group-hover:text-[#E08AF0] transition-colors duration-300">Scroll down</p>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A0626]/20 pointer-events-none"></div>
    </section>
  );
}