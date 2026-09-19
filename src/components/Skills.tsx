import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Wrench,
} from 'lucide-react'
import { skillGroups } from '../data/portfolio'

const iconMap = {
  programming: Code2,
  web: Layers3,
  database: Database,
  tools: Wrench,
  analytics: BarChart3,
  concepts: BrainCircuit,
}

export function Skills() {
  return (
    <motion.section id="skills" data-section="skills" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="mx-auto max-w-[1320px] px-4 py-16 md:px-6 lg:px-8 lg:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">My Skills</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-[var(--text-strong)] md:text-5xl">
            Technologies and tools I work with.
          </h2>
        </div>
        <a href="#projects" className="hidden items-center gap-2 text-sm font-medium text-[var(--primary)] md:inline-flex">
          View All Skills <ArrowRight size={18} />
        </a>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = iconMap[group.icon as keyof typeof iconMap]
          return (
            <div key={group.title} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-[0_12px_40px_rgba(2,6,23,0.2)] transition hover:-translate-y-1 hover:border-[var(--primary)]/40 hover:shadow-[0_18px_40px_rgba(59,130,246,0.1)]">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)]">
                  <Icon size={16} />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-strong)]">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="max-w-full rounded-xl border border-[var(--border)] bg-[var(--card-strong)] px-2.5 py-2 text-[11px] font-medium leading-relaxed text-[var(--text-soft)] sm:text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </motion.section>
  )
}
