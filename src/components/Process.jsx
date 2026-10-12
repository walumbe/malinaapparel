import Reveal from './Reveal'

const STEPS = [
  { title: 'Tell us about your project', text: 'Share what you do, who you serve and what you need, by WhatsApp, call or the form below.' },
  { title: 'Discuss the concept', text: 'We talk through ideas, requirements, timelines and budget until the direction is clear.' },
  { title: 'Approve the design', text: 'You review the design and request tweaks. Nothing goes to production until you approve it.' },
  { title: 'Receive your branding', text: 'We deliver your finished branding solution, ready to use and ready to be seen.' },
]

export default function Process() {
  return (
    <section className="section-y bg-paper">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent-dark">How it works</p>
          <h2 className="text-4xl font-bold sm:text-5xl">From first message to finished brand in four steps.</h2>
        </Reveal>
        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90} className="relative rounded-3xl bg-white p-7 ring-1 ring-ink/10">
              <span className="font-display text-6xl font-bold text-accent" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-xl font-semibold">
                <span className="sr-only">Step {i + 1}: </span>
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-ink/70">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
