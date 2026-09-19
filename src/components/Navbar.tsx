import { Menu, MoonStar, SunMedium, X } from 'lucide-react'
import { useState } from 'react'
import { navItems, personal } from '../data/portfolio'

type NavbarProps = {
  activeSection: string
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export function Navbar({ activeSection, theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--bg)]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between px-4 py-4 md:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="text-2xl font-bold tracking-tight text-[var(--text-strong)]" aria-label="Go to home section">
          {personal.name}.
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative cursor-pointer text-sm font-medium transition-colors ${
                activeSection === item.href.replace('#', '')
                  ? 'text-[var(--text-strong)]'
                  : 'text-[var(--text-soft)] hover:text-[var(--text-strong)]'
              }`}
              aria-current={activeSection === item.href.replace('#', '') ? 'page' : undefined}
            >
              {item.label}
              {activeSection === item.href.replace('#', '') && (
                <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[var(--primary)]" />
              )}
            </a>
          ))}
        </div>

        <div className="hidden items-center md:flex">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--text-soft)] transition hover:border-[var(--border-strong)] hover:text-[var(--text-strong)]"
          >
            {theme === 'dark' ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={onToggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--text-soft)]"
          >
            {theme === 'dark' ? <SunMedium size={17} /> : <MoonStar size={17} />}
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--text-soft)]"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-[var(--border)] bg-[color:var(--bg)] md:hidden">
          <div className="mx-auto flex max-w-[1320px] flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`cursor-pointer rounded-xl px-3 py-2 text-sm font-medium ${
                  activeSection === item.href.replace('#', '')
                    ? 'bg-[var(--card)] text-[var(--text-strong)]'
                    : 'text-[var(--text-soft)] hover:bg-[var(--surface-alt)] hover:text-[var(--text-strong)]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
