import { WORKS } from '../data/works.js';
import { Words, Reveal } from './ui.jsx';
import VideoCard from './VideoCard.jsx';

export default function Works() {
  return (
    <section id="trabalhos" className="mx-auto max-w-[1600px] px-6 py-28 md:px-12 md:py-40">
      <Words lines={['IMAGENS QUE FALAM.', 'HISTÓRIAS QUE CONECTAM.']}
        className="font-display text-[clamp(2.2rem,7vw,6.5rem)] font-bold leading-[.95] tracking-tighter" />
      <Reveal className="mb-14 mt-8 max-w-md">
        <p className="font-light leading-relaxed text-mute">Cada projeto é uma oportunidade de transformar uma ideia em uma experiência visual.</p>
      </Reveal>
      {/* Mobile/tablet: carrossel com snap. Desktop: grid assimétrico (1º item em destaque quando o total fecha o grid: 5, 9, 13...). */}
      <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] md:-mx-12 md:px-12 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
        {WORKS.map((w, i) => <VideoCard key={w.id} work={w} featured={WORKS.length % 4 === 1 && i === 0} />)}
      </div>
    </section>
  );
}
