// SAMPLE concepts only. Each item is shown with a "Sample concept" badge.
//
// To replace a sample with real client work, add an `image` URL (put the file
// in /public/work/ and use '/work/your-photo.jpg') and set `isSample: false`.
// Images should be 4:3 (e.g. 1200x900) so the grid stays tidy.
import { PALETTES as P } from './site'

export const CATEGORIES = ['All', 'Logos', 'Stationery', 'Print', 'Packaging', 'Merchandise', 'Signage', 'Social']

export const PORTFOLIO = [
  { id: 1, title: 'Logo & identity concept', category: 'Logos', mockup: 'LogoSheet', name: 'Kilele', mark: 0, palette: P.paper },
  { id: 2, title: 'Business card set', category: 'Stationery', mockup: 'Cards', name: 'Mizani', mark: 3, palette: P.dark },
  { id: 3, title: 'Tri-fold brochure', category: 'Print', mockup: 'Brochure', name: 'Savanna', mark: 4, palette: P.green },
  { id: 4, title: 'Product packaging box', category: 'Packaging', mockup: 'Box', name: 'Asali', mark: 1, palette: P.yellow },
  { id: 5, title: 'Branded t-shirt', category: 'Merchandise', mockup: 'Tee', name: 'Rift', mark: 2, palette: P.dark },
  { id: 6, title: 'Shopfront signage', category: 'Signage', mockup: 'Sign', name: 'Duka Bora', mark: 0, palette: P.blue },
  { id: 7, title: 'Event poster', category: 'Print', mockup: 'Poster', name: 'Jamii', mark: 1, palette: P.pink },
  { id: 8, title: 'Social media pack', category: 'Social', mockup: 'Social', name: 'Mwanga', mark: 4, palette: P.paper },
  { id: 9, title: 'Bottle label design', category: 'Packaging', mockup: 'Bottle', name: 'Maji', mark: 2, palette: P.blue },
  { id: 10, title: 'Corporate mug', category: 'Merchandise', mockup: 'Mug', name: 'Boma', mark: 3, palette: P.pink },
  { id: 11, title: 'Retail shopping bag', category: 'Packaging', mockup: 'Bag', name: 'Zuri', mark: 0, palette: P.green },
  { id: 12, title: 'Logo suite', category: 'Logos', mockup: 'LogoSheet', name: 'Nuru', mark: 1, palette: P.dark },
].map((i) => ({ isSample: true, image: null, ...i }))
