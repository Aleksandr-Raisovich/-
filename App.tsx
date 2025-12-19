
import React, { useState, useEffect } from 'react';
import Background3D from './components/Background3D';
import Hero from './components/Hero';
import Services from './components/Services';
import Advantages from './components/Advantages';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.getElementById('cursor');
      if (cursor) {
        cursor.style.transform = `translate3d(${e.clientX - 16}px, ${e.clientY - 16}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-[#050505] z-[1000] flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-24 h-0.5 bg-white/10 overflow-hidden relative">
            <div className="absolute inset-0 bg-white translate-x-[-100%] animate-[loading_1.5s_infinite]"></div>
          </div>
          <span className="mt-6 font-sync text-[10px] tracking-[0.6em] text-white/40 uppercase">Raisovich</span>
        </div>
        <style>{`
          @keyframes loading {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#050505]">
      <Background3D />

      <nav className="fixed top-0 left-0 w-full p-8 md:p-12 z-50 flex justify-between items-center mix-blend-difference">
        <div className="text-2xl font-sync font-bold tracking-tighter italic cursor-pointer hover:opacity-70 transition-opacity">Raisovich.</div>
        <div className="hidden md:flex gap-10 font-sync text-[10px] tracking-[0.4em]">
          <a href="#" className="hover:opacity-50 transition-opacity">РАБОТЫ</a>
          <a href="#services" className="hover:opacity-50 transition-opacity">УСЛУГИ</a>
          <a href="#advantages" className="hover:opacity-50 transition-opacity text-white/70">О НАС</a>
          <button onClick={() => setIsModalOpen(true)} className="hover:text-blue-400 transition-colors uppercase">КОНТАКТЫ</button>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero onContactClick={() => setIsModalOpen(true)} />
        <div id="services">
          <Services />
        </div>
        <div id="advantages">
          <Advantages />
        </div>
        
        <section className="py-40 px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-sync font-bold mb-12 tracking-tight">Есть идея?</h2>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative px-16 py-8 bg-white text-black font-sync font-bold text-sm tracking-[0.3em] overflow-hidden transition-all duration-500 hover:scale-105"
          >
            <span className="relative z-10">ОБСУДИТЬ ПРОЕКТ</span>
            <div className="absolute inset-0 bg-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
          </button>
        </section>

        <Footer />
      </main>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <AIConsultant />

      <div className="hidden md:block fixed w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[1000] mix-blend-difference" id="cursor"></div>
    </div>
  );
};

export default App;
