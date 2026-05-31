'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '@/lib/data'

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1500
    const start = performance.now()
    const run = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(run)
    }
    requestAnimationFrame(run)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="py-20 bg-[var(--bg-soft)]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="glass-card p-6 lg:p-8 text-center relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]" />
              <div className="font-syne text-4xl lg:text-5xl font-black text-accent leading-none mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mono-label text-muted text-[0.7rem]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
