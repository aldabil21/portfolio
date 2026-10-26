export const globalJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Abdulraoof Aldabil',
  jobTitle: 'Engineering Lead & Solution Architect',
  telephone: '+966 55 38 45459',
  image: (process.env.NEXT_PUBLIC_BASE_URL || '') + '/images/default-cover.jpg',
  url: 'https://aldabil.me',
  sameAs: [
    'https://twitter.com/aldabil21',
    'https://linkedin.com/in/aldabil',
    'https://github.com/aldabil21',
  ],
};
