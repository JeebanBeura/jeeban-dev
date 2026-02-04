import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign, Globe } from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 2000);
    };

    return (
        <section id="contact" className="relative bg-gradient-to-br from-[#1A0626] via-[#4B0F6B] to-[#8A2BAE] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B84FD6] rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#E08AF0] rounded-full opacity-10 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-4">
                        Get in <span className="bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-[#CFC7D8] max-w-2xl mx-auto text-lg">
                        Have a project in mind or want to discuss a new idea? I'd love to hear from you.
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] mx-auto rounded-full mt-6"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Let's Chat!</h3>
                        <p className="text-[#CFC7D8] leading-relaxed mb-8">
                            Whether you have a question about my services, pricing, or just want to say hello, feel free to drop me a line. I'm always open to discussing new projects and creative ideas.
                        </p>

                        <div className="space-y-6">
                            {/* Email Card */}
                            <div className="group flex items-center p-4 rounded-xl bg-[#2A0A3D]/40 border border-[#B84FD6]/30 hover:border-[#B84FD6]/60 transition-all duration-300">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D06BE3] to-[#E08AF0] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                                    <Mail size={20} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-[#CFC7D8] text-sm">Email Me</p>
                                    <a href="mailto:jb.jeebanbeura@gmail.com" className="text-white font-medium hover:text-[#E08AF0] transition-colors">
                                        jb.jeebanbeura@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="group flex items-center p-4 rounded-xl bg-[#2A0A3D]/40 border border-[#B84FD6]/30 hover:border-[#B84FD6]/60 transition-all duration-300">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D06BE3] to-[#E08AF0] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                                    <Phone size={20} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-[#CFC7D8] text-sm">Call Me</p>
                                    <a href="tel:+917735572179" className="text-white font-medium hover:text-[#E08AF0] transition-colors">
                                        +91 773 557 2179
                                    </a>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="group flex items-center p-4 rounded-xl bg-[#2A0A3D]/40 border border-[#B84FD6]/30 hover:border-[#B84FD6]/60 transition-all duration-300">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#D06BE3] to-[#E08AF0] flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                                    <MapPin size={20} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-[#CFC7D8] text-sm">Location</p>
                                    <p className="text-white font-medium">
                                        Bhubaneswar, Odisha, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#B84FD6] to-[#E08AF0] rounded-2xl opacity-10 blur-xl"></div>
                        <div className="relative p-8 rounded-2xl bg-[#2A0A3D]/40 backdrop-blur-xl border border-[#B84FD6]/30">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Name Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-[#CFC7D8] ml-1">Your Name</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9C8FB1]">
                                                <User size={18} />
                                            </div>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1A0626]/60 border border-[#B84FD6]/30 focus:border-[#E08AF0] focus:ring-1 focus:ring-[#E08AF0] text-white placeholder-[#9C8FB1] transition-all outline-none"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>

                                    {/* Email Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-[#CFC7D8] ml-1">Your Email</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9C8FB1]">
                                                <AtSign size={18} />
                                            </div>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1A0626]/60 border border-[#B84FD6]/30 focus:border-[#E08AF0] focus:ring-1 focus:ring-[#E08AF0] text-white placeholder-[#9C8FB1] transition-all outline-none"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Subject Input */}
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-[#CFC7D8] ml-1">Subject</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9C8FB1]">
                                            <MessageSquare size={18} />
                                        </div>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#1A0626]/60 border border-[#B84FD6]/30 focus:border-[#E08AF0] focus:ring-1 focus:ring-[#E08AF0] text-white placeholder-[#9C8FB1] transition-all outline-none"
                                            placeholder="Project Discussion"
                                        />
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-[#CFC7D8] ml-1">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl bg-[#1A0626]/60 border border-[#B84FD6]/30 focus:border-[#E08AF0] focus:ring-1 focus:ring-[#E08AF0] text-white placeholder-[#9C8FB1] transition-all outline-none resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] text-white font-bold text-lg shadow-lg shadow-[#D06BE3]/30 hover:shadow-[#D06BE3]/50 transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                                >
                                    {isSubmitting ? (
                                        <span className="animate-pulse">Sending...</span>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={20} />
                                        </>
                                    )}
                                </button>

                                {submitStatus === 'success' && (
                                    <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/50 text-green-200 text-center animate-fade-in">
                                        Message sent successfully! I'll get back to you soon.
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
