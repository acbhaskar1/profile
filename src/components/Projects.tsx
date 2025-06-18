import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with PHP, Laravel, CodeIgniter, HTML, CSS, JavaScript, React, Node.js, and MySQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MySQL', 'Stripe', 'CCAvenue', 'Laravel', 'CodeIgniter', 'PHP', 'HTML', 'CSS', 'JavaScript', 'PayU', 'PayTM','PhonePe','QRCodePayment'],
      github: 'https://github.com/acbhaskar1/',
      demo: 'https://demo.com',
      featured: true
    },
    {
      title: 'FlixMedia',
      description: 'A collaborative digital marketing software to and team collaboration features.Enhanced Flixmedia e-commerce presence with immersive visuals, boosted conversions by up to 27%, provided automated updates, unlocked AR, 3D, and comparison tools for deeper engagement, and improved SEO impact for better online visibility.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'HTML', 'PHP', 'Laravel', 'CodeIgniter', 'JavaScript', 'CSS', 'MySQL','AWS', 'Docker', 'CI/CD'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      title: 'Deal Management Software',
      description: 'Improved property leasing work through Deal Management Software by monitoring, analyzing, and enhancing space utilization, identifying key trends, streamlining deal processes, and boosting profitability with sophisticated features.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Core PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap', 'jQuery'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false
    },
    {
      title: 'Payroll Management System',
      description: 'Managed HR tasks with tailored payroll software for Asian businesses, streamlined processes, ensured compliance with payroll and taxation systems, and enhanced productivity through specialized HR modules.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['PHP', 'Laravel', 'CodeIgniter', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Bootstrap'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  </a>
                </div>

                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-teal-600 text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button className="group/btn flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300">
                  View Project
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="group bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};