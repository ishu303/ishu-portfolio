'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { whatIDo } from '@/lib/data'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

/* ─── Inline SVG Illustrations ─────────────────────────────────────────────── */

function BuildIllustration({ isDark }: { isDark: boolean }) {
  const bg = isDark ? '#1E3A5F' : '#E0F0FF'
  const screen = isDark ? '#0F1B2D' : '#1a1a2e'
  const accent = isDark ? '#06B6D4' : '#16A34A'
  const accent2 = isDark ? '#22D3EE' : '#22C55E'
  const body = isDark ? '#2D4A6A' : '#C8D6E5'
  const hinge = isDark ? '#253A55' : '#B0C4D8'

  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
      {/* Glow */}
      <defs>
        <radialGradient id="build-glow" cx="50%" cy="60%" r="45%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.25" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <filter id="build-shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor={accent} floodOpacity="0.35" />
        </filter>
      </defs>
      <ellipse cx="100" cy="130" rx="70" ry="18" fill="url(#build-glow)" />

      {/* Laptop base */}
      <motion.g
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        filter="url(#build-shadow)"
      >
        {/* Base */}
        <rect x="30" y="108" width="140" height="12" rx="4" fill={body} />
        {/* Trackpad */}
        <rect x="82" y="111" width="36" height="6" rx="2" fill={hinge} />

        {/* Lid */}
        <rect x="36" y="40" width="128" height="72" rx="6" fill={body} />
        {/* Screen bezel */}
        <rect x="42" y="46" width="116" height="60" rx="4" fill={screen} />

        {/* Code lines */}
        <rect x="50" y="54" width="40" height="3.5" rx="1.5" fill={accent} opacity="0.9" />
        <rect x="50" y="61" width="60" height="3.5" rx="1.5" fill="#FFFFFF" opacity="0.3" />
        <rect x="56" y="68" width="50" height="3.5" rx="1.5" fill={accent2} opacity="0.7" />
        <rect x="56" y="75" width="35" height="3.5" rx="1.5" fill="#FFFFFF" opacity="0.2" />
        <rect x="50" y="82" width="45" height="3.5" rx="1.5" fill={accent} opacity="0.6" />
        <rect x="56" y="89" width="55" height="3.5" rx="1.5" fill={accent2} opacity="0.5" />

        {/* Cursor blink */}
        <motion.rect
          x="113" y="89" width="2.5" height="10" rx="1"
          fill={accent}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.g>
    </svg>
  )
}

