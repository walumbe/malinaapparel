import { MessageCircle } from 'lucide-react'
import { SITE, waLink } from '../data/site'
import Img from './Img'
import Reveal from './Reveal'

export default function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute inset-0 -z-10"><Img name="sign2" alt="" /></div>
      <div className="absolute inset-0 -z-10 bg-ink/80" />
      <Reveal className="container-x text-center">
        <h2 className="mx-auto max-w-3xl text-4xl font-bold text-white sm:text-6xl">
          Ready to make your brand unforgettable?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
          Message us on WhatsApp and tell us about your project. We usually reply the same day.
        </p>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-accent mt-9 !px-8 !py-4 text-base"
        >
          <MessageCircle size={20} aria-hidden="true" /> Chat on WhatsApp · {SITE.phoneDisplay}
        </a>
      </Reveal>
    </section>
  )
}
