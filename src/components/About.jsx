import { SITE } from '../data/site.js';
import { Words, Reveal } from './ui.jsx';

export default function About() {
  return (
    <section id="sobre" className="mx-auto grid max-w-[1600px] gap-16 px-6 py-28 md:px-12 md:py-40 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <Words lines={['POR TRÁS DE', 'CADA FRAME,', 'UMA IDEIA.']}
          className="font-display text-[clamp(2.2rem,7vw,6.5rem)] font-bold leading-[.95] tracking-tighter" />
        <Reveal className="mt-12 max-w-xl space-y-6 font-light leading-relaxed text-mute">
          <p>Sou Guilherme, videomaker e social media em Curitiba. Acredito que cada marca tem uma história que merece ser contada com identidade, criatividade e propósito.</p>
          <p>Meu objetivo é transformar ideias em conteúdos visuais que valorizam negócios e aproximam marcas de pessoas.</p>
        </Reveal>
      </div>
      <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9">
        <div className="relative aspect-[4/5] overflow-hidden border border-line bg-ink2">
          {/* FOTO: defina SITE.photo em src/data/site.js. Sem foto, aparece a composição tipográfica. */}
          {SITE.photo ? (
            <img src={SITE.photo} alt="Guilherme, videomaker e social media" loading="lazy" className="h-full w-full object-cover grayscale" />
          ) : (
            <div className="flex h-full items-center justify-center font-display text-[9rem] font-bold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_#262626]">GV</div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
