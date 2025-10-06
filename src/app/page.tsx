'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiChakraui,
  SiHtml5,
  SiCss3,
  SiFigma,
  // SiVisualstudiocode,
  SiTestinglibrary,
  SiGit
} from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
import Works from './(landing-page)/project/page';
import Contact from './(landing-page)/contact/page';
import "@/app/index.css"

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
  description_of_workdone: string,
  highlights?: string[]
}

const work_experience: WorkExperience[] = [
  {
    id: 1,
    company_name: 'VeendHQ',
    status: 'Onsite',
    website_url: 'https://veendhq.com/',
    what_company_does: 'FinTech startup creating modern, inclusive payment and credit solutions.',
    company_location: 'Lagos, Nigeria',
    description: 'Frontend Engineer & Mobile Developer',
    tenure: 'June 2025 - Present',
    description_of_workdone: 'Building scalable frontend systems with React and Next.js, implementing responsive UIs, and collaborating with cross-functional teams to deliver high-quality products.',
    highlights: [
      'Architect and maintain a modular design system adopted company-wide, improving development efficiency by 30%.',
      'Led performance optimization that reduced key page load times by 45%.',
      'Collaborate with cross-functional teams to build responsive, accessible interfaces using Next.js, Chakra UI, and Tailwind CSS.'
    ]
  },
  {
    id: 2,
    company_name: 'IAIIEA',
    status: 'Remote',
    website_url: 'https://iaiiea.org/',
    what_company_does: 'AI research and development organization',
    company_location: 'Abuja, Nigeria',
    description: 'Frontend Developer',
    tenure: 'Jan 2024 - August 2025',
    description_of_workdone: 'Developed interactive dashboards and data visualization tools using React and D3.js. Implemented state management solutions and optimized application performance.',
    highlights: [
      'Built real-time analytics dashboard used by 2K+ researchers globally.',
      'Implemented advanced D3.js visualizations for complex AI datasets.',
      'Collaborated across teams to ship features 2 weeks ahead of schedule.'
    ]
  },
  {
    id: 3,
    company_name: 'ReconXI',
    status: 'Contract',
    website_url: 'https://reconxi.com/',
    what_company_does: 'Cybersecurity and digital forensics firm',
    company_location: 'Lagos',
    description: 'UI Developer',
    tenure: 'January 2025 - March 2025',
    description_of_workdone: 'Created secure and accessible user interfaces for security tools. Worked closely with design and backend teams to implement complex workflows.',
    highlights: [
      'Delivered secure UI flows aligned with strict compliance requirements.',
      'Improved accessibility scores to WCAG AA across core products.',
      'Developed reusable components that reduced lead time on new features.'
    ]
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
    description_of_workdone: 'Participated in intensive frontend development program, built multiple projects, and collaborated with team members on real-world applications.',
    highlights: [
      'Completed 12+ sprint-based product challenges within deadline.',
      'Collaborated in cross-functional teams to ship production-ready features.',
      'Recognized for outstanding UI implementation during final demo day.'
    ]
  },
]
const TECH_STACK = [
  'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'Zustand', 
  'Tailwind CSS', 'Chakra UI', 'Git & GitHub', 'React Native', 'NativeWind',
  'HTML5', 'CSS3', 'Figma', 'VS Code', 'Testing'
] as const;

