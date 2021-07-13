import { Typography } from "@material-ui/core";
import { GetStaticProps } from "next";
import { Trans, useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { Fragment } from "react";
import LinkText from "../src/components/common/LinkText";
import WithMatrixBG from "../src/components/hoc/WithMatrixBG";
import Seo from "../src/components/seo/seo";

const Error404 = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <Seo
        title={t("common:404_title")}
        description="404 Error - Page Not Found"
      />
      <WithMatrixBG>
        <div className="fullheight flex__centerlize">
          <section className="mid-sec flex__centerlize">
            <Typography variant="h1" gutterBottom>
              {t("common:page_not_found")}
            </Typography>
            <Typography variant="h2" gutterBottom>
              {t("common:404_title")}
            </Typography>
            <Typography>
              <Trans ns="common" i18nKey="404_desc">
                <LinkText href="/">home</LinkText>
              </Trans>
            </Typography>
          </section>
        </div>
      </WithMatrixBG>
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  };
};
export default Error404;
