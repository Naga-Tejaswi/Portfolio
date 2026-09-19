import { motion } from 'framer-motion'
import { GitBranch, Globe, Mail, MapPin } from 'lucide-react'
import { contact } from '../data/portfolio'

export function Contact() {
  const contactDetails = [
    {
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: 'LinkedIn Profile',
      value: 'LinkedIn Profile',
      href: contact.linkedin,
      icon: Globe,
      external: true,
    },
    {
      label: 'GitHub Profile',
      value: 'GitHub Profile',
      href: contact.github,
      icon: GitBranch,
      external: true,
    },
    {
      label: 'Location',
      value: contact.location,
      href: null,
      icon: MapPin,
      external: false,
    },
  ]

  return (
    <motion.section id="contact" data-section="contact" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="mx-auto max-w-[1320px] px-4 py-16 md:px-6 lg:px-8 lg:py-20">
      <div className="rounded-[30px] border border-[var(--border)] bg-[var(--card)] p-5 shadow-[0_12px_40px_rgba(2,6,23,0.2)] md:p-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">Get In Touch</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-[var(--text-strong)] md:text-5xl">Let&apos;s Connect</h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
          {contactDetails.map(({ label, value, href, icon: Icon, external }) => {
            const content = (
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--primary)] shadow-[0_10px_24px_rgba(37,99,235,0.12)]">
                  <Icon size={18} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">{label}</p>
                  <p className="mt-1 break-words text-base font-medium text-[var(--text-soft)]">{value}</p>
                </div>
              </div>
            )

            if (!href) {
              return (
                <div key={label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-4 text-left transition hover:border-[var(--primary)]/40 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)]">
                  {content}
                </div>
              )
            }

            return (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={external ? `Open ${label} in a new tab` : `Send an email to ${contact.email}`}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface-alt)] p-4 text-left transition hover:border-[var(--primary)]/40 hover:-translate-y-0.5 hover:text-[var(--text-strong)] hover:shadow-[0_10px_30px_rgba(59,130,246,0.12)]"
              >
                {content}
              </a>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
