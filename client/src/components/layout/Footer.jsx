import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  MapPin,
  Phone,
  ArrowUp,
  Heart,
  Code2,
  Zap
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jeeban-beura/', color: 'hover:text-blue-400' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/jeebanbeura', color: 'hover:text-gray-300' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/_decoding__life_', color: 'hover:text-pink-400' },
    { icon: Mail, label: 'Email', href: 'mailto:jb.jeebanbeura@gmail.com', color: 'hover:text-red-400' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#1A0626] via-[#2A0A3D] to-[#1A0626] border-t border-[#B84FD6]/30">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B84FD6] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E08AF0] rounded-full opacity-5 blur-3xl"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D06BE3] to-[#E08AF0] flex items-center justify-center shadow-lg shadow-[#D06BE3]/50">
                  <Code2 size={20} className="text-white" />
                </div>
                <h3 className="text-[#FFFFFF] font-bold text-xl">Jeeban</h3>
              </div>
              <p className="text-[#CFC7D8] text-sm leading-relaxed mb-6">
                Creating beautiful digital experiences with modern design practices and cutting-edge technology.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:jb.jeebanbeura@gmail.com" className="flex items-center space-x-2 text-[#CFC7D8] hover:text-[#E08AF0] transition group">
                  <Mail size={16} className="text-[#B84FD6] group-hover:scale-110 transition-transform" />
                  <span className="text-xs">jb.jeebanbeura@gmail.com</span>
                </a>
                <a href="tel:+917735572179" className="flex items-center space-x-2 text-[#CFC7D8] hover:text-[#E08AF0] transition group">
                  <Phone size={16} className="text-[#B84FD6] group-hover:scale-110 transition-transform" />
                  <span className="text-xs">+91 7735572179</span>
                </a>
                <div className="flex items-center space-x-2 text-[#CFC7D8]">
                  <MapPin size={16} className="text-[#B84FD6]" />
                  <span className="text-xs">Bhubaneswar, Odisha, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-[#E08AF0] font-bold text-sm uppercase tracking-widest mb-6">Navigation</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Home', href: '#home' },
                  { label: 'About', href: '#about' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Projects', href: '#work' },
                  { label: 'Experience', href: '#experience' }
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#CFC7D8] hover:text-[#E08AF0] transition text-sm flex items-center space-x-2 group"
                    >
                      <span className="w-0 group-hover:w-1.5 h-0.5 bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] transition-all"></span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="md:col-span-1">
              <h4 className="text-[#E08AF0] font-bold text-sm uppercase tracking-widest mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  'App Development',
                  'Web Development',
                  'API Integration',
                  'Database Design',
                  'Consulting'
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-[#CFC7D8] hover:text-[#E08AF0] transition text-sm flex items-center space-x-2 group"
                    >
                      <span className="w-0 group-hover:w-1.5 h-0.5 bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] transition-all"></span>
                      <span>{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="md:col-span-1">
              <h4 className="text-[#E08AF0] font-bold text-sm uppercase tracking-widest mb-6">Resources</h4>
              <ul className="space-y-3">
                {[
                  { label: 'Blog', href: '#' },
                  { label: 'Case Studies', href: '#' },
                  { label: 'Documentation', href: '#' },
                  { label: 'FAQ', href: '#' },
                  { label: 'Support', href: '#' }
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#CFC7D8] hover:text-[#E08AF0] transition text-sm flex items-center space-x-2 group"
                    >
                      <span className="w-0 group-hover:w-1.5 h-0.5 bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] transition-all"></span>
                      <span>{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="md:col-span-2 lg:col-span-1">
              <h4 className="text-[#E08AF0] font-bold text-sm uppercase tracking-widest mb-6">Newsletter</h4>
              <p className="text-[#CFC7D8] text-xs mb-4">Subscribe to get latest updates and insights.</p>

              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#2A0A3D]/60 border border-[#B84FD6]/40 focus:border-[#B84FD6]/80 text-[#FFFFFF] placeholder-[#9C8FB1] text-sm focus:outline-none transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] hover:shadow-lg hover:shadow-[#E08AF0]/50 transition-all duration-300 hover:scale-110"
                  >
                    <ArrowUp size={16} className="text-white -rotate-90" />
                  </button>
                </div>

                {subscribed && (
                  <p className="text-[#E08AF0] text-xs font-semibold animate-pulse">
                    ✓ Thanks for subscribing!
                  </p>
                )}
              </form>

              {/* Social Links */}
              <div className="mt-6">
                <p className="text-[#CFC7D8] text-xs mb-3">Follow me</p>
                <div className="flex gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        title={social.label}
                        className="group relative w-10 h-10 rounded-lg bg-[#2A0A3D]/60 border border-[#B84FD6]/40 hover:border-[#B84FD6]/80 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-[#B84FD6]/40"
                      >
                        <Icon size={18} className={`text-[#CFC7D8] transition-colors duration-300 ${social.color}`} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#B84FD6]/20 pt-8">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <p className="text-[#9C8FB1] text-sm flex items-center space-x-2">
                <span>© 2026 Jeeban Beura. All rights reserved.</span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  Made with <Heart size={14} className="text-[#E08AF0]" /> by Jeeban
                </span>
              </p>

              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="group hidden md:flex items-center space-x-2 text-[#9C8FB1] hover:text-[#E08AF0] transition mt-4 md:mt-0"
              >
                <span className="text-sm">Back to top</span>
                <div className="p-2 rounded-lg bg-[#2A0A3D]/60 border border-[#B84FD6]/40 group-hover:border-[#B84FD6]/80 group-hover:bg-[#2A0A3D]/80 transition-all group-hover:shadow-lg group-hover:shadow-[#B84FD6]/30">
                  <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                </div>
              </button>
            </div>

            {/* Legal Links */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center md:justify-between items-center border-t border-[#B84FD6]/10 pt-6">
              <div className="flex gap-4 md:gap-6 flex-wrap justify-center">
                <a href="#" className="text-[#9C8FB1] hover:text-[#E08AF0] transition text-xs font-medium">Privacy Policy</a>
                <a href="#" className="text-[#9C8FB1] hover:text-[#E08AF0] transition text-xs font-medium">Terms of Service</a>
                <a href="#" className="text-[#9C8FB1] hover:text-[#E08AF0] transition text-xs font-medium">Cookie Policy</a>
                <a href="#" className="text-[#9C8FB1] hover:text-[#E08AF0] transition text-xs font-medium">Sitemap</a>
              </div>

              {/* Status Badge */}
              <div className="flex items-center space-x-2 text-[#9C8FB1] text-xs">
                <div className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B84FD6]/50 to-transparent"></div>
      </div>
    </footer>
  );
}