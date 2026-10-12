import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { NAV_LINKS, SITE } from '../data/site'
import { Mark } from './Mockups'

export function Logo({ light = false }) {
  const p = { accent: '#FF5A1F', fg: light ? '#FFFFFF' : '#0A0A0A', alt: light ? '#0A0A0A' : '#FFFFFF' }
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label={`${SITE.name} — home`}>
      <svg viewBox="-50 -50 100 100" className="h-8 w-8" aria-hidden="true">
        <Mark kind={0} p={p} />
      </svg>
      <span className={`font-display text-lg font-bold leading-none ${light ? 'text-white' : 'text-ink'}`}>
        {SITE.name}
      </span>
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-ink/10 bg-white/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-ink/75 transition hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn btn-dark hidden !py-2.5 sm:inline-flex">
            Get a Quote <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-ink/10 bg-white md:hidden">
          <ul className="container-x flex flex-col py-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink/10 py-4 font-display text-2xl font-semibold"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-5">
              <a href="#contact" onClick={() => setOpen(false)} className="btn btn-accent w-full">
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
