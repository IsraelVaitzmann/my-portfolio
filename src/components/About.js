import React from 'react';
import { FiCode, FiDatabase, FiGlobe, FiSmartphone } from 'react-icons/fi';

const About = () => {
  const skills = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: "Frontend Development",
      description: "React, JavaScript, HTML/CSS, Tailwind CSS",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FiDatabase className="w-8 h-8" />,
      title: "Backend Development", 
      description: "Node.js, Python, REST APIs, Database Design",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: "Web Technologies",
      description: "Git, GitHub, Deployment, Web Performance",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Mobile-first approach, Cross-browser compatibility",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate software developer with a love for creating efficient, 
            scalable solutions. Here's what I bring to the table.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Text */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I started my programming journey [X years ago/recently] and have been 
                fascinated by the power of code to solve real-world problems. My experience 
                spans both frontend and backend development, with a focus on creating 
                user-friendly applications.
              </p>
              <p>
                When I'm not coding, you can find me [add your hobbies/interests]. 
                I believe in continuous learning and staying up-to-date with the latest 
                technologies and best practices in software development.
              </p>
              <p>
                I'm always excited to take on new challenges and collaborate with 
                others to build something amazing.
              </p>
            </div>
          </div>

          {/* Right Column - Image or Additional Content */}
          <div className="lg:pl-12">
            <div className="bg-gradient-to-br from-primary/10 to-blue-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💻</div>
                <p className="text-gray-700 font-medium">
                  "Code is like humor. When you have to explain it, it's bad."
                </p>
                <p className="text-sm text-gray-500 mt-2">- Cory House</p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg ${skill.color} mb-4`}>
                {skill.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {skill.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;