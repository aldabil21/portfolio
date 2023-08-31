export type Project = {
  project: string;
  slug: string;
  description: number[];
  thumbnail: string;
  numberOfImages: number;
  live?: string;
};

export const projectsList: Project[] = [
  {
    project: 'sagp',
    slug: 'formula-1-sagp-2023',
    description: [1, 2],
    thumbnail: '/images/sagp/thumbnail.png',
    numberOfImages: 6,
    live: 'https://tickets.saudiarabiangp.com',
  },
  {
    project: 'saudicup',
    slug: 'the-saudi-cup-2023',
    description: [1, 2],
    thumbnail: '/images/saudicup/thumbnail.png',
    numberOfImages: 6,
    live: 'https://tickets.thesaudicup.com.sa',
  },
  {
    project: 'diriyah',
    slug: 'diriyah-season-2023',
    description: [1, 2, 3],
    thumbnail: '/images/diriyah/thumbnail.png',
    numberOfImages: 6,
    live: 'https://diriyahseason.sa',
  },
  {
    project: 'wtcr',
    slug: 'saudi-motorsports-wtcr',
    description: [1, 2, 3],
    thumbnail: '/images/wtcr/thumbnail.png',
    numberOfImages: 5,
    live: 'https://tickets.saudimotorsport.com',
  },
  {
    project: 'neom',
    slug: 'neom-the-line-exhibition',
    description: [1, 2],
    thumbnail: '/images/neom/thumbnail.png',
    numberOfImages: 6,
    live: 'https://theline.halayalla.com',
  },
];
