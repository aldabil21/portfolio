import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import Script from 'next/script';
import { dir } from 'i18next';
import { globalJsonLd } from '@/util/seo/json-ld';
import Layout from '@/components/layout';
import { languages } from '../../i18n/settings';
import { homeMetadata } from '../../util/seo/metadata';
import { cairoFont } from '../../util/fonts';
import '../../styles/globals.css';

export const generateMetadata = ({ params }: NextPageProps): Promise<Metadata> => {
  return homeMetadata(params.lang);
};

export const generateStaticParams = () => {
  return languages.map((lang) => ({ lang }));
};

const LangRootLayout: NextLayout<{ auth: React.ReactNode }> = ({ children, params: { lang } }) => {
  const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER;
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
      {/* GTM */}
      {GTM_ID ? (
        <Script id='google-tag-manager'>
          {`
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
             })(window,document,'script','dataLayer','${GTM_ID}');
           `}
        </Script>
      ) : null}
      <body className={`${cairoFont.variable} bg-body font-cairo text-text`}>
        <Layout lang={lang}>{children}</Layout>

        {GTM_ID ? (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
            }}
          />
        ) : null}
      </body>
    </html>
  );
};

export default LangRootLayout;
