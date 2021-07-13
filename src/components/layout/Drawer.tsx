import React from "react";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Sidebar from "../sidebar/Sidebar";
import { SwipeableDrawer } from "@material-ui/core";

const DRAWER_WIDTH = 280;
interface SideDrawerProps {
  children: JSX.Element;
  open: boolean;
  isMobile: boolean;
  toggleDrawer(): void;
}

const SideDrawer = ({
  children,
  open,
  isMobile,
  toggleDrawer,
}: SideDrawerProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <SwipeableDrawer
        sx={{
          minWidth: open ? DRAWER_WIDTH : 0,
          flexShrink: 0,
          // transition: "all 100ms ease-in",
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            bgcolor: "secondary.dark",
          },
        }}
        variant={isMobile ? "temporary" : "persistent"}
        open={open}
        onClose={toggleDrawer}
        onOpen={() => {
          // Why this is mandatory prop?
        }}
      >
        <Sidebar
          toggleDrawer={() => {
            if (isMobile) {
              toggleDrawer();
            }
          }}
        />
      </SwipeableDrawer>
      {children}
    </Box>
  );
};

export default SideDrawer;