const STATS: StatCardProps[] = [
  { count: '2+', label: 'Professional work Experience' },
  { count: '10+', label: 'Projects Completed' },
  { count: '10+', label: 'Happy Clients' },
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

const generateHighlightsFromDescription = (description: string): string[] => {
  const segments = description
    .split(/\.(?=\s|$)/)
    .map((segment) => segment.trim())
    .filter(Boolean);

  if (segments.length >= 3) {
    return segments.slice(0, 3).map((segment) => segment.endsWith('.') ? segment : `${segment}.`);
  }

  if (segments.length === 2) {
    return [
      segments[0].endsWith('.') ? segments[0] : `${segments[0]}.`,
      segments[1].endsWith('.') ? segments[1] : `${segments[1]}.`,
      'Collaborated closely with stakeholders to ensure measurable product impact.'
    ];
  }

  if (segments.length === 1) {
    return [
      segments[0].endsWith('.') ? segments[0] : `${segments[0]}.`,
      'Introduced process improvements that boosted overall team efficiency.',
      'Delivered consistently high-quality interfaces aligned with brand guidelines.'
    ];
  }

  return [
    'Led initiatives that improved business KPIs and user satisfaction.',
    'Collaborated across teams to ship features with measurable impact.',
    'Championed design-to-development handoff and codebase maintainability.'
  ];
};

const _getImpactHighlights = (work: WorkExperience): string[] => {
  if (work.highlights && work.highlights.length > 0) {
    return work.highlights;
  }

  return generateHighlightsFromDescription(work.description_of_workdone);
};

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

const getTechIcon = (name: string) => {
  const iconClass = "text-xl";
  const Safe = ({ children }: { children: React.ReactNode }) => (
    <>{children ?? <span className={iconClass}>🔧</span>}</>
  );
  switch (name) {
    case 'React.js':
    case 'React Native':
      return <Safe><SiReact className={iconClass + " text-cyan-400"} /></Safe>;
    case 'Next.js':
      return <Safe><SiNextdotjs className={iconClass} /></Safe>;
    case 'TypeScript':
      return <Safe><SiTypescript className={iconClass + " text-blue-500"} /></Safe>;
    case 'JavaScript':
      return <Safe><SiJavascript className={iconClass + " text-yellow-400"} /></Safe>;
    case 'Redux':
      return <Safe><SiRedux className={iconClass + " text-purple-400"} /></Safe>;
    case 'Zustand':
      return <span className={iconClass}>🐻</span>;
    case 'Tailwind CSS':
    case 'NativeWind':
      return <Safe><SiTailwindcss className={iconClass + " text-sky-400"} /></Safe>;
    case 'Chakra UI':
      return <Safe><SiChakraui className={iconClass + " text-teal-300"} /></Safe>;
    case 'Git & GitHub':
      return (
        <span className="flex items-center gap-1">
          <SiGit className={iconClass + " text-orange-500"} />
          <FaGithub className={iconClass} />
        </span>
      );
    case 'HTML5':
      return <Safe><SiHtml5 className={iconClass + " text-orange-500"} /></Safe>;
    case 'CSS3':
      return <Safe><SiCss3 className={iconClass + " text-blue-400"} /></Safe>;
    case 'Figma':
      return <Safe><SiFigma className={iconClass} /></Safe>;
    // case 'VS Code':
    //   return <Safe><SiVisualstudiocode className={iconClass + " text-blue-500"} /></Safe>;
    case 'Testing':
      return <Safe><SiTestinglibrary className={iconClass + " text-red-400"} /></Safe>;
    default:
      return <span className={iconClass}>🔧</span>;
  }
};

export default function Home() {
  const [selectedWorkId, setSelectedWorkId] = useState<number | null>(work_experience[0]?.id ?? null);

  const selectedWork = work_experience.find((work) => work.id === selectedWorkId);

  const handleSelectWork = (id: number) => {
    setSelectedWorkId(id);
  };

  return (
    <div>
      <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white overflow-x-hidden">
      <section className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:min-h-screen lg:flex-row items-center lg:justify-between gap-8 lg:gap-12">
          <motion.div 
            className="text-center lg:text-left lg:w-1/2 space-y-6 pt-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="inline-block bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-4 "
            >
              Product Developer & Frontend Engineer
            </motion.div>
            
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-7xl font-extrabold leading-tight max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm <span className="text-yellow-400">Praise Afolabi</span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-300 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I’m a Product Developer passionate about building modern, scalable, and user-friendly web applications. I do beyond transforming designs into clean, functional code and I focus on solving real business problems and driving innovation. I don’t just code interfaces, I build experiences that create impact and help products grow.
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

        <div className='w-full '>
          <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className=""
      >
        <div className=" lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-7xl font-bold mb-4 text-yellow-400 uppercase">
            Work Experience
          </h2>
          {/* <p className="text-gray-300 text-lg">
            My professional journey and key contributions
          </p> */}
        </div>
        
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-yellow-400/50 to-transparent hidden md:block"></div>
          
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
            <div className="space-y-12">
              {work_experience?.map((work, index) => {
                const isActive = selectedWorkId === work.id;
                const previewText = work.description_of_workdone.length > 160
                  ? `${work.description_of_workdone.substring(0, 160)}...`
                  : work.description_of_workdone;

                return (
                  <motion.div
                    key={work?.id}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div
                      className={`absolute left-4 w-4 h-4 rounded-full border-4 hidden md:block transition-colors duration-300 ${
                        isActive ? 'bg-yellow-500 border-yellow-400/40' : 'bg-yellow-400 border-gray-900'
                      }`}
                    ></div>

                    <motion.div
                      className={`bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-2xl md:ml-16 transition-all duration-300 border cursor-pointer ${
                        isActive
                          ? 'border-yellow-400/80 shadow-yellow-400/20'
                          : 'border-gray-700 hover:border-yellow-400/30'
                      }`}
                      whileHover={{
                        y: -6,
                        boxShadow: "0 18px 36px rgba(0,0,0,0.25)",
                        transition: { type: "spring", stiffness: 300 }
                      }}
                      onClick={() => handleSelectWork(work.id)}
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                          <h3 className="text-2xl font-bold text-white">
                            {work?.company_name}
                          </h3>
                          <span className="text-sm text-yellow-300 font-semibold">
                            {work?.description}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                          <span className="bg-gray-800/60 px-3 py-1 rounded-full">
                            {work?.status}
                          </span>
                          <span className="bg-gray-800/60 px-3 py-1 rounded-full">
                            {work?.company_location}
                          </span>
                          <span className="bg-gray-800/60 px-3 py-1 rounded-full">
                            {work?.tenure}
                          </span>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed lg:hidden">
                          {work.description_of_workdone}
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed hidden lg:block">
                          {previewText}
                        </p>

                        {/* Mobile full details */}
                        <div className="lg:hidden bg-gray-900/60 border border-gray-700 rounded-xl p-4 mt-4 space-y-3">
                          <h4 className="text-lg font-semibold text-yellow-300">
                            Impact Highlights
                          </h4>
                          <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                            {_getImpactHighlights(work).map((highlight, index) => (
                              <li key={`${work.id}-${index}`} className="flex gap-3">
                                <span className="text-yellow-400 mt-1">▹</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                          {work.website_url && (
                            <motion.a
                              href={work.website_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-yellow-300 text-black rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-yellow-400 transition-colors duration-300 mt-4"
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                            >
                              Visit Website
                            </motion.a>
                          )}
                        </div>

                        <div className="flex items-center justify-between gap-4 pt-2">
                          <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-gray-400">
                            {/* <span className={`inline-flex h-2 w-2 rounded-full ${isActive ? 'bg-yellow-400' : 'bg-gray-500'}`}></span> */}
                            {/* <span className="lg:hidden">Full details shown</span> */}
                            <span className="hidden lg:block">{isActive ? 'Currently viewing' : 'Click card for details'}</span>
                          </div>
                          <motion.button
                            type="button"
                            className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors duration-300 hidden lg:flex ${
                              isActive
                                ? 'bg-yellow-300 text-black'
                                : 'bg-yellow-400/20 text-yellow-300 hover:bg-yellow-300 hover:text-black'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectWork(work.id);
                            }}
                          >
                            {isActive ? 'Viewing Details' : 'View Details'}
                            <motion.span
                              animate={{ rotate: isActive ? 90 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              ➜
                            </motion.span>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              {selectedWork && (
                <motion.aside
                  key={selectedWork.id}
                  initial={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
                  transition={{ duration: 0.4 }}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800 p-4 sm:p-6 lg:p-8 rounded-2xl border border-yellow-400/30 shadow-2xl hidden lg:flex"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <span className="bg-yellow-400/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold self-start">
                        {selectedWork.status}
                      </span>
                      <h3 className="text-3xl font-bold text-white">
                        {selectedWork.company_name}
                      </h3>
                      <p className="text-gray-300 text-base font-medium">
                        {selectedWork.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                          <span>{selectedWork.company_location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                          <span className="font-medium">{selectedWork.tenure}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-400 italic text-sm leading-relaxed">
                      {selectedWork.what_company_does}
                    </p>

                    <div className="bg-gray-900/60 border border-gray-700 rounded-xl p-6 space-y-4">
                      <h4 className="text-lg font-semibold text-yellow-300">
                        Impact Highlights
                      </h4>
                      <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                        {_getImpactHighlights(selectedWork).map((highlight, index) => (
                          <li key={`${selectedWork.id}-${index}`} className="flex gap-3">
                            <span className="text-yellow-400 mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {selectedWork.website_url && (
                      <motion.a
                        href={selectedWork.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-yellow-300 text-black rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-yellow-400 transition-colors duration-300"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Visit Company Website
                      </motion.a>
                    )}
                  </div>
                </motion.aside>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
        </div>

           <section className="container mx-auto lg:py-16">
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.h2>
        <div className="relative marquee">
          {/* gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10"></div>
          <div className="overflow-hidden">
            <div className="marquee-track gap-4 sm:gap-6">
              {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
                <div
                  key={`${tech}-${index}`}
                  className="bg-gray-800/90 px-4 py-3 rounded-lg text-center min-w-[160px] flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors"
                >
                  {getTechIcon(tech)}
                  <span className="text-base sm:text-lg font-semibold">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
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


     

      {/* Social Links & Footer */}
      {/* <section className="container mx-auto px-4 lg:px-8 pb-8">
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
      </section> */}
    </div>

   
    
    </div>
  );
}