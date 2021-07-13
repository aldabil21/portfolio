import React from "react";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import WithCornerBG from "../src/components/hoc/WithCornerBG";
import BG from "../public/images/skill-bg-800.png";
import Breadcrumb from "../src/components/common/Breadcrumbs";
import Seo from "../src/components/seo/seo";
import { Typography } from "@material-ui/core";
import WorkSlider from "../src/components/work/WorkSlider";
import { useRouter } from "next/router";
import { workCards } from "../src/models/workCards";

const Work = () => {
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <WithCornerBG
      image={
        <div style={{ opacity: 0.5 }}>
          <Image src={BG} alt="works" layout="fill" objectFit="cover" />
        </div>
      }
    >
      <Seo
        title={t("work:seo_title")}
        description={t("work:seo_desc")}
        keywords={t("work:seo_words")}
      />
      <Breadcrumb />
      <Typography variant="h1" style={{ fontSize: "2.2rem" }} gutterBottom>
        {t("work:title")}
      </Typography>

      <WorkSlider cards={workCards[locale!]} />
    </WithCornerBG>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "work"])),
    },
  };
};

export default Work;
