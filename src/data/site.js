// Edit this file to change business details across the whole site.
export const SITE = {
  name: 'Malina Apparel', // TODO: replace with the real business name
  tagline: 'Branding & creative design',
  phoneDisplay: '+254 797 598616',
  phoneHref: 'tel:+254797598616',
  whatsappNumber: '254797598616',
  whatsappMessage: "Hi, I'm interested in your branding services. I'd like to discuss a project.",
  location: 'Nakuru, Kenya',
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

export const PALETTES = {
  paper: { bg: '#F2EFE9', fg: '#0A0A0A', accent: '#FF5A1F', alt: '#FFFFFF' },
  dark: { bg: '#0A0A0A', fg: '#FFFFFF', accent: '#FF5A1F', alt: '#1F1F1F' },
  green: { bg: '#DCE8D3', fg: '#12301F', accent: '#2E8B57', alt: '#F4FAF0' },
  blue: { bg: '#DCE6F7', fg: '#0B1F4D', accent: '#2F5BFF', alt: '#FFFFFF' },
  pink: { bg: '#FBE3EA', fg: '#3A0B1E', accent: '#E8336D', alt: '#FFFFFF' },
  yellow: { bg: '#FFF1BD', fg: '#1A1A1A', accent: '#FFB800', alt: '#FFFFFF' },
}
