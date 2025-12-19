
import React from 'react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-4xl z-10">
        <h1 className="text-5xl md:text-8xl font-sync font-bold mb-6 tracking-tighter leading-none opacity-0 translate-y-10 animate-[fade-in-up_1s_ease-out_forwards]">
          Создание сайтов с <br />
          <span className="text-gradient">WOW-эффектом</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/60 mb-10 max-w-xl opacity-0 translate-y-10 animate-[fade-in-up_1s_ease-out_0.3s_forwards]">
          Разработка премиальных веб-решений для вашего бизнеса. <br />
          <span className="text-white font-bold">От 15 000₽</span> — прозрачно, быстро, эффективно.
        </p>
        <div className="flex flex-wrap gap-4 opacity-0 translate-y-10 animate-[fade-in-up_1s_ease-out_0.6s_forwards]">
          <button 
            onClick={onContactClick}
            className="px-8 py-4 bg-white text-black font-sync font-bold text-sm tracking-widest hover:bg-transparent hover:text-white border-2 border-white transition-all duration-300"
          >
            ОБСУДИТЬ ПРОЕКТ
          </button>
          <a 
            href="#services"
            className="px-8 py-4 border-2 border-white/20 text-white font-sync font-bold text-sm tracking-widest hover:border-white transition-all duration-300"
          >
            НАШИ УСЛУГИ
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-20 animate-bounce hidden md:block opacity-30">
        <div className="w-0.5 h-20 bg-white mx-auto"></div>
        <span className="text-[10px] font-sync uppercase tracking-[0.3em] block mt-4 rotate-90 origin-left">Scroll Down</span>
      </div>

      <style>{`
        @keyframes fade-in-up {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
