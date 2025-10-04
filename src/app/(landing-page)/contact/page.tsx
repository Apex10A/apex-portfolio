"use client"
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Clock, CheckCircle, AlertCircle, Linkedin, Github, Twitter, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { Suspense } from 'react';

// Types
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  priority: 'low' | 'medium' | 'high';
  projectType: string;
}

type FormStatus = '' | 'sending' | 'success' | 'error';

interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  description?: string;
}

interface ContactFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  status: FormStatus;
}

// Enhanced Contact Info Component
const ContactInfo: React.FC<ContactInfoProps> = ({ icon, label, value, href, description }) => (
  <div className="group relative overflow-hidden p-6 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/10">
    <div className="absolute  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative z-10">
      <div className="flex items-start space-x-4">
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
          <div className="h-6 w-6 text-gray-900">{icon}</div>
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">{label}</p>
          {href ? (
            <a 
              href={href} 
              className="block text-lg font-semibold text-white hover:text-yellow-400 transition-colors duration-300 mt-1 group-hover:translate-x-1"
            >
              {value}
            </a>
          ) : (
            <p className="text-lg font-semibold text-white mt-1">{value}</p>
          )}
          {description && (
            <p className="text-sm text-gray-400 mt-2">{description}</p>
          )}
        </div>
      </div>
    </div>
  </div>
);

