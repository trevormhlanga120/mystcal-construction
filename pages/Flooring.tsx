import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Flooring: React.FC = () => {
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mystical Construction - Flooring',
          text: 'Expert flooring and tiling services',
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
    <div className="bg-[#f6f7f8] dark:bg-[#101922] text-[#111418] dark:text-white font-manrope">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="sticky top-0 z-50 flex items-center bg-white/90 dark:bg-[#101922]/90 backdrop-blur-md p-4 pb-2 justify-between border-b border-gray-100 dark:border-gray-800">
          <div className="text-[#137fec] flex size-12 shrink-0 items-center justify-start cursor-pointer" onClick={() => navigate(-1)}>
            <span className="material-symbols-outlined">arrow_back_ios</span>
          </div>
          <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Flooring & Tiling</h2>
          <div className="flex w-12 items-center justify-end">
            <button onClick={handleShare} className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#111418] dark:text-white p-0">
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-[320px] shadow-lg animate-slide-left" data-alt="Luxury modern living room with pristine porcelain tile flooring" style={{backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_rlo96bz9xnLTESyWpWHEdWK72OwfYaUW9mEV3vlIKXll25fIsINS9ayyIzRUmr6FRv1MBOHxVWI5GQTlFt7mSQrlBDZwzuolpVkd1Pw-wJFj9qyD9SMETWKxLH1twQuU9GNm7hGzQvP6--z3oO7mqvhwCstg47i9COb1S7fU-_6cRj7KGUoB71k0Z5XgyZ1jNXxt7QYo2ELLpjNs74-Vkv0PF4hsuJRKUXtC80WfMSyFvjJXgNSluEr_ws5kSmiSHJS-qp8qEQ")'}}>
              <div className="flex flex-col p-6 gap-2">
                <span className="bg-[#137fec] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded w-fit animate-slide-up">Expert Service</span>
                <p className="text-white tracking-light text-3xl font-extrabold leading-tight animate-slide-up delay-100">Premium Flooring Solutions</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 pt-6 pb-4">
          <h2 className="text-[#137fec] text-sm font-bold uppercase tracking-widest mb-2 animate-slide-up delay-100">Our Mission</h2>
          <p className="text-[#111418] dark:text-gray-300 text-lg font-medium leading-relaxed animate-slide-up delay-200">
            At Mystical Construction, we provide precision-engineered flooring and tiling services across South Africa, ensuring a flawless finish for every project.
          </p>
        </div>
        <div className="px-4 pt-4 animate-slide-up delay-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[#111418] dark:text-white text-xl font-bold">Material Specialties</h3>
            <Link to="/gallery" className="text-[#137fec] text-sm font-semibold">View All</Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4">
            <div className="flex flex-col gap-3 pb-3 bg-white dark:bg-gray-800/50 rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-800">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj4-nfPUDR4BP3v_MGLVhtMJc8in_1-5dnUtpYKC6DMpGWx7zTcntMdMQHM_ZfrtzybO0J9a5zxEINMk3x1uU76mXVBFLvidJ9s4CXv8_IGXJeHIpfFUp7GOiDCUXpQNX8cYW6odFqpLybb2PyKedIHkrosWfr7kQcc4GdpXngeL8mGxlZUb_lLX9y0BcOgKrQjIZqnvPJ_83_APUfr0wuvWjn4gTOq4xPaEo7WgN9GrPQrvSt7s5XqJCg9ndHPTQJDtx2UHMGCw" alt="Close up of grey ceramic tiles" className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" loading="lazy" decoding="async" />
              <div>
                <p className="text-[#111418] dark:text-white text-base font-bold leading-tight">Ceramic Tiling</p>
                <p className="text-[#617589] dark:text-gray-400 text-xs mt-1">Durable & stylish for homes</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3 bg-white dark:bg-gray-800/50 rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-800">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7yv6zEszqzr-2pwdRFQcJHz25nJT4ztZkiLo1qy6jKMUBUTG_AchfF_cRvqCbYju4vxll96SR5eUIju4fT5EPd8RpLQZLqXQ9dFToLmF4YFknAmTx8dH0TUtXy2wjVoMnjzG4qrdzIJ9O_XIPA5EnyfMbx0dQ0lMlkceOFVuHX7icnkXBu89R8m5uuA66wB-vPX-o_BsHqz9XohtmP0pBTPSZAxe10SjeyF6yYQbY8eSpt7tvnCwzaBJ3XbN5s9T045wuryRN_w" alt="Large format white porcelain tiles" className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" loading="lazy" decoding="async" />
              <div>
                <p className="text-[#111418] dark:text-white text-base font-bold leading-tight">Porcelain Tiles</p>
                <p className="text-[#617589] dark:text-gray-400 text-xs mt-1">High-traffic luxury finish</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pb-3 bg-white dark:bg-gray-800/50 rounded-xl p-3 shadow-sm border border-gray-100 dark:border-gray-800">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsyZe56P-U1J5W8D8_yhxGK2af_zGI-7EH89vK7hZnGmrXj44j5U6AU7UtNbausEY8KkIJpiAIB0ayWybYo8Ge8ATusBPQUFs0dzYDuAvU0AiFVb0VYYsHSxV0b-nB9EnhBd1ZC9Fruk8FY9HpVNEB9llS9S7l5SBo4SfMeGcxWwFg7LvgyqIj0CjJ_i2x2eb-y-HzUuntqWh-eW4Hwk68SlqKFpZAEo93q8v25LfeN33_f2HdUbxwdpL8llvbkDSmNbh37yKDfw" alt="Modern hardwood parquet flooring" className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg" loading="lazy" decoding="async" />
              <div>
                <p className="text-[#111418] dark:text-white text-base font-bold leading-tight">Wood Flooring</p>
                <p className="text-[#617589] dark:text-gray-400 text-xs mt-1">Timeless warmth & elegance</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#137fec]/5 dark:bg-[#137fec]/10 mt-6 py-8 px-4 animate-slide-up delay-300">
          <h3 className="text-[#111418] dark:text-white text-xl font-bold mb-6">The Mystical Touch</h3>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#137fec]/20 p-3 rounded-lg text-[#137fec]">
                <span className="material-symbols-outlined">architecture</span>
              </div>
              <div>
                <h4 className="font-bold text-[#111418] dark:text-white">SANS Compliant Precision</h4>
                <p className="text-sm text-[#617589] dark:text-gray-400 mt-1">Our installations meet strict South African National Standards for durability and safety.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#137fec]/20 p-3 rounded-lg text-[#137fec]">
                <span className="material-symbols-outlined">straighten</span>
              </div>
              <div>
                <h4 className="font-bold text-[#111418] dark:text-white">Sub-floor Preparation</h4>
                <p className="text-sm text-[#617589] dark:text-gray-400 mt-1">We ensure perfect leveling before any tile is laid to prevent future cracking or lifting.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#137fec]/20 p-3 rounded-lg text-[#137fec]">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <h4 className="font-bold text-[#111418] dark:text-white">Laser Grout Alignment</h4>
                <p className="text-sm text-[#617589] dark:text-gray-400 mt-1">Advanced alignment technology for perfectly symmetrical grout lines across every room.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-8 animate-slide-up delay-500">
          <h3 className="text-[#111418] dark:text-white text-xl font-bold mb-4">Completed Projects</h3>
          <div className="grid grid-cols-2 gap-2">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkzVZB1Hv7YdMgmZ9aADZxROa8d8wrZkGENecmftqhvrxIYWt5salqDdxF7n9rfEg-xOeByH5hMvIPrqm-k12ZlWspqCl6dJahch0ef4YOLUWiHtyAy3hB7rOjAc4A9heDFr4WEHzJ3g2ZWuVpXofKRFvxeHhuMb1-0IY-1SsRMdMpp4wfW7cFkEVCjiDlBCahyIPrex6kPwdDtyGDD6h8iS62x50XrHi87xHNkjct56YI2soa8i8OsdukqTUnQZ0q4fOaEWBVHA" alt="Modern bathroom with marble tiling" className="h-48 w-full object-cover rounded-lg bg-center" loading="lazy" decoding="async" />
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt3zz5YZ1L9k75gGTPSjH-WdvEvogZicey3x1J6A8wp4bE5pfr6W8Cx6knLmq18i90wG_6JulgCXXyZke8rZqrrim79fEf_3mxBajhfHzIqemPU7Q-2Pq8E5wQenMkjGmV-92JtWqt6zLdC2fwFiDXkwRvhjTxFymNHiAujFFfeLLhtdd4TZ8_uWBgXwTE9JWdfPlY0Q55eXJ_u-iaUy1o9JA60YeWUokV4ZWQv3OPz3su8gEabXmwJ_VD57212elO3cFuneXkKg" alt="Commercial lobby with polished tiles" className="h-48 w-full object-cover rounded-lg bg-center" loading="lazy" decoding="async" />
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_-LLZlyEYa1AsjNy044P-6sgM-vlN530_-tCnOemG9sEjhTaKexreyurGXHqc2bnugoIkXV1D6GkfCnPsR9t84IiKN9STrDDDIWP6tSNL_2k0y6fn8fwCD3Jm5jrG90uFYre1yhUWEsOIGUV0o4ntO_3ZNCC-uJVntR6VBSIpFFtHJOPGeB-NEKQr-P0HpUi48x1VASEheqNuaxWPZQenMLTurun_m-RoGMNsXdj5ftuJAqMfr_kHA2sSVvYLo4JWXZaQ3qRvvg" alt="Large outdoor patio tiling project" className="h-64 col-span-2 w-full object-cover rounded-lg bg-center" loading="lazy" decoding="async" />
          </div>
        </div>
        <div className="px-4 pb-24 animate-slide-up delay-500">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm italic text-[#111418] dark:text-gray-200">
            <span className="material-symbols-outlined text-[#137fec] mb-2">format_quote</span>
            <p className="text-base">"The attention to detail in our home's tiling was extraordinary. Mystical Construction turned our vision into a masterpiece. The grout lines are perfect!"</p>
            <div className="mt-4 flex items-center gap-3 not-italic">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7ATRlLLF_ePejwkwbRObyGZS-8j5si2hpINfX6aEE4S5Sl86gC_KGpA6t3eOQ96oXdJ5l5kFRykY3AxAr7C3PjPnAgPo-2whk-GRIqf9tSVAEwqGnm9KCdS128oFjuRQMjH_J_EeqshhksXg1Hlk6pj-hMHlIvnhC1nGY9_Mwpud2GToOGpy79PVtDG0ObOO09t4h9Ywj05x0xH9GMITrT64i8MM-iUlLn0T5FX1D0Nxp0WZRDojWcTIOQDblkZ7Q8JV0J1npsg" alt="Portrait of a satisfied client" className="size-10 rounded-full object-cover bg-gray-200" loading="lazy" decoding="async" />
              <div>
                <p className="font-bold text-sm">David Miller</p>
                <p className="text-xs text-[#617589]">Sandton, Gauteng</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 flex gap-3">
          <Link to="/contact" className="flex-1 bg-[#137fec] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#137fec]/30 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
            Book Consultation
          </Link>
          <a href="tel:0618607883" className="size-14 bg-background-light dark:bg-gray-800 text-[#137fec] border border-[#137fec]/20 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined">call</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Flooring;