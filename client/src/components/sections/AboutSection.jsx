// import React from 'react';
// import { Sparkles, Award, Target, Heart, Code2, Palette } from 'lucide-react';
// import aboutImage from '../../assets/jeeban2.jpeg';
// export default function AboutSection() {

//   return (
//     <section id="about" className="relative bg-gradient-to-br from-[#1A0626] via-[#4B0F6B] to-[#8A2BAE] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-[#B84FD6] rounded-full opacity-10 blur-3xl"></div>
//       <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E08AF0] rounded-full opacity-10 blur-3xl"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-4">
//             About <span className="bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] bg-clip-text text-transparent">Me</span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] mx-auto rounded-full"></div>
//         </div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

//           {/* Left - Avatar with Decorative Elements */}
//           <div className="relative flex justify-center">
//             {/* Floating Decoration Elements */}
//             <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-gradient-to-br from-[#D06BE3]/30 to-[#E08AF0]/20 blur-2xl animate-pulse"></div>
//             <div className="absolute top-12 -right-8 w-16 h-16 rounded-full bg-[#B84FD6]/20 blur-xl animate-bounce" style={{ animationDelay: '0.3s' }}></div>
//             <div className="absolute -bottom-8 left-1/4 w-24 h-24 rounded-full bg-[#E08AF0]/20 blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>

//             {/* Main Avatar Card */}
//             <div className="relative">
//               {/* Outer Glow */}
//               <div className="absolute -inset-4 bg-gradient-to-br from-[#D06BE3] to-[#E08AF0] rounded-full opacity-30 blur-2xl"></div>

//               {/* Avatar Frame */}
//               <div className="relative w-96 h-96 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-[#B84FD6] to-[#E08AF0] flex items-center justify-center shadow-2xl shadow-[#B84FD6]/40">
//                 <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#D06BE3]/40 to-[#E08AF0]/30 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
//                   <img
//                     src={aboutImage}
//                     alt="Jeeban Beura"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>

//               {/* Floating Hexagons */}
//               <div className="absolute -top-6 -left-4 w-14 h-14 rounded-lg bg-gradient-to-br from-[#D06BE3]/40 to-[#E08AF0]/20 backdrop-blur-sm border border-[#B84FD6]/40 flex items-center justify-center animate-bounce">
//                 <Sparkles size={24} className="text-[#E08AF0]" />
//               </div>
//               <div className="absolute -top-2 right-2 w-12 h-12 rounded-lg bg-gradient-to-br from-[#E08AF0]/30 to-[#D06BE3]/20 backdrop-blur-sm border border-[#B84FD6]/40 flex items-center justify-center animate-pulse">
//                 <Palette size={20} className="text-[#D06BE3]" />
//               </div>
//               <div className="absolute bottom-4 -right-6 w-16 h-16 rounded-lg bg-gradient-to-br from-[#B84FD6]/40 to-[#D06BE3]/20 backdrop-blur-sm border border-[#B84FD6]/40 flex items-center justify-center" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
//                 <Code2 size={28} className="text-[#E08AF0]" />
//               </div>
//             </div>
//           </div>

//           {/* Right - Content */}
//           <div className="space-y-6">
//             {/* Main Description */}
//             <div>
//               <p className="text-[#CFC7D8] text-base sm:text-lg leading-relaxed mb-6">
//                 Welcome to my portfolio! I'm Jeeban Beura, a passionate MERN Stack Developer with 1+ year of experience building responsive web and mobile applications. Proficient in React.js, React Native, Node.js, Express.js, and MongoDB.
//               </p>

//               <p className="text-[#CFC7D8] text-base sm:text-lg leading-relaxed mb-6">
//                 I specialize in RESTful API development, real-time communication with Socket.io, and cross-platform application development. I transform ideas into seamless functional solutions that meet business requirements.
//               </p>

//               {/* LinkedIn Link */}
//               <a
//                 href="https://www.linkedin.com/in/jeeban-beura/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center space-x-2 text-[#E08AF0] font-semibold hover:text-white transition-colors duration-300"
//               >
//                 <span>View LinkedIn Profile</span>
//                 <span className="text-xl">→</span>
//               </a>
//             </div>

