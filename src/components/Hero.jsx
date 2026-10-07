import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { waLink } from '../data/site.js';
import { Words, Btn } from './ui.jsx';

export default function Hero() {
  const r = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, r ? 0 : -90]);
  const o = useTransform(scrollY, [0, 600], [1, r ? 1 : 0.15]);
  return (
    <section id="inicio" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink px-6 pb-10 pt-32 md:px-12">
      {/* VÍDEO DE FUNDO (opcional): quando houver MP4 autorizado, adicione um <video muted loop playsInline> aqui, com overlay bg-ink/70. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex justify-between px-6 md:px-12">
        {[0, 1, 2, 3].map((i) => <span key={i} className="h-full border-l border-line/50" />)}
      </div>
      <motion.div style={{ y, opacity: o }} className="relative">
        <p className="mb-8 flex items-center gap-3 text-[11px] tracking-[.3em] text-mute">
          <span className="h-2 w-2 animate-pulse rounded-full bg-white" />REC
        </p>
        <Words as="h1" lines={['CONTEÚDO QUE', 'VALORIZA SUA MARCA.']}
          className="font-display text-[clamp(2.6rem,10.5vw,10rem)] font-bold leading-[.92] tracking-tighter" />
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md font-light leading-relaxed text-mute">
            Transformamos ideias em vídeos que comunicam, conectam e fortalecem a presença da sua marca.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Btn solid href={waLink()} target="_blank" rel="noopener noreferrer">VAMOS CRIAR JUNTOS ↗</Btn>
            <Btn href="#trabalhos">CONHEÇA MEU TRABALHO ↓</Btn>
          </div>
        </div>
      </motion.div>
      <div className="relative mt-14 flex items-center justify-between border-t border-line pt-5 text-[10px] tracking-[.3em] text-mute">
        <span>VIDEOMAKER &amp; SOCIAL MEDIA • CURITIBA — PR</span>
        <span className="hidden items-center gap-3 sm:flex">
          SCROLL
          <span aria-hidden="true" className="relative h-10 w-px overflow-hidden bg-line">
            <motion.span className="absolute inset-x-0 h-4 bg-white" animate={r ? undefined : { y: [-16, 40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} />
          </span>
        </span>
      </div>
    </section>
  );
}
