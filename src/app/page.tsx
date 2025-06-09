'use client';

import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Component types
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
  index: number;
}

// Data
const TECH_STACK = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 
  'Tailwind CSS', 'Chakra UI', 'Git & GitHub', 
  'HTML5', 'CSS3', 'Figma', 'VS Code', 'Testing'
] as const;

const STATS: StatCardProps[] = [
  { count: '4+', label: 'Years Experience' },
  { count: '20+', label: 'Projects Completed' },
  { count: '8+', label: 'Happy Clients' },
  { count: '3+', label: 'Awards' },
];

const SOCIAL_LINKS: SocialLinkProps[] = [
  { href: 'https://github.com/Apex10A', icon: FaGithub, label: 'GitHub' },
  { href: 'https://x.com/dev_apexxr', icon: FaTwitter, label: 'Twitter' },
  { href: 'https://www.linkedin.com/in/praise-afolabi-67b1292b5/', icon: FaLinkedin, label: 'LinkedIn' },
];

// Components
const StatCard = ({ count, label }: StatCardProps) => (
  <motion.div 
    className="bg-gray-800 p-4 sm:p-6 rounded-lg text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
  >
    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400">{count}</h3>
    <p className="text-gray-300 mt-2 text-sm sm:text-base">{label}</p>
  </motion.div>
);

const TechStackItem = ({ name, index }: TechStackItemProps) => (
  <motion.div
    className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05, backgroundColor: "#374151" }}
  >
    <p className="text-base sm:text-lg font-semibold">{name}</p>
  </motion.div>
);

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ scale: 1.2, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
    className="hover:text-yellow-400 transition-colors duration-300"
  >
    <Icon className="text-2xl sm:text-3xl" />
  </motion.a>
);

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 lg:px-8 pt-32 sm:pt-36 lg:pt-44">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div 
            className="text-center lg:text-left lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-7xl font-extrabold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hello, I'm <span className="text-yellow-400">Praise Afolabi</span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A Product Developer passionate about building modern, scalable, and user-friendly web applications. 
              Currently interning at VeendHQ, I transform UI designs into clean, functional code while solving 
              real-world problems. I'm not just coding — I'm crafting experiences that make a difference.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link 
                  href="/project" 
                  className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold bg-yellow-400 text-black rounded-md hover:bg-yellow-500 transition-all duration-300 text-center block"
                >
                  VIEW WORKS
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Link 
                  href="#contact" 
                  className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold border-2 border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black transition-all duration-300 text-center block"
                >
                  CONTACT ME
                </Link>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:w-1/2 w-full">
            {STATS.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">What I'm Working On</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Current Role</h3>
              <p className="text-gray-300">Building frontend features at VeendHQ, focusing on creating scalable and maintainable systems.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">Learning Goals</h3>
              <p className="text-gray-300">Improving problem-solving skills, mastering testing, and implementing clean architecture patterns.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 lg:px-8 py-16 sm:py-20">
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {TECH_STACK.map((tech, index) => (
            <TechStackItem key={tech} name={tech} index={index} />
          ))}
        </div>
      </section>

      {/* Social Links & Footer */}
      <section className="container mx-auto px-4 lg:px-8 pb-8">
        <motion.div 
          className="flex justify-center space-x-6 sm:space-x-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {SOCIAL_LINKS.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SocialLink {...link} />
            </motion.div>
          ))}
        </motion.div>
        <motion.footer 
          className="text-center text-gray-400 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p>© {new Date().getFullYear()} Praise Afolabi. All Rights Reserved.</p>
        </motion.footer>
      </section>
    </div>
  );
}