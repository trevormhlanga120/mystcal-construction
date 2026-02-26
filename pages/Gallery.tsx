import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

interface Project {
  id: number;
  category: string;
  title: string;
  image: string;
  aspect: string;
}

const projects: Project[] = [
  {
    id: 1,
    category: 'Residential',
    title: 'Umhlanga Luxury Villa',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDN88v2R-CYFzHuRPB_2n0bE9x8alKoF61UZqQVYj1-HYwGhEmwfpjHVzZ7-AlN-jzV-AmeOEpElR4HLNFzECqaEuW0OOWw1ZtHrSfZiZostIA9VI93W0TmZ9qw8NNS9-b_Ahn1OdlVbei5df3JQZgA_SafQq47J3W23LfxFcFYIS3hEDZOLYA7rb6BhFYkM8UQFJTPyjqsIp4cXzcHXt00KdzowwgfEWrIZuTEsTlcb9YVkU5X72l_oX3kW7QlrH4Z6N0ovXC1A',
    aspect: 'aspect-[3/5]'
  },
  {
    id: 2,
    category: 'Commercial',
    title: 'Sandton Hub',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2vEpZgsfUxlGXgUnbmxG-s6pQhGHUbC9W73YIMLnxDzxGh8EjOcFuaTa_RDDqDtG3GXMWAK2FPu6GA3WpqBoyOmHIzqu7qMSxB2Udgbg9CJoPrukfNqzEyMo0nsWOmzl8en6pjJIw0PHuXAoxl4yzTMXdKl6OpWheEyTnjuYzmR6puW7rU_E-s_vdbgPppK2p3IaLu8OFtGdn_trYv11APCMvzyVSfAk3yY2Ow-J1DI3okQ0HPZ_EtIVKC1F-me8cDgvXT-wgUQ',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 3,
    category: 'Renovation',
    title: 'Cape Town Kitchen',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB47RFCxxX_hNB3_dQYIIPxAoqcUa0jcwwtFv1dekJ8njtPS_AK-l_hU2mYw4OF3NZ860ScQM1aLz6ETvlgNW8WVQPF1a4Rfvewgvkgcs3A-k2EyRLuHi9kI6747DiISJHPQ4IaVuKO6b7aPqOtG8MsK0RrUYfc4mTaeAYIbEWCybTtP2KdsyGKSG4GCen_t6Txdp2TrSIVwZW75jvVEBCdma69JRtXFLogBE7y1uH3Z6jcnIK_jWbs5UNzwTs9clPnQ1bZ4TOJZA',
    aspect: 'aspect-square'
  },
  {
    id: 4,
    category: 'Industrial',
    title: 'Durban Logistics',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh9SXHlldGXU3aYKQdUhWYuRLZB4UOfMtEt5kINKD-NV1q822TztLCCJU0Xf3e-3I2l9YloYr5hH-CfQGdnLuC2T7mMqDyLT2xdIc38r0cDXlO9e4JZ9gMmVwO9pnOKmnhAyWXp72aE6PUA3xKo4nYfj0EV3aautSA9m1GaSooxkcT2ph6q71KXuXFjPlfHQM8PysbddsFf5gwVzeFv0Krs3e5xuS618n15P1sGGHeegwZKpF6LUNJMqgLJeAXOc2GmL8Yty7Y4g',
    aspect: 'aspect-[3/5]'
  },
  {
    id: 5,
    category: 'Heritage',
    title: 'Bo-Kaap Studio',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuGhYXvOdxoOq2nINYNm9tnjXqEmjcUW8a0bjTH8jZSZNorcj73ZAPJ2-shDRQ7T7BGFfo4NBB5LNhOKnf-CQ2VIbPIXs75PYcTgr7psOI-twMTb53Cv0CvnWh8k-eTbOsik2Bg2cmWPiPQIqlcdW_1E6seQAsbiv84mz22o0axFQqC8TEQU6nxytSoxhgieL6HeuYIMv0rG-EHMcGoJgzSzkSSYBUqP0qFU0VPXxr4cxs1WnKYeT9e-2WMK5V2rBuoBQCjKQySw',
    aspect: 'aspect-[3/4]'
  },
  {
    id: 6,
    category: 'Residential',
    title: 'Zimbali Estate',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5qtz_gi-ZhzXRy3ahxumNmIW44MpwHWl3yAYgqvyiCccB9bnXUruBZsjf0Yz5Z9gufaWvJK_tpxuIOE9EYiXR61VDuJg_IQ2IiSd_uYmP77DNworpJgYCLFMDZ83b6eYX9eRUyJMUOTY2GyQstHEFI2LtkuBQGEWBp8gokQ1_tvIl61nBBmSGwwEZGd5UuipvFxTgeCJhrl3GmXj1eKai0eMue1N2Yrxnp_f7PsneloHFltkydN5_Z9jJ6o0FiNnIe4lfw9JVHQ',
    aspect: 'aspect-square'
  }
];

