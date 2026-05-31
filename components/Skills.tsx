'use client'

import { useRef, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { skills } from '@/lib/data'

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`
  }

  const onMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0)'
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transition: 'transform 0.15s ease', transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-bg">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3"
        >
          <span className="mono-label section-label text-[var(--accent)]">Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title font-syne text-text mb-14"
        >
          What I can <span className="gradient-text">do</span>.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 * i }}
            >
              <TiltCard>
                <div className="glass-card p-8 h-full relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]" />
                  <div className="absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-[var(--accent-soft)] blur-2xl group-hover:scale-150 transition-transform duration-500" />

                  <h3 className="font-syne font-bold text-lg text-text mb-5 relative z-10">
                    {cat.category}
                  </h3>
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {cat.items.map((skill, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 rounded-full text-xs font-mono bg-[var(--accent-soft)] text-accent border border-[var(--border)] hover:border-[var(--accent)] transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
