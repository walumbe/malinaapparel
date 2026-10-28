// Inspiration gallery. Every item below is a licensed STOCK photograph (see src/data/images.js) shown to
// illustrate the kind of work Malina Apparel offers. It is labelled "Illustrative photo" on the site.
//
// HOW TO ADD REAL CLIENT WORK
// 1. Put the photo (4:3, e.g. 1200x900) in /public/work/ (e.g. public/work/my-job.jpg).
// 2. Add an item with `photo: '/work/my-job.jpg'` and `real: true`. The label disappears for that item.
//    (`image` is ignored when `photo` is set.)
export const CATEGORIES = ['All', 'Logos', 'Stationery', 'Print', 'Packaging', 'Merchandise', 'Signage']

export const PORTFOLIO = [
  { id: 1, title: 'Printed tees & tote bags', category: 'Merchandise', image: 'tees' },
  { id: 2, title: 'Shopfront signage', category: 'Signage', image: 'sign1' },
  { id: 3, title: 'Product packaging box', category: 'Packaging', image: 'box' },
  { id: 4, title: 'Custom apparel range', category: 'Merchandise', image: 'shirts' },
  { id: 5, title: 'Posters & flyers', category: 'Print', image: 'flyers' },
  { id: 6, title: 'Illuminated shop sign', category: 'Signage', image: 'neon' },
  { id: 7, title: 'Letterheads & stationery', category: 'Stationery', image: 'paper' },
  { id: 8, title: 'Storefront branding', category: 'Signage', image: 'sign2' },
  { id: 9, title: 'Logo & concept sketching', category: 'Logos', image: 'designer' },
].map((i) => ({ real: false, photo: null, ...i }))
