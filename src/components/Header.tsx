import React, { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full px-6 md:px-10 py-5 flex justify-between items-center z-[100] transition-all duration-300",
        scrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-border-color" 
          : "bg-gradient-to-b from-black/80 to-transparent"
      )}
    >
      <div 
        className={cn(
          "font-montserrat font-extrabold text-2xl cursor-pointer tracking-wide transition-colors",
          scrolled ? "text-text-main" : "text-white"
        )}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        AESOP DESIGN.
      </div>
    </header>
  );
}
