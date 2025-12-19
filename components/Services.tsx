
import React from 'react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price }) => (
  <div className="glass p-8 md:p-12 hover:bg-white/5 transition-colors duration-500 group flex flex-col justify-between">
    <div>
      <h3 className="text-2xl font-sync font-bold mb-4 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-white/50 leading-relaxed mb-8">{description}</p>
    </div>
    <div className="flex justify-between items-center mt-auto">
      <span className="text-sm font-bold tracking-widest opacity-50">STARTING AT</span>
      <span className="text-xl font-bold">{price}</span>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-20 bg-transparent">
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-sync font-bold mb-6">Услуги</h2>
        <div className="w-20 h-1 bg-white"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard 
          title="ЛЕНДИНГИ" 
          description="Одностраничные сайты, сфокусированные на конверсии. Идеально для запуска рекламы и быстрых продаж."
          price="от 15 000₽"
        />
        <ServiceCard 
          title="МАГАЗИНЫ" 
          description="Полноценные e-commerce решения. Каталоги, корзины, платежные системы и личные кабинеты."
          price="от 45 000₽"
        />
        <ServiceCard 
          title="INDIVIDUAL" 
          description="Сложные сервисы, порталы и индивидуальные решения. Полный цикл от проектирования до запуска."
          price="Custom"
        />
      </div>
    </section>
  );
};

export default Services;
