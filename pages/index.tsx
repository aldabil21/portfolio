import { Fragment } from "react";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Seo from "../src/components/seo/seo";
import IconWrapper from "../src/components/home/IconWrapper";
import { getMenuIcons } from "../src/components/home/icons";
import {
  WithMediaQuery,
  WithMediaQueryProps,
} from "../src/components/hoc/WithMediaQuery";
import WithMatrixBG from "../src/components/hoc/WithMatrixBG";
import { useTranslation } from "next-i18next";

interface HomeProps extends WithMediaQueryProps {}

const Home = ({ mdDown }: HomeProps) => {
  const iconWidth = mdDown ? 70 : 100;
  const MENU_ICONS = getMenuIcons(mdDown ? 40 : 60);
  const { t } = useTranslation();

  return (
    <Fragment>
      <Seo
        title={t("common:home_title")}
        description={t("common:home_desc")}
        keywords={t("common:home_keywords")}
      />
      <WithMatrixBG>
        <div className="fullheight flex__centerlize">
          <section
            style={{ maxHeight: iconWidth * 5.5 }}
            className="mid-sec"
            id="icon_wrapper"
          >
            <div
              style={{
                position: "relative",
              }}
              className="fullheight"
            >
              <IconWrapper
                icons={MENU_ICONS}
                iconWidth={iconWidth}
                perRow={3}
              />
            </div>
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

export default WithMediaQuery(Home);
