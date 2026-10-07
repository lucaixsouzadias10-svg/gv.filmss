import { SITE, waLink } from '../data/site.js';

export default function Footer() {
  const a = 'text-mute transition hover:text-white';
  return (
    <footer className="border-t border-line px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold tracking-tight">{SITE.brand}</p>
          <p className="mt-3 text-sm font-light text-mute">Conteúdo que valoriza sua marca.</p>
          <p className="mt-1 text-sm font-light text-mute">Curitiba — Paraná</p>
        </div>
        <div className="flex gap-6 text-[11px] tracking-[.22em]">
          <a className={a} href={SITE.instagram} target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          <a className={a} href={waLink()} target="_blank" rel="noopener noreferrer">WHATSAPP</a>
        </div>
        <div className="flex items-center justify-between gap-6 md:flex-col md:items-end">
          <p className="text-xs text-mute">© 2026 GV FILMS. Todos os direitos reservados.</p>
          <a href="#inicio" aria-label="Voltar ao topo" className="border border-line px-4 py-2 text-[11px] tracking-[.22em] text-mute transition hover:border-white hover:text-white">TOPO ↑</a>
        </div>
      </div>
    </footer>
  );
}
