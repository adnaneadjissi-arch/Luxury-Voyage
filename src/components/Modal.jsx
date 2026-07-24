import { useEffect } from 'react';
import { SvgIcon } from './Icons';

export default function Modal({ open, onClose, children }) {
  // Close on Escape key + lock background scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-0 sm:p-6">
      <div onClick={onClose} className="absolute inset-0 bg-dark-900/85 backdrop-blur-md" />
      <div className="relative bg-dark-800 border border-gold-500/15 w-full sm:max-w-2xl sm:rounded-sm max-h-[100dvh] sm:max-h-[85vh] overflow-y-auto shadow-2xl animate-modal-in">
        <button onClick={onClose} aria-label="Close"
          className="sticky top-4 float-right mr-4 z-10 w-9 h-9 flex items-center justify-center bg-dark-900/70 backdrop-blur border border-white/10 text-white hover:border-gold-500 hover:text-gold-500 transition-colors duration-300">
          <SvgIcon name="x" size={18} />
        </button>
        {children}
      </div>
    </div>
  );
}
