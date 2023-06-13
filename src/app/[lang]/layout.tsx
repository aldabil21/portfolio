import { Metadata } from 'next';
import { dir } from 'i18next';
import { languages } from '@/i18n/settings';
import { homeMetadata } from '@/util/seo/metadata.ts';
import { cairoFont } from '@/util/fonts';
import { globalJsonLd } from '@/util/seo/jsonLd';
import { cookies } from 'next/headers';
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
    <html lang={lang} dir={dir(lang)} className={cookiesList.get('theme')?.value || 'dark'}>
      <head>
        {/* Global JSON-LD */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
      </head>
      <body className={`${cairoFont.variable} bg-body font-cairo`}>
        {/* Page */}
        {children}
      </body>
    </html>
  );
};

export default LangRootLayout;
