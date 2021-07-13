import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Slide,
} from "@material-ui/core";
import { useTranslation } from "next-i18next";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";

interface BottomNavProps {
  open: boolean;
  toHome(): void;
  toggleDrawer(): void;
}
const BottomNav = ({ open, toHome, toggleDrawer }: BottomNavProps) => {
  const { t } = useTranslation();

  return (
    <Slide in={open} direction="up" timeout={200}>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "transparent",
          backdropFilter: "blur(5px)",
        }}
        elevation={3}
      >
        <BottomNavigation showLabels style={{ background: "transparent" }}>
          <BottomNavigationAction
            label={t("common:about")}
            icon={<InfoRoundedIcon />}
            style={{ maxWidth: "100%" }}
            onClick={toggleDrawer}
          />
          <BottomNavigationAction
            label={t("common:home")}
            icon={<HomeRoundedIcon />}
            style={{ maxWidth: "100%" }}
            onClick={toHome}
          />
        </BottomNavigation>
      </Paper>
    </Slide>
  );
};

export default BottomNav;
