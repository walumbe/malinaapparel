import { ArrowRight, MapPin } from 'lucide-react'
import { PALETTES as P, SITE } from '../data/site'
import { Box, Cards, Poster, Tee, Mug } from './Mockups'

const Tile = ({ className = '', float = false, children }) => (
  <div
    className={`absolute overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/10 ${
      float ? 'animate-float motion-reduce:animate-none' : ''
    } ${className}`}
  >
    <div className="aspect-[4/3] w-full">{children}</div>
  </div>
)

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink text-white">
      <div className="container-x grid items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-36">
        <div>
          <p className="eyebrow text-accent">
            <MapPin size={14} aria-hidden="true" /> Apparel · {SITE.location}
          </p>
          <h1 className="text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
            We turn ideas into brands that <span className="text-accent">stand out.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            From logos and stationery to packaging, signage and merchandise, we help businesses build visual
            identities people remember, designed in Nakuru and delivered wherever your customers are.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn btn-accent">
              Start Your Project <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#portfolio" className="btn btn-outline-light">
              Explore Our Work
            </a>
          </div>
        </div>

        {/* Mockup composition */}
        <div className="relative mx-auto aspect-square w-full max-w-[520px] lg:max-w-none" aria-hidden="true">
          <Tile className="left-[2%] top-[4%] w-[58%]" float>
            <Poster p={P.paper} name="Hero" mark={1} />
          </Tile>
          <Tile className="right-0 top-[18%] w-[46%]">
            <Tee p={P.yellow} name="Rift" mark={2} />
          </Tile>
          <Tile className="left-[10%] top-[44%] w-[52%]">
            <Box p={P.pink} name="Asali" mark={4} />
          </Tile>
          <Tile className="bottom-[6%] right-[2%] w-[48%]" float>
            <Cards p={P.blue} name="Mizani" mark={3} />
          </Tile>
          <Tile className="bottom-0 left-0 hidden w-[34%] sm:block">
            <Mug p={P.green} name="Boma" mark={0} />
          </Tile>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-5 text-xs uppercase tracking-[0.18em] text-white/50">
          <span>Logos</span><span>Stationery</span><span>Packaging</span><span>Signage</span><span>Merchandise</span><span>Social</span>
        </div>
      </div>
    </section>
  )
}
