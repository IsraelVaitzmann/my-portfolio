import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Whether you have a project in mind or just want to connect, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Get In Touch
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm currently open to full-time opportunities, freelance projects, 
              and interesting collaborations. Let's discuss how we can work together 
              to bring your ideas to life.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FiMail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a 
                    href="mailto:your.email@example.com"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FiGithub className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">GitHub</h4>
                  <a 
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    github.com/yourusername
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FiLinkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    linkedin.com/in/yourprofile
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FiMapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <span className="text-gray-600">Your City, Country</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA */}
          <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Ready to Start a Project?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you need a full-stack web application, a responsive website, 
              or help with an existing project, I'm here to help turn your vision into reality.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">What I Offer:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Full-stack web development</li>
                  <li>• Responsive design & mobile optimization</li>
                  <li>• API development & integration</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              <a
                href="mailto:your.email@example.com"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 text-center inline-block"
              >
                Send Me an Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2024 Your Name. Built with React and Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;