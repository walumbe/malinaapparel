import { Phone, MapPin, MessageCircle } from 'lucide-react'
import { NAV_LINKS, SITE, waLink } from '../data/site'
import { Logo } from './Navbar'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-sm text-white/60">
            Branding and creative design studio in {SITE.location}. We turn ideas into brands that stand out.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white/50">Explore</h2>
          <ul className="mt-4 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} className="text-white/80 hover:text-accent">{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-white/50">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-white/80">
            <li className="flex items-center gap-2"><Phone size={16} className="text-accent" aria-hidden="true" /><a href={SITE.phoneHref} className="hover:text-accent">{SITE.phoneDisplay}</a></li>
            <li className="flex items-center gap-2"><MessageCircle size={16} className="text-accent" aria-hidden="true" /><a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-accent">WhatsApp us</a></li>
            <li className="flex items-center gap-2"><MapPin size={16} className="text-accent" aria-hidden="true" />{SITE.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="container-x py-6 text-sm text-white/50">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
