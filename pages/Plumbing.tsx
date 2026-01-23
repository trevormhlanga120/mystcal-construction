import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Plumbing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f5f7f8] dark:bg-[#101922] text-[#111418] dark:text-white antialiased font-display min-h-screen">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden pb-24">
        <header className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-[#101922]/80 backdrop-blur-md p-4 justify-between border-b border-gray-100 dark:border-gray-800">
          <div className="text-[#111418] dark:text-white flex size-12 shrink-0 items-center cursor-pointer" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </div>
          <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Plumbing Services</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 bg-transparent text-[#111418] dark:text-white p-0">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </header>
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-slate-200 @[480px]:rounded-xl min-h-64 relative animate-slide-left" data-alt="Professional plumber working on modern bathroom pipes" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTc5qkO00v5_MOPFQlY5UolnSiaHFFUqCVpHTyjr7g0essXh-LnK0C3RiKieUAc10TxP9jv0cxk2p2PaWYbQA4KFtgsPzVNlBd77LDWOGpfkwVRSF9Odr3DLIZwEuBZ5mgdMkOsFI2-9DHME7bzpJZFjiEg9xHDHKx8xdHMp-J-nd_kj1sXusBFyHcuSENRU6kyx_ASRjxmNA3QHy3ULscAH_qUhmmBqtResFLrbkRjLJQJo-3dSe1ShAlj0Ay1E2dudNL5Lr1jg")'}}>
              <div className="flex p-6 flex-col gap-1">
                <span className="bg-[#0d7ff2] text-white text-xs font-bold px-2 py-1 rounded w-fit uppercase tracking-wider animate-slide-up">Expertise</span>
                <p className="text-white tracking-tight text-3xl font-bold leading-tight animate-slide-up delay-100">Mastering Every Flow</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <h2 className="text-[#111418] dark:text-white tracking-tight text-2xl font-bold leading-tight px-4 text-left animate-slide-up delay-100">Professional Solutions</h2>
          <p className="text-[#60758a] dark:text-gray-400 text-base font-normal leading-relaxed pb-4 pt-2 px-4 animate-slide-up delay-200">
            Mystical Construction and Renovations provides top-tier plumbing services across South Africa, ensuring your home or business runs smoothly with SABS-compliant standards.
          </p>
        </div>
        <div className="px-4 pb-4 animate-slide-up delay-300">
          <div className="bg-[#0d7ff2]/10 border border-[#0d7ff2]/20 rounded-xl p-4 flex items-center gap-4">
            <div className="bg-[#0d7ff2] text-white p-2 rounded-lg">
              <span className="material-symbols-outlined">emergency</span>
            </div>
            <div>
              <h3 className="font-bold text-[#0d7ff2] text-sm">24/7 Emergency Support</h3>
              <p className="text-xs text-[#0d7ff2]/80">Available for urgent leaks and repairs.</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 p-4 animate-slide-up delay-300">
          <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 flex-row items-start">
            <div className="bg-[#0d7ff2]/10 text-[#0d7ff2] p-3 rounded-lg">
              <span className="material-symbols-outlined">water_drop</span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] dark:text-white text-base font-bold leading-tight">Leak Detection</h2>
              <p className="text-[#60758a] dark:text-gray-400 text-sm font-normal leading-normal">Non-invasive acoustic and thermal imaging to find hidden leaks fast.</p>
            </div>
          </div>
          <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 flex-row items-start">
            <div className="bg-[#0d7ff2]/10 text-[#0d7ff2] p-3 rounded-lg">
              <span className="material-symbols-outlined">build</span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] dark:text-white text-base font-bold leading-tight">Pipe Installation</h2>
              <p className="text-[#60758a] dark:text-gray-400 text-sm font-normal leading-normal">Full reticulation for new builds using premium copper and HDPE solutions.</p>
            </div>
          </div>
          <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 flex-row items-start">
            <div className="bg-[#0d7ff2]/10 text-[#0d7ff2] p-3 rounded-lg">
              <span className="material-symbols-outlined">shower</span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#111418] dark:text-white text-base font-bold leading-tight">Bathroom Renovations</h2>
              <p className="text-[#60758a] dark:text-gray-400 text-sm font-normal leading-normal">High-end fixture installation, tiling integration, and drainage design.</p>
            </div>
          </div>
        </div>
        <div className="px-4 pt-4 pb-8 animate-slide-up delay-500">
          <h3 className="text-[#111418] dark:text-white text-lg font-bold mb-4">Why Mystical?</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
              <span className="text-[#60758a] dark:text-gray-400 text-sm">Certified Master Plumbers</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
              <span className="text-[#60758a] dark:text-gray-400 text-sm">Transparent Fixed Pricing</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-green-500 text-lg">check_circle</span>
              <span className="text-[#60758a] dark:text-gray-400 text-sm">Workmanship Guarantee</span>
            </li>
          </ul>
        </div>
        <div className="px-4 pb-12 animate-slide-up delay-500">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex gap-1 mb-3">
              <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
              <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
              <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
              <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
              <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
            </div>
            <p className="italic text-sm text-[#111418] dark:text-white leading-relaxed">
              "Exceptional service during our kitchen renovation. The team was punctual, clean, and the quality of the pipework is flawless."
            </p>
            <p className="mt-4 text-xs font-bold text-gray-400">— David M., Sandton</p>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-[#101922]/90 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800 p-4 pb-8">
          <div className="flex gap-3 max-w-md mx-auto">
            <a href="tel:0618607883" className="flex-1 flex items-center justify-center gap-2 rounded-xl h-14 bg-white dark:bg-gray-800 border-2 border-[#0d7ff2] text-[#0d7ff2] font-bold transition-all active:scale-95">
              <span className="material-symbols-outlined">call</span>
              <span>Call Now</span>
            </a>
            <Link to="/contact" className="flex-[1.5] flex items-center justify-center gap-2 rounded-xl h-14 bg-[#0d7ff2] text-white font-bold shadow-lg shadow-[#0d7ff2]/20 transition-all active:scale-95">
              <span className="material-symbols-outlined">description</span>
              <span>Request Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plumbing;