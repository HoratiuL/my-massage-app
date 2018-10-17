import React, { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const ServiciiList2 = props => {
  const { title2, descr } = props;
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="headline">{title2}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography variant="paragraph">{descr}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ServiciiList2;
