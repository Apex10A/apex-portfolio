"use client"
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import "@/app/index.css"
import { Suspense } from 'react'

// Types
interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = '' | 'sending' | 'success' | 'error';

interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

interface ContactFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  status: FormStatus;
}

// Contact info component
const ContactInfo: React.FC<ContactInfoProps> = ({ icon, label, value, href }) => (
  <div className="flex items-center space-x-4">
    <div className="bg-yellow-400 p-3 rounded-full">
      <div className="h-6 w-6 text-gray-900">{icon}</div>
    </div>
    <div>
      <p className="text-gray-400">{label}</p>
      {href ? (
        <a href={href} className="hover:text-yellow-400 transition-colors duration-300">
          {value}
        </a>
      ) : (
        <p>{value}</p>
      )}
    </div>
  </div>
);

// Form component
const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, status }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-yellow-400 transition-colors duration-300 resize-none"
          required
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-medium hover:bg-yellow-500 transition-colors duration-300 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
        <Send className="h-5 w-5" />
      </button>

      {status === 'success' && (
        <p className="text-green-400 text-center">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
      )}
    </form>
    </Suspense>
  );
};

const Contact: React.FC = () => {
  const [status, setStatus] = useState<FormStatus>('');

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
      href: 'mailto:pafolabi740@gmail.com'
    },
    {
      icon: <Phone />,
      label: 'Phone',
      value: '+234 816 086 2773',
      href: 'tel:+2348160862773'
    },
    {
      icon: <MapPin />,
      label: 'Location',
      value: 'Ondo, Nigeria'
    }
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            Let's <span className="text-yellow-400">Connect</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <ContactInfo key={info.label} {...info} />
                ))}
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Let's connect</h2>
              <p className="text-gray-300">
                Follow me on social media to stay updated with my latest projects and insights.
              </p>
              {/* Add your social media links here */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Send me a message</h2>
            <ContactForm onSubmit={handleSubmit} status={status} />
          </div>
        </div>
      </div>
    </div>
        </Suspense>
  );
};

export default Contact;