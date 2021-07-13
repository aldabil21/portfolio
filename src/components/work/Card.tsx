import styled from "@emotion/styled";
import { Theme, Typography, useTheme } from "@material-ui/core";
import React from "react";
import { WorkCard } from "../../models/workCards";
import StarRoundedIcon from "@material-ui/icons/StarRounded";

const CardWrapper = styled.div(({ theme }: { theme: Theme }) => ({
  background: `linear-gradient(230deg, ${theme.palette.secondary.main} 25%, ${theme.palette.primary.dark} 100%)`,
  borderRadius: 3,
  padding: "0.5rem",
}));
const CardInner = styled.div(() => ({
  background: `#ffffff`,
  borderRadius: 3,
  overflow: "hidden",
}));
const CardHeader = styled.header(({ bg }: { bg: string }) => ({
  background: `url(${bg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: 320,
  backgroundPosition: "right",
  boxShadow: "0 0 15px #cccccc",
  transition: "all 200ms ease-in",
  cursor: "move",
  "&:hover": {
    opacity: 0.7,
  },
}));
interface WorkingCardProps {
  card: WorkCard;
}
const WorkingCard = ({ card }: WorkingCardProps) => {
  const theme = useTheme();

  return (
    <CardWrapper theme={theme}>
      <CardInner>
        <CardHeader bg={card.bg}>
          {card.faved && <StarRoundedIcon color="warning" fontSize="large" />}
        </CardHeader>
        <Typography
          color="secondary"
          variant="h6"
          style={{ padding: "0.5rem" }}
        >
          {card.title}
        </Typography>
      </CardInner>
    </CardWrapper>
  );
};

export default WorkingCard;
