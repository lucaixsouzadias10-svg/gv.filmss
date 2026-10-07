import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV, SITE, waLink } from '../data/site.js';
import { Btn } from './ui.jsx';

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setSolid(window.scrollY > 40);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${solid || open ? 'bg-ink/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-12">
        <a href="#inicio" className="font-display text-lg font-bold tracking-tight">{SITE.brand}</a>
        <nav aria-label="Principal" className="hidden items-center gap-10 lg:flex">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="text-xs tracking-[.2em] text-mute transition hover:text-white">{l.toUpperCase()}</a>
          ))}
          <Btn href={waLink()} target="_blank" rel="noopener noreferrer" className="!px-5 !py-3">INICIAR UM PROJETO ↗</Btn>
        </nav>
        <button type="button" className="text-xs tracking-[.2em] lg:hidden" aria-expanded={open} aria-controls="menu-mobile" onClick={() => setOpen(!open)}>
          {open ? 'FECHAR' : 'MENU'}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="menu-mobile" aria-label="Menu mobile" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}
            className="absolute inset-x-0 top-20 flex h-[calc(100svh-5rem)] flex-col justify-between bg-ink px-6 pb-10 pt-8 lg:hidden">
            <ul>
              {NAV.map(([l, h], i) => (
                <motion.li key={h} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 + i * 0.06 }}>
                  <a href={h} onClick={() => setOpen(false)} className="block border-b border-line py-4 font-display text-4xl font-bold tracking-tight">{l}</a>
                </motion.li>
              ))}
            </ul>
            <Btn solid href={waLink()} target="_blank" rel="noopener noreferrer">INICIAR UM PROJETO ↗</Btn>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
