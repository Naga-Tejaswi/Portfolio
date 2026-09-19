import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

type WelcomePageProps = {
  onEnter: () => void
}

export function WelcomePage({ onEnter }: WelcomePageProps) {
  const shouldReduceMotion = useReducedMotion()

  const enterPortfolio = () => {
    sessionStorage.setItem('portfolioIntroSeen', 'true')
    onEnter()
  }

  const animation = (delay: number) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.55, delay, ease: 'easeOut' as const },
  })

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--bg)] px-5 py-12 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,_rgba(37,99,235,0.2),_transparent_34%),linear-gradient(145deg,_#050b12_0%,_#071522_52%,_#050b12_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(rgba(96,165,250,0.7)_1px,transparent_1px)] [background-size:42px_42px]" aria-hidden="true" />
      <div className="absolute left-[12%] top-[20%] h-1 w-1 rounded-full bg-blue-300 shadow-[0_0_18px_4px_rgba(96,165,250,0.5)]" aria-hidden="true" />
      <div className="absolute right-[16%] top-[30%] h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_20px_5px_rgba(59,130,246,0.45)]" aria-hidden="true" />
      <div className="absolute bottom-[22%] left-[20%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_16px_4px_rgba(103,232,249,0.45)]" aria-hidden="true" />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center">
        <motion.p {...animation(0.08)} className="text-xs font-semibold uppercase tracking-[0.45em] text-[var(--primary)]">
          Portfolio
        </motion.p>

        <motion.div {...animation(0.18)} className="mt-6 border-y border-[var(--primary)]/30 px-6 py-5 sm:px-10">
          <h1 className="text-4xl font-black tracking-[-0.05em] text-[var(--text-strong)] sm:text-5xl md:text-6xl">
            Welcome to My Portfolio
          </h1>
        </motion.div>

        <motion.h2 {...animation(0.3)} className="mt-7 text-2xl font-semibold text-[var(--text-strong)] sm:text-3xl">
          Penna Naga Tejaswi
        </motion.h2>

        <motion.p {...animation(0.4)} className="mt-4 max-w-2xl text-base font-medium leading-7 text-[var(--text-soft)] sm:text-lg">
          Computer Science Student <span className="text-[var(--primary)]">•</span> Full-Stack Developer <span className="text-[var(--primary)]">•</span> Data Analytics Enthusiast
        </motion.p>

        <motion.p {...animation(0.5)} className="mt-5 max-w-xl text-base leading-7 text-[var(--muted)]">
          Passionate about building practical software solutions, analyzing data, and continuously learning modern technologies to solve real-world problems.
        </motion.p>

        <motion.div {...animation(0.65)} className="mt-9 flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={enterPortfolio}
            aria-label="Explore portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--primary)] bg-[var(--primary)] px-6 py-3.5 text-base font-semibold text-white shadow-[0_0_34px_rgba(59,130,246,0.3)] transition hover:-translate-y-0.5 hover:bg-[var(--primary-strong)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
          >
            Explore Portfolio <ArrowRight size={18} />
          </button>
          <button
            type="button"
            onClick={enterPortfolio}
            className="text-sm font-medium text-[var(--muted)] underline decoration-[var(--border-strong)] underline-offset-4 transition hover:text-[var(--text-strong)] hover:decoration-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--primary)]"
          >
            Skip Intro
          </button>
        </motion.div>
      </div>
    </main>
  )
}
