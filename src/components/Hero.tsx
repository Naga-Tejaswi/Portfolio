import { ArrowRight, Briefcase, GitBranch, Globe, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { personal, socialLinks } from '../data/portfolio'

const socialIcons = {
  linkedin: Globe,
  github: GitBranch,
  email: Mail,
  portfolio: Briefcase,
}

export function Hero() {
  return (
    <section id="home" data-section="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.22),_transparent_50%)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-[1320px] gap-8 px-4 pb-12 pt-10 md:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8 lg:pb-20 lg:pt-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-[var(--muted)]">
            {personal.tagline}
          </p>

          <h1 className="max-w-[620px] text-5xl font-black leading-[0.9] tracking-[-0.06em] text-[var(--text-strong)] md:text-6xl lg:text-[5.1rem]">
            Turning Ideas
            <br />
            Into <span className="text-[var(--primary)]">Impact</span>
          </h1>

          <p className="mt-6 text-xl font-medium text-[var(--text-soft)] md:text-[1.7rem]">
            Final-Year Computer Science Student
          </p>

          <p className="mt-5 max-w-[680px] text-base leading-7 text-[var(--muted)] md:text-lg">
            {personal.intro}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[var(--primary)] bg-[var(--primary)] px-5 py-3 font-medium text-white shadow-[0_0_30px_rgba(59,130,246,0.4)] transition hover:-translate-y-0.5 hover:bg-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              View My Projects <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-[var(--border-strong)] bg-transparent px-5 py-3 font-medium text-[var(--text-strong)] transition hover:border-[var(--primary)]/60 hover:bg-[var(--surface-alt)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              Let&apos;s Connect
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            {socialLinks.map(({ label, href, icon }) => {
              const Icon = socialIcons[icon as keyof typeof socialIcons]
              return (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--text-soft)] transition hover:-translate-y-0.5 hover:border-[var(--primary)] hover:bg-[var(--primary)]/10 hover:text-[var(--text-strong)]"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative flex items-center justify-center"
        >
          <div className="hero-image-wrapper relative w-full max-w-[620px] overflow-hidden rounded-[24px]">
            <img
              src="/portfolio.png"
              alt="Portfolio illustration"
              className="block h-auto w-full object-contain object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
