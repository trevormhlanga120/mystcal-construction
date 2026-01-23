import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';

const Contact: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate network request
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen font-display">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <header className="flex items-center justify-between bg-[#121826] dark:bg-[#0a0f1a] p-4 sticky top-0 z-20 border-b border-white/10 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <div className="relative w-10 h-6">
              <div className="absolute inset-0 border-t-2 border-l-2 border-[#f5a300] rotate-45 origin-bottom translate-y-1"></div>
              <div className="absolute right-1 top-2 w-1.5 h-2 bg-[#f5a300]"></div>
            </div>
            <div className="flex flex-col items-center -mt-1">
              <span className="text-white text-[10px] font-black leading-none tracking-tight">MYSTICAL</span>
              <span className="text-white text-[10px] font-black leading-none tracking-tight">CONSTRUCTION</span>
              <div className="w-full h-[1px] bg-[#f5a300] mt-0.5"></div>
              <span className="text-white text-[6px] font-bold tracking-[0.2em] mt-0.5">& RENOVATIONS</span>
            </div>
          </div>
        </div>
        <button onClick={() => setIsMenuOpen(true)} className="text-white focus:outline-none">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </header>
      
      {!isSubmitted ? (
        <>
          <div className="px-4 pt-8 pb-4 animate-slide-up">
            <h2 className="text-[#181610] dark:text-white tracking-tight text-[28px] font-bold leading-tight text-left pb-2">
              Let's Build Your Dream
            </h2>
            <p className="text-[#181610] dark:text-gray-400 text-base font-normal leading-normal">
              Fill in the form below for a free estimate or contact us directly for immediate assistance.
            </p>
          </div>
          <form className="space-y-6 px-4 pb-8 animate-slide-up delay-100" onSubmit={handleSubmit}>
            <div className="floating-label-group relative">
              <input className="block w-full px-4 py-4 text-base text-gray-900 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg focus:ring-[#f5a300] focus:border-[#f5a300] peer dark:text-white outline-none" id="fullname" name="fullname" placeholder=" " type="text" required />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-1/2 top-1/2 left-4 z-10 origin-[0] peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2 pointer-events-none transition-all peer-focus:text-[#f5a300] peer-focus:bg-white dark:peer-focus:bg-[#1a1f2e] peer-focus:left-3 px-1" htmlFor="fullname">Full Name</label>
            </div>
            <div className="floating-label-group relative">
              <input className="block w-full px-4 py-4 text-base text-gray-900 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg focus:ring-[#f5a300] focus:border-[#f5a300] peer dark:text-white outline-none" id="phone" name="phone" placeholder=" " type="tel" required />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-1/2 top-1/2 left-4 z-10 origin-[0] peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2 pointer-events-none transition-all peer-focus:text-[#f5a300] peer-focus:bg-white dark:peer-focus:bg-[#1a1f2e] peer-focus:left-3 px-1" htmlFor="phone">Phone Number</label>
            </div>
            <div className="floating-label-group relative">
              <input 
                className="block w-full px-4 py-4 text-base text-gray-900 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg focus:ring-[#f5a300] focus:border-[#f5a300] peer dark:text-white outline-none" 
                id="service" 
                name="service" 
                placeholder=" " 
                list="service-options"
                required 
              />
              <datalist id="service-options">
                <option value="Building & Renovations" />
                <option value="Solar Installation" />
                <option value="Roofing & Waterproofing" />
                <option value="Plumbing Services" />
                <option value="Electrical Services" />
                <option value="Drywall & Partitioning" />
                <option value="Ceiling Services" />
                <option value="Flooring & Tiling" />
                <option value="Painting Services" />
                <option value="Carpentry & Joinery" />
              </datalist>
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-1/2 top-1/2 left-4 z-10 origin-[0] peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2 pointer-events-none transition-all peer-focus:text-[#f5a300] peer-focus:bg-white dark:peer-focus:bg-[#1a1f2e] peer-focus:left-3 px-1" htmlFor="service">Service Type</label>
            </div>
            <div className="floating-label-group relative">
              <textarea className="block w-full px-4 py-4 text-base text-gray-900 bg-white dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg focus:ring-[#f5a300] focus:border-[#f5a300] peer dark:text-white outline-none" id="details" name="details" placeholder=" " rows={4} required></textarea>
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform top-4 left-4 z-10 origin-[0] peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-1/2 pointer-events-none transition-all peer-focus:text-[#f5a300] peer-focus:bg-white dark:peer-focus:bg-[#1a1f2e] peer-focus:left-3 px-1" htmlFor="details">Project Details</label>
            </div>
            <div className="pt-2">
              <button className="w-full bg-[#f5a300] hover:bg-[#f5a300]/90 text-[#121826] font-bold py-4 px-6 rounded-xl shadow-lg transition duration-200 active:scale-[0.98] flex items-center justify-center gap-2" type="submit">
                <span>Submit Request</span>
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </div>
          </form>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 px-6 text-center animate-in zoom-in duration-300">
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 shadow-inner animate-bounce">
            <span className="material-symbols-outlined text-green-600 dark:text-green-400 text-6xl">check_circle</span>
          </div>
          <h2 className="text-[#181610] dark:text-white text-3xl font-black mb-3">Quote Requested!</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm mx-auto leading-relaxed">
            Thank you for choosing Mystical Construction. We have received your project details and our team will get back to you within 24 hours.
          </p>
          <div className="w-full max-w-sm space-y-3">
            <Link to="/" className="w-full bg-[#f5a300] hover:bg-[#f5a300]/90 text-[#121826] font-bold py-4 px-6 rounded-xl shadow-lg transition duration-200 active:scale-[0.98] flex items-center justify-center gap-2">
              <span>Back to Home</span>
            </Link>
            <button 
              onClick={() => setIsSubmitted(false)} 
              className="w-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-700 dark:text-white font-bold py-4 px-6 rounded-xl transition duration-200 active:scale-[0.98]"
            >
              Send Another Request
            </button>
          </div>
        </div>
      )}

      <div className="px-4 py-8 bg-white dark:bg-white/5 border-t border-gray-100 dark:border-white/10 animate-slide-up delay-200">
        <h3 className="text-[#181610] dark:text-white text-lg font-bold mb-4">Direct Contact</h3>
        <div className="grid grid-cols-1 gap-4">
          <a className="flex items-center gap-4 p-4 rounded-xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-white/10 active:bg-[#f5a300]/10 transition" href="tel:0618607883">
            <div className="size-12 rounded-full bg-[#f5a300]/20 flex items-center justify-center text-[#f5a300]">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Call Office</p>
              <p className="text-[#181610] dark:text-white font-bold text-lg">061 860 7883</p>
            </div>
            <span className="material-symbols-outlined ml-auto text-gray-400">chevron_right</span>
          </a>
          <a className="flex items-center gap-4 p-4 rounded-xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-white/10 active:bg-[#f5a300]/10 transition" href="tel:0748051441">
            <div className="size-12 rounded-full bg-[#f5a300]/20 flex items-center justify-center text-[#f5a300]">
              <span className="material-symbols-outlined">call</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Site Manager</p>
              <p className="text-[#181610] dark:text-white font-bold text-lg">074 805 1441</p>
            </div>
            <span className="material-symbols-outlined ml-auto text-gray-400">chevron_right</span>
          </a>
          <a className="flex items-center gap-4 p-4 rounded-xl bg-background-light dark:bg-background-dark border border-gray-100 dark:border-white/10 active:bg-[#f5a300]/10 transition" href="mailto:info@mysticalbuild.co.za">
            <div className="size-12 rounded-full bg-[#f5a300]/20 flex items-center justify-center text-[#f5a300]">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Email Us</p>
              <p className="text-[#181610] dark:text-white font-bold text-base truncate">info@mysticalbuild.co.za</p>
            </div>
            <span className="material-symbols-outlined ml-auto text-gray-400">chevron_right</span>
          </a>
        </div>
      </div>
      <div className="px-4 py-10 flex flex-col items-center justify-center animate-slide-up delay-300">
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-6">Follow our latest projects</p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="https://www.facebook.com/p/Mystical-Construction-and-Renovation-100083430876932/" target="_blank" rel="noopener noreferrer" className="size-12 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/20 hover:text-[#1877F2] hover:border-[#1877F2] hover:shadow-[0_0_15px_rgba(24,119,242,0.3)] transition" aria-label="Facebook">
            <svg className="size-6 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
          </a>
          <a href="https://www.instagram.com/mysticalconstruction/" target="_blank" rel="noopener noreferrer" className="size-12 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/20 hover:text-[#E1306C] hover:border-[#E1306C] hover:shadow-[0_0_15px_rgba(225,48,108,0.3)] transition" aria-label="Instagram">
            <svg className="size-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path></svg>
          </a>
          <a href="https://www.tiktok.com/@mystical.construction" target="_blank" rel="noopener noreferrer" className="size-12 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/20 hover:text-black hover:border-black dark:hover:text-white dark:hover:border-white hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] transition" aria-label="TikTok">
            <svg className="size-5 fill-current" viewBox="0 0 448 512"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"></path></svg>
          </a>
          <a href="https://wa.me/27618607883" target="_blank" rel="noopener noreferrer" className="size-12 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/20 hover:text-[#25D366] hover:border-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.3)] transition" aria-label="WhatsApp">
            <svg className="size-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
          </a>
        </div>
      </div>
      <div className="px-4 pb-12 animate-slide-up delay-500">
        <div className="w-full h-48 rounded-xl overflow-hidden relative shadow-md">
          <img alt="Map serving area" className="w-full h-full object-cover grayscale opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1tsEA6b2ZF3WvQP5jRkBZ-Ad5k_8ayDqZtVhSdJskowmG1thYLX1c7NDoTk4OZTdMlVg77cn55hAl834ECnOJkK5gHeUFd6lbGQZA6uTHgk3s9Y0Vt2bGEDoWLrOC2VMcVNGplDKESEjggTPx5fM2ebxZ1Z069Ed8zXTBABN2D4-HbPIbgPXUM-AaUwu7Z1iHy1UN8BJ3qkLPzBrMbHAJVx07OK1CDlHvTgKukR8gQ_5z0AVFFV0zhRp0nkpZ-FrR5yJcCch05w" loading="lazy" decoding="async" />
          <div className="absolute inset-0 bg-[#f5a300]/10 flex items-center justify-center">
            <div className="bg-white dark:bg-[#121826] p-3 rounded-lg shadow-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-[#f5a300]">location_on</span>
              <span className="text-sm font-bold text-[#181610] dark:text-white">259 Ketjen Street, Pretoria West</span>
            </div>
          </div>
        </div>
        <p className="text-center text-[10px] text-gray-400 mt-6 uppercase tracking-[0.2em] font-medium">© 2024 Mystical Construction & Renovations</p>
      </div>
    </div>
  );
};

export default Contact;