import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import type { UseTranslationOptions } from 'react-i18next';
import type { languages, namespaces } from './settings';
import { defaultNS, fallbackLng, getOptions } from './settings';

type Lang = (typeof languages)[number];
type Namespace = (typeof namespaces)[number] | (typeof namespaces)[number][];

const initI18next = async (lng?: Lang, namespace?: Namespace) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, ns: string) => import(`./locales/${language}/${ns}.json`)
      )
    )
    .init(getOptions(lng, namespace));
  return i18nInstance;
};

export async function getTranslation(
  lng?: Lang,
  namespace?: Namespace,
  options: UseTranslationOptions = {}
) {
  const ns = namespace || defaultNS;
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(
      lng || fallbackLng,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix
    ),
    i18n: i18nextInstance,
  };
}
