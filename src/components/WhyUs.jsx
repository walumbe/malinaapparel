import { Sparkles, Eye, BadgeCheck, MessagesSquare, Target, MapPin } from 'lucide-react'
import Reveal from './Reveal'

const REASONS = [
  { icon: Sparkles, title: 'Creative, professional design', text: 'Fresh ideas executed with polish, so your brand looks as good as the business behind it.' },
  { icon: Eye, title: 'Attention to detail', text: 'Alignment, colour, spacing and print specs are checked before anything leaves the studio.' },
  { icon: BadgeCheck, title: 'Quality-focused production', text: 'Designs are prepared and produced with care so the finished item matches the approved proof.' },
  { icon: MessagesSquare, title: 'Reliable communication', text: 'Quick replies on WhatsApp and clear updates at every stage of your project.' },
  { icon: Target, title: 'Tailored to each brand', text: 'No recycled templates. Every solution is shaped around your business, audience and budget.' },
  { icon: MapPin, title: 'Bungoma and beyond', text: 'Convenient for local clients, and easy to work with remotely if you are elsewhere in Kenya.' },
]

export default function WhyUs() {
  return (
    <section className="section-y bg-ink text-white">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent">Why choose us</p>
          <h2 className="text-4xl font-bold sm:text-5xl">A creative partner that sweats the details.</h2>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80} className="bg-ink p-8 transition hover:bg-white/[0.04]">
              <r.icon className="text-accent" size={28} aria-hidden="true" />
              <h3 className="mt-6 text-xl font-semibold">{r.title}</h3>
              <p className="mt-2 leading-relaxed text-white/65">{r.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
