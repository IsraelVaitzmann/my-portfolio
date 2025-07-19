import React, { useState } from 'react';
import { projectsData } from '../data/projectsData'; 

import ProjectCard from './ProjectCard';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  // Filter projects based on selected category
  const filteredProjects = projectsData.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.category === filter;
  });

  // Show only first 4 projects initially, unless "Show All" is clicked
  const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'Full Stack', label: 'Full Stack' },
    { key: 'Frontend', label: 'Frontend' }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Here are some of the projects I've worked on. Each one taught me something new 
            and helped me grow as a developer.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => {
                  setFilter(category.key);
                  setShowAll(false); // Reset show all when changing filter
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  filter === category.key
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-primary/10 hover:text-primary border border-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {displayProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 4 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              {showAll ? 'Show Less' : `Show All ${filteredProjects.length} Projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;