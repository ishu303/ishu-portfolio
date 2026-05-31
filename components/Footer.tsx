'use client'

import { motion } from 'framer-motion'
import { contact } from '@/lib/data'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-16 relative overflow-hidden"
      style={{ background: 'var(--bg-footer)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo */}
          <div className="font-syne font-black text-3xl bg-gradient-to-r from-[#F59E0B] to-[#06B6D4] bg-clip-text text-transparent mb-6">
            IS /
          </div>

          <p className="text-[#94A3B8] mb-8 font-light max-w-sm mx-auto">
            Building for India&apos;s grassroots — one shipped product at a time.
          </p>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <a
              href={`mailto:${contact.email}`}
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#F59E0B] hover:border-[#F59E0B]/40 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#06B6D4] hover:border-[#06B6D4]/40 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#06B6D4] hover:border-[#06B6D4]/40 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          {/* Email displayed */}
          <a
            href={`mailto:${contact.email}`}
            className="font-mono text-sm text-[#94A3B8] hover:text-[#F59E0B] transition-colors duration-200 mb-8 block"
          >
            {contact.email}
          </a>

          <div className="divider mb-8" />

          <p className="text-[#94A3B8] text-sm font-mono">
            © 2026 Ishu Singh · Varanasi, India
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
