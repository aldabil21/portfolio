import React, { Fragment } from "react";
import { Grid, Typography } from "@material-ui/core";
import Seo from "../src/components/seo/seo";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import SkillLogos from "../src/components/skills/SkillLogos";
import WithCornerBG from "../src/components/hoc/WithCornerBG";
import BG from "../public/images/skill-bg-800.png";
import { Trans, useTranslation } from "next-i18next";
import LinkText from "../src/components/common/LinkText";
import Breadcrumbs from "../src/components/common/Breadcrumbs";
import Image from "next/image";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <WithCornerBG
      image={
        <div style={{ opacity: 0.5 }}>
          <Image src={BG} alt="skills" layout="fill" objectFit="cover" />
        </div>
      }
    >
      <Seo
        title={t("skills:seo_title")}
        description={t("skills:seo_desc")}
        keywords={t("skills:seo_words")}
      />
      <Breadcrumbs />
      <Grid container spacing={1}>
        <Grid item md={5} sm={12} xs={12}>
          <Typography variant="h1" style={{ fontSize: "2.2rem" }} gutterBottom>
            {t("skills:title")}
          </Typography>
          <Typography gutterBottom>{t("skills:p1")}</Typography>
          <Typography gutterBottom>{t("skills:p2")}</Typography>
          <Typography gutterBottom>{t("skills:p3")}</Typography>
          <Typography gutterBottom>
            <Trans ns="skills" i18nKey="p4">
              <LinkText href="https://wa.me/966507487620" external newtab>
                contact
              </LinkText>
              ,<LinkText href="/work">work</LinkText>
            </Trans>
          </Typography>
        </Grid>
        <Grid item md={7} sm={12} xs={12}>
          <SkillLogos />
        </Grid>
      </Grid>
    </WithCornerBG>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common", "skills"])),
    },
  };
};
export default Skills;
