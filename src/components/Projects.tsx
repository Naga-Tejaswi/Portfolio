import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, GitBranch, Play, X } from 'lucide-react'
import { projects } from '../data/portfolio'

type Project = (typeof projects)[number]

function ProjectImage({ project, className = '' }: { project: Project; className?: string }) {
  const [imageAvailable, setImageAvailable] = useState(true)

  return (
    <div className={`relative overflow-hidden rounded-t-[26px] border-b border-[var(--border)] bg-[var(--card-strong)] ${className}`}>
      {project.video ? (
        <video
          src={project.video}
          poster={project.image}
          controls
          preload="metadata"
          className="h-full w-full object-cover"
          aria-label={`${project.title} demonstration video`}
        />
      ) : project.image && imageAvailable ? (
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="h-full w-full object-contain p-3 transition duration-500 group-hover:scale-[1.02] md:p-4"
          loading="lazy"
          onError={() => setImageAvailable(false)}
        />
      ) : (
        <div className="flex h-full min-h-[220px] items-center justify-center px-6 text-center text-sm text-[var(--muted)]">Project screenshot will be added here.</div>
      )}
    </div>
  )
}

function ProjectLink({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()} className={`inline-flex cursor-pointer items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] ${primary ? 'border border-[var(--primary)] bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--text-strong)]' : 'border border-[var(--border)] bg-[var(--surface-alt)] text-[var(--text-soft)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-alt)]'}`}>
      {children}
    </a>
  )
}

function getDemoVideo(project: Project) {
  return 'demoVideo' in project ? project.demoVideo ?? '' : ''
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm" role="presentation" onMouseDown={onClose}>
      <div role="dialog" aria-modal="true" aria-labelledby="project-modal-title" className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[26px] border border-[var(--border)] bg-[var(--card)] shadow-[0_24px_80px_rgba(2,6,23,0.55)]" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-4 border-b border-[var(--border)] p-5 md:p-6">
          <div>
            <p className="text-sm font-medium text-[var(--primary)]">{project.year} · {project.category}</p>
            <h2 id="project-modal-title" className="mt-2 text-2xl font-bold text-white md:text-3xl">{project.title}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close project details" className="cursor-pointer rounded-lg p-2 text-[var(--text-soft)] transition hover:bg-[var(--surface-alt)] hover:text-[var(--text-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"><X size={20} /></button>
        </div>
        <ProjectImage project={project} className="h-56 md:h-72" />
        <div className="space-y-6 p-5 md:p-6">
          <p className="text-base leading-7 text-[var(--muted)]">{project.description}</p>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-soft)]">Key Features</h3>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-[var(--muted)] sm:grid-cols-2">
              {project.features.map((feature) => <li key={feature} className="flex gap-2"><span className="text-[var(--primary)]">•</span>{feature}</li>)}
            </ul>
          </div>
          {project.technologies.length > 0 && <div className="flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-lg border border-[var(--border)] bg-[var(--surface-alt)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-soft)]">{technology}</span>)}</div>}
          <div className="flex flex-wrap gap-3">
            {getDemoVideo(project) ? <ProjectLink href={getDemoVideo(project)} primary>▶ Watch Demo <Play size={16} /></ProjectLink> : <>
              {project.liveDemo ? <ProjectLink href={project.liveDemo} primary>Live Demo <ExternalLink size={16} /></ProjectLink> : null}
              {project.github ? <ProjectLink href={project.github}>GitHub Repository <GitBranch size={16} /></ProjectLink> : null}
            </>}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <motion.section id="projects" data-section="projects" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45 }} className="mx-auto max-w-[1320px] px-4 py-16 md:px-6 lg:px-8 lg:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--muted)]">Featured Projects</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-[var(--text-strong)] md:text-5xl">Building Solutions for Real-World Problems</h2>
          <p className="mt-3 max-w-3xl text-base text-[var(--muted)] md:text-lg">Projects that demonstrate my skills in software development, data analytics, and problem solving.</p>
        </div>
        <a href="#projects" className="hidden items-center gap-2 text-sm font-medium text-[var(--primary)] md:inline-flex">View All Projects <ArrowRight size={18} /></a>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article key={project.id} whileHover={{ y: -4 }} transition={{ duration: 0.2 }} tabIndex={0} role="button" aria-label={`View details for ${project.title}`} onClick={() => setSelectedProject(project)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setSelectedProject(project) } }} className="group flex cursor-pointer flex-col overflow-hidden rounded-[26px] border border-[var(--border)] bg-[var(--card)] shadow-[0_12px_40px_rgba(2,6,23,0.22)] outline-none transition focus-visible:border-[var(--primary)]/60 focus-visible:ring-2 focus-visible:ring-[var(--primary)]/40">
            <ProjectImage project={project} className="h-56" />
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center justify-between gap-3"><span className="text-sm font-semibold text-[var(--primary)]">{String(index + 1).padStart(2, '0')}</span><span className="text-sm font-medium text-[var(--text-soft)]">{project.year}</span></div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{project.category}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">{project.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">{project.summary}</p>
              {project.technologies.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-lg border border-[var(--border)] bg-[var(--surface-alt)] px-2.5 py-1.5 text-xs font-medium text-[var(--text-soft)]">{technology}</span>)}</div>}
              <div className="mt-auto flex flex-wrap gap-3 pt-6">
                {getDemoVideo(project) ? <ProjectLink href={getDemoVideo(project)} primary>▶ Watch Demo <Play size={16} /></ProjectLink> : <>
                  {project.liveDemo ? <ProjectLink href={project.liveDemo} primary>Live Demo <ExternalLink size={16} /></ProjectLink> : null}
                  {project.github ? <ProjectLink href={project.github}>GitHub Repository <GitBranch size={16} /></ProjectLink> : null}
                </>}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </motion.section>
  )
}
