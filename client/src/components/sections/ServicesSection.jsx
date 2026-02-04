import React from 'react';
import { Smartphone, Globe, Database, Video, TrendingUp, Briefcase } from 'lucide-react';

export default function ServicesSection() {
    const services = [
        {
            id: 1,
            title: 'Website Development',
            description: 'Creating stunning, responsive, and high-performance websites tailored to your brand. From corporate sites to e-commerce platforms.',
            icon: Globe,
            color: 'text-cyan-400',
            gradient: 'from-cyan-400 to-blue-500'
        },
        {
            id: 2,
            title: 'CRM Development',
            description: 'Building custom Customer Relationship Management systems to streamline your business processes and enhance customer interactions.',
            icon: Database,
            color: 'text-violet-400',
            gradient: 'from-violet-400 to-purple-500'
        },
        {
            id: 3,
            title: 'ERP Solutions',
            description: 'Implementing robust Enterprise Resource Planning solutions to integrate and manage your main business processes in real-time.',
            icon: Briefcase,
            color: 'text-yellow-400',
            gradient: 'from-yellow-400 to-orange-500'
        },
        {
            id: 4,
            title: 'Video Editing',
            description: 'Professional video editing services for marketing content, tutorials, and social media. delivering high-quality visual storytelling.',
            icon: Video,
            color: 'text-pink-400',
            gradient: 'from-pink-400 to-rose-500'
        },
        {
            id: 5,
            title: 'Digital Marketing',
            description: 'Strategic digital marketing solutions including SEO, social media management, and content strategy to grow your online presence.',
            icon: TrendingUp,
            color: 'text-green-400',
            gradient: 'from-green-400 to-emerald-500'
        },
        {
            id: 6,
            title: 'App Development (Android/iOS)',
            description: 'Developing high-quality Android and iOS applications using modern frameworks like React Native for seamless cross-platform experiences.',
            icon: Smartphone,
            color: 'text-blue-400',
            gradient: 'from-blue-400 to-indigo-500'
        }
    ];

    return (
        <section id="services" className="relative bg-gradient-to-br from-[#1A0626] via-[#4B0F6B] to-[#8A2BAE] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#B84FD6] rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#E08AF0] rounded-full opacity-10 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FFFFFF] mb-4">
                        My <span className="bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-[#CFC7D8] max-w-2xl mx-auto text-lg">
                        Delivering high-quality digital solutions tailored to your business needs
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#D06BE3] to-[#E08AF0] mx-auto rounded-full mt-6"></div>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={service.id}
                                className="group relative p-8 rounded-2xl bg-[#2A0A3D]/40 backdrop-blur-md border border-[#B84FD6]/30 hover:border-[#B84FD6]/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#B84FD6]/20"
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D06BE3]/5 to-[#E08AF0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <div className="w-full h-full bg-[#1A0626] rounded-xl flex items-center justify-center">
                                        <Icon size={28} className={service.color} />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E08AF0] transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-[#CFC7D8] leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Decorative Corner */}
                                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#D06BE3]/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
