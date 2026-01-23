import React from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#1f1f1f]/95 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-200">
      <button 
        onClick={onClose} 
        className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Close Menu"
      >
        <span className="material-symbols-outlined text-3xl">close</span>
      </button>
      
      <nav className="flex flex-col items-center gap-8">
        <Link to="/" onClick={onClose} className="text-white text-2xl font-bold uppercase tracking-widest hover:text-[#f5a300] transition-colors">
          Home
        </Link>
        <Link to="/services" onClick={onClose} className="text-white text-2xl font-bold uppercase tracking-widest hover:text-[#f5a300] transition-colors">
          Services
        </Link>
        <Link to="/about" onClick={onClose} className="text-white text-2xl font-bold uppercase tracking-widest hover:text-[#f5a300] transition-colors">
          About
        </Link>
        <Link to="/gallery" onClick={onClose} className="text-white text-2xl font-bold uppercase tracking-widest hover:text-[#f5a300] transition-colors">
          Gallery
        </Link>
        <Link to="/contact" onClick={onClose} className="text-white text-2xl font-bold uppercase tracking-widest hover:text-[#f5a300] transition-colors">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;