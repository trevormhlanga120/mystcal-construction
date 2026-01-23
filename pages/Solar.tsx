import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Solar: React.FC = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mystical Construction - Solar Installation',
          text: 'Check out these premium solar solutions!',
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled share
        console.debug('Share cancelled');
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

  const faqs = [
    {
      question: "What is the warranty period?",
      answer: "We offer a 25-year performance warranty on Tier-1 solar panels and a 10-year manufacturer warranty on our premium hybrid inverters and lithium-ion batteries."
    },
    {
      question: "How long does installation take?",
      answer: "Most residential installations are completed within 1 to 2 days. Our team handles everything from mounting panels to electrical integration and final COC testing."
    },
    {
      question: "Do I need municipal approval?",
      answer: "Yes, grid-tied systems require municipal registration. We handle the entire engineering sign-off and application process on your behalf to ensure full compliance."
    }
  ];

  return (
    <div className="bg-[#f6f8f6] dark:bg-[#102213] text-[#111812] dark:text-white min-h-screen pb-24 font-space">
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-[#102213]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between max-w-xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#111812] dark:text-white cursor-pointer" onClick={() => navigate(-1)}>arrow_back_ios</span>
            <h2 className="text-[#111812] dark:text-white text-lg font-bold leading-tight tracking-tight">Solar Installation</h2>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={handleShare} className="focus:outline-none flex items-center justify-center">
              <span className="material-symbols-outlined text-[#111812] dark:text-white cursor-pointer">share</span>
            </button>
            <button onClick={() => setLiked(!liked)} className="focus:outline-none flex items-center justify-center">
              <span 
                className={`material-symbols-outlined cursor-pointer transition-all duration-300 ${liked ? 'text-red-500 scale-110' : 'text-[#111812] dark:text-white'}`}
                style={{ fontVariationSettings: liked ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
              >
                favorite
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto">
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div className="relative bg-cover bg-center flex flex-col justify-end overflow-hidden bg-zinc-200 @[480px]:rounded-xl min-h-80 animate-slide-left" data-alt="Modern South African home with rooftop solar panels" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNtta-7fql1oMA3-GHR-w3sClT-P5-cY5_z7aGU3wAqdF75MuarEomXnVkR5i404VtTLsfmK8FDcY7eRN97qzyX9abBQ5QeNKSjkS27WBV6bSqafEjueYAADno6U9v36JghNo8D1fBd4Nwh7BS7lXsf-8GKVFrxqxp6PIH1ytfLFup8wUmGuKdzDS7-X191YCKGb8dVT1AWqqcaH_rsH3RPIdVbkdOBTWM55oMo_wwHgsAQx4k4ObbWIL-BWjZEGcTnv4X2nu3pw")'}}>
              <div className="flex flex-col p-6">
                <div className="inline-flex items-center gap-1 bg-[#D4AF37] px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-widest mb-2 w-fit animate-slide-up">
                  <span className="material-symbols-outlined text-[12px]">workspace_premium</span> Premium Service
                </div>
                <p className="text-white tracking-tight text-[32px] font-bold leading-tight animate-slide-up delay-100">Switch to Sustainable Energy</p>
                <p className="text-white/80 text-sm mt-1 animate-slide-up delay-200">Tier-1 solar solutions for luxury homes.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 pt-6">
          <h2 className="text-[#111812] dark:text-white text-[22px] font-bold leading-tight tracking-tight animate-slide-up delay-100">The Mystical Edge</h2>
          <p className="text-[#111812]/70 dark:text-white/70 text-base font-normal leading-relaxed pt-2 animate-slide-up delay-200">
            At Mystical Construction and Renovations, we provide premium solar solutions designed for South African conditions. Our installations eliminate load-shedding anxiety while adding gold-standard value to your property.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-3 p-4 animate-slide-up delay-300">
          <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 flex flex-col items-center gap-2 rounded-xl p-4 shadow-sm">
            <div className="size-12 rounded-full bg-[#13ec37]/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#13ec37]">solar_power</span>
            </div>
            <p className="text-[#111812] dark:text-white text-xs font-bold text-center">Solar Panels</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 flex flex-col items-center gap-2 rounded-xl p-4 shadow-sm">
            <div className="size-12 rounded-full bg-[#13ec37]/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#13ec37]">settings_input_component</span>
            </div>
            <p className="text-[#111812] dark:text-white text-xs font-bold text-center">Inverters</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-gray-800 flex flex-col items-center gap-2 rounded-xl p-4 shadow-sm">
            <div className="size-12 rounded-full bg-[#13ec37]/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#13ec37]">battery_charging_full</span>
            </div>
            <p className="text-[#111812] dark:text-white text-xs font-bold text-center">Battery Storage</p>
          </div>
        </div>
        <h2 className="text-[#111812] dark:text-white text-[22px] font-bold leading-tight tracking-tight px-4 pt-4 animate-slide-up delay-100">Premium Components</h2>
        <div className="grid grid-cols-2 gap-3 p-4 animate-slide-up delay-200">
          <div className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-square shadow-lg" data-alt="Monocrystalline solar panel detail" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwyYjiJmwEVGIIMoR1RH3h215ozrtjXie3I7rn6Ug5PzrD5zXDMApp2c1l7m8joAwNQNDomlNh27MEAPRZU1d6KLop7k9jc08qrBeQX5RjO9KusM7_c_BNiLWrWis_F27woFqHAq8GFr-wpI5MnJiU3uC4PJYBBbjXIKbk28fKKAdHtC1YuOhQxOmFU9L5zAzFMu4YoNYM4xSNON6MyZpzCI8CSzrMpagZojc_zV0K7lqtQ1GvzHp630KRcX7wBzmNJRbnD3CnlA")'}}>
            <p className="text-white text-sm font-bold leading-tight">Tier-1 Mono Panels</p>
          </div>
          <div className="bg-cover bg-center flex flex-col gap-3 rounded-xl justify-end p-4 aspect-square shadow-lg" data-alt="Hybrid solar inverter installed on a wall" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD-jtiHS_Zgl01xZbF5srsI7ma-JaL6scDUYW2P0u2Kemb9eCixtqB9x74EsAFbak5p3R7W9ZKsQ9da2SxMPTDEZ32spWKyxAM3h1A8z-wM61JSvKl_bdsmw1dsNANB6nWQDRFilWTtOpm7I1O5tMuQEG1_Ze6TNQAsdoeILuQIndZDTVNETXDax8LlwSf3w5yOVjbNafcJvCZCym9LWSBM0rwrSA2ZivTpEmjtW3s190Fw9JQoovWoEZO9BwWBMLjrXT75TP4y4w")'}}>
            <p className="text-white text-sm font-bold leading-tight">Hybrid Inverters</p>
          </div>
        </div>
        <div className="px-4 py-6 bg-white dark:bg-zinc-900/50 mt-4 animate-slide-up delay-300">
          <h2 className="text-[#111812] dark:text-white text-[22px] font-bold leading-tight tracking-tight mb-6">Our Gold-Standard Process</h2>
          <div className="space-y-8 relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-[#13ec37]/20"></div>
            <div className="relative flex gap-4">
              <div className="z-10 size-10 rounded-full bg-[#13ec37] flex items-center justify-center text-white ring-4 ring-white dark:ring-zinc-900">
                <span className="material-symbols-outlined text-base">analytics</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-[#111812] dark:text-white">1. Energy Audit</h3>
                <p className="text-sm text-[#111812]/60 dark:text-white/60">We analyze your household consumption patterns to size the perfect system.</p>
              </div>
            </div>
            <div className="relative flex gap-4">
              <div className="z-10 size-10 rounded-full bg-[#13ec37] flex items-center justify-center text-white ring-4 ring-white dark:ring-zinc-900">
                <span className="material-symbols-outlined text-base">architecture</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-[#111812] dark:text-white">2. Engineering & Design</h3>
                <p className="text-sm text-[#111812]/60 dark:text-white/60">Professional structural and electrical design optimized for South African rooftops.</p>
              </div>
            </div>
            <div className="relative flex gap-4">
              <div className="z-10 size-10 rounded-full bg-[#13ec37] flex items-center justify-center text-white ring-4 ring-white dark:ring-zinc-900">
                <span className="material-symbols-outlined text-base">handyman</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-[#111812] dark:text-white">3. Expert Installation</h3>
                <p className="text-sm text-[#111812]/60 dark:text-white/60">Neat, compliant installation by accredited Mystical technical teams.</p>
              </div>
            </div>
            <div className="relative flex gap-4">
              <div className="z-10 size-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-white ring-4 ring-white dark:ring-zinc-900">
                <span className="material-symbols-outlined text-base">verified</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-[#111812] dark:text-white">4. Certification (CoC)</h3>
                <p className="text-sm text-[#111812]/60 dark:text-white/60">Legal hand-over with a registered Certificate of Compliance for insurance purposes.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 animate-slide-up delay-500">
          <div className="bg-[#102213] dark:bg-zinc-800 rounded-2xl p-6 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-[80px]">energy_savings_leaf</span>
            </div>
            <div className="relative z-10">
              <p className="text-[#13ec37] text-xs font-bold uppercase tracking-widest mb-1">Impact</p>
              <h3 className="text-xl font-bold mb-2">Save up to 85%</h3>
              <p className="text-white/70 text-sm mb-4">On your monthly electricity bill while going green.</p>
              <Link to="/contact" className="flex items-center gap-2 text-[#D4AF37] font-bold hover:text-[#D4AF37]/80 transition-colors cursor-pointer w-fit">
                <span className="material-symbols-outlined">auto_graph</span>
                <span>View Savings Calculator</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="px-4 py-4 animate-slide-up delay-200">
          <h2 className="text-[#111812] dark:text-white text-lg font-bold mb-3">Common Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-100 dark:border-gray-800 rounded-xl bg-white dark:bg-zinc-900 overflow-hidden shadow-sm transition-all duration-300"
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-4 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="text-sm font-medium pr-4">{faq.question}</span>
                  <span className={`material-symbols-outlined text-gray-400 transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''}`}>
                    expand_more
                  </span>
                </button>
                <div 
                  className={`px-4 text-sm text-[#111812]/70 dark:text-white/70 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-[#102213]/90 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 p-4 pb-8 z-50">
        <div className="max-w-xl mx-auto flex gap-3">
          <Link to="/contact" className="flex-1 bg-[#13ec37] text-[#111812] font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#13ec37]/20">
            <span className="material-symbols-outlined">calendar_today</span>
            Request Site Audit
          </Link>
          <Link to="/contact" className="size-14 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl flex items-center justify-center border border-[#D4AF37]/20">
            <span className="material-symbols-outlined">chat</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solar;