import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, FileText } from 'lucide-react'
import { experiences } from '../data/portfolio'

export function Experience() {
  return (
    <motion.section id="experience" data-section="experience" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="mx-auto max-w-[1320px] px-4 py-16 md:px-6 lg:px-8 lg:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">Experience / Internships</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-[var(--text-strong)] md:text-5xl">
            Learning Through Experience
          </h2>
          <p className="mt-3 max-w-3xl text-base text-[var(--muted)] md:text-lg">
            Building practical skills through real-world development and data analytics experience.
          </p>
        </div>
        <a href="#experience" className="hidden items-center gap-2 text-sm font-medium text-[var(--primary)] md:inline-flex">
          View All <ArrowRight size={18} />
        </a>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {experiences.map((exp) => (
          <div key={`${exp.year}-${exp.role}`} className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-5 shadow-[0_12px_40px_rgba(2,6,23,0.2)] md:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="rounded-lg border border-[var(--primary)]/30 bg-[var(--primary)]/10 px-2.5 py-1.5 text-sm font-semibold text-[var(--primary)]">
                {exp.year}
              </div>
              <span className="text-sm font-medium text-[var(--text-soft)]">{exp.period}</span>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--text-strong)]">{exp.role}</h3>
                <p className="mt-1 text-base text-[var(--text-soft)]">{exp.company}</p>
              </div>
            </div>

            <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-[var(--muted)]">
              {exp.responsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            {exp.technologies && (
              <div className="mt-5 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="rounded-lg border border-[var(--border)] bg-[var(--surface-alt)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-soft)]">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {exp.certificate && (
              <a
                href={exp.certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[var(--primary)]/50 px-3 py-2 text-sm font-semibold text-[var(--primary)] transition-colors hover:bg-[var(--primary)]/10 hover:text-[var(--text-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                <FileText size={16} aria-hidden="true" />
                View Certificate <ExternalLink size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  )
}
