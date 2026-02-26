import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-charcoal dark:text-concrete min-h-screen">
      <SEO 
        title="Home" 
        description="Expert construction, renovation, and solar energy solutions in South Africa. Trust Mystical Construction for quality building services."
        keywords="construction, renovation, solar, building, roofing, plumbing, electrical, South Africa"
      />
      <div className="sticky top-0 z-50 flex items-center bg-charcoal p-4 justify-between border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-start justify-center pt-1">
            <div className="mb-0.5 ml-0.5">
              <svg fill="none" height="15" viewBox="0 0 100 25" width="60" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 22L50 5L95 22" stroke="#f5a300" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
                <path d="M75 14V8H82V17" stroke="#f5a300" strokeLinecap="round" strokeWidth="3"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[12px] font-black tracking-tight leading-none">MYSTICAL CONSTRUCTION</span>
              <div className="flex items-center gap-1 w-full mt-0.5">
                <div className="h-[1px] flex-grow bg-primary/60"></div>
                <span className="text-white text-[7px] font-bold tracking-[0.25em] whitespace-nowrap">& RENOVATIONS</span>
                <div className="h-[1px] flex-grow bg-primary/60"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/contact" className="flex cursor-pointer items-center justify-center rounded-lg h-9 px-3 bg-primary text-charcoal text-[10px] font-bold uppercase tracking-wider">
            Get a Free Quote
          </Link>
        </div>
      </div>
      <div className="@container animate-slide-left">
        <div className="relative">
          <div className="relative flex min-h-[520px] flex-col gap-6 items-start justify-end px-6 pb-12 overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0q8gOBqL4YIhM75f1rHoE4wylZVlBzWgJO1mowr3vtSyMV_CW052iuc8eFKCV7X4mMgctg-7aeWUCzUJX2YhftRjGkJEaeRfVV4OBfc5wCJFFQAPTNN-YSz2SkIJbhi-dIje4i3vVJMBjxqnuPngXsv7fOeGIr4JLAuhC8BrcNcvKDSSmojnvsP83w_9JsgFcVWAB1e3lZwJgY6i4cRo47vK_3EtiYavRce_vesaZyUa529gSkuLAjxwRad5CkkVZhlgmnAnB6Q" 
              alt="Expert Construction & Sustainable Energy" 
              className="absolute inset-0 w-full h-full object-cover -z-20"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 -z-10" style={{background: 'linear-gradient(rgba(31, 31, 31, 0.4) 0%, rgba(31, 31, 31, 0.98) 100%)'}}></div>
            
            <div className="flex flex-col gap-4 text-left relative z-10">
              <Link to="/solar" className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-3 py-1 rounded-full w-fit animate-slide-up">
                <span className="material-symbols-outlined text-primary text-sm">solar_power</span>
                <span className="text-primary text-xs font-bold uppercase tracking-wider">New: Solar Installation</span>
              </Link>
              <h1 className="text-white text-4xl font-black leading-tight tracking-tight @[480px]:text-5xl animate-slide-up delay-100">
                Expert Construction & Sustainable Energy
              </h1>
              <p className="text-concrete/80 text-base font-normal leading-relaxed max-w-md animate-slide-up delay-200">
                Leading the way in premium renovations and professional solar power solutions across South Africa.
              </p>
            </div>
            <div className="flex flex-col w-full gap-3 mt-4 animate-slide-up delay-300 relative z-10">
              <Link to="/contact" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 bg-primary text-charcoal text-base font-bold shadow-lg active:scale-[0.98] transition-transform">
                <span>Request Free Quote</span>
              </Link>
              <Link to="/services" className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 bg-white/10 text-white border border-white/20 text-base font-bold backdrop-blur-sm active:scale-[0.98] transition-transform">
                <span>Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pt-10 pb-4 flex justify-between items-end animate-slide-up delay-100">
        <div>
          <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-1">Expertise</p>
          <h2 className="text-charcoal dark:text-white text-2xl font-black leading-tight">Our Services</h2>
        </div>
        <Link to="/services" className="text-primary text-sm font-bold flex items-center gap-1">All Services <span className="material-symbols-outlined text-sm">arrow_forward</span></Link>
      </div>
      <div className="grid grid-cols-2 gap-4 px-6 pb-10 animate-slide-up delay-200">
        <Link to="/solar" className="service-card-shadow flex flex-col gap-4 rounded-xl border border-primary/30 dark:border-primary/20 bg-primary/5 dark:bg-primary/10 p-5 ring-1 ring-primary/20 cursor-pointer">
          <div className="bg-primary text-charcoal w-12 h-12 flex items-center justify-center rounded-lg shadow-inner">
            <span className="material-symbols-outlined text-3xl">solar_power</span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-charcoal dark:text-white text-base font-bold">Solar Power</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">Hybrid & Off-grid systems</p>
          </div>
        </Link>
        <Link to="/building" className="service-card-shadow flex flex-col gap-4 rounded-xl border border-concrete/40 dark:border-white/5 bg-white dark:bg-charcoal/50 p-5 cursor-pointer">
          <div className="bg-primary/10 text-primary w-12 h-12 flex items-center justify-center rounded-lg">
            <span className="material-symbols-outlined text-3xl">home_work</span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-charcoal dark:text-white text-base font-bold">Building</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">New builds & additions</p>
          </div>
        </Link>
        <Link to="/roofing" className="service-card-shadow flex flex-col gap-4 rounded-xl border border-concrete/40 dark:border-white/5 bg-white dark:bg-charcoal/50 p-5 cursor-pointer">
          <div className="bg-primary/10 text-primary w-12 h-12 flex items-center justify-center rounded-lg">
            <span className="material-symbols-outlined text-3xl">roofing</span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-charcoal dark:text-white text-base font-bold">Roofing</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">Installation & repair</p>
          </div>
        </Link>
        <Link to="/building" className="service-card-shadow flex flex-col gap-4 rounded-xl border border-concrete/40 dark:border-white/5 bg-white dark:bg-charcoal/50 p-5 cursor-pointer">
          <div className="bg-primary/10 text-primary w-12 h-12 flex items-center justify-center rounded-lg">
            <span className="material-symbols-outlined text-3xl">format_paint</span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-charcoal dark:text-white text-base font-bold">Renovations</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">Complete remodeling</p>
          </div>
        </Link>
        <Link to="/plumbing" className="service-card-shadow flex flex-col gap-4 rounded-xl border border-concrete/40 dark:border-white/5 bg-white dark:bg-charcoal/50 p-5 cursor-pointer">
          <div className="bg-primary/10 text-primary w-12 h-12 flex items-center justify-center rounded-lg">
            <span className="material-symbols-outlined text-3xl">plumbing</span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-charcoal dark:text-white text-base font-bold">Plumbing</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">Certified plumbing</p>
          </div>
        </Link>
        <Link to="/electrical" className="service-card-shadow flex flex-col gap-4 rounded-xl border border-concrete/40 dark:border-white/5 bg-white dark:bg-charcoal/50 p-5 cursor-pointer">
          <div className="bg-primary/10 text-primary w-12 h-12 flex items-center justify-center rounded-lg">
            <span className="material-symbols-outlined text-3xl">bolt</span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-charcoal dark:text-white text-base font-bold">Electrical</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">Full wiring services</p>
          </div>
        </Link>
      </div>
      <div className="bg-concrete dark:bg-white/5 py-12 px-6">
        <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-1 animate-slide-up">The Advantage</p>
        <h2 className="text-charcoal dark:text-white text-2xl font-black mb-8 animate-slide-up delay-100">Why Choose Us</h2>
        <div className="space-y-6 animate-slide-up delay-200">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-charcoal flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-primary">verified</span>
            </div>
            <div>
              <h4 className="text-charcoal dark:text-white font-bold text-lg">Solar Certified</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">We are fully accredited PV GreenCard installers, ensuring your solar system is safe and efficient.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white dark:bg-charcoal flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-primary">engineering</span>
            </div>
            <div>
              <h4 className="text-charcoal dark:text-white font-bold text-lg">Master Builders</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Decades of experience in construction across South Africa with a focus on quality and longevity.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 text-center px-6 animate-slide-up delay-300">
        <h3 className="text-slate-400 uppercase text-[10px] font-bold tracking-widest mb-4">Operating Across</h3>
        <div className="flex flex-wrap justify-center gap-4 opacity-60 grayscale">
          <span className="px-3 py-1 bg-concrete dark:bg-white/10 rounded-full text-xs font-bold">GAUTENG</span>
          <span className="px-3 py-1 bg-concrete dark:bg-white/10 rounded-full text-xs font-bold">WESTERN CAPE</span>
          <span className="px-3 py-1 bg-concrete dark:bg-white/10 rounded-full text-xs font-bold">KZN</span>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-charcoal border-t border-concrete/20 pb-8 pt-3 px-8 flex justify-between items-center z-50">
        <Link to="/" className="flex flex-col items-center gap-1 text-primary cursor-pointer">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold uppercase">Home</span>
        </Link>
        <Link to="/solar" className="flex flex-col items-center gap-1 text-slate-400 cursor-pointer">
          <span className="material-symbols-outlined">solar_power</span>
          <span className="text-[10px] font-bold uppercase">Solar</span>
        </Link>
        <Link to="/contact" className="relative -mt-8 cursor-pointer">
          <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-4 border-background-light dark:border-background-dark">
            <span className="material-symbols-outlined text-white text-3xl">add</span>
          </div>
        </Link>
        <Link to="/contact" className="flex flex-col items-center gap-1 text-slate-400 cursor-pointer">
          <span className="material-symbols-outlined">contact_page</span>
          <span className="text-[10px] font-bold uppercase">Quotes</span>
        </Link>
        <Link to="/about" className="flex flex-col items-center gap-1 text-slate-400 cursor-pointer">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold uppercase">About</span>
        </Link>
      </div>
      <div className="h-28"></div>
    </div>
  );
};

export default Home;