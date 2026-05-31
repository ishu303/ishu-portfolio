'use client'

import { useRef, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { projects, statusMeta } from '@/lib/data'

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = ((y - rect.height / 2) / rect.height) * -5
    const rotateY = ((x - rect.width / 2) / rect.width) * 5
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`
  }

  const onMouseLeave = () => {
    if (ref.current)
      ref.current.style.transform = 'perspective(700px) rotateX(0) rotateY(0) translateZ(0)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transition: 'transform 0.18s ease', transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-[var(--bg-soft)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3"
        >
          <span className="mono-label section-label text-[var(--accent)]">Projects</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title font-syne text-text mb-14"
        >
          What I&apos;ve <span className="gradient-text">built</span>.
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const meta = statusMeta[project.status]
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <TiltCard>
                  <div className="glass-card p-6 h-full flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]" />

                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-syne font-bold text-lg text-text leading-tight">
                        {project.name}
                      </h3>
                      <span
                        className={`flex-shrink-0 flex items-center gap-1.5 text-[0.65rem] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--accent-soft)] border border-[var(--border)] ${meta.color}`}
                      >
                        <span>{meta.dot}</span>
                        {meta.label}
                      </span>
                    </div>

                    {/* Year + hackathon tag */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="mono-label text-muted text-[0.65rem]">{project.year}</span>
                      {project.hackathonTag && (
                        <span className="text-[0.65rem] font-mono px-2 py-0.5 rounded bg-[var(--accent-soft)] text-accent border border-[var(--border)]">
                          {project.hackathonTag}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-muted text-sm leading-relaxed mb-5 flex-grow">
                      {project.description}
                    </p>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech, j) => (
                        <span
                          key={j}
                          className="text-[0.65rem] font-mono px-2.5 py-1 rounded-full border border-[var(--border)] text-muted bg-[var(--card)] hover:border-[var(--accent-2)] transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
