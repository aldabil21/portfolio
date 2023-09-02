import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { dir } from 'i18next';
import { globalJsonLd } from '@/util/seo/json-ld';
import Layout from '@/components/layout';
import { languages } from '../../i18n/settings';
import { homeMetadata } from '../../util/seo/metadata';
import { cairoFont } from '../../util/fonts';
import 'ui/styles.css';
import '@/styles/globals.css';

export const generateMetadata = ({ params }: NextPageProps): Promise<Metadata> => {
  return homeMetadata(params.lang);
};

export const generateStaticParams = () => {
  return languages.map((lang) => ({ lang }));
};

const LangRootLayout: NextLayout<{ auth: React.ReactNode }> = ({ children, params: { lang } }) => {
  const cookiesList = cookies();

  return (
    <html className={cookiesList.get('theme')?.value || 'dark'} dir={dir(lang)} lang={lang}>
      <head>
        {/* Global JSON-LD */}
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
          type='application/ld+json'
        />
      </head>
      <body className={`${cairoFont.variable} bg-body font-cairo text-text`}>
        <Layout lang={lang}>{children}</Layout>
      </body>
    </html>
  );
};

export default LangRootLayout;
