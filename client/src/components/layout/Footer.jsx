import React, { useState } from 'react';
import {
  Mail,
  Linkedin,
  Instagram,
  Github,
  MapPin,
  Phone,
  ArrowUp,
  Heart,
  Code2,
  Facebook
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
    {
      icon: Facebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61550493356002',
      color: 'hover:text-[#1877F2] hover:border-[#1877F2]',
      bg: 'hover:bg-[#1877F2]/10'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jeeban-beura/',
      color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]',
      bg: 'hover:bg-[#0A66C2]/10'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/jeebanbeura',
      color: 'hover:text-white hover:border-white',
      bg: 'hover:bg-white/10'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/_decoding__life_/',
      color: 'hover:text-[#E1306C] hover:border-[#E1306C]',
      bg: 'hover:bg-[#E1306C]/10'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#1A0626] via-[#2A0A3D] to-[#1A0626] border-t border-[#B84FD6]/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B84FD6] rounded-full opacity-5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E08AF0] rounded-full opacity-5 blur-3xl pointer-events-none"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

            {/* Brand Section */}
            <div className="space-y-6 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D06BE3] to-[#E08AF0] flex items-center justify-center shadow-lg shadow-[#D06BE3]/20">
                  <Code2 size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Jeeban</h3>
              </div>
              <p className="text-[#CFC7D8] text-sm leading-relaxed max-w-sm">
                Creating beautiful digital experiences with modern design practices and cutting-edge technology.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 pt-2">
                <a href="mailto:jb.jeebanbeura@gmail.com" className="flex items-center space-x-3 text-[#CFC7D8] hover:text-[#E08AF0] transition group w-fit">
                  <Mail size={18} className="text-[#B84FD6] group-hover:scale-110 transition-transform" />
                  <span className="text-sm">jb.jeebanbeura@gmail.com</span>
                </a>
                <a href="tel:+917735572179" className="flex items-center space-x-3 text-[#CFC7D8] hover:text-[#E08AF0] transition group w-fit">
                  <Phone size={18} className="text-[#B84FD6] group-hover:scale-110 transition-transform" />
                  <span className="text-sm">+91 7735572179</span>
                </a>
                <div className="flex items-center space-x-3 text-[#CFC7D8] w-fit">
                  <MapPin size={18} className="text-[#B84FD6]" />
                  <span className="text-sm">Bhubaneswar, Odisha, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-left">
              <h4 className="text-[#E08AF0] font-bold text-sm uppercase tracking-wider mb-6">Navigation</h4>
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
                      className="text-[#CFC7D8] hover:text-[#E08AF0] transition-all text-sm flex items-center space-x-2 group w-fit"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-[#E08AF0] transition-all duration-300"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="text-left">
              <h4 className="text-[#E08AF0] font-bold text-sm uppercase tracking-wider mb-6">Services</h4>
              <ul className="space-y-3">
                {[
                  'Website Development',
                  'CRM Development',
                  'ERP Solutions',
                  'Video Editing',
                  'Digital Marketing',
                  'App Development'
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-[#CFC7D8] hover:text-[#E08AF0] transition-all text-sm flex items-center space-x-2 group w-fit"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-[#E08AF0] transition-all duration-300"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Socials */}
            <div className="text-left">
              <h4 className="text-[#E08AF0] font-bold text-sm uppercase tracking-wider mb-6">Newsletter</h4>
              <p className="text-[#CFC7D8] text-sm mb-4">Subscribe to receive updates and news.</p>

              <form onSubmit={handleSubscribe} className="space-y-3 max-w-sm mb-8">
                <div className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-[#2A0A3D]/40 border border-[#B84FD6]/30 focus:border-[#B84FD6] focus:bg-[#2A0A3D]/60 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-1 focus:ring-[#B84FD6]/50 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] text-white hover:shadow-lg hover:shadow-[#E08AF0]/30 transition-all duration-300 hover:scale-105 active:scale-95"
                    aria-label="Subscribe"
                  >
                    <ArrowUp size={18} className="transform rotate-90 sm:rotate-0" />
                  </button>
                </div>
                {subscribed && (
                  <p className="text-[#E08AF0] text-xs font-medium animate-fade-in flex items-center gap-1">
                    Thank you for subscribing!
                  </p>
                )}
              </form>

              <div>
                <p className="text-[#CFC7D8] text-sm mb-3">Follow me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : undefined}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        aria-label={social.label}
                        className={`group relative w-10 h-10 rounded-lg bg-[#2A0A3D]/40 border border-[#B84FD6]/30 flex items-center justify-center transition-all duration-300 ${social.color} ${social.bg}`}
                      >
                        <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>

          {/* Divider & Copyright */}
          <div className="border-t border-[#B84FD6]/20 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-[#9C8FB1] text-sm flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <span>© {new Date().getFullYear()} Jeeban Beura. All rights reserved.</span>
                <span className="hidden sm:inline text-[#B84FD6]/40">•</span>
                <span className="flex items-center gap-1.5">
                  <span>Made with</span>
                  <Heart size={14} className="text-[#E08AF0] fill-[#E08AF0] animate-pulse" />
                  <span>by</span>
                  <a
                    href="https://www.linkedin.com/in/jeeban-beura/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E08AF0] hover:text-white font-medium transition-colors"
                  >
                    Jeeban
                  </a>
                </span>
              </div>

              {/* Scroll to Top Button */}
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-[#9C8FB1] hover:text-[#E08AF0] transition-colors py-2 px-4 rounded-lg hover:bg-[#2A0A3D]/40 self-start md:self-auto"
              >
                <span className="text-sm font-medium">Back to top</span>
                <div className="p-1.5 rounded-md bg-[#B84FD6]/10 group-hover:bg-[#B84FD6]/20 transition-colors border border-[#B84FD6]/20 group-hover:border-[#B84FD6]/40">
                  <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B84FD6]/50 to-transparent"></div>
      </div>
    </footer>
  );
}