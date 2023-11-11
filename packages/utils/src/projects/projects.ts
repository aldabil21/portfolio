export type Project = {
  project: string;
  slug: string;
  description: number[];
  thumbnail: string;
  numberOfImages: number;
  live?: string;
  soon?: string;
};

export const projectsList: Project[] = [
  {
    project: 'riyadhseason',
    slug: 'riyadh-season-23-24',
    description: [1, 2],
    thumbnail: '/images/riyadhseason/thumbnail.png',
    numberOfImages: 5,
    live: 'https://riyadhseason.com',
  },
  {
    project: 'fcwc',
    slug: 'fifa-club-world-cup-23-24-season',
    description: [1, 2],
    thumbnail: '/images/fcwc/thumbnail.png',
    numberOfImages: 9,
    live: 'https://fifaclubwc2023.com',
  },
  {
    project: 'awwal',
    slug: 'alawwal-park-23-24-season',
    description: [1, 2],
    thumbnail: '/images/awwal/thumbnail.png',
    numberOfImages: 11,
    live: 'https://tickets.victoryarena.com',
  },
  {
    project: 'afcon',
    slug: 'africa-cup-of-nations-2023',
    description: [1, 2, 3],
    thumbnail: '/images/afcon/thumbnail.png',
    numberOfImages: 5,
    live: 'https://frmftickets.ma',
  },
  {
    project: 'misk',
    slug: 'misk-hub-event-management',
    description: [1, 2, 3],
    thumbnail: '/images/misk/thumbnail.png',
    numberOfImages: 12,
    live: 'https://eventhub.misk.org.sa',
  },
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
