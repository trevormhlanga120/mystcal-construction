import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Plastering: React.FC = () => {
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mystical Construction - Plastering',
          text: 'Premium plastering services in South Africa',
          url: window.location.href,
        });
      } catch (err) { console.debug('Share cancelled'); }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      } catch (err) { console.error('Failed to copy: ', err); }
    }
  };

  return (
    <div className="bg-[#f8f7f6] dark:bg-[#221c10] font-display min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-[#221c10]/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
          <div className="text-[#e29d12] flex size-12 shrink-0 items-center cursor-pointer" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </div>
          <h2 className="text-[#181611] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Plastering Services</h2>
          <div className="flex w-12 items-center justify-end">
            <button onClick={handleShare} className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#181611] dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div className="text-[#181611] dark:text-white">
                <span className="material-symbols-outlined">share</span>
              </div>
            </button>
          </div>
        </div>
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white dark:bg-gray-900 @[480px]:rounded-lg min-h-80 animate-slide-left" data-alt="Modern interior with perfectly smooth plastered white walls" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDa0KTel8EFiODXg7197zlcKz1TXkVJWNlN8IKNoSlI_RhULAYSBOI4IlssstaLiDABmr4Co6tdqVd-yVr0nXgXfub6I6ikZkjk3ruGSMkOPZoj8E0u6MZEPKdQOhjHniDp4xs5vyW32NfizLFtPc8d1OLAJt-T2_G6ODbpb1fYh7_Cv9pWSAEC05zLYFZtGNu3XYRZXC96UOKjKM9gKcXcyEdU-T4kLOPCyhuQZUW3dWLnTd1O0ZxwRhlWnXPpFNUuqRKlQONV7w")'}}>
              <div className="flex p-6 flex-col gap-1">
                <p className="text-[#e29d12] text-sm font-bold uppercase tracking-widest animate-slide-up">Premium Finishes</p>
                <p className="text-white tracking-light text-[32px] font-bold leading-tight animate-slide-up delay-100">Masterful Plastering Services</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 pt-8 pb-1">
          <h2 className="text-[#181611] dark:text-white tracking-light text-[26px] font-bold leading-tight text-left animate-slide-up delay-100">Smooth Finishes & Decorative Artistry</h2>
        </div>
        <div className="px-4 pt-1 pb-4">
          <p className="text-[#4b4537] dark:text-gray-300 text-base font-normal leading-relaxed animate-slide-up delay-200">
            At Mystical Construction and Renovations, we specialize in delivering premium plastering solutions across South Africa. From flawless skim coating to intricate decorative mouldings, our craftsmanship ensures a perfect canvas for your home.
          </p>
        </div>
        <div className="pb-3 sticky top-[64px] bg-[#f8f7f6] dark:bg-[#221c10] z-40 animate-slide-up delay-300">
          <div className="flex border-b border-[#e6e2db] dark:border-gray-800 px-4 gap-8">
            <button className="flex flex-col items-center justify-center border-b-[3px] border-b-[#e29d12] text-[#e29d12] pb-[13px] pt-4 focus:outline-none">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Interior</p>
            </button>
            <button className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#897c61] dark:text-gray-500 pb-[13px] pt-4 focus:outline-none">
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">Exterior</p>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 px-4 py-4 animate-slide-up delay-300">
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="bg-[#e29d12]/10 p-3 rounded-lg text-[#e29d12]">
              <span className="material-symbols-outlined">format_paint</span>
            </div>
            <div>
              <h3 className="font-bold text-[#181611] dark:text-white">Skim Coating</h3>
              <p className="text-sm text-[#897c61] dark:text-gray-400">Glass-smooth walls ready for premium paint applications.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="bg-[#e29d12]/10 p-3 rounded-lg text-[#e29d12]">
              <span className="material-symbols-outlined">architecture</span>
            </div>
            <div>
              <h3 className="font-bold text-[#181611] dark:text-white">Decorative Mouldings</h3>
              <p className="text-sm text-[#897c61] dark:text-gray-400">Custom cornices and wall panels for a classic touch.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-sm">
            <div className="bg-[#e29d12]/10 p-3 rounded-lg text-[#e29d12]">
              <span className="material-symbols-outlined">shield</span>
            </div>
            <div>
              <h3 className="font-bold text-[#181611] dark:text-white">Crack Repair</h3>
              <p className="text-sm text-[#897c61] dark:text-gray-400">Structural mesh reinforcement and seamless restoration.</p>
            </div>
          </div>
        </div>
        <div className="py-6 animate-slide-up delay-500">
          <h3 className="px-4 text-lg font-bold text-[#181611] dark:text-white mb-4">Recent Projects</h3>
          <div className="flex overflow-x-auto gap-4 px-4 no-scrollbar">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6rj85br4Qv2oZZfTkAmgObA999C_xtTYCE2J-FBvcayPzr4eBw_E4g7yhLm7EhrewaVx8xprU2z8rzvTJfeut54ZnB6pGrxUFOUCNxv-izvq-9A9j-omRRf2R_DV6e00g_ax1jj7YFQ8DLXLNfd0OTgP4z8BlU8cqq9gMXZQ0ug92yPSLbTWhnT20MM6N5Q00f_uBcvaHuXH1uzFe9Axs8TJ54k0tqChh8cEd_z5PGckVdiyVAIPFOoAZ0t-SrJYIX0DBZuCAhw" alt="Close up of decorative plaster cornice detail" className="min-w-[280px] h-48 rounded-xl object-cover shrink-0 shadow-md bg-gray-200" loading="lazy" decoding="async" />
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNZACApGVCXS90L15iv2uafCGJL9E34Gk8cas-ImMSHCfoM6hLIATYg_19FORoYR512hxd8TXioSczPjL7pQKYJvG_j04J7dFscYGwOu2nRcr_VYSo0ty2NvARljLXOVRjL6q4JQEm78fTW3-Ol1Muc9NCFI0nXxiQDWSX5y2ppzqb_BeOV9QObbSWNlv463XNfAwXFb0BV_623NmRmoe157YYXmqr-Aaq_7mimbZa4imUcNE3st7ZFPCzynFyonM2bkZeOiQfqg" alt="Venetian plaster finish on a luxury living room wall" className="min-w-[280px] h-48 rounded-xl object-cover shrink-0 shadow-md bg-gray-200" loading="lazy" decoding="async" />
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr43O0ziKfk1jbkUjQJWLLFQOLV0CM3hh4d5kNI7aIIRyxlPe1cXUp6FhCxSO7E0No1bicM48S9dh9cyR9fRRzUPEiE2jdxgr6G05SMl_JTfF4PsF0OFBGcUtIVHv7WLaZXr_HV3L7jz1gC5oe2i_pY3bXPtaTtmYo5P0fYSyISHqqkJZ1-tW1N1_-GCxNZpVoojNmJI-5tCHJJ_R144hQJz5jS5oCnwAJCmsFXXJ6m-4b9k6-J28XdczuYzCKqtRHLhcisPHS1Q" alt="Seamless exterior plaster finish on modern villa" className="min-w-[280px] h-48 rounded-xl object-cover shrink-0 shadow-md bg-gray-200" loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="h-32"></div>
        <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#f8f7f6] via-[#f8f7f6] to-transparent dark:from-[#221c10] dark:via-[#221c10] pointer-events-none">
          <Link to="/contact" className="pointer-events-auto w-full bg-[#e29d12] hover:bg-[#e29d12]/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-[#e29d12]/30 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">calendar_today</span>
            Request a Quote
          </Link>
          <div className="h-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Plastering;