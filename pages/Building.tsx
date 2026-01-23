import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';

const Building: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-background-light dark:bg-[#221c10] font-space text-[#181611] dark:text-[#f8f7f5] transition-colors duration-300 min-h-screen">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <header className="sticky top-0 z-50 flex items-center bg-background-light/90 dark:bg-[#221c10]/90 backdrop-blur-md p-4 justify-between border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="bg-[#e99f0c] p-1.5 rounded-lg flex items-center justify-center text-white cursor-pointer" onClick={() => navigate(-1)}>
              <span className="material-symbols-outlined">architecture</span>
            </div>
            <h2 className="text-[#181611] dark:text-white text-lg font-bold leading-tight tracking-tight">Mystical Construction</h2>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-[#181611] dark:text-white">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button onClick={() => setIsMenuOpen(true)} className="flex items-center justify-center rounded-lg h-10 w-10 bg-transparent text-[#181611] dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </header>
        <main className="flex-grow">
          <div className="@container">
            <div className="@[480px]:px-4 @[480px]:py-4">
              <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-[320px] relative shadow-lg animate-slide-left" data-alt="Modern South African residential construction site at sunset" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuADJShrZshbdMmZkg5GtPuv6Y_T7k8Zp5sEKmUxY_lPvrIws1xQrRi9LKVS4hCz55wj7Gp-b0ULjQB1r0iuvWFtQn5S675UK71WAWLxFUDcObWOhFJoKshkN17hHFeoPYwResaXjVcdawd7T29sAjB7XDU44xQOs_TFuJ6yK0QCwV_mD_diSf30ssktLqB0JondSM_oyhpcJSJw8x3_NN-cwJBiLcHpuR8isPGEoKlAoLbpczJpZVyrbGWaXrz6k9SNxHCt06MSzg")'}}>
                <div className="flex flex-col p-6 gap-2">
                  <span className="bg-[#e99f0c] text-black font-bold text-xs uppercase tracking-widest px-2 py-1 rounded w-fit animate-slide-up">Service Detail</span>
                  <h1 className="text-white text-3xl font-bold leading-tight animate-slide-up delay-100">Building & Renovations</h1>
                  <p className="text-gray-300 text-sm max-w-xs animate-slide-up delay-200">Premium construction solutions for residential and commercial projects across South Africa.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-6">
            <h3 className="text-[#181611] dark:text-white text-2xl font-bold leading-tight pb-2 animate-slide-up delay-100">Comprehensive Solutions</h3>
            <p className="text-[#8a7c60] dark:text-gray-400 text-base leading-relaxed animate-slide-up delay-200">We deliver excellence through meticulous planning and superior craftsmanship, ensuring your vision becomes a structural reality.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 p-4 animate-slide-up delay-300">
            <div className="flex flex-col gap-3 pb-3 bg-white dark:bg-[#2d261a] p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0KD8Ouhxw_BXsYox75QGE49j3YkMnZG5FSAn_r3XghQN7wVhd7EHgIWGE-fInL2zijSn8bLaDviB-Z50emJ2w9T_cg77hu6xQKcXS0Ve9lVuvxTKy7Pv4yJ-lEEbrwTmFwle8NYAtjcb8H2ckKevx8ajXbAYG-3oy_DORhTQMNtVcrBpAETj2xdRVR6dla7aDnu_yVX1uOjsx42EX2ypIzk-eOIt2gHlpFiarG-4SwG7Qfall5RcLpuZMXHtyYu-HW3oxtHxAbQ" alt="Close up of steel reinforcements for concrete foundation" className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover rounded-lg" loading="lazy" />
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[#181611] dark:text-white text-lg font-bold leading-normal">Foundation Work</p>
                  <p className="text-[#8a7c60] dark:text-gray-400 text-sm font-normal leading-normal">Deep excavation and reinforced concrete solutions for long-lasting stability.</p>
                </div>
                <div className="bg-[#e99f0c]/10 text-[#e99f0c] p-2 rounded-lg">
                  <span className="material-symbols-outlined">foundation</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3 bg-white dark:bg-[#2d261a] p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9TPgq8LFJFPjOiOQctypuuRkws2yedSqPvJHhX44l7EhtptmMxxJCfYzm5AUfDrTB-R1C5nbSj2fLiqNTiAVJGSqDGsrYqVflZNsUClarngwIivcoXW5DMcNTGeDPy6irX0E-mZf9ap-uxI8Wh1JkGsmXI_KxQIxO5J700hIM_MV3LAJ-btSePWNWvktWeUtJDoZwSPpE2RdiHe1ff39I2ufw6p7kZ6uGK2hn4LcPOja_o3mzXHaRmh9xxqDx7ICN-io4gPn5kQ" alt="Modern house extension with large glass windows" className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover rounded-lg" loading="lazy" />
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[#181611] dark:text-white text-lg font-bold leading-normal">Extensions</p>
                  <p className="text-[#8a7c60] dark:text-gray-400 text-sm font-normal leading-normal">Seamlessly adding functional space to your home while increasing property value.</p>
                </div>
                <div className="bg-[#e99f0c]/10 text-[#e99f0c] p-2 rounded-lg">
                  <span className="material-symbols-outlined">add_home</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3 bg-white dark:bg-[#2d261a] p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx5XQXPeCp8zNC3x0q1oQJ2RW6Ec42xnx2XWAB0Av0LkNahlb8kwsqZg8gZpRadZ7nx6JnIEXkskg9MiRrM1ofgZhjGUgwT5RE_QhIE-eUKB-9TmlQDhZ_k3g8m9WRT30XUi6qiE6jtpUjI4nTqCiJvnO562wOHnyjI-hHKqD8ZEWa3-Ea6ZuXNHU9WeIjAaahc60EbrH4VbxQ5ZVPo-DzuTtrP3vqKplJkIzn_BnyZl-OyeoZp6_RDmc1CeDl7w9jK7iuF1GsaQ" alt="Workers removing an internal wall for open plan living" className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover rounded-lg" loading="lazy" />
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[#181611] dark:text-white text-lg font-bold leading-normal">Structural Changes</p>
                  <p className="text-[#8a7c60] dark:text-gray-400 text-sm font-normal leading-normal">Professional internal wall removals and open-plan living conversions.</p>
                </div>
                <div className="bg-[#e99f0c]/10 text-[#e99f0c] p-2 rounded-lg">
                  <span className="material-symbols-outlined">engineering</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#e99f0c]/5 dark:bg-[#e99f0c]/10 py-8 px-4 mt-4 animate-slide-up delay-300">
            <h2 className="text-[#181611] dark:text-white text-[22px] font-bold leading-tight tracking-tight pb-6">Our 3-Step Process</h2>
            <div className="flex flex-col gap-8 relative">
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-[#e99f0c]/30"></div>
              <div className="flex gap-4 relative">
                <div className="z-10 bg-[#e99f0c] text-black h-12 w-12 rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined">forum</span>
                </div>
                <div className="flex flex-col pt-1">
                  <h4 className="text-[#181611] dark:text-white font-bold text-lg">1. Consultation</h4>
                  <p className="text-[#8a7c60] dark:text-gray-400 text-sm">On-site assessment, requirement gathering, and initial budget estimation.</p>
                </div>
              </div>
              <div className="flex gap-4 relative">
                <div className="z-10 bg-[#e99f0c] text-black h-12 w-12 rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined">architecture</span>
                </div>
                <div className="flex flex-col pt-1">
                  <h4 className="text-[#181611] dark:text-white font-bold text-lg">2. Planning</h4>
                  <p className="text-[#8a7c60] dark:text-gray-400 text-sm">Detailed blueprints, technical specifications, and regulatory approvals.</p>
                </div>
              </div>
              <div className="flex gap-4 relative">
                <div className="z-10 bg-[#e99f0c] text-black h-12 w-12 rounded-full flex items-center justify-center shrink-0 shadow-md">
                  <span className="material-symbols-outlined">construction</span>
                </div>
                <div className="flex flex-col pt-1">
                  <h4 className="text-[#181611] dark:text-white font-bold text-lg">3. Execution</h4>
                  <p className="text-[#8a7c60] dark:text-gray-400 text-sm">Skilled construction management, safety oversight, and final handover.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 mb-24 animate-slide-up delay-500">
            <div className="bg-white dark:bg-[#2d261a] p-6 rounded-xl border-l-4 border-[#e99f0c] shadow-sm italic">
              <p className="text-[#181611] dark:text-gray-300 mb-2">"Mystical Construction transformed our Cape Town villa into a modern masterpiece. The attention to detail in the structural changes was impressive."</p>
              <p className="text-[#e99f0c] font-bold text-sm not-italic">— David M., Property Developer</p>
            </div>
          </div>
        </main>
        <footer className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/80 dark:bg-[#221c10]/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800">
          <Link to="/contact" className="w-full bg-[#e99f0c] hover:bg-[#e99f0c]/90 text-black h-14 rounded-xl flex items-center justify-center gap-2 text-lg font-bold tracking-tight shadow-xl transition-transform active:scale-95">
            <span className="material-symbols-outlined">request_quote</span>
            Request a Quote
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default Building;