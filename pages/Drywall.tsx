import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Drywall: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] font-display text-[#111418] dark:text-white min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden pb-24">
        <div className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-[#101922]/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
          <div className="text-[#111418] dark:text-white flex size-12 shrink-0 items-center cursor-pointer" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </div>
          <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Drywall & Partitioning</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#111418] dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white dark:bg-gray-800 @[480px]:rounded-xl min-h-80 shadow-lg animate-slide-left" data-alt="Modern partitioned office with glass and drywall" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZSjH5eimoaRrQza-FJG9U0dnoDAeI0h-zcxzo2XQlujCa1umWUf9np-5rGa552Fj-AK_EArme9QKuvoSIhL-4Y6aRqUoqlycn-O4VR9jHoYugjdYtzXdch0XTuWDLfIIILhQbaeqlKiFHrKShFtenaoOne_CIB4F1tGZpd5Fzg116gXP4KC6l46RXXUoCigqGnPoP_ZD-F5T066sNRY4P_UKgj93nS0pR8F9Pna_kqIKdU00-ephrxUeYMeIfr4HvX6cHkPKvhQ")'}}>
              <div className="flex flex-col p-6">
                <span className="bg-[#137fec] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded w-max mb-2 animate-slide-up">Corporate Solutions</span>
                <p className="text-white tracking-tight text-3xl font-bold leading-tight animate-slide-up delay-100">Optimize Your Workspace</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4">
          <h2 className="text-[#111418] dark:text-white tracking-tight text-[26px] font-bold leading-tight pb-2 pt-6 animate-slide-up delay-100">Professional Partitioning Solutions</h2>
          <p className="text-[#111418] dark:text-gray-300 text-base font-normal leading-relaxed pb-4 animate-slide-up delay-200">
            Mystical Construction specializes in transforming open areas into functional office suites and private home spaces across South Africa. From Johannesburg corporate hubs to residential retreats, we define your space with precision.
          </p>
        </div>
        <div className="px-4">
          <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-3 pt-4 animate-slide-up delay-300">Our Specialties</h3>
        </div>
        <div className="grid grid-cols-2 gap-3 px-4 mb-6 animate-slide-up delay-300">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <span className="material-symbols-outlined text-[#137fec] mb-2">domain</span>
            <p className="font-bold text-sm">Office Partitioning</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Smart layouts for productivity</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <span className="material-symbols-outlined text-[#137fec] mb-2">home</span>
            <p className="font-bold text-sm">Home Extensions</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Extra rooms & renovations</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <span className="material-symbols-outlined text-[#137fec] mb-2">volume_off</span>
            <p className="font-bold text-sm">Soundproofing</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">High STC rating insulation</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <span className="material-symbols-outlined text-[#137fec] mb-2">local_fire_department</span>
            <p className="font-bold text-sm">Fire Rating</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Compliance with SANS codes</p>
          </div>
        </div>
        <div className="px-4">
          <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-3 pt-4 animate-slide-up delay-500">Our Methodology</h3>
        </div>
        <div className="px-6 space-y-6 relative border-l-2 border-[#137fec]/20 ml-6 mr-4 animate-slide-up delay-500">
          <div className="relative">
            <div className="absolute -left-[2.15rem] top-1 size-4 rounded-full bg-[#137fec] border-4 border-white dark:border-[#101922]"></div>
            <h4 className="font-bold text-sm">01. Consultation & Design</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">On-site measurement and spatial planning tailored to your workflow.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[2.15rem] top-1 size-4 rounded-full bg-[#137fec] border-4 border-white dark:border-[#101922]"></div>
            <h4 className="font-bold text-sm">02. Framing & Insulation</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Light-weight steel framing with optional acoustic/thermal insulation.</p>
          </div>
          <div className="relative">
            <div className="absolute -left-[2.15rem] top-1 size-4 rounded-full bg-[#137fec] border-4 border-white dark:border-[#101922]"></div>
            <h4 className="font-bold text-sm">03. Boarding & Skimming</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">Professional boarding and plastering for a seamless, smooth finish.</p>
          </div>
        </div>
        <div className="mt-10 px-4 animate-slide-up delay-500">
          <div className="bg-[#137fec]/5 dark:bg-[#137fec]/10 rounded-xl p-5 border border-[#137fec]/10">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-[#137fec]">verified</span>
              <h3 className="text-[#137fec] font-bold">Technical Specifications</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center text-sm">
                <span className="text-gray-600 dark:text-gray-400">Standard Board</span>
                <span className="font-semibold">12.5mm Gypsum</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span className="text-gray-600 dark:text-gray-400">Sound Reduction</span>
                <span className="font-semibold">Up to 55dB</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span className="text-gray-600 dark:text-gray-400">Fire Resistance</span>
                <span className="font-semibold">30 - 120 mins</span>
              </li>
              <li className="flex justify-between items-center text-sm">
                <span className="text-gray-600 dark:text-gray-400">Moisture Control</span>
                <span className="font-semibold">MR-Grade Available</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#101922] border-t border-gray-200 dark:border-gray-800 p-4 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <Link to="/contact" className="flex-1 bg-[#137fec] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#137fec]/90 transition-colors">
            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
            Request Site Visit
          </Link>
          <a href="tel:0618607883" className="bg-[#137fec]/10 text-[#137fec] p-4 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined">call</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Drywall;