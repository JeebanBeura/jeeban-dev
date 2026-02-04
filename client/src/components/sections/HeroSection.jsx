import React from 'react';
import {
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  ChevronDown,
  Sparkles,
  Code2,
  Palette
} from 'lucide-react';

export default function HeroSection() {
  return (
    <section id='home' className="relative min-h-screen bg-gradient-to-br from-[#1A0626] via-[#4B0F6B] to-[#8A2BAE] pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#B84FD6] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#E08AF0] rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">

          {/* Left Content */}
          <div className="space-y-8">
            {/* Welcome Text */}
            <div className="space-y-2">
              <p className="text-[#CFC7D8] text-sm font-medium uppercase tracking-widest flex items-center space-x-2">
                <Sparkles size={16} className="text-[#D06BE3] animate-pulse" />
                <span>WELCOME TO MY WORLD</span>
              </p>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <div className="flex items-baseline space-x-3">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#FFFFFF] leading-tight">
                  Hi, I'm
                </h1>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] bg-clip-text text-transparent">
                  Jeeban
                </span>
              </div>
              <p className="text-2xl sm:text-3xl font-medium text-[#CFC7D8]">Beura</p>
            </div>

            {/* Job Title */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                <span className="text-[#D06BE3]">MERN Stack</span> <span className="text-[#FFFFFF]">Developer</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-[#CFC7D8] text-base sm:text-lg leading-relaxed max-w-lg">
              MERN Stack Developer with 1+ year experience building responsive web and mobile applications. Proficient in React.js, React Native, Node.js, Express.js, and MongoDB.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              {/* Primary Button */}
              <a href="#work" className="group relative px-8 py-3.5 rounded-full font-semibold overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] to-[#CFC7D8] rounded-full transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-white/30"></div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-all duration-500 translate-x-full group-hover:translate-x-0"></div>

                {/* Content */}
                <span className="relative text-[#1A0626] flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300">
                  <span>My Projects</span>
                  <ExternalLink size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </a>

              {/* Secondary Button */}
              <a href="#contact" className="group relative px-8 py-3.5 rounded-full font-semibold border-2 border-[#B84FD6] overflow-hidden">
                {/* Hover Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#B84FD6]/20 to-[#E08AF0]/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"></div>

                {/* Content */}
                <span className="relative text-[#FFFFFF] flex items-center space-x-2 group-hover:space-x-3 transition-all duration-300">
                  <span>Contact Me</span>
                  <Mail size={18} className="group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-6">
              <p className="text-[#9C8FB1] text-sm font-medium">Follow me:</p>
              <div className="flex gap-3">
                {/* Instagram */}
                <a href="https://www.instagram.com/_decoding__life_" target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/5 border border-[#FFFFFF]/20 flex items-center justify-center hover:border-[#B84FD6]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#B84FD6]/30">
                  <Instagram size={20} className="text-[#CFC7D8] group-hover:text-[#E08AF0] group-hover:scale-110 transition-all duration-300" />
                </a>

                {/* Linkedin */}
                <a href="https://www.linkedin.com/in/jeeban-beura/" target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/5 border border-[#FFFFFF]/20 flex items-center justify-center hover:border-[#B84FD6]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#B84FD6]/30">
                  <Linkedin size={20} className="text-[#CFC7D8] group-hover:text-[#E08AF0] group-hover:scale-110 transition-all duration-300" />
                </a>

                {/* Github */}
                <a href="https://github.com/jeebanbeura" target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/5 border border-[#FFFFFF]/20 flex items-center justify-center hover:border-[#B84FD6]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#B84FD6]/30">
                  <Github size={20} className="text-[#CFC7D8] group-hover:text-[#E08AF0] group-hover:scale-110 transition-all duration-300" />
                </a>

                {/* Facebook (replacing Twitter) */}
                <a href="https://www.facebook.com/profile.php?id=61550493356002" target="_blank" rel="noopener noreferrer" className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/5 border border-[#FFFFFF]/20 flex items-center justify-center hover:border-[#B84FD6]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#B84FD6]/30">
                  {/* Note: Using Twitter icon as placeholder or strictly removing if icon not available, but 'Lucide' has Facebook usually. I will check imports. Twitter was imported. I should import Facebook if available, or just use Twitter icon for now and change it later if I can check imports. Actually, let's just stick to the existing imports for now or use Twitter icon for now to avoid breaking imports without checking. Wait, I can see the imports. Twitter is imported. Facebook is NOT. I will just remove the Twitter link or keep it as a placeholder? The user gave a Facebook link. I'll use the ExternalLink icon for Facebook if I can't import Facebook. Or better, just remove Twitter for now to be safe. I will include the email link. */}
                  <ExternalLink size={20} className="text-[#CFC7D8] group-hover:text-[#E08AF0] group-hover:scale-110 transition-all duration-300" />
                </a>

                {/* Mail */}
                <a href="mailto:jb.jeebanbeura@gmail.com" className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-[#FFFFFF]/10 to-[#FFFFFF]/5 border border-[#FFFFFF]/20 flex items-center justify-center hover:border-[#B84FD6]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#B84FD6]/30">
                  <Mail size={20} className="text-[#CFC7D8] group-hover:text-[#E08AF0] group-hover:scale-110 transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Right - 3D Avatar Frame */}
          <div className="relative flex justify-center items-center">
            {/* Outer Glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-[#B84FD6] to-[#E08AF0] rounded-3xl opacity-20 blur-2xl"></div>

            {/* Main Frame Container */}
            <div className="relative w-80 h-96 sm:w-96 sm:h-[500px]">

              {/* Glassmorphism Frame Background */}
              <div className="absolute inset-0 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-[#B84FD6]/15 to-[#E08AF0]/10 border-2 border-[#B84FD6]/40 shadow-2xl shadow-[#B84FD6]/20"></div>

              {/* Accent Border Glow */}
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-[#D06BE3] to-[#E08AF0] opacity-30 blur transition-all duration-300 group-hover:opacity-50"></div>

              {/* Inner Content */}
              <div className="absolute inset-0 rounded-3xl p-6 flex items-center justify-center">
                {/* Avatar Placeholder with 3D Effect */}
                <div className="relative w-full h-full flex items-center justify-center">

                  {/* Avatar Card */}
                  <div className="w-72 h-80 sm:w-80 sm:h-96 rounded-2xl bg-gradient-to-br from-[#B84FD6]/40 to-[#E08AF0]/30 backdrop-blur-sm border border-[#E08AF0]/20 flex items-center justify-center relative overflow-hidden group/avatar">

                    {/* Avatar Content */}
                    <div className="text-center space-y-4 z-10">
                      {/* Avatar Image Placeholder */}
                      <div className="flex justify-center">
                        <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-gradient-to-br from-[#D06BE3] to-[#E08AF0] flex items-center justify-center shadow-2xl shadow-[#B84FD6]/50 group-hover/avatar:scale-110 transition-transform duration-300">
                          <Code2 size={80} className="text-white opacity-90" />
                        </div>
                      </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#B84FD6]/30 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#E08AF0]/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-12 right-6 w-12 h-12 bg-[#D06BE3]/20 rounded-full blur-lg animate-bounce"></div>
                  </div>

                  {/* Floating Accent Shapes */}
                  <div className="absolute top-8 right-12 w-16 h-16 rounded-xl bg-[#B84FD6]/20 blur-xl animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute bottom-12 left-8 w-12 h-12 rounded-lg bg-[#E08AF0]/20 blur-lg animate-pulse"></div>
                  <div className="absolute top-1/2 -right-4 w-14 h-14 rounded-full bg-gradient-to-br from-[#D06BE3]/30 to-[#E08AF0]/20 blur-xl"></div>
                </div>
              </div>

              {/* Frame Border Details */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B84FD6] to-transparent opacity-50"></div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E08AF0] to-transparent opacity-50"></div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#B84FD6]/50 rounded-tl-2xl"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E08AF0]/50 rounded-tr-2xl"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#E08AF0]/50 rounded-bl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#B84FD6]/50 rounded-br-2xl"></div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center mt-16 lg:mt-0 lg:absolute lg:bottom-10 lg:left-1/2 lg:-translate-x-1/2">
          <div className="group cursor-pointer">
            <div className="w-8 h-12 rounded-full border-2 border-[#B84FD6] flex justify-center p-2 animate-bounce">
              <ChevronDown size={20} className="text-[#B84FD6] group-hover:text-[#E08AF0] transition-colors duration-300 animate-bounce" />
            </div>
            <p className="text-[#CFC7D8] text-xs mt-4 text-center group-hover:text-[#E08AF0] transition-colors duration-300">Scroll down</p>
          </div>
        </div>
      </div>

      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A0626]/20 pointer-events-none"></div>
    </section>
  );
}