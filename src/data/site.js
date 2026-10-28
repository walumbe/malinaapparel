// Edit this file to change business details across the whole site.
export const SITE = {
  name: 'Malina Apparel', // TODO: replace with the real business name
  tagline: 'Branding & creative design',
  phoneDisplay: '+254 797 598616',
  phoneHref: 'tel:+254797598616',
  whatsappNumber: '254797598616',
  whatsappMessage: "Hi, I'm interested in your branding services. I'd like to discuss a project.",
  location: 'Bungoma, Kenya',
  // Optional: a Formspree / Getform / your own endpoint. Set VITE_FORM_ENDPOINT in .env
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
}

export const waLink = (text = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

