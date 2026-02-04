import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Amaksora App',
      category: 'App Design',
      description: 'Creating intuitive and visually appealing designs that enhance user experience.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      color: 'from-blue-500 to-purple-600',
      tags: ['Mobile App', 'UI Design', 'iOS']
    },
    {
      id: 3,
      title: 'B-Roll Media',
      category: 'Web Design',
      description: 'Designing intuitive and visually engaging websites that elevate user experience.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=500&fit=crop',
      color: 'from-orange-500 to-red-600',
      tags: ['Web Design', 'Responsive', 'UX']
    },
    {
      id: 5,
      title: 'Echo Music Player',
      category: 'App Design',
      description: 'Crafting beautiful music streaming interface with seamless user navigation.',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=500&h=500&fit=crop',
      color: 'from-indigo-500 to-purple-600',
      tags: ['Mobile App', 'Music', 'UI']
    }
  ];

  return (
    <section id="work" className="relative bg-gradient-to-br from-[#1A0626] via-[#4B0F6B] to-[#8A2BAE] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B84FD6] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E08AF0] rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-4">
            My <span className="bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] mx-auto rounded-full"></div>
          <p className="text-[#CFC7D8] mt-6 text-lg max-w-2xl mx-auto">
            Discover the projects that showcase my passion for design and innovation
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative h-full"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Card Container */}
              <div className="h-full rounded-2xl overflow-hidden bg-[#2A0A3D]/60 backdrop-blur-md border border-[#8A2BAE]/40 hover:border-[#B84FD6]/80 transition-all duration-300 hover:shadow-2xl hover:shadow-[#B84FD6]/50 hover:-translate-y-2">
                
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#1A0626] to-[#2A0A3D]">
                  {/* Project Image */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A0A3D]/80 via-transparent to-transparent"></div>

                  {/* Hover Overlay with Links */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D06BE3]/40 to-[#E08AF0]/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                    <a 
                      href="#" 
                      className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      title="View Project"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                      title="View Code"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-4 py-2 rounded-full bg-[#B84FD6] text-white text-xs font-bold shadow-lg shadow-[#B84FD6]/50 group-hover:shadow-lg group-hover:shadow-[#E08AF0]/60 transition-all duration-300">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="text-[#FFFFFF] font-bold text-2xl group-hover:text-[#E08AF0] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#CFC7D8] text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[#B84FD6]/20 border border-[#B84FD6]/40 text-[#CFC7D8] group-hover:border-[#B84FD6]/70 group-hover:bg-[#B84FD6]/40 group-hover:text-[#FFFFFF] transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View More Button */}
                  <div className="pt-4">
                    <a 
                      href="#" 
                      className="inline-flex items-center space-x-2 text-[#E08AF0] font-semibold group/link hover:text-white transition-colors duration-300"
                    >
                      <span>View Project</span>
                      <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

                {/* Glow Background on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D06BE3]/20 to-[#E08AF0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1A0626] to-transparent pointer-events-none"></div>
    </section>
  );
}