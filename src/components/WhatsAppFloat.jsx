import { MessageCircle } from 'lucide-react'
import { waLink } from '../data/site'

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-ink shadow-xl shadow-black/30 transition hover:scale-105 hover:bg-white"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  )
}
