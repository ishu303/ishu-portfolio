'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import { whatIDo } from '@/lib/data'

const Model3D = dynamic(() => import('./three/Model3D'), { ssr: false })

const PILLAR_MODELS = ['/models/laptop.glb', '/models/network.glb', '/models/bulb.glb']

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

export default function WhatIDo() {
  const { resolvedTheme } = useTheme()
  const theme = resolvedTheme ?? 'dark'

  return (
    <section id="what-i-do" className="py-24 lg:py-32 bg-bg">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-3"
        >
          <span className="mono-label section-label text-[var(--accent)]">What I Do</span>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-title font-syne text-text mb-14"
        >
          How I create <span className="gradient-text">impact</span>.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {whatIDo.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="glass-card p-8 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 cursor-default"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

              <div className="relative z-10">
                <div className="h-40 mb-5 -mx-2">
                  <Model3D src={PILLAR_MODELS[i]} variant="icon" theme={theme} />
                </div>
                <h3 className="font-syne font-bold text-2xl text-text mb-3">{pillar.title}</h3>
                <p className="text-muted leading-relaxed text-sm">{pillar.description}</p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
