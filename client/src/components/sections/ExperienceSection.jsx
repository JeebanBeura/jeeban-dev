import React from 'react';
import { Briefcase, Code2, Palette, Zap, Target, Star, ArrowRight, CheckCircle } from 'lucide-react';

export default function ExperienceSection() {

  const experienceData = [
    {
      id: 1,
      company: 'Creative Studio Co.',
      position: 'Senior UI/UX Designer',
      dateRange: '2023 - Present',
      duration: '1+ year',
      icon: Palette,
      description: 'Leading design strategy and mentoring junior designers in creating innovative digital products.',
      responsibilities: [
        'Lead design projects from concept to launch',
        'Mentor and guide a team of 5 designers',
        'Define design systems and brand guidelines',
        'Conduct user research and usability testing'
      ],
      achievements: [
        'Launched 3 major product updates',
        'Increased user satisfaction by 40%',
        'Built comprehensive design system',
        'Won Best Design Award 2024'
      ],
      skills: ['Leadership', 'Design Systems', 'User Research', 'Figma', 'Strategy'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      id: 2,
      company: 'Digital Innovations Inc.',
      position: 'Product Designer',
      dateRange: '2021 - 2023',
      duration: '2 years',
      icon: Code2,
      description: 'Designed user interfaces and experiences for mobile and web applications with focus on usability.',
      responsibilities: [
        'Design mobile and web interfaces',
        'Create wireframes and prototypes',
        'Collaborate with product and engineering teams',
        'Implement feedback from user testing'
      ],
      achievements: [
        'Designed 15+ features used by 100k+ users',
        'Reduced design-to-development time by 30%',
        'Created component library with 200+ components',
        'Improved app rating from 3.8 to 4.7 stars'
      ],
      skills: ['UI Design', 'Prototyping', 'Mobile Design', 'Figma', 'User Testing'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 3,
      company: 'Tech Startup Hub',
      position: 'Junior UI Designer',
      dateRange: '2020 - 2021',
      duration: '1 year',
      icon: Zap,
      description: 'Started my career designing user interfaces for startup projects in fast-paced environment.',
      responsibilities: [
        'Design UI for web and mobile applications',
        'Create design mockups and prototypes',
        'Support senior designers on projects',
        'Participate in design reviews'
      ],
      achievements: [
        'Designed interfaces for 5 shipped products',
        'Collaborated with 20+ startups',
        'Built personal design portfolio',
        'Received Rookie Designer Award'
      ],
      skills: ['UI Design', 'Web Design', 'Adobe XD', 'Sketch', 'Teamwork'],
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 4,
      company: 'Design Agency Plus',
      position: 'Design Intern',
      dateRange: '2019 - 2020',
      duration: '6 months',
      icon: Target,
      description: 'Gained foundational design experience working on client projects and learning industry best practices.',
      responsibilities: [
        'Assist on client design projects',
        'Create social media graphics',
        'Support brand design initiatives',
        'Learn design tools and processes'
      ],
      achievements: [
        'Worked on 10+ client projects',
        'Created 50+ design assets',
        'Earned full-time job offer',
        'Mentored by award-winning designers'
      ],
      skills: ['Graphic Design', 'Branding', 'Adobe Creative Suite', 'Social Media Design'],
      color: 'from-purple-500 to-indigo-600'
    }
  ];


  return (
    <section id="experience" className="relative bg-gradient-to-br from-[#1A0626] via-[#4B0F6B] to-[#8A2BAE] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B84FD6] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E08AF0] rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-4 flex items-center justify-center space-x-3">
            <Briefcase size={40} className="text-[#E08AF0]" />
            <span>My <span className="bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] bg-clip-text text-transparent">Experience</span></span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] mx-auto rounded-full mt-4"></div>
          <p className="text-[#CFC7D8] mt-6 text-lg max-w-2xl mx-auto">
            A journey of growth, learning, and achievement in the design industry
          </p>
        </div>

        {/* Career Timeline */}
        <div className="p-8 rounded-2xl bg-[#2A0A3D]/40 backdrop-blur-md border border-[#B84FD6]/30">
          <h3 className="text-[#FFFFFF] font-bold text-2xl mb-8">Career Progression</h3>
          
          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className="relative">
                <div className="flex items-center gap-6">
                  {/* Year */}
                  <div className="w-24 text-right">
                    <p className="text-[#E08AF0] font-bold text-sm">{exp.dateRange}</p>
                    <p className="text-[#9C8FB1] text-xs">{exp.duration}</p>
                  </div>

                  {/* Connector Dot */}
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] flex-shrink-0 border-2 border-[#1A0626]"></div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[#FFFFFF] font-bold">{exp.position}</h4>
                    <p className="text-[#CFC7D8] text-sm">{exp.company}</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="hidden md:block w-20">
                    <div className="h-1 bg-[#1A0626]/60 rounded-full overflow-hidden">
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
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1A0626] to-transparent pointer-events-none"></div>
    </section>
  );
}