import { useState } from 'react'
import { Phone, MapPin, MessageCircle, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { SITE, waLink } from '../data/site'
import Reveal from './Reveal'

const SERVICE_OPTIONS = [
  'Logo Design & Brand Identity',
  'Business Cards & Stationery',
  'Posters, Flyers & Brochures',
  'Product Packaging & Labels',
  'Branded Merchandise & Corporate Gifts',
  'Large Format Printing & Signage',
  'Social Media Graphics',
  'Custom Branding Solutions',
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const isPhone = (v) => /^[+\d][\d\s()-]{8,17}$/.test(v) && v.replace(/\D/g, '').length >= 9

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  const c = v.contact.trim()
  if (!c) e.contact = 'Enter a phone number or email address.'
  else if (!EMAIL_RE.test(c) && !isPhone(c)) e.contact = 'Enter a valid phone number or email address.'
  if (!v.service) e.service = 'Please choose a service.'
  if (v.details.trim().length < 10) e.details = 'Tell us a little about your project (at least 10 characters).'
  return e
}

const field =
  'mt-2 w-full rounded-xl border bg-white px-4 py-3.5 text-base text-ink placeholder:text-ink/40 transition focus:border-ink'

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold">{label}</label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-red-700" role="alert">
          <AlertCircle size={14} aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [values, setValues] = useState({ name: '', contact: '', service: '', details: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | whatsapp | error

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }))
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }))
  }

  const summary = () =>
    `Hi, I'm ${values.name.trim()}. I'm interested in: ${values.service}.\n\nProject details: ${values.details.trim()}\n\nContact: ${values.contact.trim()}`

  const onSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) {
      document.getElementById(Object.keys(errs)[0])?.focus()
      return
    }

    // No form endpoint configured: hand the details to WhatsApp instead of faking delivery.
    if (!SITE.formEndpoint) {
      window.open(waLink(summary()), '_blank', 'noopener,noreferrer')
      setStatus('whatsapp')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(SITE.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus('sent')
      setValues({ name: '', contact: '', service: '', details: '' })
    } catch {
      setStatus('error')
    }
  }

  const aria = (k) => ({
    'aria-invalid': errors[k] ? 'true' : undefined,
    'aria-describedby': errors[k] ? `${k}-error` : undefined,
  })
  const border = (k) => (errors[k] ? 'border-red-600' : 'border-ink/20')

  return (
    <section id="contact" className="section-y bg-paper">
      <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow text-accent-dark">Contact</p>
          <h2 className="text-4xl font-bold sm:text-5xl">Let&rsquo;s talk about your brand.</h2>
          <p className="mt-5 max-w-md text-lg text-ink/70">
            The fastest way to reach us is WhatsApp. You can also call or send the form.
          </p>
          <ul className="mt-9 space-y-5">
            <li className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-accent"><Phone size={20} aria-hidden="true" /></span>
              <a href={SITE.phoneHref} className="font-display text-xl font-semibold hover:underline">{SITE.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-accent"><MapPin size={20} aria-hidden="true" /></span>
              <span className="font-display text-xl font-semibold">{SITE.location}</span>
            </li>
          </ul>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-dark mt-9">
            <MessageCircle size={18} aria-hidden="true" /> Chat on WhatsApp
          </a>
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-ink/10 sm:p-9">
            <Field id="name" label="Your name" error={errors.name}>
              <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={set('name')} className={`${field} ${border('name')}`} placeholder="Jane Wanjiru" {...aria('name')} />
            </Field>
            <Field id="contact" label="Phone number or email" error={errors.contact}>
              <input id="contact" name="contact" type="text" inputMode="text" autoComplete="email tel" value={values.contact} onChange={set('contact')} className={`${field} ${border('contact')}`} placeholder="07XX XXX XXX or you@example.com" {...aria('contact')} />
            </Field>
            <Field id="service" label="Service required" error={errors.service}>
              <select id="service" name="service" value={values.service} onChange={set('service')} className={`${field} ${border('service')}`} {...aria('service')}>
                <option value="">Select a service…</option>
                {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </Field>
            <Field id="details" label="Project details" error={errors.details}>
              <textarea id="details" name="details" rows={5} value={values.details} onChange={set('details')} className={`${field} ${border('details')} resize-y`} placeholder="What do you need, and when do you need it?" {...aria('details')} />
            </Field>

            <button type="submit" disabled={status === 'sending'} className="btn btn-dark w-full disabled:opacity-60">
              {status === 'sending' ? (<><Loader2 size={18} className="animate-spin" aria-hidden="true" /> Sending…</>) : SITE.formEndpoint ? 'Send inquiry' : 'Send via WhatsApp'}
            </button>

            <div aria-live="polite">
              {status === 'sent' && (
                <p className="flex items-start gap-2 rounded-xl bg-green-50 p-4 text-sm text-green-900">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" /> Thank you! Your inquiry was sent. We&rsquo;ll get back to you soon.
                </p>
              )}
              {status === 'whatsapp' && (
                <p className="flex items-start gap-2 rounded-xl bg-amber-50 p-4 text-sm text-amber-900">
                  <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>We opened WhatsApp with your details filled in. Press <strong>Send</strong> there to deliver your message; nothing has been sent yet. If it didn&rsquo;t open, <a className="font-semibold underline" href={waLink(summary())} target="_blank" rel="noopener noreferrer">tap here</a>.</span>
                </p>
              )}
              {status === 'error' && (
                <p className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-900" role="alert">
                  <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                  <span>Sorry, we couldn&rsquo;t send your inquiry. Please try again, or <a className="font-semibold underline" href={waLink(summary())} target="_blank" rel="noopener noreferrer">message us on WhatsApp</a>.</span>
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
