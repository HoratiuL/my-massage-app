import React, { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class ServiciiList extends Component {
  state = {
    panel: "",
    activeIndex: 0
  };

  handleStateChange = panel => () => this.setState({ panel });

  handleTitleClick = (e, index) => {
    // const { index } = itemProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { mymassages = [] } = this.props;
    return (
      <div>
        {mymassages.map(panel => (
          <div>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                onClick={() => this.handleTitleClick(panel)}
              >
                <Typography variant="headline">{panel.title}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="subheading">
                  {panel.jobDescription}
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        ))}
      </div>
    );
  }
}

export default ServiciiList;
