import React, { useState } from 'react';
import Header from './components/Header';
import HeroReveal from './components/HeroReveal';
import Process from './components/Process';
import LectureSection from './components/LectureSection';
import Portfolio from './components/Portfolio';
import QuoteModal from './components/QuoteModal';
import Footer from './components/Footer';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <Header />
      <HeroReveal>
        <Portfolio />
      </HeroReveal>
      <Process />
      <LectureSection />
      <Footer />

      <div className="fixed bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-[99] flex flex-row justify-center gap-2 sm:gap-6 w-[95%] sm:w-auto max-w-none">
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#222] text-white border border-[#222] px-3 sm:px-10 py-3 sm:py-[15px] rounded-[30px] text-[0.75rem] sm:text-[1.1rem] font-bold shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:bg-[#444] hover:border-[#444] active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center gap-1 sm:gap-2 flex-1 sm:flex-none whitespace-nowrap"
        >
          📝 1분 간편 견적 알아보기
        </button>
        <a 
          href="https://www.instagram.com/aesop_interior_design2?igsh=MXYwNDg2czdzM2N0YQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] backdrop-blur-md text-white border border-transparent px-3 sm:px-10 py-3 sm:py-[15px] rounded-[30px] text-[0.75rem] sm:text-[1.1rem] font-bold shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:opacity-90 hover:text-white active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center gap-1 sm:gap-2 flex-1 sm:flex-none no-underline whitespace-nowrap"
        >
          이솝 인테리어 인스타그램
        </a>
      </div>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

