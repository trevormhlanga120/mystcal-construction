import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Painting: React.FC = () => {
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mystical Construction - Painting',
          text: 'Professional painting services in South Africa',
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
    <div className="bg-[#f8f7f5] dark:bg-[#221c10] font-display text-[#181611] dark:text-white antialiased min-h-screen">
      <div className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-[#221c10]/90 backdrop-blur-md p-4 justify-between border-b border-gray-100 dark:border-white/10">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer" onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">Painting Services</h2>
        <div className="flex w-10 items-center justify-end">
          <button onClick={handleShare} className="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 bg-transparent text-[#181611] dark:text-white">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>
      <div className="@container">
        <div className="@[480px]:px-4 @[480px]:py-3">
          <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-[320px] relative animate-slide-left" data-alt="Modern living room with professionally painted charcoal accent wall" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBg6hJzTbYIOYp-N8MykN1yFBAHrabO4JDBqXX6C4zwD-2e7CNKvKTCBCoM402tMrP0cezkfsmO13hOYGW3l-kTGBxFbZEvBcIYcsUdUPkENmwTtsw89-BH-Be1UVKTqJ_2w7jF16xTcgR1U2gX0GoMk_doKOshQqGXn4beDBii5Ez06kcDfILbGgQesb6VkTb8Yqak2-Xc-FF6SZPSuGuhKLthTdVTpW6rVM1_TpXYsRyhvBTYHd8603I0nj26Q8syxQEYrCjXkg")'}}>
            <div className="flex flex-col p-6">
              <span className="bg-[#e99f0c] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded w-fit mb-2 animate-slide-up">Residential & Commercial</span>
              <p className="text-white text-3xl font-bold leading-tight animate-slide-up delay-100">Interior & Exterior Painting</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xl mx-auto">
        <h2 className="text-[#181611] dark:text-white tracking-tight text-[26px] font-bold leading-tight px-4 pt-6 animate-slide-up delay-100">Transforming Spaces with Precision</h2>
        <p className="text-[#181611]/80 dark:text-white/80 text-base font-normal leading-relaxed pb-6 pt-3 px-4 animate-slide-up delay-200">
          Mystical Construction delivers meticulous painting services across South Africa. We specialize in both residential and commercial projects, ensuring a durable, high-end finish that protects your investment.
        </p>
        <div className="grid grid-cols-3 gap-4 px-4 pb-8 animate-slide-up delay-300">
          <div className="flex flex-col items-center text-center">
            <div className="size-12 rounded-full bg-[#e99f0c]/10 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-[#e99f0c]">format_paint</span>
            </div>
            <span className="text-xs font-semibold">Premium Finish</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="size-12 rounded-full bg-[#e99f0c]/10 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-[#e99f0c]">shield</span>
            </div>
            <span className="text-xs font-semibold">Weather Proof</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="size-12 rounded-full bg-[#e99f0c]/10 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-[#e99f0c]">verified</span>
            </div>
            <span className="text-xs font-semibold">1 Year Warranty</span>
          </div>
        </div>
        <div className="h-2 bg-gray-100 dark:bg-white/5 animate-slide-up delay-300"></div>
        <h3 className="text-[#181611] dark:text-white text-xl font-bold leading-tight tracking-tight px-4 pt-8 pb-4 animate-slide-up delay-300">Our Professional Process</h3>
        <div className="space-y-4 px-4 pb-8 animate-slide-up delay-300">
          <div className="flex gap-4 items-start bg-white dark:bg-white/5 p-4 rounded-xl border border-gray-100 dark:border-white/10">
            <div className="size-8 rounded-full bg-[#e99f0c] text-white flex items-center justify-center font-bold shrink-0">1</div>
            <div>
              <h4 className="font-bold text-base mb-1">Surface Preparation</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Deep cleaning, sanding, and filling cracks to ensure a smooth, lasting bond for the new paint.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start bg-white dark:bg-white/5 p-4 rounded-xl border border-gray-100 dark:border-white/10">
            <div className="size-8 rounded-full bg-[#e99f0c] text-white flex items-center justify-center font-bold shrink-0">2</div>
            <div>
              <h4 className="font-bold text-base mb-1">Priming & Undercoat</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Application of high-quality primers suited for South Africa's varying climate conditions.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start bg-white dark:bg-white/5 p-4 rounded-xl border border-gray-100 dark:border-white/10">
            <div className="size-8 rounded-full bg-[#e99f0c] text-white flex items-center justify-center font-bold shrink-0">3</div>
            <div>
              <h4 className="font-bold text-base mb-1">Premium Top Coat</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Two coats of premium paint (Dulux, Plascon) for a vibrant and durable finish.</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-white/5 py-8 animate-slide-up delay-300">
          <h3 className="text-[#181611] dark:text-white text-lg font-bold px-4 pb-4">Curated Schemes</h3>
          <div className="flex overflow-x-auto gap-4 px-4 no-scrollbar">
            <div className="min-w-[140px] flex flex-col gap-2">
              <div className="h-24 rounded-lg bg-[#F5F5F0] border border-gray-200 dark:border-white/10" data-alt="Light beige paint swatch"></div>
              <span className="text-xs font-medium">Coastal Sand</span>
            </div>
            <div className="min-w-[140px] flex flex-col gap-2">
              <div className="h-24 rounded-lg bg-[#4A5D5E] border border-gray-200 dark:border-white/10" data-alt="Dark teal paint swatch"></div>
              <span className="text-xs font-medium">Deep Atlantic</span>
            </div>
            <div className="min-w-[140px] flex flex-col gap-2">
              <div className="h-24 rounded-lg bg-[#D3D3D3] border border-gray-200 dark:border-white/10" data-alt="Light gray paint swatch"></div>
              <span className="text-xs font-medium">Urban Stone</span>
            </div>
            <div className="min-w-[140px] flex flex-col gap-2">
              <div className="h-24 rounded-lg bg-[#8B7D6B] border border-gray-200 dark:border-white/10" data-alt="Muted brown paint swatch"></div>
              <span className="text-xs font-medium">Karoo Dust</span>
            </div>
          </div>
        </div>
        <div className="px-4 py-8 mb-24 animate-slide-up delay-500">
          <h3 className="text-[#181611]/60 dark:text-white/60 text-xs font-bold uppercase tracking-widest text-center mb-6">Premium Brands We Use</h3>
          <div className="flex justify-around items-center opacity-70 grayscale contrast-125">
            <div className="h-6 w-24 bg-gray-300 dark:bg-white/20 rounded-sm" data-alt="Logo placeholder for Plascon"></div>
            <div className="h-6 w-24 bg-gray-300 dark:bg-white/20 rounded-sm" data-alt="Logo placeholder for Dulux"></div>
            <div className="h-6 w-24 bg-gray-300 dark:bg-white/20 rounded-sm" data-alt="Logo placeholder for Prominent Paints"></div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-[#221c10]/80 backdrop-blur-xl border-t border-gray-100 dark:border-white/10 p-4 pb-8 flex items-center justify-between gap-4 z-[100]">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-gray-400 uppercase">Starting from</span>
          <span className="text-lg font-bold text-[#e99f0c]">R45/m²</span>
        </div>
        <Link to="/contact" className="flex-1 bg-[#e99f0c] hover:bg-[#e99f0c]/90 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#e99f0c]/20 transition-all active:scale-[0.98]">
          Get a Free Quote
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
};

export default Painting;