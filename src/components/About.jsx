import { SITE } from '../data/site'
import Img from './Img'
import Reveal from './Reveal'

// Edit the copy below once the business story is available.
const ABOUT = {
  heading: 'Your creative branding partner in Bungoma.',
  paragraphs: [
    `${SITE.name} is a branding and creative design studio based in ${SITE.location}. We help businesses communicate who they are through professional, memorable visual branding.`,
    'Whether you are launching something new or refreshing an established business, we work with you to turn your ideas into logos, print, packaging, signage and merchandise that work together.',
  ],
  // Add real facts here when available, e.g. { label: 'Years in business', value: '5+' }
  facts: [
    { label: 'Based in', value: 'Bungoma, Kenya' },
    { label: 'Focus', value: 'Visual branding' },
    { label: 'Contact', value: 'WhatsApp first' },
  ],
}

export default function About() {
  return (
    <section id="about" className="section-y bg-white">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-ink"><Img name="tees" sizes="(min-width:1024px) 22vw, 45vw" /></div>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-ink"><Img name="paper" sizes="(min-width:1024px) 22vw, 45vw" /></div>
          </div>
          <div className="mt-10 space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-ink"><Img name="neon" sizes="(min-width:1024px) 22vw, 45vw" /></div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-ink"><Img name="shirts" sizes="(min-width:1024px) 22vw, 45vw" /></div>
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
