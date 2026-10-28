import { useState } from 'react'
import { CATEGORIES, PORTFOLIO } from '../data/portfolio'
import Img from './Img'
import Reveal from './Reveal'

function WorkImage({ item }) {
  if (item.photo) {
    return (
      <img
        src={item.photo}
        alt={item.title}
        loading="lazy"
        decoding="async"
        width="1200"
        height="900"
        className="absolute inset-0 h-full w-full object-cover"
      />
    )
  }
  return <Img name={item.image} alt={`${item.title} (illustrative stock photo)`} sizes="(min-width:1024px) 30vw, (min-width:640px) 45vw, 100vw" />
}

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const items = active === 'All' ? PORTFOLIO : PORTFOLIO.filter((i) => i.category === active)
  const anyIllustrative = items.some((i) => !i.real)

  return (
    <section id="portfolio" className="section-y bg-white">
      <div className="container-x">
        <Reveal className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-accent-dark">Our work</p>
            <h2 className="text-4xl font-bold sm:text-5xl">Branding you can see, touch and wear.</h2>
          </div>
          <div role="group" aria-label="Filter portfolio by category" className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={active === c}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active === c ? 'bg-ink text-white' : 'bg-ink/5 text-ink hover:bg-ink/10'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" aria-live="polite">
          {items.map((item) => (
            <li key={item.id}>
              <figure className="group overflow-hidden rounded-2xl ring-1 ring-ink/10">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                  <div className="absolute inset-0 transition duration-700 group-hover:scale-105">
                    <WorkImage item={item} />
                  </div>
                  {!item.real && (
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">
                      Illustrative photo
                    </span>
                  )}
                </div>
                <figcaption className="flex items-center justify-between gap-3 bg-white px-5 py-4">
                  <span className="font-semibold">{item.title}</span>
                  <span className="shrink-0 text-sm text-ink/60">{item.category}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {anyIllustrative && (
          <p className="mt-8 text-sm text-ink/60">
            Photos marked &ldquo;Illustrative photo&rdquo; are licensed stock images that show the kind of work we offer.
            They are not completed client projects. Real project photos will be added as they are published.
          </p>
        )}
      </div>
    </section>
  )
}
