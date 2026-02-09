import React from 'react';
import { Sparkles, Award, Target, Heart, Code2, Palette } from 'lucide-react';
import aboutImage from '../../assets/jeeban2.jpeg';

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-[#1A0626] dark:via-[#4B0F6B] dark:to-[#8A2BAE] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-purple-300 dark:bg-[#B84FD6] rounded-full opacity-20 dark:opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 bg-purple-300 dark:bg-[#E08AF0] rounded-full opacity-20 dark:opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-[#FFFFFF] mb-3 sm:mb-4">
            About <span className="bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-16">

          {/* Left - CIRCULAR Avatar */}
          <div className="relative flex justify-center">
            {/* Floating Decoration Elements */}
            <div className="absolute top-0 left-0 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-br from-[#D06BE3]/30 to-[#E08AF0]/20 blur-2xl animate-pulse"></div>
            <div className="absolute top-8 sm:top-12 -right-4 sm:-right-8 w-12 sm:w-16 h-12 sm:h-16 rounded-full bg-[#B84FD6]/20 blur-xl animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/4 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-[#E08AF0]/20 blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>

            {/* Main Avatar Card - CIRCULAR */}
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-br from-[#D06BE3] to-[#E08AF0] rounded-full opacity-30 blur-2xl"></div>

              {/* Avatar Frame - CIRCULAR Responsive */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-br from-[#B84FD6] to-[#E08AF0] flex items-center justify-center shadow-2xl shadow-[#B84FD6]/40">
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-[#D06BE3]/40 to-[#E08AF0]/30 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={aboutImage}
                    alt="Jeeban Beura"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating Hexagons - Responsive */}
              <div className="absolute -top-3 sm:-top-6 -left-2 sm:-left-4 w-10 sm:w-14 h-10 sm:h-14 rounded-lg bg-gradient-to-br from-[#D06BE3]/40 to-[#E08AF0]/20 backdrop-blur-sm border border-[#B84FD6]/40 flex items-center justify-center animate-bounce">
                <Sparkles size={16} className="text-[#E08AF0] sm:hidden" />
                <Sparkles size={24} className="text-[#E08AF0] hidden sm:block" />
              </div>
              <div className="absolute -top-1 sm:-top-2 right-1 sm:right-2 w-9 sm:w-12 h-9 sm:h-12 rounded-lg bg-gradient-to-br from-[#E08AF0]/30 to-[#D06BE3]/20 backdrop-blur-sm border border-[#B84FD6]/40 flex items-center justify-center animate-pulse">
                <Palette size={14} className="text-[#D06BE3] sm:hidden" />
                <Palette size={20} className="text-[#D06BE3] hidden sm:block" />
              </div>
              <div className="absolute bottom-2 sm:bottom-4 -right-3 sm:-right-6 w-12 sm:w-16 h-12 sm:h-16 rounded-lg bg-gradient-to-br from-[#B84FD6]/40 to-[#D06BE3]/20 backdrop-blur-sm border border-[#B84FD6]/40 flex items-center justify-center" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
                <Code2 size={18} className="text-[#E08AF0] sm:hidden" />
                <Code2 size={28} className="text-[#E08AF0] hidden sm:block" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-4 sm:space-y-6">
            {/* Main Description */}
            <div>
              <p className="text-gray-600 dark:text-[#CFC7D8] text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                Welcome to my portfolio! I'm Jeeban Beura, a passionate MERN Stack Developer with 1+ year of experience building responsive web and mobile applications. Proficient in React.js, React Native, Node.js, Express.js, and MongoDB.
              </p>

              <p className="text-gray-600 dark:text-[#CFC7D8] text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                I specialize in RESTful API development, real-time communication with Socket.io, and cross-platform application development. I transform ideas into seamless functional solutions that meet business requirements.
              </p>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/jeeban-beura/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-purple-600 dark:text-[#E08AF0] font-semibold hover:text-purple-800 dark:hover:text-white transition-colors duration-300 text-sm sm:text-base"
              >
                <span>View LinkedIn Profile</span>
                <span className="text-lg sm:text-xl">→</span>
              </a>
            </div>

            {/* Highlight Box */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white/80 dark:bg-[#2A0A3D]/60 backdrop-blur-md border border-purple-200 dark:border-[#B84FD6]/30 hover:border-purple-400 dark:hover:border-[#B84FD6]/60 hover:bg-white dark:hover:bg-[#2A0A3D]/80 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 dark:hover:shadow-[#B84FD6]/20">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-[#D06BE3]/30 to-[#E08AF0]/20 flex-shrink-0">
                  <Sparkles size={20} className="text-[#E08AF0] sm:block hidden" />
                  <Sparkles size={18} className="text-[#E08AF0] sm:hidden block" />
                </div>
                <div>
                  <p className="text-gray-600 dark:text-[#CFC7D8] text-sm sm:text-base leading-relaxed">
                    I am deeply committed to my work, investing creativity and precision into every project to ensure a unique and effective user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 md:h-32 bg-gradient-to-t from-purple-50 dark:from-[#1A0626] to-transparent pointer-events-none"></div>
    </section>
  );
}