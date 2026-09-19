import { footerLinks, personal } from '../data/portfolio'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto max-w-[1320px] px-4 pb-8 pt-4 md:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] py-6 md:flex-row">
        <div className="text-2xl font-bold tracking-tight text-[var(--text-strong)]">{personal.name}.</div>

        <nav aria-label="Footer navigation" className="flex items-center gap-6 text-sm text-[var(--text-soft)]">
          {footerLinks.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-[var(--text-strong)]">
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-[var(--muted)]">© {year} {personal.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
