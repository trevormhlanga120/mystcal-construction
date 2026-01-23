import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Electrical: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f8f7f5] dark:bg-[#221c10] font-display">
      <div className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-[#221c10]/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
        <div className="text-gray-900 dark:text-white flex size-12 shrink-0 items-center cursor-pointer" onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <h2 className="text-[#181611] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Electrical Services</h2>
        <div className="flex w-12 items-center justify-end">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#181611] dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden pb-24">
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-gray-200 @[480px]:rounded-lg min-h-80 animate-slide-left" data-alt="Professional electrician working on a modern electrical distribution board" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_OBu3xqWwvY0cY9s8eaS8ZM40kotaKCnQGWT_b4RKgjY-7vCHCcEZ28pb3LlgJpP-XJJCnGH2PNO4x3iWKxmnoUM05WywbDusJecTDJtYpPthazrIYNSd7y6ICzZlEr922eW_A5lKOet58MKwDbeyLQ7O7LbPZyqbzyG9A1JftjnLYLvlsW7tTj2RRWzQTkrKAvCXSRkT_ZwCFihGP5ocCwL6r4Q4P-Y2MjnsFGcmzZ5Cu43bXD8ltFbwGW9wP-ltokFUjf-fbA")'}}>
              <div className="flex flex-col p-6">
                <div className="bg-[#f2a60d] text-black text-[10px] font-bold uppercase tracking-wider w-fit px-2 py-1 rounded mb-2 animate-slide-up">Certified Excellence</div>
                <p className="text-white tracking-light text-[28px] font-bold leading-tight animate-slide-up delay-100">Electrical Repairs & Installations</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 p-4 flex-wrap animate-slide-up delay-200">
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f2a60d]/10 dark:bg-[#f2a60d]/20 pl-3 pr-3 border border-[#f2a60d]/20">
            <span className="material-symbols-outlined text-[#f2a60d] text-[18px]">verified</span>
            <p className="text-[#181611] dark:text-gray-200 text-xs font-semibold uppercase tracking-wide">SANS 10142 Compliant</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-gray-800 pl-3 pr-3">
            <span className="material-symbols-outlined text-gray-600 dark:text-gray-400 text-[18px]">workspace_premium</span>
            <p className="text-[#181611] dark:text-gray-200 text-xs font-semibold uppercase tracking-wide">COC Issued</p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-gray-100 dark:bg-gray-800 pl-3 pr-3">
            <span className="material-symbols-outlined text-gray-600 dark:text-gray-400 text-[18px]">bolt</span>
            <p className="text-[#181611] dark:text-gray-200 text-xs font-semibold uppercase tracking-wide">24/7 Emergency</p>
          </div>
        </div>
        <h3 className="text-[#181611] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] px-4 pt-4 animate-slide-up delay-200">Professional Electrical Solutions</h3>
        <p className="text-[#181611] dark:text-gray-300 text-base font-normal leading-relaxed pb-3 pt-2 px-4 animate-slide-up delay-300">
          Mystical Construction provides SANS-compliant electrical solutions for South African homes and businesses. We specialize in safety-first installations, modernizing aging infrastructure, and ensuring your property meets all legal Certificate of Compliance (COC) requirements.
        </p>
        <div className="grid grid-cols-1 gap-4 px-4 py-4 animate-slide-up delay-300">
          <div className="flex items-start gap-4 p-4 bg-white dark:bg-[#221c10] border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm">
            <div className="bg-[#f2a60d]/10 p-3 rounded-lg">
              <span className="material-symbols-outlined text-[#f2a60d]">electrical_services</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Full Re-wiring</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Complete modernization of home wiring systems with flame-retardant materials.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white dark:bg-[#221c10] border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm">
            <div className="bg-[#f2a60d]/10 p-3 rounded-lg">
              <span className="material-symbols-outlined text-[#f2a60d]">settings_input_component</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">DB Board Upgrades</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Surge protection, earth leakage testing, and circuit breaker replacement.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white dark:bg-[#221c10] border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm">
            <div className="bg-[#f2a60d]/10 p-3 rounded-lg">
              <span className="material-symbols-outlined text-[#f2a60d]">lightbulb</span>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white">Smart Lighting</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Energy-efficient LED solutions and automated lighting controls.</p>
            </div>
          </div>
        </div>
        <div className="px-4 py-6 animate-slide-up delay-500">
          <h3 className="text-[#181611] dark:text-white text-lg font-bold pb-4">Our Service Process</h3>
          <div className="space-y-6 relative before:content-[''] before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200 dark:before:bg-gray-800">
            <div className="relative flex gap-4 items-start pl-1">
              <div className="z-10 bg-[#f2a60d] size-9 rounded-full flex items-center justify-center text-black font-bold">1</div>
              <div className="flex-1 pt-1">
                <p className="font-bold text-gray-900 dark:text-white text-sm">Site Inspection</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Detailed assessment of existing electrical infrastructure.</p>
              </div>
            </div>
            <div className="relative flex gap-4 items-start pl-1">
              <div className="z-10 bg-[#f2a60d] size-9 rounded-full flex items-center justify-center text-black font-bold">2</div>
              <div className="flex-1 pt-1">
                <p className="font-bold text-gray-900 dark:text-white text-sm">Transparent Quote</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Upfront pricing with no hidden technician fees.</p>
              </div>
            </div>
            <div className="relative flex gap-4 items-start pl-1">
              <div className="z-10 bg-[#f2a60d] size-9 rounded-full flex items-center justify-center text-black font-bold">3</div>
              <div className="flex-1 pt-1">
                <p className="font-bold text-gray-900 dark:text-white text-sm">Implementation</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">High-precision work following SABS standards.</p>
              </div>
            </div>
            <div className="relative flex gap-4 items-start pl-1">
              <div className="z-10 bg-[#f2a60d] size-9 rounded-full flex items-center justify-center text-black font-bold">4</div>
              <div className="flex-1 pt-1">
                <p className="font-bold text-gray-900 dark:text-white text-sm">COC Issuance</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Final testing and delivery of compliance documents.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 mx-4 mb-6 rounded-xl bg-gray-100 dark:bg-gray-800/50 flex items-center gap-4 animate-slide-up delay-500">
          <span className="material-symbols-outlined text-[#f2a60d]">location_on</span>
          <div>
            <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Service Area</p>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Gauteng, South Africa</p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#221c10] border-t border-gray-100 dark:border-gray-800 p-4 pb-8 flex gap-3 z-50">
        <a href="tel:0618607883" className="flex-1 h-12 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-bold flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[20px]">call</span>
          Call Now
        </a>
        <Link to="/contact" className="flex-[2] h-12 bg-[#f2a60d] text-black rounded-lg font-bold shadow-lg shadow-[#f2a60d]/20 flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[20px]">request_quote</span>
          Request a Quote
        </Link>
      </div>
    </div>
  );
};

export default Electrical;