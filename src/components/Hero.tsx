import React from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-200 dark:bg-teal-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="relative inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-teal-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-4xl sm:text-5xl font-bold text-gray-600 dark:text-gray-300">BR</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-bounce"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              <span className="block">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-pulse">
                A C Bhaskar Reddy
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Full-Stack Developer & UI/UX Designer passionate about creating 
              <span className="text-blue-600 dark:text-blue-400 font-semibold"> beautiful</span> and 
              <span className="text-teal-600 dark:text-teal-400 font-semibold"> functional</span> digital experiences
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
                <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
                  <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
                </div>
              </button>
              
              <button className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-2">
                <Download className="w-5 h-5" /><a href="https://acesse.one/acbhaskar1" download className="flex items-center" target='_blank'>
                Download CV </a>
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button 
              onClick={scrollToAbout}
              className="animate-bounce text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};