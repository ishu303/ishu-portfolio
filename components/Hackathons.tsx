'use client'

import { motion } from 'framer-motion'
import { hackathons } from '@/lib/data'
import { Trophy } from 'lucide-react'

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-24 lg:py-32 bg-bg">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3"
        >
          <span className="mono-label section-label text-[var(--accent)]">Hackathons</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title font-syne text-text mb-14"
        >
          Competitions <span className="gradient-text">& wins</span>.
        </motion.h2>

        <div className="space-y-4">
          {hackathons.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card p-5 lg:p-6 flex flex-col sm:flex-row sm:items-center gap-4 group hover:-translate-y-0.5 transition-transform duration-300"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--accent-soft)] flex items-center justify-center">
                <Trophy size={18} className="text-accent" />
              </div>

              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-syne font-bold text-text text-base">{h.event}</span>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[var(--accent-soft)] text-accent border border-[var(--border)]">
                      {h.prize}
                    </span>
                  </div>
                  <span className="mono-label text-muted text-[0.65rem] whitespace-nowrap">{h.date}</span>
                </div>
                <p className="text-muted text-sm">{h.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
