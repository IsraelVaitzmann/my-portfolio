// src/data/projects.js
export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform with user authentication, shopping cart, and payment integration. Features responsive design and admin dashboard for inventory management.",
    image: "/api/placeholder/400/250", // Replace with your actual image path
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    githubUrl: "https://github.com/yourusername/ecommerce-project",
    liveUrl: "https://your-ecommerce-demo.netlify.app",
    featured: true,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern React patterns.",
    image: "/api/placeholder/400/250", // Replace with your actual image path
    technologies: ["React", "Firebase", "Tailwind CSS", "Context API"],
    githubUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://your-task-manager.netlify.app", 
    featured: true,
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "An interactive weather dashboard that displays current weather and forecasts for multiple cities. Features data visualization and location-based services.",
    image: "/api/placeholder/400/250", // Replace with your actual image path
    technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://your-weather-app.netlify.app",
    featured: false,
    category: "Frontend"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "This portfolio website built with React and Tailwind CSS. Features smooth animations, responsive design, and modern UI/UX principles.",
    image: "/api/placeholder/400/250", // Replace with your actual image path
    technologies: ["React", "Tailwind CSS", "GitHub Pages", "Responsive Design"],
    githubUrl: "https://github.com/yourusername/my-portfolio",
    liveUrl: "https://yourusername.github.io/my-portfolio",
    featured: false,
    category: "Frontend"
  }
];

// Personal information data
export const personalInfo = {
  name: "Israel Vaitzman",
  title: "software developer",
  email: "srol126126@gmail.com",
  location: "Beersheba, Israel",
  github: "https://github.com/IsraelVaitzmann",
  linkedin: "https://www.linkedin.com/in/israel-vaitzman/",
  resume: "public/CV 2025 - Israel Vaitzman.pdf", // Add your resume file to public folder
  bio: {
    intro: "I'm a passionate software developer with a love for creating efficient, scalable solutions.",
    journey: "I started my programming journey recently and have been fascinated by the power of code to solve real-world problems. My experience spans both frontend and backend development, with a focus on creating user-friendly applications.",
    interests: "When I'm not coding, you can find me reading tech blogs and exploring new frameworks. I believe in continuous learning and staying up-to-date with the latest technologies and best practices in software development.",
    collaboration: "I'm always excited to take on new challenges and collaborate with others to build something amazing."
  }
};