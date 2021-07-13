import React from "react";
import { Chip, Collapse, Typography } from "@material-ui/core";
import { WorkCard } from "../../models/workCards";
import styled from "@emotion/styled";
import { useTranslation } from "next-i18next";
import { ICONS } from "../../util/icons";

interface WorkingCardProps {
  card: WorkCard;
}

const TagChip = styled(Chip)`
  border-radius: 0;
  margin: 2px;
`;

const CardInfo = ({ card }: WorkingCardProps) => {
  const { t } = useTranslation();
  return (
    <Collapse
      in
      style={{ marginTop: 420, minHeight: 300 }}
      unmountOnExit
      mountOnEnter
    >
      <Typography variant="h2" gutterBottom>
        {card.title}
      </Typography>
      <section style={{ paddingBottom: 10 }}>
        {card.tags.split(",").map((tag, i) => (
          <TagChip key={i} label={tag} />
        ))}
      </section>
      <Typography gutterBottom>{card.description}</Typography>

      <a href={card.site} target="_blank" rel="noreferrer">
        <TagChip
          label={t("work:visit_site")}
          icon={ICONS.EXTERNAL_LINK(20, "#f7f7f7")}
          onClick={() => {}}
        />
      </a>
    </Collapse>
  );
};

export default CardInfo;
