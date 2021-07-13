import React, { Fragment } from "react";
import Link from "next/link";
import { Typography } from "@material-ui/core";
import Seo from "../src/components/seo/seo";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const About = () => {
  return (
    <Fragment>
      <Seo
        title="About Page"
        description="About page description"
        keywords="about page keywords"
      />
      <Typography>About Page</Typography>
      <Link href="/">
        <a>to home</a>
      </Link>
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
export default About;
