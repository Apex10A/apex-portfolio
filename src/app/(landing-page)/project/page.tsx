"use client"
import React, { useState } from 'react';
import "@/app/index.css"
import { Suspense } from 'react'

const Works = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Drip Republic",
      description:
        "An elegant e-commerce platform featuring seamless product browsing, real-time inventory updates, and a smooth checkout experience. Built with Next.js, TypeScript, and Firebase Realtime Database for speed and scalability.",
      image: "/drip.png",
      category: "web",
      tech: ["Next.js", "TypeScript", "Firebase Realtime Database"],
      liveLink: "https://drip-republic.netlify.app/",
      githubLink: "https://github.com/Apex10A/drip-republic",
    },
    {
      id: 2,
      title: "IAIIEA Website",
      description:
        "A professional website for an organization, enabling users to access real-time information about conferences, events, and membership benefits. Built with a responsive and modern design using Next.js and TailwindCSS.",
      image: "/iaiiea.png",
      category: "web",
      tech: ["Next.js", "API", "TailwindCSS", "TypeScript", "Ant Design", "Material UI"],
      liveLink: "https://iaiiea-web.netlify.app/",
      githubLink: "https://github.com/Apex10A/IAIIEA",
    },
    {
      id: 3,
      title: "Devlinks Website",
      description:
        "A platform designed for developers to showcase their portfolios and connect with others. Features customizable profiles and integrated Firebase Database for data storage.",
      image: "/devlinks.png",
      category: "app",
      tech: ["Next.js", "TailwindCSS", "TypeScript", "Firebase Database"],
      liveLink: "https://devapexx.netlify.app/",
      githubLink: "https://github.com/Apex10A/DevLinks",
    },
    {
      id: 4,
      title: "Movieboxx",
      description:
        "A movie discovery platform that fetches and displays the latest movies and TV shows using the TMDB API. Features a clean and user-friendly design for browsing and searching.",
      image: "/movieboxx.png",
      category: "app",
      tech: ["React.js", "TailwindCSS", "TMDB API"],
      liveLink: "https://hng-react-app.web.app/",
      githubLink: "https://github.com/Apex10A/Movie-react-app-website",
    },
    {
      id: 5,
      title: "ChatClaude",
      description:
        "A multilingual AI-powered web application that enables real-time language detection, translation across 35+ languages, and text summarization with an intuitive chat interface",
      category: "app",
      image: "/ChatClaude.png",
      tech: ["Next.js", "TailwindCSS", "Typescript", "Translator API", "Summarizer API", "Framer motion"],
      liveLink: "https://ai-powered-app-chi.vercel.app/",
      githubLink: "https://github.com/Apex10A/hngx-stage3-AI-Powered-app",
    },
    {
      id: 6,
      title: "Ticz",
      description:
        "A ticket generator web application that helps generating tickets for users and enables uploading and preview of profile picture",
      category: "app",
      image: "/Ticz.png",
      tech: ["React.js", "CSS", "Cloudinary", "React-confetti"],
      liveLink: "https://hng-12-task-two.vercel.app/",
      githubLink: "https://github.com/Apex10A/HNG-12-task-two",
    },
  ];

  // Professional Experience Projects
  const professionalProjects = [
    {
      id: 7,
      title: "ReconXi - Reconcile AI",
      description:
        "An AI-Powered Financial Reconciliation platform designed to compare financial records with bank statements. Offers a simple file upload interface, AI-based matching algorithms with manual overrides, and multiple export options to decrease manual interventions while increasing efficiency and accuracy.",
      image: "/reconcileai.png", // Placeholder - you'll need to add this image
      category: "professional",
      tech: ["Next.js", "AI Matching Algorithms", "Financial Tech", "TypeScript", "Machine Learning"],
      year: "Jan - April 2025",
      role: "Lead Frontend Developer",
      liveLink: "https://reconxi.vercel.app/", // Placeholder link
      githubLink: "https://github.com/Apex10A/ReconXi",
    },
    {
      id: 8,
      title: "HomeworkAI",
      description:
        "Collaborative project developed during HNG Internship, focusing on creating innovative solutions in the education technology space.",
      image: "/homeworkai.png", // Placeholder - you'll need to add this image
      category: "professional",
      tech: ["React", "AI Integration", "Education Technology"],
      year: "July - August 2024",
      role: "Frontend Developer",
      liveLink: "https://homeworkai.vercel.app/", // Placeholder link
      githubLink: "https://github.com/Apex10A/HomeworkAI",
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      {/* Header */}
      <div className="container mx-auto px-4 lg:px-8 pt-16 lg:pt-24">
        <h1 className="text-4xl lg:text-6xl font-bold text-center mb-4">
          My <span className="text-yellow-400">Works</span>
        </h1>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Explore my latest projects and see how I bring ideas to life through code and creativity.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <button 
          onClick={() => setFilter('all')}
          className={`px-6 py-2 rounded-full ${filter === 'all' ? 'bg-yellow-400 text-black' : 'border border-yellow-400 text-yellow-400'}`}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('web')}
          className={`px-6 py-2 rounded-full ${filter === 'web' ? 'bg-yellow-400 text-black' : 'border border-yellow-400 text-yellow-400'}`}
        >
          Web Apps
        </button>
        <button 
          onClick={() => setFilter('app')}
          className={`px-6 py-2 rounded-full ${filter === 'app' ? 'bg-yellow-400 text-black' : 'border border-yellow-400 text-yellow-400'}`}
        >
          Applications
        </button>
      </div>

      {/* Personal Projects Section */}
      <div className="container mx-auto px-4 lg:px-8 pb-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Personal <span className="text-yellow-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.liveLink}
                    className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 pb-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          Professional <span className="text-yellow-400">Experience</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionalProjects.map((project) => (
            <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.liveLink}
                    className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-sm text-yellow-400 bg-gray-700 px-2 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="text-sm text-gray-400">Role: {project.role}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Suspense>
  );
};

export default Works;