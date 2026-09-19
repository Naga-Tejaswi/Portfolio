import { ArrowRight, Compass, Cpu, GraduationCap, MapPin, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { infoCards, personal } from '../data/portfolio'

const infoIconMap = {
  education: GraduationCap,
  location: MapPin,
  interests: Cpu,
  goal: Compass,
}

export function About() {
  return (
    <motion.section id="about" data-section="about" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="mx-auto max-w-[1320px] px-4 py-16 md:px-6 lg:px-8 lg:py-20">
      <div className="mb-8 flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">About me</p>
      </div>

      <div className="grid gap-8 rounded-[28px] border border-[var(--border)] bg-[var(--card)]/80 p-5 shadow-[0_12px_40px_rgba(2,6,23,0.3)] md:p-7 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
        <div>
          <h2 className="text-4xl font-black tracking-[-0.05em] text-[var(--text-strong)] md:text-5xl">
            More Than Just <span className="text-[var(--primary)]">Code</span>
          </h2>

          <p className="mt-6 max-w-[650px] text-base leading-8 text-[var(--muted)] md:text-lg">
            {personal.description}
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-transparent px-4 py-2.5 font-medium text-[var(--text-strong)] transition hover:border-[var(--primary)]/60 hover:bg-[var(--surface-alt)]"
          >
            Know More About Me <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {infoCards.map((card) => {
            const Icon = infoIconMap[card.icon as keyof typeof infoIconMap]
            return (
              <div
                key={card.title}
                className="rounded-2xl border border-[var(--border)] bg-[color:var(--card-strong)] p-4 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/15 text-[var(--primary)]">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-strong)]">{card.title}</h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-6 text-[var(--text-soft)]">{card.value}</p>
              </div>
            )
          })}

          <div className="rounded-2xl border border-[var(--border)] bg-[color:var(--card-strong)] p-4 sm:col-span-2">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]/15 text-[var(--primary)]">
                <Sparkles size={18} />
              </div>
              <p className="text-lg italic leading-7 text-[var(--text-soft)]">“{personal.quote}”</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
