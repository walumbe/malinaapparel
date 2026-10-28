import { useState } from 'react'
import { IMAGES, WIDTHS, SELF_HOSTED, localUrl, remoteUrl } from '../data/images'

/**
 * Responsive photo that fills its parent (parent must be `relative` with a fixed aspect ratio, which
 * prevents layout shift). Falls back to a plain dark panel, never a broken-image icon.
 */
export default function Img({ name, alt, sizes = '100vw', priority = false, className = '' }) {
  const [failed, setFailed] = useState(false)
  const text = alt ?? IMAGES[name].alt
  if (failed) return <div role="img" aria-label={text} className="absolute inset-0 bg-ink" />

  const src = SELF_HOSTED ? localUrl(name) : remoteUrl(name, 1200)
  const srcSet = SELF_HOSTED ? undefined : WIDTHS.map((w) => `${remoteUrl(name, w)} ${w}w`).join(', ')
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={srcSet ? sizes : undefined}
      alt={text}
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : 'auto'}
      decoding={priority ? 'sync' : 'async'}
      onError={() => setFailed(true)}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  )
}
