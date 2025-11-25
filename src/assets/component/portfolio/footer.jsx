import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 px-4 md:px-8 bg-gray-800 dark:bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-base sm:text-lg mb-4">© 2023 Alishba Ashiq . All rights reserved.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-6">
          <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
