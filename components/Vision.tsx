'use client'

import { motion } from 'framer-motion'
import { vision } from '@/lib/data'
import Link from 'next/link'

export default function Vision() {
  return (
    <section
      id="vision"
      className="py-24 lg:py-36 bg-bg relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle, var(--accent-soft), transparent)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-3"
        >
          <span className="mono-label section-label text-[var(--accent)]">Vision</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="section-title font-syne text-text mb-6 max-w-3xl mx-auto"
        >
          {vision.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted text-lg leading-relaxed max-w-2xl mx-auto mb-12"
        >
          {vision.copy}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={vision.cta.primary.href}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-mono text-sm uppercase tracking-wider text-white font-medium hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
            }}
          >
            {vision.cta.primary.label}
          </a>
          <Link
            href={vision.cta.secondary.href}
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
            style={{
              border: '2px solid var(--border)',
              color: 'var(--muted)',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent)'
              ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'
              ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)'
            }}
          >
            {vision.cta.secondary.label}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
