import { ArrowRight, MapPin } from 'lucide-react'
import { SITE } from '../data/site'
import Img from './Img'

const TICKER = ['Logo design', 'Business cards', 'Posters & flyers', 'Packaging', 'Branded apparel', 'Signage', 'Social graphics', 'Corporate gifts']

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 -z-10">
        <Img name="hero" priority sizes="100vw" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-ink to-transparent" />

      <div className="container-x flex min-h-[100svh] flex-col justify-center pb-28 pt-32">
        <p className="eyebrow fade-up text-accent">
          <MapPin size={14} aria-hidden="true" /> Apparel &amp; branding · {SITE.location}
        </p>
        <h1 className="fade-up max-w-4xl text-[2.9rem] font-bold leading-[1] sm:text-7xl lg:text-8xl">
          We turn ideas into brands that <span className="text-accent">stand out.</span>
        </h1>
        <p className="fade-up mt-7 max-w-xl text-lg leading-relaxed text-white/80 [animation-delay:120ms]">
          From logos and stationery to packaging, signage and branded apparel, we help businesses build visual
          identities people remember.
        </p>
        <div className="fade-up mt-10 flex flex-col gap-3 [animation-delay:240ms] sm:flex-row">
          <a href="#contact" className="btn btn-accent">
            Start Your Project <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href="#portfolio" className="btn btn-outline-light">
            Explore Our Work
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-t border-white/10 bg-ink/70 py-4 backdrop-blur" aria-hidden="true">
        <div className="flex w-max animate-marquee whitespace-nowrap motion-reduce:animate-none">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="mx-6 flex items-center gap-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {t} <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
