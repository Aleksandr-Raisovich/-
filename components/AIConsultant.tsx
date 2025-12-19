
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Type } from '@google/genai';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: 'Привет! Я ИИ-консультант студии Raisovich. Расскажите о вашем проекте, и я помогу определиться с решением.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `Ты — экспертный консультант digital-агентства "Raisovich". Твоя задача — помогать клиентам определиться с типом сайта (Лендинг, Магазин, Индивидуальное решение). 
          Основатель — ИП Ахунов Александр Раисович. Цены начинаются от 15 000 руб. Будь вежлив, профессионален и креативен. Отвечай на русском языке. 
          Старайся подвести клиента к мысли, что им нужно оставить заявку или связаться через контакты в футере.`,
        }
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || 'Извините, произошла ошибка. Попробуйте еще раз.' }]);
    } catch (error) {
      console.error('Gemini Error:', error);
      setMessages(prev => [...prev, { role: 'ai', text: 'Упс! Мои нейроны перегружены. Давай попробуем позже.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 md:w-96 glass rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[450px]">
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
            <span className="font-bold text-sm tracking-widest uppercase">Raisovich AI</span>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">✕</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-sm ${m.role === 'user' ? 'bg-white/10 text-white' : 'bg-blue-600/20 border border-blue-500/30 text-blue-100'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-xl text-xs animate-pulse">Печатает...</div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          <div className="p-4 border-t border-white/10 flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Спросите о сайте..." 
              className="flex-1 bg-white/5 rounded-lg px-3 py-2 text-sm border border-white/10 focus:outline-none focus:border-white/30"
            />
            <button 
              onClick={handleSendMessage}
              disabled={isLoading}
              className="bg-white text-black rounded-lg px-3 py-2 text-sm font-bold hover:bg-gray-200 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default AIConsultant;
