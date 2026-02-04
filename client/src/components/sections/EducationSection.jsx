import React, { useState } from 'react';
import { GraduationCap, Award, Bookmark, Calendar, MapPin, FileText } from 'lucide-react';

export default function EducationSection() {
  const [expandedId, setExpandedId] = useState(null);

  const educationData = [
    {
      id: 1,
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Gandhi Institute for Education and Technology (GIET)',
      location: 'Bhubaneswar, Odisha',
      year: 'Aug 2025 – May 2027',
      gpa: 'Pursuing',
      description: 'Advanced studies in Computer Applications, Software Engineering, and Database Management.',
      achievements: [
        'Specializing in Full Stack Development',
        'Active participation in coding hackathons',
        'Member of Technical Society',
        'Focus on Advanced Algorithms'
      ],
      icon: GraduationCap,
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 2,
      degree: 'B.Sc. in Information Technology & Management',
      institution: 'NIIS Institute of Information Science and Management',
      location: 'Bhubaneswar, Odisha',
      year: 'Sep 2022 – May 2025',
      gpa: 'Graduated',
      description: 'Comprehensive foundation in IT management, programming, and system analysis.',
      achievements: [
        'Core focus on Web Technologies',
        'Database Management Systems',
        'Participated in Tech Fests',
        'Academic Excellence in Computer Science'
      ],
      icon: Award,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      degree: 'Responsive Web Design Certification',
      institution: 'freeCodeCamp',
      location: 'Online',
      year: 'Jan 2024',
      gpa: 'Certified',
      description: 'Comprehensive course covering HTML5, CSS3, accessibility, and responsive design principles.',
      achievements: [
        'Building Responsive Web Apps',
        'Flexbox and Grid Mastery',
        'Completed 5 certification projects',
        'Accessibility Best Practices'
      ],
      icon: Bookmark,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 4,
      degree: 'Legacy JavaScript Algorithms and Data Structures',
      institution: 'freeCodeCamp',
      location: 'Online',
      year: 'May 2024',
      gpa: 'Certified',
      description: 'In-depth study of JavaScript fundamentals, algorithms, and data structures.',
      achievements: [
        'Regular Expressions',
        'Debugging and Object Oriented Programming',
        'Functional Programming',
        'Algorithm Scripting'
      ],
      icon: FileText,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <section id='education' className="relative bg-gradient-to-br from-[#1A0626] via-[#4B0F6B] to-[#8A2BAE] py-20 px-4 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B84FD6] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E08AF0] rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-[#CFC7D8] max-w-2xl mx-auto">
            Building expertise through continuous learning and professional development
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line - Left on Mobile, Center on Desktop */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-gradient-to-b from-[#B84FD6] to-[#E08AF0]"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              const isExpanded = expandedId === edu.id;
              const isLeft = index % 2 === 0;

              return (
                <div key={edu.id} className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                  {/* Left Column (Desktop: Left Content, Mobile: Content if isLeft) */}
                  <div className={`flex ${isLeft ? 'justify-start pl-20 md:justify-end md:pr-12 md:pl-0' : 'hidden md:flex md:justify-end md:pr-12'}`}>
                    {isLeft && (
                      <div
                        onClick={() => setExpandedId(isExpanded ? null : edu.id)}
                        className="w-full max-w-xl cursor-pointer rounded-2xl bg-[#2A0A3D]/60 backdrop-blur-md border border-[#B84FD6]/40 p-6 hover:border-[#B84FD6]/80 transition text-left md:text-right"
                      >
                        <h3 className="text-white font-bold text-xl mb-1">{edu.degree}</h3>
                        <p className="text-[#CFC7D8] mb-2">{edu.institution}</p>
                        <p className="text-[#9C8FB1] text-sm">{edu.year} • {edu.location}</p>

                        {isExpanded && (
                          <ul className="mt-4 space-y-2 text-sm text-[#CFC7D8] inline-block text-left">
                            {edu.achievements.map((a, i) => (
                              <li key={i}>• {a}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                    {/* Spacer for right-side items on desktop */}
                    {!isLeft && <div className="hidden md:block w-full"></div>}
                  </div>

                  {/* Icon - Left on Mobile, Center on Desktop */}
                  <div className="absolute left-8 md:left-1/2 top-0 md:top-6 -translate-x-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D06BE3] to-[#E08AF0] flex items-center justify-center border-4 border-[#1A0626]">
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>

                  {/* Right Column (Desktop: Right Content, Mobile: Content if !isLeft) */}
                  <div className={`flex ${!isLeft ? 'justify-start pl-20 md:pl-12' : 'hidden md:flex md:justify-start md:pl-12'}`}>
                    {!isLeft && (
                      <div
                        onClick={() => setExpandedId(isExpanded ? null : edu.id)}
                        className="w-full max-w-xl cursor-pointer rounded-2xl bg-[#2A0A3D]/60 backdrop-blur-md border border-[#B84FD6]/40 p-6 hover:border-[#B84FD6]/80 transition text-left"
                      >
                        <h3 className="text-white font-bold text-xl mb-1">{edu.degree}</h3>
                        <p className="text-[#CFC7D8] mb-2">{edu.institution}</p>
                        <p className="text-[#9C8FB1] text-sm">{edu.year} • {edu.location}</p>

                        {isExpanded && (
                          <ul className="mt-4 space-y-2 text-sm text-[#CFC7D8]">
                            {edu.achievements.map((a, i) => (
                              <li key={i}>• {a}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                    {/* Spacer for left-side items on desktop */}
                    {isLeft && <div className="hidden md:block w-full"></div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
