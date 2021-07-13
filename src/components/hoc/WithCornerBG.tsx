import React, { Fragment } from "react";
import { Box, Container, useTheme } from "@material-ui/core";

interface WithCornerBGProps {
  children: React.ReactChild | React.ReactChild[];
  image: React.ReactChild;
}

const WithCornerBG = ({ children, image }: WithCornerBGProps) => {
  const theme = useTheme();
  return (
    <Fragment>
      {image}
      <Box height={60} />
      <div
        style={{
          padding: "1rem",
        }}
      >
        <Container
          maxWidth="lg"
          style={{
            padding: "1rem",
            background: theme.palette.background.default,
            position: "relative",
          }}
        >
          {children}
        </Container>
      </div>
    </Fragment>
  );
};

export default WithCornerBG;
