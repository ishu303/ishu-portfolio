'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false })

// Replace this constant with your exported Spline scene URL:
// e.g. 'https://prod.spline.design/XXXXXXXXXXXXXXXX/scene.splinecode'
const SPLINE_SCENE_URL = 'SPLINE_SCENE_URL_PLACEHOLDER'

const HAS_SCENE = SPLINE_SCENE_URL !== 'SPLINE_SCENE_URL_PLACEHOLDER'

function PlaceholderScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[340px] h-[340px] rounded-full opacity-20 animate-spin-slow"
          style={{
            background: 'conic-gradient(from 0deg, var(--accent), var(--accent-2), transparent, var(--accent))',
          }}
        />
      </div>

      {/* Island base */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Laptop + code block */}
        <div className="relative">
          <div
            className="w-52 h-32 rounded-2xl flex items-end justify-center pb-2 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, var(--card), var(--bg-soft))',
              border: '1px solid var(--border)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 0 30px var(--accent-soft)',
            }}
          >
            {/* Fake screen */}
            <div
              className="w-44 h-24 rounded-xl overflow-hidden"
              style={{ background: 'var(--bg)', border: '1px solid var(--border)' }}
            >
              {/* Code lines */}
              <div className="p-3 space-y-1.5">
                {[80, 60, 90, 50, 70].map((w, i) => (
                  <div
                    key={i}
                    className="h-1.5 rounded-full opacity-60"
                    style={{
                      width: `${w}%`,
                      background: i % 2 === 0 ? 'var(--accent)' : 'var(--accent-2)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Rocket */}
          <div
            className="absolute -right-4 -top-4 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg animate-float"
            style={{
              background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
              boxShadow: '0 8px 24px var(--accent-soft)',
            }}
          >
            <span className="text-xl">🚀</span>
          </div>

          {/* Floating code blocks */}
          <div
            className="absolute -left-8 top-2 w-8 h-8 rounded-lg animate-float-delay-1"
            style={{ background: 'var(--accent-soft)', border: '1px solid var(--border)' }}
          />
          <div
            className="absolute -left-4 -bottom-4 w-6 h-6 rounded-md animate-float-delay-2"
            style={{ background: 'var(--accent-2)', opacity: 0.3 }}
          />
        </div>

        {/* Island slab */}
        <div
          className="w-64 h-8 rounded-2xl opacity-70"
          style={{
            background: 'linear-gradient(135deg, var(--card), var(--bg-soft))',
            border: '1px solid var(--border)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          }}
        />

        {/* Label */}
        <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted mt-2">
          3D Scene · Add Spline URL to activate
        </p>
      </div>
    </div>
  )
}

export default function SplineHero() {
  const [loaded, setLoaded] = useState(false)

  if (!HAS_SCENE) {
    return <PlaceholderScene />
  }

  return (
    <div className="relative w-full h-full">
      {!loaded && <PlaceholderScene />}
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease' }}>
        <Spline
          scene={SPLINE_SCENE_URL}
          onLoad={() => setLoaded(true)}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  )
}
