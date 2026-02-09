import React from 'react';
import { Briefcase, Code2, Palette, Zap, Target, Star, ArrowRight, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {

  const experienceData = [
    {
      id: 1,
      company: 'Web Bocket Software Pvt. Ltd',
      position: 'Software Development Engineer',
      dateRange: 'Oct 2025 – Present',
      duration: 'Present',
      icon: Code2,
      description: 'Developing cross-platform applications and real-time communication features.',
      responsibilities: [
        'Developing cross-platform job portal using React Native',
        'Implementing real-time notifications with Socket.io',
        'Job search, posting, and candidate management features',
        'In-app messaging implementation'
      ],
      achievements: [
        'Cross-platform mobile application deployment',
        'Real-time communication system integration'
      ],
      skills: ['React Native', 'Socket.io', 'Android', 'Mobile-First'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 2,
      company: 'Web Bocket Software Pvt. Ltd',
      position: 'Software Developer Trainee',
      dateRange: 'Apr 2025 – Sep 2025',
      duration: '6 months',
      icon: Briefcase,
      description: 'Built admin panels and lead management systems.',
      responsibilities: [
        'Built role-based admin panel with React.js',
        'Implemented lead management system',
        'ERP system development collaboration',
        'Code reviews and agile participation'
      ],
      achievements: [
        'Role-based access control implementation',
        'Sales pipeline tracking system'
      ],
      skills: ['React.js', 'State Management', 'ERP', 'Agile'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      company: 'Web Bocket Software Pvt. Ltd',
      position: 'Software Developer Intern',
      dateRange: 'Sep 2024 – Mar 2025',
      duration: '7 months',
      icon: Palette,
      description: 'Developed responsive platforms and API integrations.',
      responsibilities: [
        'Travel booking platform UI with Tailwind CSS',
        'RESTful API integrations for booking',
        'Salon appointment system UI',
        'Real estate listing platform'
      ],
      achievements: [
        'Responsive travel platform launch',
        'Real-time package availability system'
      ],
      skills: ['CSS3', 'Tailwind CSS', 'RESTful APIs', 'UI Design'],
      color: 'from-purple-500 to-indigo-600'
    }
  ];


  return (
    <section id="experience" className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-[#1A0626] dark:via-[#4B0F6B] dark:to-[#8A2BAE] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300 dark:bg-[#B84FD6] rounded-full opacity-20 dark:opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-300 dark:bg-[#E08AF0] rounded-full opacity-20 dark:opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-[#FFFFFF] mb-4 flex items-center justify-center space-x-3">
            <Briefcase size={40} className="text-purple-600 dark:text-[#E08AF0]" />
            <span>My <span className="bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] bg-clip-text text-transparent">Experience</span></span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] mx-auto rounded-full mt-4"></div>
          <p className="text-gray-600 dark:text-[#CFC7D8] mt-6 text-lg max-w-2xl mx-auto">
            A journey of growth, learning, and achievement in the design industry
          </p>
        </div>

        {/* Career Timeline */}
        <div className="p-8 rounded-2xl bg-white dark:bg-[#2A0A3D]/40 backdrop-blur-md border border-gray-200 dark:border-[#B84FD6]/30 shadow-lg dark:shadow-none">
          <h3 className="text-gray-900 dark:text-[#FFFFFF] font-bold text-2xl mb-8">Career Progression</h3>

          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className="relative">
                <div className="flex items-center gap-6">
                  {/* Year */}
                  <div className="w-24 text-right">
                    <p className="text-purple-600 dark:text-[#E08AF0] font-bold text-sm">{exp.dateRange}</p>
                    <p className="text-gray-500 dark:text-[#9C8FB1] text-xs">{exp.duration}</p>
                  </div>

                  {/* Connector Dot */}
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] flex-shrink-0 border-2 border-white dark:border-[#1A0626]"></div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-gray-900 dark:text-[#FFFFFF] font-bold">{exp.position}</h4>
                    <p className="text-gray-600 dark:text-[#CFC7D8] text-sm">{exp.company}</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="hidden md:block w-20">
                    <div className="h-1 bg-gray-200 dark:bg-[#1A0626]/60 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#D06BE3] to-[#E08AF0]"
                        style={{ width: `${((experienceData.length - index) / experienceData.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-purple-50 dark:from-[#1A0626] to-transparent pointer-events-none"></div>
    </section>
  );
}