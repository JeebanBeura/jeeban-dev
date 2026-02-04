import React, { useState } from 'react';
import { GraduationCap, Award, Bookmark, Calendar, MapPin, FileText } from 'lucide-react';

export default function EducationSection() {
  const [expandedId, setExpandedId] = useState(null);

  const educationData = [
    {
      id: 1,
      degree: 'Master of Arts in Digital Design',
      institution: 'Institute of Creative Technology',
      location: 'San Francisco, CA',
      year: '2022 - 2024',
      gpa: '3.9/4.0',
      description: 'Advanced studies in digital design principles, UX research methodologies, and interactive media design.',
      achievements: [
        'Thesis: "Human-Centered Design in AI Interfaces"',
        "Dean's List for two consecutive years",
        'Best Design Project Award 2024',
        'Published research on UX trends'
      ],
      icon: GraduationCap,
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 2,
      degree: 'Bachelor of Science in Graphic Design',
      institution: 'Global Design University',
      location: 'New York, NY',
      year: '2018 - 2022',
      gpa: '3.8/4.0',
      description: 'Comprehensive education in visual design, branding, typography, and digital media production.',
      achievements: [
        'Graduated Summa Cum Laude',
        'President of Design Club',
        'Internship at Adobe Design Studio',
        'Featured in Design Magazine'
      ],
      icon: Award,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      degree: 'Professional Certificate in UI/UX Design',
      institution: 'Digital Academy Online',
      location: 'Remote',
      year: '2022',
      gpa: '100%',
      description: 'Intensive bootcamp covering user research, wireframing, prototyping, and usability testing.',
      achievements: [
        'Completed 6 real-world projects',
        'Google UX Design Certification',
        'Portfolio reviewed by industry experts',
        'Job-ready skills certificate'
      ],
      icon: Bookmark,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 4,
      degree: 'High School Diploma with Honors',
      institution: 'Creative Arts High School',
      location: 'Boston, MA',
      year: '2014 - 2018',
      gpa: '3.95/4.0',
      description: 'Specialized arts program with focus on visual communications and digital design fundamentals.',
      achievements: [
        'Valedictorian of graduating class',
        'National Merit Scholar',
        'Won state design competition',
        'Early admission to top design programs'
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
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#B84FD6] to-[#E08AF0]"></div>

          <div className="space-y-16">
            {educationData.map((edu, index) => {
              const Icon = edu.icon;
              const isExpanded = expandedId === edu.id;
              const isLeft = index % 2 === 0;

              return (
                <div key={edu.id} className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className={`flex ${isLeft ? 'justify-end pr-12' : 'justify-end md:justify-start md:pr-0 md:pl-12'}`}>
                    {isLeft && (
                      <div
                        onClick={() => setExpandedId(isExpanded ? null : edu.id)}
                        className="w-full max-w-xl cursor-pointer rounded-2xl bg-[#2A0A3D]/60 backdrop-blur-md border border-[#B84FD6]/40 p-6 hover:border-[#B84FD6]/80 transition"
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
                  </div>

                  <div className="absolute left-1/2 top-6 -translate-x-1/2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D06BE3] to-[#E08AF0] flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                  </div>

                  <div className={`flex ${!isLeft ? 'justify-start pl-12' : 'justify-start md:justify-end md:pl-0 md:pr-12'}`}>
                    {!isLeft && (
                      <div
                        onClick={() => setExpandedId(isExpanded ? null : edu.id)}
                        className="w-full max-w-xl cursor-pointer rounded-2xl bg-[#2A0A3D]/60 backdrop-blur-md border border-[#B84FD6]/40 p-6 hover:border-[#B84FD6]/80 transition"
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
