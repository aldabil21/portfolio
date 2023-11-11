export const languages: Languages[] = ['en', 'ar'];
export const fallbackLng = languages[0];
export const namespaces = ['common', 'home', 'projects'] as const;
export const defaultNS = namespaces[0];

export function getOptions(
  lng: (typeof languages)[number] = fallbackLng,
  ns: (typeof namespaces)[number] | (typeof namespaces)[number][] = defaultNS
) {
  return {
    // debug: true,
    supportedLngs: languages,
    // preload: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
