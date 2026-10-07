import { motion, useReducedMotion } from 'framer-motion';
const ease = [0.22, 1, 0.36, 1];

export function Reveal({ children, delay = 0, className = '' }) {
  const r = useReducedMotion();
  return (
    <motion.div className={className} initial={r ? false : { opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay, ease }}>
      {children}
    </motion.div>
  );
}

// Revela o título palavra por palavra. `lines` = uma string por linha.
export function Words({ lines, as: Tag = 'h2', delay = 0, className = '' }) {
  const r = useReducedMotion();
  let i = 0;
  return (
    <Tag className={className} aria-label={lines.join(' ')}>
      {lines.map((l) => (
        <span key={l} aria-hidden="true" className="block">
          {l.split(' ').map((w) => {
            const n = i++;
            return (
              <span key={n} className="-mb-[.12em] inline-block overflow-hidden pb-[.12em] pr-[.22em] align-bottom">
                <motion.span className="inline-block" initial={r ? false : { y: '115%' }} whileInView={{ y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.9, delay: delay + n * 0.07, ease }}>
                  {w}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}

export function Btn({ solid, className = '', ...p }) {
  return (
    <a {...p} className={`inline-flex items-center justify-center gap-3 border px-6 py-4 text-[11px] font-medium tracking-[.22em] transition duration-300 ${
      solid ? 'border-white bg-white text-ink hover:bg-transparent hover:text-white' : 'border-line text-white hover:border-white'} ${className}`} />
  );
}
