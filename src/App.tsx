import { useEffect, useMemo, useState } from 'react'
import { About } from './components/About'
import { Achievements } from './components/Achievements'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { WelcomePage } from './components/WelcomePage'

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [activeSection, setActiveSection] = useState('home')
  const [showWelcome, setShowWelcome] = useState(() => sessionStorage.getItem('portfolioIntroSeen') !== 'true')

  useEffect(() => {
    document.body.dataset.theme = theme
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const scrollToSection = (sectionId: string) => {
      const section = document.getElementById(sectionId)
      if (!section) return

      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)

      const nextHash = `#${sectionId}`
      if (window.location.hash !== nextHash) {
        window.history.pushState(null, '', nextHash)
      }
    }

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const link = target?.closest('a[href^="#"]') as HTMLAnchorElement | null

      if (!link) return

      const href = link.getAttribute('href')
      if (!href || href === '#') return

      const sectionId = href.replace('#', '').trim()
      const section = document.getElementById(sectionId)
      if (!section) return

      event.preventDefault()
      scrollToSection(sectionId)
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'))

    const syncActiveSection = (hashOverride?: string) => {
      const hash = (hashOverride ?? window.location.hash).replace('#', '').trim()
      const matchedSection = sections.find((section) => section.id === hash)

      if (matchedSection) {
        setActiveSection(hash)
        return true
      }

      return false
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleEntry && !window.location.hash) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0.2, 0.5, 0.8] },
    )

    sections.forEach((section) => observer.observe(section))
    syncActiveSection()

    const handleHashChange = () => {
      syncActiveSection(window.location.hash)
    }

    document.addEventListener('click', handleAnchorClick)
    window.addEventListener('hashchange', handleHashChange)

    return () => {
      observer.disconnect()
      document.removeEventListener('click', handleAnchorClick)
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const themeClassName = useMemo(
    () => (theme === 'dark' ? 'theme-dark' : 'theme-light'),
    [theme],
  )

  if (showWelcome) {
    return <WelcomePage onEnter={() => setShowWelcome(false)} />
  }

  return (
    <div className={`min-h-screen ${themeClassName}`}>
      <Navbar
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
