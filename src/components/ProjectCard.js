import React from 'react';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';

// This is a reusable component that accepts props
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Project Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 right-3 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <FiStar size={12} />
            Featured
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
          {project.category}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium hover:bg-primary/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-200 group"
          >
            <FiGithub size={18} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Code</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors duration-200 group"
          >
            <FiExternalLink size={18} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;