
import React from 'react';
import { AdvantageCardProps } from '../types';

const AdvantageItem: React.FC<AdvantageCardProps> = ({ title, description, icon }) => (
  <div className="flex gap-6 items-start">
    <div className="w-12 h-12 flex-shrink-0 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-2xl">
      {icon}
    </div>
    <div>
      <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">{title}</h4>
      <p className="text-white/40 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Advantages: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-20 border-t border-white/5 bg-[#080808]/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-blue-500 font-sync text-sm tracking-widest uppercase mb-4 block">Наш подход</span>
          <h2 className="text-4xl md:text-5xl font-sync font-bold leading-tight mb-8">
            Создаем цифровой опыт, <br /> который запоминается
          </h2>
          <p className="text-lg text-white/60 mb-12">
            Мы не просто рисуем картинки, мы строим фундамент для вашего бизнеса в интернете. Каждая деталь имеет значение.
          </p>
          <div className="space-y-10">
            <AdvantageItem 
              icon="⚡" 
              title="Скорость" 
              description="Используем современные фреймворки (React, Next.js) для достижения максимальной производительности."
            />
            <AdvantageItem 
              icon="📱" 
              title="Адаптивность" 
              description="Ваш сайт будет выглядеть безупречно на любом устройстве: от смартфона до 4K монитора."
            />
            <AdvantageItem 
              icon="🎨" 
              title="Уникальный дизайн" 
              description="Никаких шаблонов. Только авторская графика и продуманный UX/UI."
            />
          </div>
        </div>
        
        <div className="relative group overflow-hidden rounded-2xl glass p-2">
          <img 
            src="https://picsum.photos/800/1000?grayscale&v=1" 
            alt="Work Process" 
            className="w-full h-auto rounded-xl opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          <div className="absolute bottom-10 left-10 p-6">
            <div className="text-6xl font-sync font-bold">100+</div>
            <div className="text-sm font-sync uppercase tracking-widest text-white/50">Успешных проектов</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
