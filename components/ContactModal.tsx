
import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => {
        onClose();
        setIsSent(false);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-lg glass p-8 md:p-12 relative">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white text-2xl"
        >
          ✕
        </button>

        {isSent ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-6">✨</div>
            <h3 className="text-2xl font-sync font-bold mb-4">СПАСИБО!</h3>
            <p className="text-white/60">Ваша заявка принята. Мы свяжемся с вами в ближайшее время.</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-sync font-bold mb-8">Обсудить проект</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] font-sync uppercase tracking-widest text-white/50 mb-2">Имя</label>
                <input required className="w-full bg-white/5 border-b border-white/20 px-0 py-3 focus:outline-none focus:border-white transition-colors" type="text" placeholder="Иван Иванов" />
              </div>
              <div>
                <label className="block text-[10px] font-sync uppercase tracking-widest text-white/50 mb-2">Email / Telegram</label>
                <input required className="w-full bg-white/5 border-b border-white/20 px-0 py-3 focus:outline-none focus:border-white transition-colors" type="text" placeholder="@username or email" />
              </div>
              <div>
                <label className="block text-[10px] font-sync uppercase tracking-widest text-white/50 mb-2">О проекте</label>
                <textarea rows={3} className="w-full bg-white/5 border-b border-white/20 px-0 py-3 focus:outline-none focus:border-white transition-colors resize-none" placeholder="Расскажите вкратце о вашей задумке..."></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-white text-black font-sync font-bold tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin"></span>
                ) : (
                  'ОТПРАВИТЬ'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
