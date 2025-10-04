"use client"
import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Search, ExternalLink, Github, Calendar, User, Code, Filter, X, Star } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'professional' | 'web' | 'app';
  tech: string[];
  year: string;
  role?: string;
  liveLink: string;
  githubLink: string;
  featured?: boolean;
  status: string;
}

interface Category {
  id: string;
  label: string;
  count: number;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const Works = () => {
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const projects: Project[] = [
    {
      id: 8,
      title: "ReconXi",
      description: "Collaborative project developed during HNG Internship, focusing on creating innovative solutions in the education technology space.",
      image: "/reconxi.png",
      category: "professional",
      tech: ["Next.js", "TailwindCSS", "Typescript", "Stripe", "Tanstack", "Framer Motion", "AI Algorithms", "OpenAI API"],
      year: "July - August 2024",
      role: "Frontend Developer",
      liveLink: "https://reconxi.com/",
      githubLink: "https://github.com/hngprojects/homeworkai_fe",
      featured: true,
      status: "Live"
    },
     {
      id: 9,
      title: "OtaWatch",
      description: "Collaborative project developed during HNG Internship, focusing on creating innovative solutions in the education technology space.",
      image: "/otawatch.png",
      category: "professional",
      tech: ["Next.js", "TailwindCSS", "Typescript", "Stripe", "Tanstack", "Framer Motion", "AI Algorithms", "OpenAI API"],
      year: "July - August 2024",
      role: "Frontend Developer",
      liveLink: "https://aiforhomework.com/",
      githubLink: "https://github.com/hngprojects/homeworkai_fe",
      featured: true,
      status: "Live"
    },
     {
      id: 10,
      title: "Ohana web",
      description: "Collaborative project developed during HNG Internship, focusing on creating innovative solutions in the education technology space.",
      image: "/ohana.png",
      category: "professional",
      tech: ["Next.js", "TailwindCSS", "Typescript", "Stripe", "Tanstack", "Framer Motion", "AI Algorithms", "OpenAI API"],
      year: "July - August 2024",
      role: "Frontend Developer",
      liveLink: "https://aiforhomework.com/",
      githubLink: "https://github.com/hngprojects/homeworkai_fe",
      featured: true,
      status: "Live"
    },

   
    {
       id: 6,
      title: "VeendHQ",
      description: "A ticket generator web application that helps generating tickets for users and enables uploading and preview of profile picture",
      category: "app",
      image: "/veendhq.png",
      tech: ["React.js", "CSS", "Cloudinary", "React-confetti"],
      year: "2024",
      liveLink: "https://hng-12-task-two.vercel.app/",
      githubLink: "https://github.com/Apex10A/HNG-12-task-two",
      status: "Live"
    },
    {
      id: 5,
      title: "IAIIEA",
      description: "A multilingual AI-powered web application that enables real-time language detection, translation across 35+ languages, and text summarization with an intuitive chat interface",
      category: "app",
      image: "/iaiieaa.png",
      tech: ["Next.js", "TailwindCSS", "Typescript", "Translator API", "Summarizer API", "Framer Motion"],
      year: "2024",
      liveLink: "https://ai-powered-app-chi.vercel.app/",
      githubLink: "https://github.com/Apex10A/hngx-stage3-AI-Powered-app",
      status: "Live"
    },
    {
      id: 6,
      title: "Ticsz",
      description: "A ticket generator web application that helps generating tickets for users and enables uploading and preview of profile picture",
      category: "app",
      image: "/Ticz.png",
      tech: ["React.js", "CSS", "Cloudinary", "React-confetti"],
      year: "2024",
      liveLink: "https://hng-12-task-two.vercel.app/",
      githubLink: "https://github.com/Apex10A/HNG-12-task-two",
      status: "Live"
    },
  ];

  const featuredProjects = projects.filter(p => p.featured);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = projects
    .filter(project => {
      const matchesFilter = filter === 'all' || project.category === filter;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') return b.id - a.id;
      if (sortBy === 'oldest') return a.id - b.id;
      return a.title.localeCompare(b.title);
    });



  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'professional', label: 'Professional', count: projects.filter(p => p.category === 'professional').length },
    { id: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { id: 'app', label: 'Applications', count: projects.filter(p => p.category === 'app').length }
  ];



