import { MessageCircle } from 'lucide-react'
import { SITE, waLink } from '../data/site'
import Reveal from './Reveal'

export default function CtaBanner() {
  return (
    <section className="bg-accent py-20 sm:py-24">
      <Reveal className="container-x text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-bold text-ink sm:text-6xl">
          Ready to make your brand unforgettable?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink/80">
          Message us on WhatsApp and tell us about your project. We usually reply the same day.
        </p>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark mt-9 !px-8 !py-4 text-base"
        >
          <MessageCircle size={20} aria-hidden="true" /> Chat on WhatsApp · {SITE.phoneDisplay}
        </a>
      </Reveal>
    </section>
  )
}