function LeadIllustration({ isDark }: { isDark: boolean }) {
  const nodeColor = isDark ? '#0F1F4A' : '#BFDBFE'
  const accent = isDark ? '#06B6D4' : '#22C55E'
  const accent2 = isDark ? '#22D3EE' : '#16A34A'
  const line = isDark ? '#1E4080' : '#93C5FD'

  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
      <defs>
        <radialGradient id="lead-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.2" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <filter id="node-glow">
          <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor={accent} floodOpacity="0.5" />
        </filter>
      </defs>
      <ellipse cx="100" cy="100" rx="80" ry="55" fill="url(#lead-glow)" />

      {/* Connection lines */}
      <line x1="100" y1="55" x2="50" y2="105" stroke={line} strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="100" y1="55" x2="100" y2="110" stroke={line} strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="100" y1="55" x2="150" y2="105" stroke={line} strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Center node (leader) */}
      <motion.g
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '100px 55px' }}
        filter="url(#node-glow)"
      >
        <circle cx="100" cy="55" r="20" fill={nodeColor} stroke={accent} strokeWidth="2.5" />
        {/* Person icon */}
        <circle cx="100" cy="48" r="6" fill={accent} />
        <path d="M87 68 Q100 58 113 68" fill={accent} opacity="0.7" />
      </motion.g>

      {/* Satellite nodes */}
      {[
        { cx: 50, cy: 110, delay: 0.3 },
        { cx: 100, cy: 118, delay: 0.6 },
        { cx: 150, cy: 110, delay: 0.9 },
      ].map(({ cx, cy, delay }, i) => (
        <motion.g
          key={i}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
          filter="url(#node-glow)"
        >
          <circle cx={cx} cy={cy} r="14" fill={nodeColor} stroke={accent2} strokeWidth="2" />
          <rect x={cx - 5} y={cy - 4} width="10" height="2.5" rx="1" fill={accent2} opacity="0.8" />
          <rect x={cx - 7} y={cy + 1} width="14" height="2.5" rx="1" fill={accent2} opacity="0.5" />
        </motion.g>
      ))}

      {/* Floating pulse ring */}
      <motion.circle
        cx="100" cy="55" r="28"
        stroke={accent} strokeWidth="1" fill="none" opacity="0.4"
        animate={{ r: [28, 42], opacity: [0.4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />
    </svg>
  )
}

function SolveIllustration({ isDark }: { isDark: boolean }) {
  const glow = isDark ? '#F59E0B' : '#D97706'
  const body = isDark ? '#292219' : '#FDE68A'
  const base = isDark ? '#3B2800' : '#F59E0B'

  return (
    <svg viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
      <defs>
        <radialGradient id="solve-glow" cx="50%" cy="45%" r="45%">
          <stop offset="0%" stopColor={glow} stopOpacity="0.35" />
          <stop offset="100%" stopColor={glow} stopOpacity="0" />
        </radialGradient>
        <filter id="bulb-shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="8" floodColor={glow} floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Background glow */}
      <ellipse cx="100" cy="85" rx="65" ry="55" fill="url(#solve-glow)" />

      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        filter="url(#bulb-shadow)"
      >
        {/* Bulb dome */}
        <path
          d="M70 90 Q70 42 100 38 Q130 42 130 90 Q130 100 118 106 L82 106 Q70 100 70 90Z"
          fill={body}
          stroke={glow}
          strokeWidth="2"
        />

        {/* Inner glow filament */}
        <motion.ellipse
          cx="100" cy="75"
          rx="18" ry="20"
          fill={glow}
          opacity="0.25"
          animate={{ opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Filament */}
        <path
          d="M93 90 Q96 75 100 70 Q104 75 107 90"
          stroke={glow}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />

        {/* Circuit lines inside bulb */}
        <line x1="85" y1="80" x2="95" y2="80" stroke={glow} strokeWidth="1" opacity="0.5" />
        <line x1="105" y1="80" x2="115" y2="80" stroke={glow} strokeWidth="1" opacity="0.5" />
        <circle cx="85" cy="80" r="2" fill={glow} opacity="0.6" />
        <circle cx="115" cy="80" r="2" fill={glow} opacity="0.6" />

        {/* Base segments */}
        <rect x="82" y="106" width="36" height="7" rx="2" fill={base} opacity="0.9" />
        <rect x="85" y="114" width="30" height="6" rx="2" fill={base} opacity="0.75" />
        <rect x="88" y="121" width="24" height="5" rx="2" fill={base} opacity="0.6" />
      </motion.g>

      {/* Sparkles */}
      {[
        { x: 52, y: 55, scale: 0.8, delay: 0 },
        { x: 148, y: 48, scale: 0.6, delay: 0.7 },
        { x: 62, y: 100, scale: 0.5, delay: 1.2 },
        { x: 145, y: 98, scale: 0.55, delay: 0.4 },
      ].map(({ x, y, scale, delay }, i) => (
        <motion.g key={i} style={{ transformOrigin: `${x}px ${y}px` }}
          animate={{ opacity: [0, 1, 0], scale: [0.4, scale, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay, ease: 'easeInOut' }}
        >
          <path d={`M${x},${y - 6} L${x + 2},${y - 1} L${x + 6},${y} L${x + 2},${y + 1} L${x},${y + 6} L${x - 2},${y + 1} L${x - 6},${y} L${x - 2},${y - 1}Z`}
            fill={glow} opacity="0.85" />
        </motion.g>
      ))}
    </svg>
  )
}

/* ─── Map pillar index → illustration ──────────────────────────────────────── */
function PillarIllustration({ index, isDark }: { index: number; isDark: boolean }) {
  if (index === 0) return <BuildIllustration isDark={isDark} />
  if (index === 1) return <LeadIllustration isDark={isDark} />
  return <SolveIllustration isDark={isDark} />
}

/* ─── Main Component ────────────────────────────────────────────────────────── */
export default function WhatIDo() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Before hydration, resolvedTheme is undefined → don't render theme-dependent SVGs
  // to avoid a dark-flash in light mode on first load.
  const isDark = mounted ? resolvedTheme !== 'light' : false

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
                {/* SVG Illustration replacing 3D model */}
                <div className="h-40 mb-5 -mx-2 flex items-center justify-center">
                  <PillarIllustration index={i} isDark={isDark} />
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
