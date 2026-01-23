import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';

const About: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-charcoal dark:text-gray-100 min-h-screen flex flex-col">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <header className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-background-dark/90 backdrop-blur-md p-4 border-b border-gray-200 dark:border-gray-800 justify-between">
        <div className="flex items-center gap-2">
          <div className="text-primary material-symbols-outlined text-3xl" data-icon="architecture">architecture</div>
          <h2 className="text-charcoal dark:text-white text-lg font-black leading-tight tracking-tight uppercase">Mystical</h2>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate('/services')} className="text-charcoal dark:text-white material-symbols-outlined" data-icon="search">search</button>
          <button onClick={() => setIsMenuOpen(true)} className="text-charcoal dark:text-white material-symbols-outlined" data-icon="menu">menu</button>
        </div>
      </header>
      <main className="flex flex-col">
        <section className="relative">
          <div className="@container">
            <div className="flex flex-col">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWAbFSEvrXjQNa2CIzbcJsjeM_gYdGRG_jH0HXg5q7RkAvkGKrRGeGEvUAq-V_zPxtXOYTamfpzxQtIgsuujaaW8mKAc1avDa30vKJafFOltkK8kHL8co6OX0i3hENMX2G6yUMkngwU7oGrFIIE2usrF_rtfAsOBKTZ67g_Omj22SVWr84vipOSMhbGkGar-A_cWlulqxfFk4_vuyS2F5FSjQoKWmfgKEtxFyEfK1MRskRlH9MYagb9YDm4RI9lIcWYvXMNDagxQ" 
                alt="Luxury modern home interior with high-end wood finishes" 
                className="w-full bg-center bg-no-repeat aspect-[4/3] object-cover @[864px]:aspect-video animate-slide-left" 
                loading="lazy" 
              />
              <div className="flex flex-col gap-6 p-6 @[864px]:px-12 @[864px]:py-16 bg-white dark:bg-background-dark">
                <div className="flex flex-col gap-3">
                  <span className="text-primary font-bold tracking-widest text-xs uppercase animate-slide-up">Since 2010</span>
                  <h1 className="text-charcoal dark:text-white text-4xl font-black leading-[1.1] tracking-tight @[480px]:text-5xl animate-slide-up delay-100">
                    Building Excellence in <span className="text-primary">South Africa</span>
                  </h1>
                  <p className="text-charcoal/70 dark:text-gray-400 text-lg leading-relaxed animate-slide-up delay-200">
                    Transforming residential and commercial spaces through superior craftsmanship and innovative renovation solutions.
                  </p>
                </div>
                <div className="flex gap-3 animate-slide-up delay-300">
                  <Link to="/gallery" className="flex flex-1 min-w-[140px] max-w-[240px] cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-primary text-charcoal text-base font-bold tracking-wide">
                    <span className="truncate">View Projects</span>
                  </Link>
                  <button className="flex size-12 items-center justify-center rounded-lg border-2 border-primary text-primary">
                    <span className="material-symbols-outlined">play_arrow</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-concrete dark:bg-gray-900 py-12 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-2 animate-slide-up">
              <div className="w-8 h-1 bg-primary"></div>
              <h2 className="text-charcoal dark:text-white text-2xl font-black uppercase tracking-tight">Our Mission</h2>
            </div>
            <p className="text-charcoal/80 dark:text-gray-300 text-lg leading-relaxed pt-2 animate-slide-up delay-100">
              At Mystical Construction, our mission is to provide reliable, high-quality renovation services that exceed client expectations through dedication, precision, and a commitment to South African architectural excellence.
            </p>
          </div>
        </section>
        <section className="py-16 px-6 bg-white dark:bg-background-dark">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-charcoal dark:text-white text-3xl font-black mb-8 animate-slide-up">Core Values</h2>
            <div className="grid gap-6 animate-slide-up delay-100">
              <div className="flex flex-col p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-background-light dark:bg-gray-900 shadow-sm">
                <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl" data-icon="engineering">engineering</span>
                </div>
                <h3 className="text-charcoal dark:text-white text-xl font-bold mb-2">Skilled Professionals</h3>
                <p className="text-charcoal/60 dark:text-gray-400">Our team consists of certified experts dedicated to delivering technical precision in every brick laid.</p>
              </div>
              <div className="flex flex-col p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-background-light dark:bg-gray-900 shadow-sm">
                <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl" data-icon="verified">verified</span>
                </div>
                <h3 className="text-charcoal dark:text-white text-xl font-bold mb-2">Quality Workmanship</h3>
                <p className="text-charcoal/60 dark:text-gray-400">We don't cut corners. We use premium materials and rigorous standards to ensure lasting durability.</p>
              </div>
              <div className="flex flex-col p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-background-light dark:bg-gray-900 shadow-sm">
                <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
                  <span className="material-symbols-outlined text-primary text-3xl" data-icon="payments">payments</span>
                </div>
                <h3 className="text-charcoal dark:text-white text-xl font-bold mb-2">Affordable Pricing</h3>
                <p className="text-charcoal/60 dark:text-gray-400">Premium quality doesn't have to be overpriced. We provide transparent, competitive rates for every project.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary p-8 text-center animate-slide-up">
          <h2 className="text-charcoal text-2xl font-black mb-4">Ready to start your project?</h2>
          <Link to="/contact" className="w-full bg-charcoal text-white font-bold py-4 rounded-lg uppercase tracking-widest text-sm shadow-xl inline-block">
            Get a Free Quote
          </Link>
        </section>
        <footer className="bg-charcoal text-white pt-12 pb-8 px-6">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4 animate-slide-up">
                <div className="text-primary material-symbols-outlined text-2xl" data-icon="architecture">architecture</div>
                <h2 className="text-white text-xl font-black uppercase tracking-tight">Mystical</h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 animate-slide-up delay-100">
                Leading the renovation industry in South Africa with integrity and innovation. Level 1 B-BBEE Contributor.
              </p>
              <div className="flex gap-4 mb-8 animate-slide-up delay-200">
                <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center" aria-label="Share">
                  <span className="material-symbols-outlined text-lg">share</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center" aria-label="Mail">
                  <span className="material-symbols-outlined text-lg">mail</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center" aria-label="Call">
                  <span className="material-symbols-outlined text-lg">call</span>
                </button>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col gap-4 text-xs text-gray-500 uppercase tracking-widest animate-slide-up delay-300">
              <p>Johannesburg, South Africa</p>
              <p>© 2024 Mystical Construction & Renovations</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default About;