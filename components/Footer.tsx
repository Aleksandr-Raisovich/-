
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 md:px-20 border-t border-white/5 bg-black/60 relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="text-3xl font-sync font-bold tracking-tighter italic">Raisovich.</div>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Премиальная веб-разработка. Создаем цифровой опыт, который вдохновляет и приносит результат.
          </p>
          <div className="flex gap-4">
            <a href="https://vk.com/club230324439" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors text-xs font-sync">ВКОНТАКТЕ</a>
            <a href="https://ok.ru/group/70000036474545" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors text-xs font-sync">ОК</a>
            <a href="https://dzen.ru/id/6940e88e4596ee55203ad2c9?share_to=link" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors text-xs font-sync">ДЗЕН</a>
          </div>
        </div>

        <div>
          <h5 className="text-[10px] font-sync uppercase tracking-[0.3em] text-white/30 mb-8">Реквизиты</h5>
          <div className="space-y-2 text-[11px] text-white/60 leading-relaxed font-mono">
            <p className="text-white font-bold mb-2">ИП АХУНОВ АЛЕКСАНДР РАИСОВИЧ</p>
            <p>ИНН: 665911236854</p>
            <p>ОГРНИП: 325665800275607</p>
            <p className="mt-4 opacity-80">
              Адрес: Свердловская обл., г. Екатеринбург,<br/>улица Орловская, д. 75
            </p>
          </div>
        </div>

        <div>
          <h5 className="text-[10px] font-sync uppercase tracking-[0.3em] text-white/30 mb-8">Банковские данные</h5>
          <div className="space-y-2 text-[11px] text-white/60 font-mono leading-tight">
            <p><span className="text-white/30">Банк:</span> ФИЛИАЛ "ЕКАТЕРИНБУРГСКИЙ" АО "АЛЬФА-БАНК"</p>
            <p><span className="text-white/30">Счет:</span> 40802810738250004960</p>
            <p><span className="text-white/30">БИК:</span> 046577964</p>
            <p><span className="text-white/30">Кор.счет:</span> 30101810100000000964</p>
            <p><span className="text-white/30">Валюта:</span> RUR</p>
          </div>
        </div>

        <div>
          <h5 className="text-[10px] font-sync uppercase tracking-[0.3em] text-white/30 mb-8">Контакты</h5>
          <div className="space-y-4 font-sync">
            <a href="tel:+79505527622" className="block text-xl font-bold hover:text-blue-500 transition-colors">+7 (950) 552-76-22</a>
            <a href="mailto:alexandr.raisovich@gmail.com" className="block text-xs text-white/50 hover:text-white transition-colors lowercase">alexandr.raisovich@gmail.com</a>
            <div className="pt-4 flex flex-col gap-2">
              <a href="#services" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white">Наши услуги</a>
              <a href="#" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white">Портфолио</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-sync uppercase tracking-[0.3em] text-white/20">
        <p>&copy; 2024 Raisovich Studio</p>
        <p>АХУНОВ АЛЕКСАНДР РАИСОВИЧ (ИП)</p>
      </div>
    </footer>
  );
};

export default Footer;
