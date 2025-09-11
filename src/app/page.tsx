'use client';

import React from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';
import Works from './(landing-page)/project/page';
import Contact from './(landing-page)/contact/page';
import About from './(landing-page)/about/page';

interface StatCardProps {
  icon?: React.ReactNode;
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

interface AchievementCardProps {
  title: string;
  description: string;
  icon: string;
}
interface WorkExperience {
  id: number,
  company_name: string,
  status: string,
  website_url: string,
  what_company_does: string,
  company_location: string,
  description: string,
  tenure: string,
  description_of_workdone: string
}

const work_experience: WorkExperience[] = [
  {
    id: 1,
    company_name: 'VeendHQ',
    status: 'Onsite',
    website_url: 'https://veendhq.com/',
    what_company_does: 'FinTech startup building innovative payment solutions',
    company_location: 'Lagos, Nigeria',
    description: 'Frontend Engineer & Mobile Developer',
    tenure: 'June 2024 - Present',
    description_of_workdone: 'Building scalable frontend systems with React and Next.js, implementing responsive UIs, and collaborating with cross-functional teams to deliver high-quality products.'
  },
  {
    id: 2,
    company_name: 'IAIIEA',
    status: 'Remote',
    website_url: 'https://iaiiea.org/',
    what_company_does: 'AI research and development organization',
    company_location: 'Abuja, Nigeria',
    description: 'Frontend Developer',
    tenure: 'Jan 2024 - May 2024',
    description_of_workdone: 'Developed interactive dashboards and data visualization tools using React and D3.js. Implemented state management solutions and optimized application performance.'
  },
  {
    id: 3,
    company_name: 'ReconXI',
    status: 'Contract',
    website_url: 'https://reconxi.com/',
    what_company_does: 'Cybersecurity and digital forensics firm',
    company_location: 'United States',
    description: 'UI Developer',
    tenure: 'Aug 2023 - Dec 2023',
    description_of_workdone: 'Created secure and accessible user interfaces for security tools. Worked closely with design and backend teams to implement complex workflows.'
  },
  {
    id: 4,
    company_name: 'HNG Internship',
    status: 'Remote',
    website_url: 'https://hng.tech/',
    what_company_does: 'Tech education and talent development',
    company_location: 'Lagos, Nigeria',
    description: 'Frontend Development Intern',
    tenure: 'May 2023 - Jul 2023',
    description_of_workdone: 'Participated in intensive frontend development program, built multiple projects, and collaborated with team members on real-world applications.'
  },
]
const TECH_STACK = [
  'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'Zustand', 
  'Tailwind CSS', 'Chakra UI', 'Git & GitHub', 
  'HTML5', 'CSS3', 'Figma', 'VS Code', 'Testing'
] as const;

const STATS: StatCardProps[] = [
  { count: '2+', label: 'Professional work Experience' },
  { count: '10+', label: 'Projects Completed' },
  { count: '5+', label: 'Happy Clients' },
  { count: '3+', label: 'Awards' },
];

const ACHIEVEMENTS: AchievementCardProps[] = [
  {
    title: "HNG Internship",
    description: "Successfully completed the competitive HNG Internship program, contributing to innovative solutions in education technology.",
    icon: "🏆"
  },
  {
    title: "VeendHQ",
    description: "Currently working at VeendHQ, building scalable frontend systems and working with a team of talented developers.",
    icon: "🚀"
  },
  {
    title: "Open Source Contributor",
    description: "Active contributor to open-source projects, demonstrating commitment to the developer community.",
    icon: "💻"
  }
];

const SOCIAL_LINKS: SocialLinkProps[] = [
  { href: 'https://github.com/Apex10A', icon: FaGithub, label: 'GitHub' },
  { href: 'https://x.com/dev_apexxr', icon: FaTwitter, label: 'Twitter' },
  // { href: 'https://www.linkedin.com/in/praise-afolabi-67b1292b5/', icon: FaLinkedin, label: 'LinkedIn' },
];

const StatCard = ({ count, label, icon }: StatCardProps) => (
  <motion.div 
    className="bg-gray-800 p-4 sm:p-6 rounded-lg text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
  >
    <h3>{icon}</h3>
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

const AchievementCard = ({ title, description, icon }: AchievementCardProps) => (
  <motion.div
    className="bg-gray-800 p-6 rounded-xl"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-yellow-400">{title}</h3>
    <p className="text-gray-300">{description}</p>
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
    <div>
      <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white overflow-x-hidden">
      <section className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col min-h-screen lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <motion.div 
            className="text-center lg:text-left lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-block bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              Product Developer & Frontend Engineer
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-7xl font-extrabold leading-tight max-w-2xl"
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
              I transform UI designs into clean, functional code while solving 
              real-world problems. I just don't code, I craft experiences that make a difference.
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
                  href="/contact" 
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

        <div className='grid grid-cols-2 gap-8'>
          <section className="py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className=" mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-yellow-400">
            Work Experience
          </h2>
          <p className="text-gray-300 text-lg">
            My professional journey and key contributions
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-yellow-400/50 to-transparent hidden md:block"></div>
          
          <div className="space-y-12">
            {work_experience?.map((work, index) => (
              <motion.div
                key={work?.id}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="absolute left-4 w-4 h-4 bg-yellow-400 rounded-full border-4 border-gray-900 hidden md:block"></div>
                
                <motion.div
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 md:ml-16 hover:border-yellow-400/30 transition-all duration-300"
                  whileHover={{ 
                    y: -8, 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    transition: { type: "spring", stiffness: 300 } 
                  }}
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                        <h3 className="text-2xl font-bold text-white">
                          {work?.company_name}
                        </h3>
                        {work?.website_url && (
                          <a 
                            href={work?.website_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-yellow-400 hover:text-yellow-300 text-sm underline"
                          >
                            Visit Website
                          </a>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="bg-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold">
                          {work?.description}
                        </span>
                        <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {work?.status}
                        </span>
                      </div>
                      
                      <p className="text-gray-400 italic text-sm mb-4 leading-relaxed">
                        {work?.what_company_does}
                      </p>
                      
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {work?.description_of_workdone}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                          <span>{work?.company_location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                          <span className="font-medium">{work?.tenure}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
    <About/>
        </div>
    <Works/>
    <Contact/>
      </section>

      {/* Achievements Section */}
      {/* <section className="container mx-auto px-4 lg:px-8 py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className=" mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">Professional Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((achievement, index) => (
              <AchievementCard key={index} {...achievement} />
            ))}
          </div>
        </motion.div>
      </section> */}


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
        <div className="relative">
          {/* gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 sm:gap-6 whitespace-nowrap"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
                <div
                  key={`${tech}-${index}`}
                  className="bg-gray-800 px-4 py-3 rounded-lg text-center min-w-[140px] hover:bg-gray-700"
                >
                  <span className="text-base sm:text-lg font-semibold">{tech}</span>
                </div>
              ))}
            </motion.div>
          </div>
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

   
    
    </div>
  );
}