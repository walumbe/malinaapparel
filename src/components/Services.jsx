import { Palette, CreditCard, FileText, Package, Gift, Printer, Smartphone, Sparkles, ArrowUpRight } from 'lucide-react'
import { PALETTES as P, waLink } from '../data/site'
import { LogoSheet, Cards, Brochure, Box, Tee, Sign, Social, Bag } from './Mockups'
import Reveal from './Reveal'

const SERVICES = [
  { icon: Palette, title: 'Logo Design & Brand Identity', text: 'Distinctive logos and complete identity systems that make your business instantly recognisable.', img: <LogoSheet p={P.paper} name="Kilele" mark={0} />, q: 'logo design & brand identity' },
  { icon: CreditCard, title: 'Business Cards & Stationery', text: 'Business cards, letterheads and branded documents that leave a professional first impression.', img: <Cards p={P.dark} name="Mizani" mark={3} />, q: 'business cards & stationery' },
  { icon: FileText, title: 'Posters, Flyers & Brochures', text: 'Eye-catching print materials that explain your offer clearly and get people to act.', img: <Brochure p={P.green} name="Savanna" mark={4} />, q: 'posters, flyers & brochures' },
  { icon: Package, title: 'Product Packaging & Labels', text: 'Packaging and labels that make your product stand out on the shelf and feel premium in the hand.', img: <Box p={P.yellow} name="Asali" mark={1} />, q: 'product packaging & labels' },
  { icon: Gift, title: 'Branded Merchandise & Corporate Gifts', text: 'T-shirts, mugs, bags and gifts that carry your brand into your customers’ daily lives.', img: <Tee p={P.dark} name="Rift" mark={2} />, q: 'branded merchandise & corporate gifts' },
  { icon: Printer, title: 'Large Format Printing & Signage', text: 'Banners, shopfront signs and displays that get your business noticed from the street.', img: <Sign p={P.blue} name="Duka Bora" mark={0} />, q: 'large format printing & signage' },
  { icon: Smartphone, title: 'Social Media Graphics', text: 'Consistent, scroll-stopping post templates and graphics that keep your brand sharp online.', img: <Social p={P.paper} name="Mwanga" mark={4} />, q: 'social media graphics' },
  { icon: Sparkles, title: 'Custom Branding Solutions', text: 'Have something specific in mind? We’ll shape a branding solution around your needs and budget.', img: <Bag p={P.pink} name="Zuri" mark={0} />, q: 'a custom branding solution' },
]

export default function Services() {
  return (
    <section id="services" className="section-y bg-paper">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-accent-dark">What we do</p>
          <h2 className="text-4xl font-bold sm:text-5xl">Everything your brand needs, under one roof.</h2>
          <p className="mt-5 text-lg text-ink/70">
            One creative partner for design and production, so every touchpoint looks like it came from the same
            brand.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-ink/10 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10 hover:ring-accent">
                <div className="aspect-[4/3] overflow-hidden" aria-hidden="true">
                  <div className="h-full w-full transition duration-500 group-hover:scale-105">{s.img}</div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-accent transition group-hover:bg-accent group-hover:text-ink">
                    <s.icon size={18} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{s.text}</p>
                  <a
                    href={waLink(`Hi, I'm interested in ${s.q}. I'd like to discuss a project.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline-offset-4 hover:underline"
                  >
                    Ask about this <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