//             {/* Highlight Box */}
//             <div className="p-6 rounded-2xl bg-[#2A0A3D]/60 backdrop-blur-md border border-[#B84FD6]/30 hover:border-[#B84FD6]/60 hover:bg-[#2A0A3D]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#B84FD6]/20">
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-lg bg-gradient-to-br from-[#D06BE3]/30 to-[#E08AF0]/20 flex-shrink-0">
//                   <Sparkles size={24} className="text-[#E08AF0]" />
//                 </div>
//                 <div>
//                   <p className="text-[#CFC7D8] text-base leading-relaxed">
//                     I am deeply committed to my work, investing creativity and precision into every project to ensure a unique and effective user experience.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Gradient */}
//       <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1A0626] to-transparent pointer-events-none"></div>
//     </section>
//   );
// }


import React from 'react';
import { Sparkles, Award, Target, Heart, Code2, Palette } from 'lucide-react';
import aboutImage from '../../assets/jeeban2.jpeg';
export default function AboutSection() {

  return (
    <section id="about" className="relative bg-gradient-to-br from-[#1A0626] via-[#4B0F6B] to-[#8A2BAE] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B84FD6] rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E08AF0] rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-4">
            About <span className="bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* Left - CIRCULAR Avatar */}
          <div className="relative flex justify-center">
            {/* Floating Decoration Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-gradient-to-br from-[#D06BE3]/30 to-[#E08AF0]/20 blur-2xl animate-pulse"></div>
            <div className="absolute top-12 -right-8 w-16 h-16 rounded-full bg-[#B84FD6]/20 blur-xl animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute -bottom-8 left-1/4 w-24 h-24 rounded-full bg-[#E08AF0]/20 blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>

            {/* Main Avatar Card - CIRCULAR */}
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-[#D06BE3] to-[#E08AF0] rounded-full opacity-30 blur-2xl"></div>

              {/* Avatar Frame - CIRCULAR 500x500 */}
              <div className="relative w-[500px] h-[500px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-br from-[#B84FD6] to-[#E08AF0] flex items-center justify-center shadow-2xl shadow-[#B84FD6]/40">
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-[#D06BE3]/40 to-[#E08AF0]/30 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={aboutImage}
                    alt="Jeeban Beura"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating Hexagons */}
              <div className="absolute -top-6 -left-4 w-14 h-14 rounded-lg bg-gradient-to-br from-[#D06BE3]/40 to-[#E08AF0]/20 backdrop-blur-sm border border-[#B84FD6]/40 flex items-center justify-center animate-bounce">
                <Sparkles size={24} className="text-[#E08AF0]" />
              </div>
              <div className="absolute -top-2 right-2 w-12 h-12 rounded-lg bg-gradient-to-br from-[#E08AF0]/30 to-[#D06BE3]/20 backdrop-blur-sm border border-[#B84FD6]/40 flex items-center justify-center animate-pulse">
                <Palette size={20} className="text-[#D06BE3]" />
              </div>
              <div className="absolute bottom-4 -right-6 w-16 h-16 rounded-lg bg-gradient-to-br from-[#B84FD6]/40 to-[#D06BE3]/20 backdrop-blur-sm border border-[#B84FD6]/40 flex items-center justify-center" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}>
                <Code2 size={28} className="text-[#E08AF0]" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            {/* Main Description */}
            <div>
              <p className="text-[#CFC7D8] text-base sm:text-lg leading-relaxed mb-6">
                Welcome to my portfolio! I'm Jeeban Beura, a passionate MERN Stack Developer with 1+ year of experience building responsive web and mobile applications. Proficient in React.js, React Native, Node.js, Express.js, and MongoDB.
              </p>

              <p className="text-[#CFC7D8] text-base sm:text-lg leading-relaxed mb-6">
                I specialize in RESTful API development, real-time communication with Socket.io, and cross-platform application development. I transform ideas into seamless functional solutions that meet business requirements.
              </p>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/jeeban-beura/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[#E08AF0] font-semibold hover:text-white transition-colors duration-300"
              >
                <span>View LinkedIn Profile</span>
                <span className="text-xl">→</span>
              </a>
            </div>

            {/* Highlight Box */}
            <div className="p-6 rounded-2xl bg-[#2A0A3D]/60 backdrop-blur-md border border-[#B84FD6]/30 hover:border-[#B84FD6]/60 hover:bg-[#2A0A3D]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#B84FD6]/20">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-[#D06BE3]/30 to-[#E08AF0]/20 flex-shrink-0">
                  <Sparkles size={24} className="text-[#E08AF0]" />
                </div>
                <div>
                  <p className="text-[#CFC7D8] text-base leading-relaxed">
                    I am deeply committed to my work, investing creativity and precision into every project to ensure a unique and effective user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1A0626] to-transparent pointer-events-none"></div>
    </section>
  );
}