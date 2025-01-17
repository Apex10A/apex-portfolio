import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

// Define types for our component
interface StatCardProps {
  count: string;
  label: string;
}

interface SocialLinkProps {
  href: string;
  icon: IconType;
  label: string;
}

interface TechStackItemProps {
  name: string;
}

// Tech stack data
const TECH_STACK = ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Git & Github', 'HTML5', 'CSS3', 'Firebase', 'Redux', 'Material UI', 'Ant design'] as const;

// Stats data
const STATS: StatCardProps[] = [
  { count: '4+', label: 'Years Experience' },
  { count: '20+', label: 'Projects Completed' },
  { count: '8+', label: 'Happy Clients' },
  { count: '3+', label: 'Awards' },
];

// Social links data
const SOCIAL_LINKS: SocialLinkProps[] = [
  { href: 'https://github.com/Apex10A', icon: FaGithub, label: 'GitHub' },
  { href: 'https://x.com/dev_apexxr', icon: FaTwitter, label: 'Twitter' },
  { href: 'https://www.linkedin.com/in/praise-afolabi-67b1292b5/', icon: FaLinkedin, label: 'LinkedIn' },
];

// Component for stat cards
const StatCard: React.FC<StatCardProps> = ({ count, label }) => (
  <div className="bg-gray-800 p-4 sm:p-6 rounded-lg text-center transition-transform hover:scale-105">
    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400">{count}</h3>
    <p className="text-gray-300 mt-2 text-sm sm:text-base">{label}</p>
  </div>
);

// Component for tech stack items
const TechStackItem: React.FC<TechStackItemProps> = ({ name }) => (
  <div className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
    <p className="text-base sm:text-lg font-semibold">{name}</p>
  </div>
);

// Component for social links
const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="hover:transform hover:scale-110 transition-all duration-300"
  >
    <Icon className="text-2xl sm:text-3xl hover:text-yellow-400 transition-colors duration-300" />
  </a>
);

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="container mx-auto relative z-10 px-4 lg:px-8 pt-20 sm:pt-32 lg:pt-44">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="text-center lg:text-left lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-extrabold leading-tight">
              Hello, I'm <span className="text-yellow-400">Praise Afolabi</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300">
              A frontend virtuoso, crafting visually stunning experiences. With HTML, CSS, and JavaScript, 
              I bring ideas to life. Let's collaborate and create digital magic that leaves a lasting impression!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/project" 
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-all duration-300 text-center"
              >
                VIEW WORKS
              </Link>
              <Link 
                href="#contact" 
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold border-2 border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black transition-all duration-300 text-center"
              >
                CONTACT ME
              </Link>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:w-1/2 w-full">
            {STATS.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="container mx-auto px-4 lg:px-8 py-16 sm:py-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
          Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {TECH_STACK.map((tech) => (
            <TechStackItem key={tech} name={tech} />
          ))}
        </div>
      </div>

      {/* Social Links & Footer */}
      <div className="container mx-auto px-4 lg:px-8 pb-8">
        <div className="flex justify-center space-x-6 sm:space-x-8 mb-8">
          {SOCIAL_LINKS.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>
        <footer className="text-center text-gray-400 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Praise Afolabi. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;