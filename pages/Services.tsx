import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';

const Services: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-concrete-grey dark:bg-background-dark text-[#181610] dark:text-white flex flex-col min-h-screen font-sans">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <header className="sticky top-0 z-50 bg-brand-dark shadow-md">
        <div className="flex items-center p-3 justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-start leading-[1]">
              <span className="material-symbols-outlined text-[#F4A300] text-2xl -mb-0.5">roofing</span>
              <div className="font-extrabold text-[13px] tracking-[0.05em] uppercase text-white">Mystical</div>
              <div className="text-[7px] tracking-[0.15em] uppercase border-t border-[#F4A300] pt-[1px] mt-[1px] w-full text-white">Construction & Renovations</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="bg-[#F4A300] text-white text-[10px] font-bold py-2 px-4 rounded-lg shadow-sm active:scale-95 transition-transform uppercase tracking-wider">
              Get Quote
            </Link>
            <button onClick={() => setIsMenuOpen(true)} className="focus:outline-none text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 w-full max-w-md mx-auto">
        <div className="px-4 pt-8 pb-2">
          <h2 className="text-[#181610] dark:text-white text-[28px] font-bold leading-tight tracking-tight font-heading animate-slide-up">
            Our Services
          </h2>
          <p className="text-[#5e5a52] dark:text-[#b5b0a5] text-sm font-normal leading-relaxed mt-2 animate-slide-up delay-100">
            Expert building and renovation solutions for residential and commercial projects.
          </p>
        </div>
        <div className="px-4 py-4 animate-slide-up delay-200">
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="flex flex-col w-full h-11">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm bg-white dark:bg-[#1a2533] overflow-hidden">
                <div className="text-[#8d7d5e] flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input className="form-input flex w-full border-none bg-transparent h-full placeholder:text-[#8d7d5e] px-4 pl-2 text-sm focus:ring-0" placeholder="Find a service..."/>
              </div>
            </label>
          </form>
        </div>
        <div className="grid grid-cols-2 gap-3 p-4 animate-slide-up delay-300">
          <Link to="/building" className="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#1a2533] p-5 shadow-sm active:bg-gray-50 transition-colors border border-gray-200/50 dark:border-white/5 cursor-pointer">
            <div className="text-[#F4A300]">
              <span className="material-symbols-outlined text-3xl">foundation</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#181610] dark:text-white text-sm font-bold leading-tight font-heading">Building</h3>
              <p className="text-[#8d7d5e] dark:text-[#b5b0a5] text-[10px] font-normal">New construction</p>
            </div>
          </Link>
          <Link to="/solar" className="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#1a2533] p-5 shadow-sm active:bg-gray-50 transition-colors border border-gray-200/50 dark:border-white/5 cursor-pointer">
            <div className="text-[#F4A300]">
              <span className="material-symbols-outlined text-3xl">solar_power</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#181610] dark:text-white text-sm font-bold leading-tight font-heading">Solar Installation</h3>
              <p className="text-[#8d7d5e] dark:text-[#b5b0a5] text-[10px] font-normal">Energy solutions</p>
            </div>
          </Link>
          <Link to="/plastering" className="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#1a2533] p-5 shadow-sm active:bg-gray-50 transition-colors border border-gray-200/50 dark:border-white/5 cursor-pointer">
            <div className="text-[#F4A300]">
              <span className="material-symbols-outlined text-3xl">format_paint</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#181610] dark:text-white text-sm font-bold leading-tight font-heading">Plastering</h3>
              <p className="text-[#8d7d5e] dark:text-[#b5b0a5] text-[10px] font-normal">Wall finishing</p>
            </div>
          </Link>
          <Link to="/roofing" className="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#1a2533] p-5 shadow-sm active:bg-gray-50 transition-colors border border-gray-200/50 dark:border-white/5 cursor-pointer">
            <div className="text-[#F4A300]">
              <span className="material-symbols-outlined text-3xl">roofing</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#181610] dark:text-white text-sm font-bold leading-tight font-heading">Roofing</h3>
              <p className="text-[#8d7d5e] dark:text-[#b5b0a5] text-[10px] font-normal">Repairs & installation</p>
            </div>
          </Link>
          <Link to="/plumbing" className="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#1a2533] p-5 shadow-sm active:bg-gray-50 transition-colors border border-gray-200/50 dark:border-white/5 cursor-pointer">
            <div className="text-[#F4A300]">
              <span className="material-symbols-outlined text-3xl">plumbing</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#181610] dark:text-white text-sm font-bold leading-tight font-heading">Plumbing</h3>
              <p className="text-[#8d7d5e] dark:text-[#b5b0a5] text-[10px] font-normal">Full maintenance</p>
            </div>
          </Link>
          <Link to="/electrical" className="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#1a2533] p-5 shadow-sm active:bg-gray-50 transition-colors border border-gray-200/50 dark:border-white/5 cursor-pointer">
            <div className="text-[#F4A300]">
              <span className="material-symbols-outlined text-3xl">bolt</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#181610] dark:text-white text-sm font-bold leading-tight font-heading">Electrical</h3>
              <p className="text-[#8d7d5e] dark:text-[#b5b0a5] text-[10px] font-normal">Wiring & CoC</p>
            </div>
          </Link>
          <Link to="/drywall" className="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#1a2533] p-5 shadow-sm active:bg-gray-50 transition-colors border border-gray-200/50 dark:border-white/5 cursor-pointer">
            <div className="text-[#F4A300]">
              <span className="material-symbols-outlined text-3xl">grid_view</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#181610] dark:text-white text-sm font-bold leading-tight font-heading">Drywall</h3>
              <p className="text-[#8d7d5e] dark:text-[#b5b0a5] text-[10px] font-normal">Partitioning</p>
            </div>
          </Link>
          <Link to="/ceiling" className="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#1a2533] p-5 shadow-sm active:bg-gray-50 transition-colors border border-gray-200/50 dark:border-white/5 cursor-pointer">
            <div className="text-[#F4A300]">
              <span className="material-symbols-outlined text-3xl">vertical_align_top</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#181610] dark:text-white text-sm font-bold leading-tight font-heading">Ceiling</h3>
              <p className="text-[#8d7d5e] dark:text-[#b5b0a5] text-[10px] font-normal">Design & Install</p>
            </div>
          </Link>
          <Link to="/flooring" className="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#1a2533] p-5 shadow-sm active:bg-gray-50 transition-colors border border-gray-200/50 dark:border-white/5 cursor-pointer">
            <div className="text-[#F4A300]">
              <span className="material-symbols-outlined text-3xl">layers</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#181610] dark:text-white text-sm font-bold leading-tight font-heading">Flooring</h3>
              <p className="text-[#8d7d5e] dark:text-[#b5b0a5] text-[10px] font-normal">Tiling & Wood</p>
            </div>
          </Link>
          <Link to="/painting" className="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#1a2533] p-5 shadow-sm active:bg-gray-50 transition-colors border border-gray-200/50 dark:border-white/5 cursor-pointer">
            <div className="text-[#F4A300]">
              <span className="material-symbols-outlined text-3xl">imagesearch_roller</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#181610] dark:text-white text-sm font-bold leading-tight font-heading">Painting</h3>
              <p className="text-[#8d7d5e] dark:text-[#b5b0a5] text-[10px] font-normal">Interior & Exterior</p>
            </div>
          </Link>
          <Link to="/carpentry" className="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#1a2533] p-5 shadow-sm active:bg-gray-50 transition-colors border border-gray-200/50 dark:border-white/5 cursor-pointer">
            <div className="text-[#F4A300]">
              <span className="material-symbols-outlined text-3xl">carpenter</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#181610] dark:text-white text-sm font-bold leading-tight font-heading">Carpentry</h3>
              <p className="text-[#8d7d5e] dark:text-[#b5b0a5] text-[10px] font-normal">Custom woodwork</p>
            </div>
          </Link>
          <Link to="/building" className="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#1a2533] p-5 shadow-sm active:bg-gray-50 transition-colors border border-gray-200/50 dark:border-white/5 cursor-pointer">
            <div className="text-[#F4A300]">
              <span className="material-symbols-outlined text-3xl">home_repair_service</span>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-[#181610] dark:text-white text-sm font-bold leading-tight font-heading">Renovation</h3>
              <p className="text-[#8d7d5e] dark:text-[#b5b0a5] text-[10px] font-normal">Turnkey remodeling</p>
            </div>
          </Link>
        </div>
        <div className="p-4 mb-24 animate-slide-up delay-500">
          <Link to="/contact" className="bg-brand-dark rounded-xl p-6 flex items-center justify-between border border-white/5 shadow-xl cursor-pointer hover:bg-brand-dark/90 transition-colors">
            <div>
              <h4 className="text-white text-base font-bold font-heading">Ready to start?</h4>
              <p className="text-white/70 text-xs">Get an estimate in 24 hours.</p>
            </div>
            <span className="material-symbols-outlined text-[#F4A300] text-4xl">arrow_circle_right</span>
          </Link>
        </div>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#0a121d] border-t border-gray-200 dark:border-white/10 px-6 pb-6 pt-3 flex justify-between items-center z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <Link to="/" className="flex flex-col items-center gap-1 text-[#8d7d5e] cursor-pointer">
          <span className="material-symbols-outlined text-[22px]">home</span>
          <span className="text-[9px] font-medium">Home</span>
        </Link>
        <Link to="/services" className="flex flex-col items-center gap-1 text-[#F4A300] cursor-pointer">
          <span className="material-symbols-outlined text-[22px]">construction</span>
          <span className="text-[9px] font-bold">Services</span>
        </Link>
        <Link to="/gallery" className="flex flex-col items-center gap-1 text-[#8d7d5e] cursor-pointer">
          <span className="material-symbols-outlined text-[22px]">business_center</span>
          <span className="text-[9px] font-medium">Projects</span>
        </Link>
        <Link to="/contact" className="flex flex-col items-center gap-1 text-[#8d7d5e] cursor-pointer">
          <span className="material-symbols-outlined text-[22px]">chat_bubble</span>
          <span className="text-[9px] font-medium">Contact</span>
        </Link>
      </nav>
    </div>
  );
};

export default Services;