'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'About', href: '#about' },
  { label: 'What I Do', href: '#what-i-do' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Vision', href: '#vision' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-bg/80 border-b border-[var(--border)] shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-syne font-black text-xl bg-gradient-to-r from-accent to-[var(--accent-2)] bg-clip-text text-transparent"
        >
          IS /
        </a>

        {/* Center links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-mono text-[0.72rem] uppercase tracking-widest transition-colors duration-200 relative group ${
                    isActive ? 'text-accent' : 'text-muted hover:text-text'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/cv"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider border border-[var(--border)] text-muted hover:text-accent hover:border-[var(--accent)] transition-all duration-300"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  )
}
