import { useEffect, useRef, useState } from 'react';

// Coordena os cards: só um vídeo toca por vez e só um pode ter som.
const bus = new Set();
let playingId = null;
let soundId = null;
const sync = () => bus.forEach((f) => f());
const ctl = 'border border-white/50 bg-ink/70 px-3 py-2 text-[10px] tracking-[.2em] backdrop-blur transition hover:bg-white hover:text-ink';

export default function VideoCard({ work, featured }) {
  const { id, title, category, src, poster, instagram } = work;
  const box = useRef(null);
  const vid = useRef(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [vol, setVol] = useState(0.15); // volume inicial ao ativar o som (desktop)
  const fine = typeof window !== 'undefined' && window.matchMedia('(hover:hover) and (pointer:fine)').matches;

  const play = () => {
    const v = vid.current;
    if (!v) return;
    playingId = id; sync();
    v.play().catch(() => {});
  };

  useEffect(() => {
    const f = () => {
      const v = vid.current;
      if (!v) return;
      if (playingId !== id && !v.paused) v.pause();
      if (soundId !== id && !v.muted) { v.muted = true; setMuted(true); }
    };
    bus.add(f);
    return () => { bus.delete(f); };
  }, [id]);

  // Autoplay SEMPRE mudo, só quando visível; pausa ao sair da tela. Sem autoplay se o sistema pede menos movimento.
  useEffect(() => {
    if (!src) return undefined;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const io = new IntersectionObserver(([e]) => {
      const v = vid.current;
      if (!v) return;
      if (e.intersectionRatio >= 0.6) { if (!userPaused.current && !reduce) play(); } else v.pause();
    }, { threshold: [0, 0.6] });
    io.observe(box.current);
    return () => io.disconnect();
  }, [src]);

  const toggle = () => {
    const v = vid.current;
    if (v.paused) { userPaused.current = false; play(); } else { userPaused.current = true; v.pause(); }
  };
  const setVolume = (n) => { vid.current.volume = n; setVol(n); };
  const toggleSound = () => {
    const v = vid.current;
    if (v.muted) {
      setVolume(fine ? vol : 1); // iOS ignora volume: usa os botões físicos
      v.muted = false; setMuted(false);
      soundId = id; playingId = id; sync();
      if (v.paused) { userPaused.current = false; v.play().catch(() => {}); }
    } else {
      v.muted = true; setMuted(true);
      if (soundId === id) soundId = null;
    }
  };

  const cls = `group relative aspect-[9/16] w-[78%] shrink-0 snap-center overflow-hidden rounded-xl border border-line bg-ink2 sm:w-[44%] lg:w-auto ${
    featured ? 'lg:col-span-2 lg:row-span-2 lg:aspect-auto' : ''}`;
  const meta = (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 pt-16">
      <p className="text-[10px] tracking-[.3em] text-mute">{category.toUpperCase()}</p>
      <h3 className="mt-1 font-display text-lg font-medium">{title}</h3>
    </div>
  );

  if (!src) {
    // Sem arquivo de vídeo: capa + link para o Instagram, ou placeholder identificado.
    return (
      <article ref={box} className={cls}>
        {poster ? (
          <img src={poster} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-[10px] leading-loose tracking-[.3em] text-mute">
            ESPAÇO RESERVADO<br />PARA VÍDEO 9:16
          </div>
        )}
        {instagram && (
          <a href={instagram} target="_blank" rel="noopener noreferrer"
            className="absolute right-3 top-3 z-10 border border-white/60 bg-ink/70 px-3 py-2 text-[10px] tracking-[.2em] transition hover:bg-white hover:text-ink">
            ASSISTIR NO INSTAGRAM ↗
          </a>
        )}
        {meta}
      </article>
    );
  }

  return (
    <article ref={box} className={cls}>
      <video ref={vid} src={src} poster={poster || undefined} muted loop playsInline preload="metadata"
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      <button type="button" onClick={toggle} aria-label={`${playing ? 'Pausar' : 'Reproduzir'} vídeo: ${title}`} className="absolute inset-0" />
      {meta}
      <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
        {fine && !muted && (
          <input type="range" min="0" max="1" step="0.05" value={vol} onChange={(e) => setVolume(+e.target.value)}
            aria-label="Volume" className="h-1 w-20 accent-white" />
        )}
        <button type="button" onClick={toggle} aria-label={playing ? 'Pausar' : 'Reproduzir'} className={ctl}>{playing ? '❚❚' : '▶'}</button>
        <button type="button" onClick={toggleSound} aria-pressed={!muted} aria-label={muted ? 'Ativar som' : 'Desativar som'} className={ctl}>
          {muted ? 'SOM OFF' : 'SOM ON'}
        </button>
      </div>
    </article>
  );
}
