import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Carpentry: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f8f7f6] dark:bg-[#121212] font-manrope text-gray-900 dark:text-white min-h-screen">
      {/* Top Navigation */}
      <div className="sticky top-0 z-50 flex items-center bg-[#f8f7f6]/95 dark:bg-[#121212]/95 backdrop-blur-md p-4 border-b border-gray-200 dark:border-white/10 justify-between">
        <div className="text-gray-900 dark:text-white flex size-10 shrink-0 items-center justify-center cursor-pointer" onClick={() => navigate(-1)}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </div>
        <div className="flex-1 flex justify-center items-center gap-2">
          <div className="h-8 w-8 bg-[#eebd2b] rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-[#121212] font-bold text-lg">construction</span>
          </div>
          <h2 className="text-gray-900 dark:text-white text-lg font-extrabold leading-tight tracking-tight">Mystical Construction</h2>
        </div>
        <div className="flex w-10 items-center justify-end">
          <button className="flex cursor-pointer items-center justify-center rounded-lg h-10 w-10 bg-transparent text-gray-900 dark:text-white transition-colors hover:bg-[#eebd2b]/20">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="@container">
        <div className="@[480px]:px-4 @[480px]:py-3">
          <div className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-[#181611] @[480px]:rounded-xl min-h-[340px] relative animate-slide-left" data-alt="Close up of high quality master wood craftsmanship" style={{backgroundImage: 'linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJOAenga1kX6yyUuxRzbREsmvdobkEC8G8vIuFLekxl61TAvBEPCSNxyC_Jw83w9aYK6Mjmd8nq3jgqapZeNFqXruvI7FK0up_MrCADVZe-sozYms5dLxkJDTLH6y0balSKUcdzjlxk5lV2oOMN2Ffj-vnmyPdQOOW81NohguFjAL7kG4s3mw5M04_9znAeovlwxolkxAJCrMtLd7A8WZZVV48FJ6xckQbZiOZlh7nI9whgUjSLTiz1nazedij5zubyiLHu2FqLw")'}}>
            <div className="flex flex-col p-6 gap-2">
              <span className="bg-[#eebd2b] text-[#121212] text-xs font-black uppercase tracking-widest px-2 py-1 rounded w-fit animate-slide-up">Service Detail</span>
              <h1 className="text-white tracking-tight text-3xl font-extrabold leading-tight animate-slide-up delay-100">Master Carpentry & Custom Woodwork</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Text */}
      <div className="px-4 pt-8 pb-4">
        <h2 className="text-[#eebd2b] tracking-tight text-sm font-bold uppercase mb-2 animate-slide-up delay-100">Expert Craftsmanship</h2>
        <h3 className="text-gray-900 dark:text-white text-2xl font-bold leading-tight mb-4 animate-slide-up delay-200">Repairs & New Installations</h3>
        <p className="text-gray-600 dark:text-gray-400 text-base font-normal leading-relaxed animate-slide-up delay-300">
          From bespoke cabinetry to structural wooden decking, we provide premium woodworking solutions tailored for South African homes and commercial spaces. Our team blends traditional techniques with modern technology to deliver lasting quality.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 @[480px]:grid-cols-2 lg:grid-cols-3 gap-4 p-4 animate-slide-up delay-300">
        <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#2A2A2A] p-5 shadow-sm">
          <div className="bg-[#eebd2b]/10 w-12 h-12 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-[#eebd2b] text-3xl">countertops</span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-gray-900 dark:text-white text-lg font-bold">Cabinetry</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Precision-engineered kitchens, vanities, and smart storage solutions.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#2A2A2A] p-5 shadow-sm">
          <div className="bg-[#eebd2b]/10 w-12 h-12 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-[#eebd2b] text-3xl">deck</span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-gray-900 dark:text-white text-lg font-bold">Wooden Decking</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Structural timber decks for premium outdoor lifestyle living.</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#2A2A2A] p-5 shadow-sm">
          <div className="bg-[#eebd2b]/10 w-12 h-12 rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-[#eebd2b] text-3xl">carpenter</span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-gray-900 dark:text-white text-lg font-bold">Custom Woodwork</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">Bespoke furniture and specialized timber renovations.</p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="px-4 pt-6 pb-2 flex justify-between items-end animate-slide-up delay-500">
        <div>
          <h2 className="text-[#eebd2b] tracking-tight text-sm font-bold uppercase mb-1">Our Portfolio</h2>
          <h3 className="text-gray-900 dark:text-white text-xl font-bold">Craftsmanship in Action</h3>
        </div>
        <Link to="/gallery" className="text-[#eebd2b] text-sm font-bold flex items-center gap-1">
          View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>
      <div className="flex gap-4 overflow-x-auto px-4 py-4 no-scrollbar animate-slide-up delay-500">
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtUIXovVKRIOMxMATFrsS7yYHhoYThkY75V5MGGevE4qtWGsIYvhuxyEUrjkplOjx32jtCZNEYzd5Yl5qR_bR0tcS-Et4wNzA1PD-f0x66i9yUwXDVKb2Pz-OWy2pVIW5TVjxIvrPZ2BSVDQP61nKufNrfx0tM0urFmORCt5b8x8GGPL5f2GVYrNE16iQL0Yatlji2lidCKYNyVT3TiZ0LAyF5Vzl8unTwJYyP4_ZMmm1rHZruMoHGCKJ-I6gnl54wUSylTdbhog" alt="Luxury modern kitchen cabinets with wood finish" className="min-w-[260px] h-48 rounded-xl bg-gray-200 dark:bg-[#2A2A2A] flex-shrink-0 object-cover border-2 border-transparent hover:border-[#eebd2b] transition-all shadow-lg" loading="lazy" />
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLNjChG6_ngbfxzuZ4MjHzDPTFeWgEd3HCNJmGcvBT9nX_i5GjwPAq9GqUVqGbtbFuYBJ2pWhNJF0fzHJQVFTo1rwZBOhKSD__a1qyKO7cXkpRj3FZJcuEKpxoTX2JkFN5_1DW--NE9RQZwsaWCQlH-3nsasYxG3TkBO0EKAryfVulYzAejUkcjW0LnqyEB64z2IJoz2M3fjFkvin6CMserUcZ6O0_EryfLDDSL4jHzsaZPoXPgo7alpNiKCP1WYBZvrVIuoJmvg" alt="Beautiful outdoor wooden pool deck" className="min-w-[260px] h-48 rounded-xl bg-gray-200 dark:bg-[#2A2A2A] flex-shrink-0 object-cover border-2 border-transparent hover:border-[#eebd2b] transition-all shadow-lg" loading="lazy" />
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMFvI2H7q9cEuwlm_likbnahHYZlS4F1RAVVyf5Kay1hbEHn5KCRzPMhH9RwoCFTwf4bJuSaEyfc9H-E3991fmwJx6BWo4Pb5rNdjdPAG3o_ZN8v29dTOueoprWF1WwQKqEIOcZqsAxnWbTFkr703x9Yd3g6hgQm9nZbZaUIARbK_aO0g02TuPatMATmKL3FfKuTgDewdvk1qRNIR7gYZ1N-r8zlZO77Mu0JK_IUS_2owGwStRp2U06YeMcCS-9rLTAlunUIjJVw" alt="Bespoke handmade wooden table detail" className="min-w-[260px] h-48 rounded-xl bg-gray-200 dark:bg-[#2A2A2A] flex-shrink-0 object-cover border-2 border-transparent hover:border-[#eebd2b] transition-all shadow-lg" loading="lazy" />
      </div>

      {/* Quote CTA Container */}
      <div className="p-4 mt-8 mb-24 animate-slide-up delay-500">
        <div className="bg-[#eebd2b] rounded-2xl p-6 flex flex-col gap-4 shadow-xl shadow-[#eebd2b]/20">
          <div className="flex flex-col gap-1">
            <h4 className="text-[#121212] text-xl font-black leading-tight">Ready to start your project?</h4>
            <p className="text-[#121212]/80 text-sm font-medium">Get a detailed estimate for your carpentry needs today.</p>
          </div>
          <Link to="/contact" className="bg-[#121212] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform">
            <span className="material-symbols-outlined">request_quote</span>
            Request a Quote
          </Link>
        </div>
      </div>

      {/* Bottom Navigation Bar (iOS style) */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#f8f7f6]/95 dark:bg-[#121212]/95 backdrop-blur-lg border-t border-gray-200 dark:border-white/10 px-6 py-4 flex justify-between items-center z-50">
        <Link to="/" className="flex flex-col items-center gap-1 text-[#eebd2b]">
          <span className="material-symbols-outlined">home</span>
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        <Link to="/services" className="flex flex-col items-center gap-1 text-gray-500">
          <span className="material-symbols-outlined">handyman</span>
          <span className="text-[10px] font-bold">Services</span>
        </Link>
        <Link to="/gallery" className="flex flex-col items-center gap-1 text-gray-500">
          <span className="material-symbols-outlined">photo_library</span>
          <span className="text-[10px] font-bold">Projects</span>
        </Link>
        <Link to="/contact" className="flex flex-col items-center gap-1 text-gray-500">
          <span className="material-symbols-outlined">mail</span>
          <span className="text-[10px] font-bold">Contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Carpentry;