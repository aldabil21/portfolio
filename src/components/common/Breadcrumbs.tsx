import { Breadcrumbs, Typography } from "@material-ui/core";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@material-ui/icons/NavigateBeforeRounded";

const Breadcrumb = () => {
  const { pathname, locale } = useRouter();
  const { t, i18n } = useTranslation();
  const links = pathname.split("/").filter((p) => p);
  const Separator =
    i18n.dir(locale) === "ltr"
      ? NavigateNextRoundedIcon
      : NavigateBeforeRoundedIcon;
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      style={{ paddingBottom: "1rem" }}
      separator={<Separator fontSize="small" />}
    >
      <Link href="/">
        <a>{t("common:home")}</a>
      </Link>
      {links.map((link, i) => {
        const last = i === links.length - 1;
        const to = `/${links.slice(0, i + 1).join("/")}`;
        const text = link[0].toUpperCase() + link.slice(1);
        return last ? (
          <Typography color="action.active" key={to}>
            {text}
          </Typography>
        ) : (
          <Link href={to} key={to}>
            <a>{text}</a>
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