  const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => (
    <div className="">
      <div className="">
        <div className="relative">
          <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-t-2xl" />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          {project.featured && (
            <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <Star className="w-4 h-4 mr-1" />
              Featured
            </div>
          )}
        </div>
        <div className="p-8">
          <div className="flex flex-wrap justify-between items-start mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
            {/* <div className="flex items-center space-x-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">{project.status}</span>
              {project.year && (
                <span className="bg-gray-700 text-yellow-400 px-3 py-1 rounded-full text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.year}
                </span>
              )}
            </div> */}
          </div>
          
          {project.role && (
            <div className="mb-4 flex items-center text-gray-300">
              <User className="w-4 h-4 mr-2" />
              <span className="font-medium">{project.role}</span>
            </div>
          )}
          
          <p className="text-gray-300 text-lg leading-relaxed mb-6">{project.description}</p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span key={index} className="bg-gray-800 border border-gray-600 px-3 py-2 rounded-lg text-sm text-gray-200 hover:border-yellow-400 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href={project.liveLink}
              className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View Live Demo
            </a>
            {/* <a 
              href={project.githubLink}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center border border-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View Source
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading amazing projects...</p>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className=" min-h-screen text-white relative overflow-hidden py-10">
       

        {/* Header */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className=" mb-4">
            <h1 className="text-2xl sm:text-3xl lg:text-7xl uppercase font-black mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
            <span className="text-yellow-400">MY Works</span>
            </h1>
            {/* <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Take a sneak peak into my projects and see how I bring ideas to life through code, creativity, and innovation.
            </p> */}
            {/* <div className="flex justify-center items-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                {projects.length} Projects
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                {projects.filter(p => p.featured).length} Featured
              </span>
            </div> */}
          </div>

          {/* Enhanced Controls */}
         

          {/* Results Info */}
          
        </div>

        {/* Featured strip */}
      

        {/* Grid */}
        <div className="container mx-auto px-4 lg:px-8 pb-20 relative z-10">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.slice(0, visibleCount).map((project) => (
                <div key={project.id} className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                    {project.featured && (
                      <div className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" /> Featured
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold group-hover:text-yellow-400 transition-colors">{project.title}</h3>
                      {project.year && (
                        <span className="text-[10px] text-yellow-400 bg-gray-700 px-2 py-1 rounded-full flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {project.year}
                        </span>
                      )}
                    </div>
                    {project.role && (
                      <p className="text-xs text-gray-400 mb-2 flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {project.role}
                      </p>
                    )}
                    <p className="text-gray-300 text-sm line-clamp-3 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech, index) => (
                        <span key={index} className="px-2.5 py-1 bg-gray-700/70 rounded-full text-[11px] border border-gray-600">{tech}</span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-2.5 py-1 bg-gray-700/70 rounded-full text-[11px] text-gray-400">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-yellow-400 text-black px-4 py-2 rounded-md text-sm flex items-center justify-center gap-1">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                      {/* <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm flex items-center justify-center gap-1 border border-gray-600">
                        <Github className="w-4 h-4" /> Source
                      </a> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No projects found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your search terms or filters</p>
              <button onClick={() => { setSearchTerm(''); setFilter('all'); }} className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-medium hover:bg-yellow-500 transition-colors">Clear Filters</button>
            </div>
          )}

          {visibleCount < filteredProjects.length && (
            <div className="flex justify-center mt-10">
              <button onClick={() => setVisibleCount((v) => v + 6)} className="px-6 py-3 bg-gray-800 border border-gray-600 rounded-xl text-white hover:border-yellow-400 hover:text-yellow-400 transition-colors">
                Load more
              </button>
            </div>
          )}
        </div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </Suspense>
  );
};

export default Works;