// Enhanced Form Component
const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, status }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium',
    projectType: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
    if (status === 'success') {
      setFormData({ 
        name: '', 
        email: '', 
        subject: '', 
        message: '', 
        priority: 'medium', 
        projectType: '' 
      });
    }
  };

  const projectTypes = [
    'Web Development',
    'Mobile App',
    'E-commerce',
    'Portfolio Website',
    'Consulting',
    'Other'
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name and Email Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label 
            htmlFor="name" 
            className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
              focusedField === 'name' ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 py-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="relative">
          <label 
            htmlFor="email" 
            className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
              focusedField === 'email' ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            className="w-full px-4 py-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
            placeholder="your.email@example.com"
            required
          />
        </div>
      </div>

      {/* Subject */}
      <div className="relative">
        <label 
          htmlFor="subject" 
          className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
            focusedField === 'subject' ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onFocus={() => setFocusedField('subject')}
          onBlur={() => setFocusedField(null)}
          className="w-full px-4 py-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
          placeholder="What's this about?"
          required
        />
      </div>

      {/* Project Type and Priority Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
          >
            <option value="">Select project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="relative">
          <label htmlFor="priority" className="block text-sm font-medium text-gray-300 mb-2">
            Priority Level
          </label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full px-4 py-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300"
          >
            <option value="low">🟢 Low Priority</option>
            <option value="medium">🟡 Medium Priority</option>
            <option value="high">🔴 High Priority</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="relative">
        <label 
          htmlFor="message" 
          className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
            focusedField === 'message' ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          rows={6}
          className="w-full px-4 py-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 resize-none"
          placeholder="Tell me about your project, ideas, or just say hello!"
          required
        />
        <div className="absolute bottom-3 right-3 text-xs text-gray-500">
          {formData.message.length}/500
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="group w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black py-4 px-8 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:shadow-yellow-400/25 transform hover:scale-105"
      >
        <span className="text-lg">
          {status === 'sending' ? 'Sending Message...' : 'Send Message'}
        </span>
        <Send className={`h-5 w-5 transition-transform duration-300 ${
          status === 'sending' ? 'animate-pulse' : 'group-hover:translate-x-1'
        }`} />
      </button>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="flex items-center justify-center space-x-2 p-4 bg-green-500/20 border border-green-500/50 rounded-xl">
          <CheckCircle className="h-5 w-5 text-green-400" />
          <p className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</p>
        </div>
      )}
      {status === 'error' && (
        <div className="flex items-center justify-center space-x-2 p-4 bg-red-500/20 border border-red-500/50 rounded-xl">
          <AlertCircle className="h-5 w-5 text-red-400" />
          <p className="text-red-400 font-medium">Failed to send message. Please try again or contact me directly.</p>
        </div>
      )}
    </form>
  );
};

const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (formData: FormData) => {
    setStatus('sending');
  
    try {
      const response = await fetch('https://formspree.io/f/xjkkdorp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        setStatus('success');
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: <Mail />,
      label: 'Email',
      value: 'pafolabi740@gmail.com',
      href: 'mailto:pafolabi740@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: <Phone />,
      label: 'Phone',
      value: '+234 816 086 2773',
      href: 'tel:+2348160862773',
      description: 'Available anyday of the week'
    },
    {
      icon: <MapPin />,
      label: 'Location',
      value: 'Lagos, Nigeria',
      description: 'Open to remote/onsite works '
    }
  ];

  const socialLinks = [
    // {
    //   icon: <Linkedin />,
    //   label: 'LinkedIn',
    //   href: '#',
    //   color: 'hover:text-blue-400'
    // },
    {
      icon: <Github />,
      label: 'GitHub',
      href: 'https://github.com/Apex10A',
      color: 'hover:text-gray-300'
    },
    {
      icon: <Twitter />,
      label: 'Twitter',
      href: 'https://x.com/dev_apexxr',
      color: 'hover:text-blue-400'
    },
    // {
    //   icon: <Globe />,
    //   label: 'Portfolio',
    //   href: '#',
    //   color: 'hover:text-yellow-400'
    // }
  ];

  const availabilityStatus = {
    status: 'available', // 'available', 'busy', 'unavailable'
    nextAvailable: 'Immediately',
    responseTime: 'Less than 1 hour'
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading contact page...</p>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className=" text-white relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-24 pb-16">
          <div className=" mb-16 lg:mb-20">
            <div className="inline-flex items-center justify-center p-2 bg-yellow-400/10 rounded-full mb-6">
              <Sparkles className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-medium">Let's Create Something Amazing</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
              Let's <span className="text-yellow-400">Connect</span>
            </h1>
            
            <p className="text-sm sm:text-xl text-gray-300 max-w-3xl leading-relaxed opacity-[0.7]">
              Have a project in mind or just want to chat? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            {/* <div className="inline-flex items-center justify-center mt-8 p-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700">
              <div className={`w-3 h-3 rounded-full mr-3 ${
                availabilityStatus.status === 'available' ? 'bg-green-400 animate-pulse' :
                availabilityStatus.status === 'busy' ? 'bg-yellow-400' : 'bg-red-400'
              }`}></div>
              <div className="text-sm">
                <span className="text-gray-300">Currently </span>
                <span className="text-white font-semibold">
                  {availabilityStatus.status === 'available' ? 'Available for new projects' :
                   availabilityStatus.status === 'busy' ? 'Partially available' : 'Fully booked'}
                </span>
                <span className="text-gray-400 block">
                  Response time: 
                  {availabilityStatus.responseTime}
                </span>
              </div>
            </div> */}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 lg:gap-12 mx-auto">
            <div className="xl:col-span-2 space-y-6 lg:space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl lg:text-3xl font-bold mb-6 flex items-center">
                  <MessageSquare className="w-7 h-7 text-yellow-400 mr-3" />
                  Contact Information
                </h2>
                {contactInfo.map((info) => (
                  <ContactInfo key={info.label} {...info} />
                ))}
              </div>
            

              <div className="">
                <h3 className="text-xl font-bold mb-6">Let's Connect</h3>
                <p className="text-gray-300 mb-6">
                  Follow me on social media to stay updated with my latest projects and insights.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`flex items-center justify-center p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl transition-all duration-300 ${social.color} group border border-gray-600 hover:border-gray-500`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="mr-3 group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <span className="font-medium">{social.label}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="xl:col-span-3">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-700 shadow-2xl">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl lg:text-3xl font-bold flex items-center">
                    <Send className="w-7 h-7 text-yellow-400 mr-3" />
                    Send Message
                  </h2>
                  {/* <div className="hidden sm:flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    Usually responds in {availabilityStatus.responseTime}
                  </div> */}
                </div>
                <ContactForm onSubmit={handleSubmit} status={status} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Contact;