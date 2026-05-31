'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import { hero } from '@/lib/data'
import { ChevronDown } from 'lucide-react'

const Launchpad = dynamic(() => import('./three/Launchpad'), { ssr: false })
const Particles = dynamic(() => import('./three/Particles'), { ssr: false })

export default function Hero() {
  const { resolvedTheme } = useTheme()
  const theme = (resolvedTheme as 'light' | 'dark') ?? 'dark'

  return (
    <>
      {/* Particles fixed background */}
      <Particles />

      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
        style={{ zIndex: 10 }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-4rem)]">

            {/* ---- Left: Text content ---- */}
            <div className="flex flex-col justify-center">
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-mono text-[0.75rem] uppercase tracking-[0.2em] text-[var(--accent-2)] mb-6"
              >
                {hero.eyebrow}
              </motion.p>

              {/* H1 */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-syne font-black leading-[1.02] tracking-tight mb-6"
                style={{ fontSize: 'clamp(3.2rem, 8vw, 6.5rem)' }}
              >
                <span
                  className="block"
                  style={{
                    background: 'linear-gradient(135deg, var(--text) 0%, var(--accent) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Ishu
                </span>
                <span
                  className="block"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent-2) 0%, var(--accent) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Singh.
                </span>
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-muted text-lg leading-relaxed font-light max-w-md mb-10"
              >
                {hero.tagline}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href={hero.cta.primary.href}
                  className="inline-flex items-center px-7 py-3.5 rounded-xl font-mono text-sm uppercase tracking-wider font-medium transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                    color: 'var(--bg)',
                  }}
                >
                  {hero.cta.primary.label}
                </a>
                <a
                  href={hero.cta.secondary.href}
                  className="inline-flex items-center px-7 py-3.5 rounded-xl font-mono text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
                  style={{
                    border: '1.5px solid var(--border)',
                    color: 'var(--muted)',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent-2)'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-2)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--muted)'
                  }}
                >
                  {hero.cta.secondary.label}
                </a>
              </motion.div>
            </div>

            {/* ---- Right: 3D Scene ---- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
              className="relative h-[420px] lg:h-[540px] flex items-center justify-center"
            >
              <Launchpad theme={theme} />
            </motion.div>
          </div>
        </div>

        {/* ---- Floating badges ---- */}
        {hero.badges.map((badge, i) => {
          const positions = [
            'top-[28%] left-[2%]',
            'top-[22%] right-[2%]',
            'bottom-[28%] left-[3%]',
            'bottom-[32%] right-[2%]',
          ]
          const floatClasses = ['animate-float', 'animate-float-delay-1', 'animate-float-delay-2', 'animate-float-delay-3']

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className={`absolute hidden lg:block ${positions[i]} ${floatClasses[i]} pointer-events-none`}
            >
              <div
                className="px-4 py-3 rounded-2xl font-mono backdrop-blur-xl"
                style={{
                  background: 'var(--card)',
                  border: i % 2 === 0 ? '1px solid rgba(245,158,11,0.3)' : '1px solid var(--border)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                }}
              >
                <div className="text-[0.6rem] uppercase tracking-wider text-[var(--accent-2)] mb-0.5">
                  {badge.label}
                </div>
                <div className="text-[0.8rem] font-medium text-text">{badge.value}</div>
              </div>
            </motion.div>
          )
        })}

        {/* ---- Scroll hint ---- */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted animate-bounce pointer-events-none">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest opacity-60">Scroll</span>
          <div
            className="w-px h-10"
            style={{
              background: 'linear-gradient(to bottom, var(--accent-2), transparent)',
            }}
          />
          <ChevronDown size={14} className="opacity-60" />
        </div>
      </section>
    </>
  )
}