const filters = ['All Projects', 'Residential', 'Commercial', 'Industrial'];

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-charcoal dark:text-white transition-colors duration-300 min-h-screen">
      <SEO 
        title="Project Gallery" 
        description="View our portfolio of residential, commercial, and industrial construction projects across South Africa."
        keywords="construction gallery, renovation portfolio, building projects, mystical construction work"
      />
      <nav className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-brand-dark/80 ios-blur px-4 py-3 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center w-12 cursor-pointer" onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined text-charcoal dark:text-white">arrow_back_ios</span>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="w-10 h-5 mb-0.5">
              <svg className="w-full h-full" viewBox="0 0 100 45">
                <path d="M10 40 L50 10 L90 40" fill="none" stroke="#f5a300" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path>
                <path d="M30 40 L50 25 L70 40" fill="none" stroke="#f5a300" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"></path>
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-black leading-none tracking-tight dark:text-white text-charcoal">MYSTICAL</span>
              <span className="text-[11px] font-black leading-none tracking-tight dark:text-white text-charcoal">CONSTRUCTION</span>
              <div className="w-full h-[1.5px] bg-primary mt-0.5"></div>
              <span className="text-[6px] font-bold tracking-[0.25em] dark:text-white text-charcoal">& RENOVATIONS</span>
            </div>
          </div>
        </div>
        <div className="flex items-center w-12 justify-end">
          <Link to="/contact" className="bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">Quote</Link>
        </div>
      </nav>
      <header className="px-4 pt-8 pb-4">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-charcoal dark:text-white">
          Our Legacy in <span className="text-primary">Every Detail</span>
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
          Showcasing premium construction and renovation excellence across South Africa.
        </p>
      </header>
      
      {/* Category Filter Buttons */}
      <div className="flex gap-3 px-4 py-4 overflow-x-auto no-scrollbar">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-colors duration-200 ${
              activeFilter === filter
                ? 'bg-primary shadow-sm'
                : 'bg-white dark:bg-charcoal border border-gray-200 dark:border-gray-700'
            }`}
          >
            <p className={`text-sm font-medium leading-normal ${
              activeFilter === filter
                ? 'text-white font-semibold' 
                : 'text-charcoal dark:text-gray-300'
            }`}>
              {filter}
            </p>
          </button>
        ))}
      </div>

      <main className="px-4 pt-2 pb-12">
        <div className="masonry-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="masonry-item group relative overflow-hidden rounded-xl bg-gray-200 animate-in fade-in zoom-in duration-300">
              <img 
                src={project.image} 
                alt={project.title} 
                className={`${project.aspect} w-full h-full object-cover`}
                loading="lazy" 
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent flex flex-col justify-end p-4">
                <p className="text-primary font-bold text-[10px] tracking-widest uppercase">{project.category}</p>
                <h3 className="text-white font-bold text-base leading-tight">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <section className="mx-4 mb-32 p-8 rounded-2xl bg-charcoal dark:bg-brand-dark/60 text-center border border-primary/20">
        <h3 className="text-2xl font-bold text-white mb-2">Ready to build your dream?</h3>
        <p className="text-gray-400 mb-6">Let’s talk about your next project and bring your vision to life with mystical precision.</p>
        <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 w-full">
          Get Started <span className="material-symbols-outlined text-sm">trending_flat</span>
        </Link>
      </section>
      
      <footer className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-brand-dark/95 ios-blur border-t border-gray-100 dark:border-gray-800 pb-8 pt-3 z-50">
        <div className="flex justify-between items-center px-6">
          <div className="flex flex-col items-start scale-90 origin-left">
            <div className="w-8 h-4 mb-0.5">
              <svg className="w-full h-full" viewBox="0 0 100 45">
                <path d="M10 40 L50 10 L90 40" fill="none" stroke="#f5a300" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path>
                <path d="M30 40 L50 25 L70 40" fill="none" stroke="#f5a300" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"></path>
              </svg>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-[9px] font-black leading-none tracking-tight dark:text-white text-charcoal uppercase">Mystical</span>
              <span className="text-[9px] font-black leading-none tracking-tight dark:text-white text-charcoal uppercase">Construction</span>
              <div className="w-full h-[1px] bg-primary mt-0.5"></div>
              <span className="text-[5px] font-bold tracking-[0.2em] dark:text-white text-charcoal uppercase">& Renovations</span>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <Link to="/" className="flex flex-col items-center gap-1 cursor-pointer">
              <span className="material-symbols-outlined text-gray-400">home</span>
              <span className="text-[10px] text-gray-400 font-medium">Home</span>
            </Link>
            <div className="flex flex-col items-center gap-1 cursor-pointer">
              <span className="material-symbols-outlined text-primary">grid_view</span>
              <span className="text-[10px] text-primary font-bold">Gallery</span>
            </div>
            <Link to="/contact" className="flex flex-col items-center gap-1 cursor-pointer">
              <span className="material-symbols-outlined text-gray-400">mail</span>
              <span className="text-[10px] text-gray-400 font-medium">Contact</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;