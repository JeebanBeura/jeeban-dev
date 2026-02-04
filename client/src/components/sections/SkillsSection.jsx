import React, { useState } from 'react';
import { Code2, Palette, Zap, Terminal, Figma, Smartphone, Airplay, Layers } from 'lucide-react';

export default function SkillsSection() {
  const [isHovered, setIsHovered] = useState(false);

  // Skill cards data with icons
  const skills = [
    {
      id: 1,
      name: 'React.js',
      icon: Code2,
      color: 'text-cyan-400'
    },
    {
      id: 2,
      name: 'React Native',
      icon: Smartphone,
      color: 'text-blue-400'
    },
    {
      id: 3,
      name: 'Node.js',
      icon: Terminal,
      color: 'text-green-400'
    },
    {
      id: 4,
      name: 'Express.js',
      icon: Zap,
      color: 'text-gray-400'
    },
    {
      id: 5,
      name: 'MongoDB',
      icon: Code2,
      color: 'text-green-500'
    },
    {
      id: 6,
      name: 'Socket.io',
      icon: Airplay,
      color: 'text-white'
    },
    {
      id: 7,
      name: 'Tailwind CSS',
      icon: Palette,
      color: 'text-cyan-300'
    },
    {
      id: 8,
      name: 'JavaScript (ES6+)',
      icon: Code2,
      color: 'text-yellow-400'
    },
    {
      id: 9,
      name: 'RESTful APIs',
      icon: Layers,
      color: 'text-purple-400'
    },
    {
      id: 10,
      name: 'Git & GitHub',
      icon: Terminal,
      color: 'text-orange-500'
    }
  ];

  // Duplicate skills for seamless loop
  const extendedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="relative bg-gradient-to-br from-[#1A0626] via-[#4B0F6B] to-[#8A2BAE] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B84FD6] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E08AF0] rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-4">
            My <span className="bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] mx-auto rounded-full"></div>
          <p className="text-[#CFC7D8] mt-6 text-lg max-w-2xl mx-auto">
            Technologies and expertise I use to create amazing design experiences
          </p>
        </div>

        {/* Horizontal Scrolling Skills Container */}
        <div
          className="relative w-full overflow-hidden py-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Gradient Fade Effects */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1A0626] via-[#1A0626]/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1A0626] via-[#1A0626]/50 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div
            className={`flex gap-6 ${isHovered ? '' : 'animate-scroll'}`}
            style={{
              animation: isHovered ? 'none' : 'scroll 40s linear infinite',
            }}
          >
            {extendedSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={`${skill.id}-${index}`}
                  className="group relative flex-shrink-0 w-72 h-24"
                >
                  {/* Skill Card */}
                  <div className="h-full p-6 rounded-2xl bg-[#2A0A3D]/60 backdrop-blur-xl border border-[#B84FD6]/40 hover:border-[#B84FD6]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#B84FD6]/40 flex items-center space-x-6 cursor-default">

                    {/* Icon Container */}
                    <div className="flex-shrink-0">
                      <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#D06BE3]/30 to-[#E08AF0]/20 border border-[#B84FD6]/30 flex items-center justify-center group-hover:scale-110 group-hover:border-[#B84FD6]/60 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#B84FD6]/30">
                        <Icon size={32} className={`${skill.color} group-hover:scale-125 transition-transform duration-300`} />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[#FFFFFF] font-bold text-lg truncate group-hover:text-[#E08AF0] transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <div className="w-0 h-0.5 bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] group-hover:w-full transition-all duration-300 mt-2 rounded-full"></div>
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D06BE3]/20 to-[#E08AF0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CSS Animation */}
          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            .animate-scroll {
              animation: scroll 10s linear infinite;
            }
          `}</style>
        </div>

        {/* Info Text */}
        <div className="text-center mt-12">
          <p className="text-[#CFC7D8] text-sm flex items-center justify-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] animate-pulse"></span>
            <span>Hover to pause • Scroll continuously</span>
            <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-[#E08AF0] to-[#D06BE3] animate-pulse"></span>
          </p>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1A0626] to-transparent pointer-events-none"></div>
    </section>
  );
}