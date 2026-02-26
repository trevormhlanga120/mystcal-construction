import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

const Ceiling: React.FC = () => {
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mystical Construction - Ceilings',
          text: 'Premium ceiling installation and repairs',
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
    <div className="bg-[#f8f7f5] dark:bg-[#231c0f] min-h-screen text-[#181610] dark:text-white font-display">
      <SEO 
        title="Ceiling Services" 
        description="Expert ceiling installation and repairs. Rhino board ceilings, suspended ceilings, and decorative cornicing."
        keywords="ceiling installation, ceiling repairs, rhino board ceilings, suspended ceilings, cornicing, ceiling contractor"
      />
      <div className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-[#231c0f]/90 backdrop-blur-md p-4 justify-between border-b border-gray-100 dark:border-white/10">
        <div className="flex items-center gap-3">
          <div className="text-[#181610] dark:text-white cursor-pointer" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined">arrow_back</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight">Ceiling Services</h2>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={handleShare} className="flex items-center justify-center rounded-full h-10 w-10 bg-transparent text-[#181610] dark:text-white">
            <span className="material-symbols-outlined">share</span>
          </button>
        </div>
      </div>
      <div className="@container">
        <div className="@[480px]:px-4 @[480px]:py-3">
          <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-[320px] relative animate-slide-left" data-alt="Modern elegant living room with recessed ceiling lights and white finish" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnGn-mEJ15Tqt-RKR57VrLep8FgLgeSBA29qMPR4DX5dX6DJHWxo9cp3ma4KYYlvSu3E-0bey0L2JWWItwsm3wlHYcheCvYZOEdTEUZ5W0kssmaemu5KJlpiN5xNMqDFfZC5sZ1xSeowk7t9Dto-S3ClvZJX6Sz10HqioHHxAzbulBtuJfDtqlrODiyPpfzq6SvUgFmKFUsasNZq8sdvp3qh7lSs9BLkap7y0h_ffuCdEh161vrhj7CQObMUkBC8CvAVJp8UlrfA")'}}>
            <div className="flex flex-col p-6 gap-1">
              <span className="text-[#f5a300] font-bold text-sm tracking-wider uppercase animate-slide-up">Premium Finishes</span>
              <h1 className="text-white text-3xl font-bold leading-tight animate-slide-up delay-100">Ceiling Installation & Repairs</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 px-4 py-4 overflow-x-auto no-scrollbar animate-slide-up delay-200">
        <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f5a300]/10 border border-[#f5a300]/20 px-5">
          <span className="material-symbols-outlined text-[#f5a300] text-sm">check_circle</span>
          <p className="text-[#181610] dark:text-white text-sm font-semibold">SABS Approved</p>
        </div>
        <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f5a300]/10 border border-[#f5a300]/20 px-5">
          <span className="material-symbols-outlined text-[#f5a300] text-sm">verified</span>
          <p className="text-[#181610] dark:text-white text-sm font-semibold">Insured Work</p>
        </div>
        <div className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f5a300]/10 border border-[#f5a300]/20 px-5">
          <span className="material-symbols-outlined text-[#f5a300] text-sm">schedule</span>
          <p className="text-[#181610] dark:text-white text-sm font-semibold">Fast Turnaround</p>
        </div>
      </div>
      <div className="px-4 py-2">
        <p className="text-[#181610] dark:text-gray-300 text-base font-normal leading-relaxed animate-slide-up delay-200">
          Mystical Construction provides premium ceiling finishes across South Africa, specializing in durable and aesthetic solutions for homes and corporate offices. Our expert team ensures every joint is seamless and every corner is perfect.
        </p>
      </div>
      <div className="px-4 pt-6 animate-slide-up delay-300">
        <h3 className="text-[#181610] dark:text-white tracking-tight text-xl font-bold mb-4">Core Specializations</h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white dark:bg-white/5 p-4 rounded-xl border border-gray-100 dark:border-white/10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#f5a300]/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#f5a300]">architecture</span>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Rhino Board Ceilings</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">High-quality gypsum board installations with a flush-plastered finish for a smooth, modern look.</p>
            </div>
          </div>
          <div className="bg-white dark:bg-white/5 p-4 rounded-xl border border-gray-100 dark:border-white/10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#f5a300]/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#f5a300]">grid_view</span>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Suspended Ceilings</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Ideal for commercial spaces. Easy access to services like electrical and HVAC systems.</p>
            </div>
          </div>
          <div className="bg-white dark:bg-white/5 p-4 rounded-xl border border-gray-100 dark:border-white/10 flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#f5a300]/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[#f5a300]">format_paint</span>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Decorative Cornicing</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">From classic coved cornices to modern shadow-line finishes for that perfect edge.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-8 animate-slide-up delay-500">
        <h3 className="text-[#181610] dark:text-white tracking-tight text-xl font-bold mb-6">Installation Process</h3>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-white/10"></div>
          <div className="relative flex gap-6 mb-8">
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f5a300] text-white font-bold shadow-lg shadow-[#f5a300]/30">
              1
            </div>
            <div className="pt-1">
              <h4 className="font-bold text-base">Site Assessment</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Detailed measurement and structural check of the roof trusses or slab.</p>
            </div>
          </div>
          <div className="relative flex gap-6 mb-8">
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f5a300] text-white font-bold shadow-lg shadow-[#f5a300]/30">
              2
            </div>
            <div className="pt-1">
              <h4 className="font-bold text-base">Frame Assembly</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Installation of brandering or metal grid systems for a perfectly level base.</p>
            </div>
          </div>
          <div className="relative flex gap-6 mb-8">
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f5a300] text-white font-bold shadow-lg shadow-[#f5a300]/30">
              3
            </div>
            <div className="pt-1">
              <h4 className="font-bold text-base">Boarding & Plastering</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Precision fitting of boards followed by skimming for a seamless finish.</p>
            </div>
          </div>
          <div className="relative flex gap-6">
            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f5a300] text-white font-bold shadow-lg shadow-[#f5a300]/30">
              4
            </div>
            <div className="pt-1">
              <h4 className="font-bold text-base">Final Inspection</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Sanding and quality assurance check before painting and hand-over.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-28 bg-transparent"></div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-[#231c0f]/80 backdrop-blur-lg border-t border-gray-100 dark:border-white/10 flex gap-3 items-center">
        <Link to="/contact" className="flex-1 bg-[#f5a300] text-white h-14 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#f5a300]/20">
          <span className="material-symbols-outlined">request_quote</span>
          Request a Quote
        </Link>
        <Link to="/contact" className="w-14 h-14 bg-green-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
          <span className="material-symbols-outlined">chat</span>
        </Link>
      </div>
    </div>
  );
};

export default Ceiling;