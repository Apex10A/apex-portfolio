"use client"
import React from 'react';
import { 
  Github, 
  GitPullRequest, 
  GitFork, 
  Star, 
  Users, 
  Code2,
  Globe,
  Award,
  BookOpen,
  Heart
} from 'lucide-react';
import "@/app/index.css"
import { motion } from 'framer-motion';

interface ContributionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  stats?: {
    label: string;
    value: string | number;
  }[];
}

const ContributionCard: React.FC<ContributionCardProps> = ({ 
  title, 
  description, 
  icon, 
  link,
  stats 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-yellow-400/10 rounded-lg text-yellow-400">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        {stats && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-yellow-400">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-500 transition-colors duration-300 mt-4"
          >
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Contributions = () => {
  const contributions: ContributionCardProps[] = [
    {
      title: "HNG Internship",
      description: "Successfully completed the competitive HNG Internship program, contributing to innovative solutions in education technology.",
      icon: <Award className="w-6 h-6" />,
      stats: [
        { label: "Duration", value: "8 Weeks" },
        { label: "Projects", value: "3+" }
      ]
    },
    {
      title: "Open Source Contributions",
      description: "Active contributor to various open-source projects, focusing on improving documentation and fixing bugs.",
      icon: <Github className="w-6 h-6" />,
      link: "https://github.com/Apex10A",
      stats: [
        { label: "Repositories", value: "10+" },
        { label: "Contributions", value: "50+" }
      ]
    },
    {
      title: "Community Involvement",
      description: "Participating in tech communities and contributing to knowledge sharing through technical writing and mentoring.",
      icon: <Users className="w-6 h-6" />,
      stats: [
        { label: "Communities", value: "3+" },
        { label: "Articles", value: "5+" }
      ]
    },
    {
      title: "Technical Writing",
      description: "Writing technical articles and documentation to help other developers learn and grow in their careers.",
      icon: <BookOpen className="w-6 h-6" />,
      stats: [
        { label: "Articles", value: "5+" },
        { label: "Topics", value: "3+" }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-yellow-400">Contributions</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Contributing to the tech community through open-source work, technical writing, 
            and active participation in developer communities.
          </p>
        </motion.div>

        {/* Contributions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {contributions.map((contribution, index) => (
            <ContributionCard key={index} {...contribution} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold mb-4">Want to Collaborate?</h2>
          <p className="text-gray-300 mb-8">
            I'm always open to new opportunities to contribute and collaborate with the tech community.
          </p>
          <a
            href="https://github.com/Apex10A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            Connect on GitHub
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contributions;
