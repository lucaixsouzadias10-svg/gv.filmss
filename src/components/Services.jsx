import { SERVICES } from '../data/site.js';
import { Words, Reveal } from './ui.jsx';

export default function Services() {
  return (
    <section id="servicos" className="border-t border-line bg-ink2 py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <Words lines={['SUA IDEIA', 'MERECE SER VISTA.']}
          className="mb-16 font-display text-[clamp(2.2rem,7vw,6.5rem)] font-bold leading-[.95] tracking-tighter" />
        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1} className="bg-ink2">
              <div className="group flex h-full min-h-[22rem] flex-col justify-between bg-ink2 p-8 transition duration-500 hover:bg-ink md:p-10">
                <span className="text-xs tracking-[.3em] text-mute">{s.n} /</span>
                <div>
                  <h3 className="font-display text-3xl font-bold leading-tight tracking-tight transition duration-500 group-hover:translate-x-2 md:text-4xl">{s.t}</h3>
                  <p className="mt-5 font-light leading-relaxed text-mute">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
