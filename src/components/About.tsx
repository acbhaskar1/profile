import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating beautiful, intuitive interfaces that users love to interact with.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and seamless user experience.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Genuinely passionate about technology and continuous learning in this field.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that make a difference. My journey began with a curiosity about 
                how websites work, and it has evolved into a deep love for crafting exceptional 
                user experiences.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in modern web technologies including React, TypeScript, Node.js, 
                and cloud platforms. When I'm not coding, you'll find me exploring new design 
                trends, contributing to open-source projects, or mentoring aspiring developers.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'Python Plus DSA', 'AWS', 'Docker','Java Plus DSA','PHP', 'Laravel', 'CodeIgniter', 'MySQL', 'MongoDB', 'PowerBI','CI/CD'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};