"use client"
import React, { useState } from 'react';
import "@/app/index.css"
import { Suspense } from 'react'

const Works = () => {
  const [filter, setFilter] = useState('all');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      id: 7,
      title: "ReconXi - Reconcile AI",
      description:
        "An AI-Powered Financial Reconciliation platform designed to compare financial records with bank statements. Offers a simple file upload interface, AI-based matching algorithms with manual overrides, and multiple export options to decrease manual interventions while increasing efficiency and accuracy.",
      image: "/reconxi.png", 
      category: "professional",
      tech: ["Next.js", "AI Matching Algorithms", "TypeScript", "Gemini API", "TailwindCSS", "Framer motion"],
      year: "Jan - April 2025",
      role: "Lead Frontend Developer",
      liveLink: "https://reconxi.com/", 
      githubLink: "https://github.com/hngprojects/reconcile-ai-fe",
    },
    {
      id: 8,
      title: "HomeworkAI",
      description:
        "Collaborative project developed during HNG Internship, focusing on creating innovative solutions in the education technology space.",
      image: "/aiforhomework.png",
      category: "professional",
      tech: ["Next.js", "TailwindCSS", "Typescript", "Stripe", "Tansack", "framer motion", "AI Algorithms", "openAI API"],
      year: "July - August 2024",
      role: "Frontend Developer",
      liveLink: "https://aiforhomework.com/",
      githubLink: "https://github.com/hngprojects/homeworkai_fe",
    },
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
      title: "Momentum",
      description:
        "Momentum is a dynamic, responsive website developed for tracking of daily habits and personal stats like sleep, water intake, and screen time. It contains a chart that shows weekly progress and a way to set daily progress, daily goals and reminders if you miss something. You can also set a daily goal for each habit and track your progress over time.",
      image: "/momentum.png",
      category: "web",
      tech: ["Next.js", "TypeScript", "TailwindCSS", "Chart.js", "Framer motion"],
      liveLink: "https://track-habits-nine.vercel.app/",
      githubLink: "https://github.com/Apex10A/Habit-tracker",
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

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      {/* Header */}
      <div className="container mx-auto px-4 lg:px-8 pt-20 lg:pt-24">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center mb-4">
          My <span className="text-yellow-400">Works</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 text-center max-w-2xl mx-auto mb-12 px-4">
          Explore my latest projects and see how I bring ideas to life through code and creativity.
        </p>
      </div>

      {/* Mobile Filter Toggle */}
      {/* <div className="md:hidden flex justify-center mb-6">
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="px-6 py-2 bg-yellow-400 text-black rounded-full flex items-center"
        >
          {mobileMenuOpen ? 'Close Filters' : 'Open Filters'}
        </button>
      </div> */}

      {/* Filter Buttons */}
      {/* <div className={`
        ${mobileMenuOpen ? 'block' : 'hidden'} md:block
        flex flex-col mx-auto md:flex-row justify-center gap-2 md:gap-4 mb-12 px-4
      `}>
        <button 
          onClick={() => {
            setFilter('all');
            setMobileMenuOpen(false);
          }}
          className={`
            w-full md:w-auto px-6 py-2 rounded-full 
            ${filter === 'all' ? 'bg-yellow-400 text-black' : 'border border-yellow-400 text-yellow-400'}
            hover:bg-yellow-400 hover:text-black transition-colors
          `}
        >
          All
        </button>
        <button 
          onClick={() => {
            setFilter('web');
            setMobileMenuOpen(false);
          }}
          className={`
            w-full md:w-auto px-6 py-2 rounded-full 
            ${filter === 'web' ? 'bg-yellow-400 text-black' : 'border border-yellow-400 text-yellow-400'}
            hover:bg-yellow-400 hover:text-black transition-colors
          `}
        >
          Web Apps
        </button>
        <button 
          onClick={() => {
            setFilter('app');
            setMobileMenuOpen(false);
          }}
          className={`
            w-full md:w-auto px-6 py-2 rounded-full 
            ${filter === 'app' ? 'bg-yellow-400 text-black' : 'border border-yellow-400 text-yellow-400'}
            hover:bg-yellow-400 hover:text-black transition-colors
          `}
        >
          Applications
        </button>
        <button 
          onClick={() => {
            setFilter('professional');
            setMobileMenuOpen(false);
          }}
          className={`
            w-full md:w-auto px-6 py-2 rounded-full 
            ${filter === 'professional' ? 'bg-yellow-400 text-black' : 'border border-yellow-400 text-yellow-400'}
            hover:bg-yellow-400 hover:text-black transition-colors
          `}
        >
          Professional
        </button>
      </div> */}

      {/* Projects Section */}
      <div className="container mx-auto px-4 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.liveLink}
                    className="px-3 py-2 sm:px-4 sm:py-2 bg-yellow-400 text-black rounded text-sm sm:text-base hover:bg-yellow-500 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink}
                    className="px-3 py-2 sm:px-4 sm:py-2 bg-gray-700 text-white rounded text-sm sm:text-base hover:bg-gray-600 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-0">{project.title}</h3>
                  {project.year && (
                    <span className="text-xs sm:text-sm text-yellow-400 bg-gray-700 px-2 py-1 rounded-full">
                      {project.year}
                    </span>
                  )}
                </div>
                <p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-700 rounded-full text-xs sm:text-sm"
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