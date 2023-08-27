export const globalJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Whitelabel',
  image: (process.env.NEXT_PUBLIC_BASE_URL || '') + '/images/default-cover.jpg',
  url: 'https://whitelabel.com',
  sameAs: [
    'https://twitter.com/whitelabel',
    'https://www.instagram.com/whitelabel',
    'https://www.facebook.com/whitelabel',
  ],
};
