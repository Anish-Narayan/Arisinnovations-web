import React, { useState, useEffect } from 'react';
import { ChevronRight, Lightbulb, Zap, Shield, Users, ArrowRight, Menu, X, Star, Globe, Rocket } from 'lucide-react';

const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation First",
      description: "Cutting-edge solutions that push the boundaries of what's possible in technology.",
      gradient: "from-red-500 to-red-700"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Optimized performance and rapid deployment to accelerate your business growth.",
      gradient: "from-red-600 to-red-800"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee for mission-critical applications.",
      gradient: "from-red-700 to-red-900"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "World-class engineers and designers dedicated to bringing your vision to life.",
      gradient: "from-red-800 to-black"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Rocket className="h-6 w-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="h-6 w-6" /> },
    { number: "50+", label: "Expert Team", icon: <Users className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Globe className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-900 to-black overflow-x-hidden">
      {/* Dynamic Background Elements */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.1), transparent 40%)`
        }}
      />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-red-900/30' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center group cursor-pointer">
              <div className="h-10 w-10 bg-gradient-to-r from-red-500 to-red-700 rounded-xl flex items-center justify-center mr-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-red-500/50">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-white text-xl font-bold group-hover:text-red-400 transition-colors duration-300">Aris Innovations</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-300 hover:text-red-400 transition-all duration-300 relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group relative overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2 hover:bg-red-900/30 rounded-lg transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/95 backdrop-blur-md border-t border-red-900/30">
            <div className="px-4 py-6 space-y-4">
              {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block text-gray-300 hover:text-red-400 transition-all duration-300 py-2 hover:pl-4 transform"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item}
                </a>
              ))}
              <button className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-black/50"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-red-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-32 h-32 bg-red-600/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-red-400/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-red-700/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center">
            <div className="mb-6 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
              <div className="inline-flex items-center px-4 py-2 bg-red-900/30 backdrop-blur-sm rounded-full border border-red-500/30 mb-8">
                <Star className="h-4 w-4 text-red-400 mr-2" />
                <span className="text-red-300 text-sm font-medium">Leading Innovation Since 2020</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight opacity-0 animate-fade-in-up" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
              Innovate Beyond
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent block animate-pulse">
                Tomorrow
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
              We transform bold ideas into groundbreaking digital solutions. Join the future of technology 
              with Aris Innovations, where innovation meets excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
              <button className="bg-gradient-to-r from-red-500 to-red-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-red-500/50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 flex items-center group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button className="border-2 border-red-500 text-red-400 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-500 hover:text-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden group">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-500 hover:-translate-y-2"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-700 rounded-xl mb-4 group-hover:shadow-lg group-hover:shadow-red-500/50 transition-all duration-300">
                  <div className="text-white group-hover:scale-125 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-red-900/10 to-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Aris?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              We combine cutting-edge technology with unparalleled expertise to deliver solutions that drive success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-black/80 backdrop-blur-sm p-8 rounded-2xl border border-red-900/30 hover:border-red-500/70 transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 group cursor-pointer relative overflow-hidden"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="text-red-400 mb-6 group-hover:text-red-300 transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-100 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Transform Your Ideas?
          </h2>
          <p className="text-xl text-red-100 mb-8 leading-relaxed max-w-2xl mx-auto">
            Let's build something extraordinary together. Our team is ready to turn your vision into reality.
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 flex items-center mx-auto group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              Get In Touch
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0 group cursor-pointer">
              <div className="h-12 w-12 bg-gradient-to-r from-red-500 to-red-700 rounded-xl flex items-center justify-center mr-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-red-500/50">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <span className="text-white text-xl font-bold block group-hover:text-red-400 transition-colors duration-300">
                  Aris Innovations
                </span>
                <span className="text-gray-500 text-sm">Innovating Tomorrow</span>
              </div>
            </div>
            
            <div className="text-gray-400 text-center md:text-right">
              <p className="hover:text-red-400 transition-colors duration-300 cursor-pointer">
                &copy; 2024 Aris Innovations. All rights reserved.
              </p>
              <p className="mt-2 text-sm">
                Innovating the future, one solution at a time.
              </p>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-red-900/30 flex justify-center space-x-6">
            {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social) => (
              <a 
                key={social}
                href="#"
                className="text-gray-500 hover:text-red-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Homepage;