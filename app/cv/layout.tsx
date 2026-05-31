import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ishu Singh — CV',
  description: 'Full Stack Developer & Tech Lead. BCA final-year, SMS College, Varanasi.',
}

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
