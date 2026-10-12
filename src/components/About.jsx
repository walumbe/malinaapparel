import { SITE } from '../data/site'
import { PALETTES as P } from '../data/site'
import { Cards, Sign, Box, Poster } from './Mockups'
import Reveal from './Reveal'

// Edit the copy below once the business story is available.
const ABOUT = {
  heading: 'Your creative branding partner in Nakuru.',
  paragraphs: [
    `${SITE.name} is a branding and creative design studio based in ${SITE.location}. We help businesses communicate who they are through professional, memorable visual branding.`,
    'Whether you are launching something new or refreshing an established business, we work with you to turn your ideas into logos, print, packaging, signage and merchandise that work together.',
  ],
  // Add real facts here when available, e.g. { label: 'Years in business', value: '5+' }
  facts: [
    { label: 'Based in', value: 'Nakuru, Kenya' },
    { label: 'Focus', value: 'Visual branding' },
    { label: 'Contact', value: 'WhatsApp first' },
  ],
}

export default function About() {
  return (
    <section id="about" className="section-y bg-white">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="grid grid-cols-2 gap-4" aria-hidden="true">
          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-ink/10"><Poster p={P.yellow} name="Jamii" mark={1} /></div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-ink/10"><Cards p={P.paper} name="Kilele" mark={0} /></div>
          </div>
          <div className="mt-10 space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-ink/10"><Box p={P.dark} name="Nuru" mark={2} /></div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-ink/10"><Sign p={P.green} name="Savanna" mark={4} /></div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="eyebrow text-accent-dark">About us</p>
          <h2 className="text-4xl font-bold sm:text-5xl">{ABOUT.heading}</h2>
          {ABOUT.paragraphs.map((t) => (
            <p key={t} className="mt-5 text-lg leading-relaxed text-ink/70">{t}</p>
          ))}
          <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-ink/10 pt-7">
            {ABOUT.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-xs uppercase tracking-wider text-ink/50">{f.label}</dt>
                <dd className="mt-1 font-display font-semibold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
