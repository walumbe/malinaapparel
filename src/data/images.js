// Photography manifest. Every photo is a REAL photograph from Unsplash, licensed under the free Unsplash
// License (commercial use allowed, no attribution required; credits are shown in the footer as a courtesy).
// Licence type was confirmed on each photo's Unsplash page. These are stock photos that illustrate the
// services. They are NOT Malina Apparel's own work and are labelled as such on the site.
//
// To self-host (recommended before launch): `npm run images:download`, then set VITE_SELF_HOSTED_IMAGES=true.
// To check every URL resolves:               `npm run images:check`.
// To swap a photo: change its `id` (the number after "photo-" in an images.unsplash.com URL).
export const IMAGES = {
  hero: { id: '1679212622264-646085f5653f', alt: 'A rack of printed shirts hanging in a store', by: 'Bernd Dittrich' },
  shirts: { id: '1416339698674-4f118dd3388b', alt: 'Assorted-colour shirts on hangers', by: 'Jeff Sheldon' },
  tees: { id: '1766079234360-cb31e05da1c5', alt: 'Two white t-shirts with floral appliqués and bags', by: 'Raymond Yeung' },
  flyers: { id: '1741636174335-476c471bf5ac', alt: 'Bulletin board covered with printed flyers and announcements', by: 'Zoshua Colah' },
  paper: { id: '1612314578108-cdd41a612f2a', alt: 'White paper stationery on a white textile', by: 'Dragonfly Ave' },
  box: { id: '1626253934161-08cfea22e968', alt: 'Brown and white cardboard packaging box', by: 'Grupo Seripafer' },
  sign1: { id: '1717944404035-8405f7bb33ba', alt: 'Shop front with a sign on the window', by: 'Maria Lupan' },
  sign2: { id: '1651155177101-f4fe4d750521', alt: 'Shop front with a blue sign', by: 'sehoon ye' },
  neon: { id: '1642659904662-21a2b47d4429', alt: 'Neon open sign in a shop window', by: 'Dominique Shaw' },
  designer: { id: '1764737740462-2a310c7b2c39', alt: 'Designer sketching with a laptop and tools', by: 'Vooglam Eyewear' },
}

export const WIDTHS = [480, 800, 1200, 1600, 2200]
export const SELF_HOSTED = import.meta.env.VITE_SELF_HOSTED_IMAGES === 'true'
export const remoteUrl = (key, w, q = 70) =>
  `https://images.unsplash.com/photo-${IMAGES[key].id}?auto=format&fit=crop&fm=jpg&q=${q}&w=${w}`
export const localUrl = (key) => `/images/${key}.jpg`
