import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';
import SEO from '../components/SEO';

interface ServiceItem {
  path: string;
  icon: string;
  title: string;
  desc: string;
}

const servicesList: ServiceItem[] = [
  { path: "/building", icon: "foundation", title: "Building", desc: "New construction" },
  { path: "/solar", icon: "solar_power", title: "Solar Installation", desc: "Energy solutions" },
  { path: "/plastering", icon: "format_paint", title: "Plastering", desc: "Wall finishing" },
  { path: "/roofing", icon: "roofing", title: "Roofing", desc: "Repairs & installation" },
  { path: "/plumbing", icon: "plumbing", title: "Plumbing", desc: "Full maintenance" },
  { path: "/electrical", icon: "bolt", title: "Electrical", desc: "Wiring & CoC" },
  { path: "/drywall", icon: "grid_view", title: "Drywall", desc: "Partitioning" },
  { path: "/ceiling", icon: "vertical_align_top", title: "Ceiling", desc: "Design & Install" },
  { path: "/flooring", icon: "layers", title: "Flooring", desc: "Tiling & Wood" },
  { path: "/painting", icon: "imagesearch_roller", title: "Painting", desc: "Interior & Exterior" },
  { path: "/carpentry", icon: "carpenter", title: "Carpentry", desc: "Custom woodwork" },
  { path: "/building", icon: "home_repair_service", title: "Renovation", desc: "Turnkey remodeling" },
];

const Services: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = servicesList.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-concrete-grey dark:bg-background-dark text-[#181610] dark:text-white flex flex-col min-h-screen font-sans">
      <SEO 
        title="Our Services" 
        description="Comprehensive construction and renovation services including building, solar, roofing, plumbing, electrical, and more."
        keywords="construction services, renovation services, solar installation, roofing, plumbing, electrical, plastering, drywall, ceiling, flooring, painting, carpentry"
      />
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <header className="sticky top-0 z-50 bg-brand-dark shadow-md">
        <div className="flex items-center p-3 justify-between max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-start leading-[1]">
              <span className="material-symbols-outlined text-[#F4A300] text-2xl -mb-0.5">roofing</span>
              <div className="font-extrabold text-[13px] tracking-[0.05em] uppercase text-white">Mystical</div>
              <div className="text-[7px] tracking-[0.15em] uppercase border-t border-[#F4A300] pt-[1px] mt-[1px] w-full text-white">Construction & Renovations</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="bg-[#F4A300] text-white text-[10px] font-bold py-2 px-4 rounded-lg shadow-sm active:scale-95 transition-transform uppercase tracking-wider">
              Get Quote
            </Link>
            <button onClick={() => setIsMenuOpen(true)} className="focus:outline-none text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 w-full max-w-md mx-auto">
        <div className="px-4 pt-8 pb-2">
          <h2 className="text-[#181610] dark:text-white text-[28px] font-bold leading-tight tracking-tight font-heading animate-slide-up">
            Our Services
          </h2>
          <p className="text-[#5e5a52] dark:text-[#b5b0a5] text-sm font-normal leading-relaxed mt-2 animate-slide-up delay-100">
            Expert building and renovation solutions for residential and commercial projects.
          </p>
        </div>
        <div className="px-4 py-4 animate-slide-up delay-200">
          <form onSubmit={(e) => e.preventDefault()}>
            <label className="flex flex-col w-full h-11">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm bg-white dark:bg-[#1a2533] overflow-hidden">
                <div className="text-[#8d7d5e] flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input 
                  className="form-input flex w-full border-none bg-transparent h-full placeholder:text-[#8d7d5e] px-4 pl-2 text-sm focus:ring-0 outline-none dark:text-white" 
                  placeholder="Find a service..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </label>
          </form>
        </div>
        <div className="grid grid-cols-2 gap-3 p-4 animate-slide-up delay-300">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <Link key={index} to={service.path} className="flex flex-col gap-3 rounded-xl bg-white dark:bg-[#1a2533] p-5 shadow-sm active:bg-gray-50 transition-colors border border-gray-200/50 dark:border-white/5 cursor-pointer">
                <div className="text-[#F4A300]">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[#181610] dark:text-white text-sm font-bold leading-tight font-heading">{service.title}</h3>
                  <p className="text-[#8d7d5e] dark:text-[#b5b0a5] text-[10px] font-normal">{service.desc}</p>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-2 flex flex-col items-center justify-center py-12 text-[#8d7d5e] dark:text-[#b5b0a5]">
              <span className="material-symbols-outlined text-4xl mb-2 opacity-50">search_off</span>
              <p className="text-sm">No services found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
        <div className="p-4 mb-24 animate-slide-up delay-500">
          <Link to="/contact" className="bg-brand-dark rounded-xl p-6 flex items-center justify-between border border-white/5 shadow-xl cursor-pointer hover:bg-brand-dark/90 transition-colors">
            <div>
              <h4 className="text-white text-base font-bold font-heading">Ready to start?</h4>
              <p className="text-white/70 text-xs">Get an estimate in 24 hours.</p>
            </div>
            <span className="material-symbols-outlined text-[#F4A300] text-4xl">arrow_circle_right</span>
          </Link>
        </div>
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-[#0a121d] border-t border-gray-200 dark:border-white/10 px-6 pb-6 pt-3 flex justify-between items-center z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        <Link to="/" className="flex flex-col items-center gap-1 text-[#8d7d5e] cursor-pointer">
          <span className="material-symbols-outlined text-[22px]">home</span>
          <span className="text-[9px] font-medium">Home</span>
        </Link>
        <Link to="/services" className="flex flex-col items-center gap-1 text-[#F4A300] cursor-pointer">
          <span className="material-symbols-outlined text-[22px]">construction</span>
          <span className="text-[9px] font-bold">Services</span>
        </Link>
        <Link to="/gallery" className="flex flex-col items-center gap-1 text-[#8d7d5e] cursor-pointer">
          <span className="material-symbols-outlined text-[22px]">business_center</span>
          <span className="text-[9px] font-medium">Projects</span>
        </Link>
        <Link to="/contact" className="flex flex-col items-center gap-1 text-[#8d7d5e] cursor-pointer">
          <span className="material-symbols-outlined text-[22px]">chat_bubble</span>
          <span className="text-[9px] font-medium">Contact</span>
        </Link>
      </nav>
    </div>
  );
};

export default Services;