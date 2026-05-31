'use client'

import { motion } from 'framer-motion'
import { experience } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-[var(--bg-soft)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3"
        >
          <span className="mono-label section-label text-[var(--accent)]">Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title font-syne text-text mb-14"
        >
          Where I&apos;ve <span className="gradient-text">worked</span>.
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-[var(--accent-soft)] border-2 border-[var(--accent)] items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                </div>

                <div className="glass-card p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-syne font-bold text-xl text-text">{exp.role}</h3>
                      <p className="text-accent font-semibold text-sm mt-0.5">
                        {exp.org} · {exp.location}
                      </p>
                    </div>
                    <span className="mono-label text-muted text-[0.65rem] whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-3 text-muted text-sm leading-relaxed">
                        <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-2)]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
