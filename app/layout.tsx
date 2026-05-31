import type { Metadata } from 'next'
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import LenisProvider from '@/components/LenisProvider'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ishu Singh — Full Stack Developer',
  description:
    'BCA final-year student at SMS College, Varanasi. Tech Lead at Glosseo. Building for India\'s grassroots.',
  keywords: ['Ishu Singh', 'Full Stack Developer', 'React', 'Next.js', 'Flutter', 'Varanasi'],
  authors: [{ name: 'Ishu Singh', url: 'https://github.com/ishu303' }],
  openGraph: {
    title: 'Ishu Singh — Full Stack Developer',
    description: 'Turning ideas into impact — from AI platforms to civic tech, out of Varanasi.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-dm bg-bg text-text antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LenisProvider>
            {children}
          </LenisProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
