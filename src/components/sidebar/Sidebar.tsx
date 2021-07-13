import React, { useEffect, useState } from "react";
import Image from "next/image";
import Avatar from "../../../public/images/abdulraoof.jpg";
import { useTranslation } from "react-i18next";
import { Paper, Slide, Tooltip, Typography } from "@material-ui/core";
import Link from "next/link";

interface SidebarProps {
  toggleDrawer(): void;
}
const Sidebar = ({ toggleDrawer }: SidebarProps) => {
  const [start, setStart] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setStart(true);
  }, []);

  return (
    <div className="fullheight flex__centerlize p">
      <Link href="/">
        <a onClick={toggleDrawer}>
          <Paper
            style={{
              display: "flex",
              borderRadius: "50%",
              overflow: "hidden",
              marginBottom: 15,
            }}
            elevation={2}
          >
            <Image
              src={Avatar}
              alt={t("common:abdulraoof_alt")}
              placeholder="blur"
              width={150}
              height={150}
            />
          </Paper>
        </a>
      </Link>

      <div style={{ minHeight: 150 }}>
        <Slide in={start} direction="right" timeout={400}>
          <Typography variant="h2" align="center">
            {t("common:hello")}! 👋
          </Typography>
        </Slide>
        <Slide in={start} direction="right" timeout={600}>
          <Typography variant="h2" style={{ fontSize: 24 }}>
            {t("common:iam")} {t("common:myname")} 🇾🇪
          </Typography>
        </Slide>
        <Slide in={start} direction="right" timeout={800}>
          <Typography variant="h1" style={{ fontSize: 18 }}>
            {t("common:occupation")}
          </Typography>
        </Slide>
        <Slide in={start} direction="right" timeout={900}>
          <Typography variant="subtitle2">
            {`${t("common:ibuild")} ${t("common:websites")} & ${t(
              "common:webservices"
            )}`}
          </Typography>
        </Slide>
        <Slide in={start} direction="right" timeout={1000}>
          <Typography variant="subtitle2">
            {t("common:ispeak")}{" "}
            <Tooltip title={t("common:arabic") as string}>
              <span>🇸🇦</span>
            </Tooltip>{" "}
            <Tooltip title={t("common:english") as string}>
              <span>🇺🇸</span>
            </Tooltip>{" "}
            <Tooltip title={t("common:mandrin") as string}>
              <span>🇨🇳</span>
            </Tooltip>
          </Typography>
        </Slide>
      </div>
    </div>
  );
};

export default Sidebar;
