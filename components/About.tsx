'use client'

import { motion } from 'framer-motion'
import { about } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[var(--bg-soft)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3"
        >
          <span className="mono-label section-label text-[var(--accent)]">About Me</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="section-title font-syne text-text mb-8">
              Builder first,
              <br />
              <span className="gradient-text">student second.</span>
            </h2>
            <div className="space-y-4">
              {about.text.map((para, i) => (
                <p key={i} className="text-muted leading-relaxed text-base font-light">
                  {para}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Stat mini-cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {about.quickFacts.map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i + 0.3 }}
                className="glass-card p-6 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]" />
                <div className="font-syne text-3xl font-black text-accent leading-none mb-2">
                  {fact.value}
                </div>
                <div className="mono-label text-muted">{fact.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
