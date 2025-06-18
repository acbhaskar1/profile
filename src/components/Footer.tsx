import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Bhaskar Reddy
            </h3>
            <p className="text-gray-400 mt-2">Full-Stack Developer & UI/UX Designer</p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {[
              { label: 'Home', href: '#home' },
              { label: 'About', href: '#about' },
              { label: 'Projects', href: '#projects' },
              { label: 'Skills', href: '#skills' },
              { label: 'Contact', href: '#contact' }
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  const element = document.querySelector(link.href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full h-px bg-gray-800"></div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Bhaskar Reddy
            </p>
            
            <div className="flex items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 All rights reserved
              </p>
              
              <button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                title="Back to top"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};