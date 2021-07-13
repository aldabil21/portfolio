import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { BASEURL } from "../../util/constants";

interface SeoProps {
  title: string;
  description: string;
  keywords?: string;
  twitter?: Twitterprops;
  og?: OGprops;
}
interface Twitterprops {
  card?: string;
  title: string;
  description: string;
  url?: string;
  image?: string;
}
interface OGprops {
  sitename?: string;
  type?: string;
  title: string;
  description: string;
  url?: string;
  image?: string;
}
const Seo = ({ title, description, keywords, twitter, og }: SeoProps) => {
  const { locale, pathname } = useRouter();
  const { t } = useTranslation();
  const ogImg = og?.image || BASEURL + "/images/og-img.jpg";
  const ogUrl = og?.url || BASEURL + pathname;
  const ogSitename = og?.sitename || t("common:sitename");

  return (
    <Head>
      {/* SEO */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords || ""} />
      {/* Open graph */}
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={og?.type || "website"} />
      <meta property="og:site_name" content={ogSitename} />
      <meta property="og:title" content={og?.title || title} />
      <meta
        property="og:description"
        content={og?.description || description}
      />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImg} />
      {/* Twitter */}
      <meta
        property="twitter:card"
        content={twitter?.card || "summary_large_image"}
      />
      <meta property="twitter:title" content={twitter?.title || title} />
      <meta
        property="twitter:description"
        content={twitter?.description || description}
      />
      <meta property="twitter:url" content={twitter?.url || ogUrl} />
      <meta property="twitter:image" content={twitter?.image || ogImg} />
    </Head>
  );
};

export default Seo;
