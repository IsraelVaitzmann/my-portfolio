import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { personalInfo } from '../data/projectsData';

const Hero = () => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  
  const titles = [
    personalInfo.title,
    'Problem Solver',
    'Code Enthusiast',
    'Tech Explorer'
  ];

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    
    if (displayedTitle.length < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedTitle(currentTitle.substring(0, displayedTitle.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        if (displayedTitle.length === 0) {
          setTitleIndex((prev) => (prev + 1) % titles.length);
        } else {
          setDisplayedTitle(currentTitle.substring(0, displayedTitle.length - 1));
        }
      }, displayedTitle.length === currentTitle.length ? 2000 : 50);
      return () => clearTimeout(timeout);
    }
  }, [displayedTitle, titleIndex, titles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="inline-block relative">
              <div className="w-48 h-48 rounded-full bg-gray-300 mx-auto mb-6 overflow-hidden">
                {/* Replace this with your actual photo */}
                <img
                  src="src/assets/images/profile.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Optional: Add a decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
            </div>
          </div>

          {/* Main Text */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm{' '}
            <span className="text-primary">{personalInfo.name}</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-600 mb-6 font-medium h-8">
            {displayedTitle}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.bio.intro}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              View My Work
            </button>
            
            <a
              href={personalInfo.resume}
              download
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
            >
              <FiDownload size={18} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              <FiGithub size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              <FiMail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;