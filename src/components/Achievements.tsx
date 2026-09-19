import { motion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  BarChart3,
  BrainCircuit,
  Calculator,
  Database,
  ExternalLink,
  FileBadge,
  Medal,
  Trophy,
  Users,
} from 'lucide-react'
import { achievements, certifications, leadership, workshops } from '../data/portfolio'

const achievementIcons = {
  award: Award,
  medal: Medal,
  trophy: Trophy,
}

const workshopIcons = {
  chart: BarChart3,
  ai: BrainCircuit,
  database: Database,
  calculator: Calculator,
}

export function Achievements() {
  return (
    <motion.section id="achievements" data-section="achievements" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="mx-auto max-w-[1320px] px-4 py-16 md:px-6 lg:px-8 lg:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">Achievements</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-[var(--text-strong)] md:text-5xl">
            Achievements &amp; Recognition
          </h2>
        </div>
        <a href="#achievements" className="hidden items-center gap-2 text-sm font-medium text-[var(--primary)] md:inline-flex">
          View All <ArrowRight size={18} />
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((item) => (
          <div key={`${item.title}-${item.event}`} className={`rounded-[24px] border bg-[var(--card)] p-5 shadow-[0_12px_40px_rgba(2,6,23,0.2)] transition hover:-translate-y-1 hover:border-[var(--primary)]/40 ${item.featured ? 'border-[var(--primary)]/40 md:p-6' : 'border-[var(--border)]'}`}>
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                {(() => {
                  const Icon = achievementIcons[item.icon as keyof typeof achievementIcons]
                  return <Icon size={25} strokeWidth={1.8} />
                })()}
              </div>
              {item.year && <span className="text-sm font-medium text-[var(--text-soft)]">{item.year}</span>}
            </div>
            <h3 className="text-xl font-semibold text-[var(--text-strong)]">{item.title}</h3>
            <p className="mt-2 text-base text-[var(--text-soft)]">{item.event}</p>
            {item.organization && <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{item.organization}</p>}
            {item.detail && <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.detail}</p>}
          </div>
        ))}
      </div>

      <div className="mt-12">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">Leadership &amp; Responsibilities</p>
        <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[var(--text-strong)]">Leading With Purpose</h3>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {leadership.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-[20px] border border-[var(--border)] bg-[var(--card)] p-4 shadow-[0_12px_40px_rgba(2,6,23,0.16)] transition hover:-translate-y-1 hover:border-[var(--primary)]/40">
              <Users size={20} className="shrink-0 text-[var(--primary)]" />
              <span className="text-base text-[var(--text-soft)]">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">Workshops</p>
        <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[var(--text-strong)]">Workshops &amp; Learning</h3>
        <p className="mt-2 text-base text-[var(--muted)]">Hands-on learning beyond the classroom.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workshops.map((workshop) => {
            const Icon = workshopIcons[workshop.icon as keyof typeof workshopIcons]
            return (
              <div key={workshop.title} className="rounded-[20px] border border-[var(--border)] bg-[var(--card)] p-5 shadow-[0_12px_40px_rgba(2,6,23,0.16)] transition hover:-translate-y-1 hover:border-[var(--primary)]/40">
                <Icon size={24} className="text-[var(--primary)]" />
                <h4 className="mt-5 text-base font-semibold leading-6 text-[var(--text-strong)]">{workshop.title}</h4>
                {workshop.description && <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{workshop.description}</p>}
                {workshop.organization && <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-soft)]">{workshop.organization}</p>}
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-12">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">Certifications</p>
        <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[var(--text-strong)]">Continuous Learning</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((certificate) => (
            <div key={certificate.name} className="flex min-h-[148px] flex-col rounded-[20px] border border-[var(--border)] bg-[var(--card)] p-4 shadow-[0_12px_40px_rgba(2,6,23,0.16)]">
              <div className="flex items-start gap-3">
                <FileBadge size={20} className="mt-0.5 shrink-0 text-[var(--primary)]" />
                <div>
                  <h4 className="text-sm font-semibold leading-5 text-[var(--text-strong)]">{certificate.name}</h4>
                  <p className="mt-1 text-xs text-[var(--muted)]">{certificate.issuer}</p>
                </div>
              </div>
              {certificate.certificateUrl && (
                <a href={certificate.certificateUrl} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs font-semibold text-[var(--primary)] transition hover:text-[var(--text-strong)]">
                  View Certificate <ArrowRight size={14} /> <ExternalLink size={13} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
