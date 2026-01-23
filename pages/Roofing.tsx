import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Roofing: React.FC = () => {
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mystical Construction - Roofing',
          text: 'Expert roofing services in South Africa',
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
    <div className="bg-[#f8f7f5] dark:bg-[#221c10] font-display text-[#181611] dark:text-[#f8f7f5] min-h-screen">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="flex items-center bg-[#f8f7f5] dark:bg-[#221c10] p-4 pb-2 justify-between sticky top-0 z-50 border-b border-[#e6e2db] dark:border-[#3d3424]">
          <div className="text-[#181611] dark:text-[#f8f7f5] flex size-12 shrink-0 items-center">
            <span className="material-symbols-outlined cursor-pointer" onClick={() => navigate(-1)}>arrow_back_ios</span>
          </div>
          <h2 className="text-[#181611] dark:text-[#f8f7f5] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Roofing Services</h2>
          <div className="flex w-12 items-center justify-end">
            <button onClick={handleShare} className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#181611] dark:text-[#f8f7f5] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-lg min-h-80 animate-slide-left" data-alt="Modern house with high-quality dark grey roofing tiles" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVZ55DihID9yBFfJBDO4ny0qokKvCbD5xKLuNUgZUUd2CphDuwuTDE9EN9HqPAZxnxfuk-cBIz1MtZrh8FEsGiCD5XLG_ETS-VO2Own0dGy2XJnnoUxFtA2xlPOfFIcNX9hz60JSrU2rSgAfjkCakXrk-wecPV6G92x3tsj1tHv5ZzAH9lpbcDfnc0qkL3eGvl9toG_FwIKQTQM2HR7EzPlDdrgDIEi7sHYTqwKrl-TRYXHIRZRyDh-C4sa2IvWkF-6br2sXDr_A")'}}>
              <div className="flex p-4 flex-col gap-1">
                <p className="text-white tracking-light text-[28px] font-bold leading-tight animate-slide-up">Premium Roofing Solutions</p>
                <p className="text-white/80 text-sm animate-slide-up delay-100">Mystical Construction and Renovations</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-[#181611] dark:text-[#f8f7f5] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-1 pt-6 animate-slide-up delay-100">Our Expertise</h2>
        <p className="text-[#181611] dark:text-[#f8f7f5]/80 text-base font-normal leading-relaxed pb-3 pt-1 px-4 animate-slide-up delay-200">
          Protecting your home with expert craftsmanship. Mystical Construction and Renovations provides premium roofing services across South Africa, ensuring durability and style for your property.
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4 animate-slide-up delay-300">
          <div className="flex flex-1 gap-3 rounded-lg border border-[#e6e2db] dark:border-[#3d3424] bg-white dark:bg-[#2c2415] p-4 flex-col shadow-sm">
            <div className="text-[#e99f0c]">
              <span className="material-symbols-outlined" style={{fontSize: "32px"}}>construction</span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#181611] dark:text-[#f8f7f5] text-base font-bold leading-tight">Roof Repairs</h2>
              <p className="text-[#8a7c60] dark:text-[#b5a88e] text-sm font-normal leading-normal">Expert fixing of leaks, damage, and wear.</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#e6e2db] dark:border-[#3d3424] bg-white dark:bg-[#2c2415] p-4 flex-col shadow-sm">
            <div className="text-[#e99f0c]">
              <span className="material-symbols-outlined" style={{fontSize: "32px"}}>water_drop</span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#181611] dark:text-[#f8f7f5] text-base font-bold leading-tight">Waterproofing</h2>
              <p className="text-[#8a7c60] dark:text-[#b5a88e] text-sm font-normal leading-normal">Weather-proof solutions for SA climates.</p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#e6e2db] dark:border-[#3d3424] bg-white dark:bg-[#2c2415] p-4 flex-col shadow-sm">
            <div className="text-[#e99f0c]">
              <span className="material-symbols-outlined" style={{fontSize: "32px"}}>domain</span>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#181611] dark:text-[#f8f7f5] text-base font-bold leading-tight">New Installations</h2>
              <p className="text-[#8a7c60] dark:text-[#b5a88e] text-sm font-normal leading-normal">High-quality materials for new builds.</p>
            </div>
          </div>
        </div>
        <div className="mx-4 my-4 p-5 bg-[#e99f0c]/10 border-2 border-[#e99f0c] rounded-xl flex items-center gap-4 animate-slide-up delay-300">
          <div className="bg-[#e99f0c] text-white p-3 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">emergency</span>
          </div>
          <div className="flex-1">
            <h3 className="text-[#181611] dark:text-[#f8f7f5] font-bold text-lg">Emergency Repairs</h3>
            <p className="text-[#181611]/70 dark:text-[#f8f7f5]/70 text-sm">24/7 support for storm damage and urgent leaks.</p>
          </div>
          <span className="material-symbols-outlined text-[#e99f0c]">chevron_right</span>
        </div>
        <h2 className="text-[#181611] dark:text-[#f8f7f5] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 animate-slide-up delay-500">Our Projects</h2>
        <div className="flex gap-3 overflow-x-auto px-4 pb-6 no-scrollbar animate-slide-up delay-500">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr43O0ziKfk1jbkUjQJWLLFQOLV0CM3hh4d5kNI7aIIRyxlPe1cXUp6FhCxSO7E0No1bicM48S9dh9cyR9fRRzUPEiE2jdxgr6G05SMl_JTfF4PsF0OFBGcUtIVHv7WLaZXr_HV3L7jz1gC5oe2i_pY3bXPtaTtmYo5P0fYSyISHqqkJZ1-tW1N1_-GCxNZpVoojNmJI-5tCHJJ_R144hQJz5jS5oCnwAJCmsFXXJ6m-4b9k6-J28XdczuYzCKqtRHLhcisPHS1Q" alt="Close up of terracotta roof tiles" className="min-w-[240px] h-40 object-cover rounded-lg shadow-sm" loading="lazy" decoding="async" />
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPhK111t8cofwn4g1YiWaPmxehjpZTD_YGj3i-Tpml5qzNUWT6QaPWPANSEAS3D0d5WjDXGPcuxL4liAlVB8hELb_pWfus4agxOZl0PzFSU4tkj9KbVOqySlQK5T7rpznQF-ZcTJRUebUFwTqP7rZ6erGrYdArQGWw9dzqF4XYWN1lh8UWIB3aEygwQNYOWp4weNCoeeMbhcKb_VjtwErsclo0RP9PcXT5HQNNELxjCr6tCFMCdIEDkbT8a1L3BhF-JWthx6FMzg" alt="Industrial metal roofing installation" className="min-w-[240px] h-40 object-cover rounded-lg shadow-sm" loading="lazy" decoding="async" />
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiXP9j3vFD_Hm4xloFT6f1McE5Kce_4PE-43QVeWM0kpUEf6XCTRKAtvDCHyw2t3N43MgrtXNB1-EcBpVFgeoaHypuIatiL1ZIVTTivPGDkb_FROnc-QyBwoCj7S4uE-Qi_Tx409NUkm40OhsXB3dOD56A38OOYo25NlkjwmSr5h3ST9Nyb_DMqe_AKePQ40gnCbXYemYBplMYGj5efqSbp6K8amVoS1nNR9vEc6GwO2BLQHK_-tm-nC3-XBi9_19nYoCa_RlttQ" alt="Modern home flat roof waterproofing" className="min-w-[240px] h-40 object-cover rounded-lg shadow-sm" loading="lazy" decoding="async" />
        </div>
        <div className="h-24"></div>
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-[#221c10]/80 backdrop-blur-md border-t border-[#e6e2db] dark:border-[#3d3424]">
          <Link to="/contact" className="w-full bg-[#e99f0c] hover:bg-[#e99f0c]/90 text-[#181611] font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-colors">
            <span className="material-symbols-outlined">request_quote</span>
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Roofing;