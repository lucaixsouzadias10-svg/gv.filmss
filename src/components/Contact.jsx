import { SITE, waLink } from '../data/site.js';
import { Words, Reveal, Btn } from './ui.jsx';

export default function Contact() {
  return (
    <section id="contato" className="border-t border-line bg-ink px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto max-w-[1600px]">
        <Words lines={['SUA MARCA TEM', 'UMA HISTÓRIA.', 'VAMOS CONTAR?']}
          className="font-display text-[clamp(2.6rem,11vw,11rem)] font-bold leading-[.9] tracking-tighter" />
        <Reveal className="mt-14 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md font-light leading-relaxed text-mute">
            Tem uma ideia, um projeto ou quer levar o conteúdo da sua marca para outro nível? Vamos conversar.
          </p>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <Btn solid href={waLink()} target="_blank" rel="noopener noreferrer" className="!px-10 !py-6 !text-xs">CHAMAR NO WHATSAPP ↗</Btn>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer"
              className="text-[11px] tracking-[.22em] text-mute underline-offset-8 transition hover:text-white hover:underline">INSTAGRAM ↗</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
