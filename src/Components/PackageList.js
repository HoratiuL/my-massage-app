import React, { Component } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Row, Col } from "react-bootstrap";
import "./PackageList.css";

class PackageList extends Component {
  state = {
    expanded: ""
  };

  handleChange = item => (event, expanded) => {
    this.setState({
      expanded: expanded ? item : false
    });
  };

  render() {
    const { mymassages = [] } = this.props;
    const { expanded } = this.state;
    return (
      <div>
        {mymassages.map(item => (
          <div>
            <ExpansionPanel
              expanded={expanded === item}
              onChange={this.handleChange(item)}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="headline">{item.title}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="panel-bck">
                <Typography
                  variant="subheading"
                  //   color="error"
                  className="panel-text"
                >
                  {item.jobDescription}
                </Typography>

                <CardMedia
                  component="img"
                  alt=""
                  image={item.poster}
                  title={item.title}
                  style={{ alignItems: "flex - end" }}
                  className=" card-img"
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        ))}
      </div>
    );
  }
}

export default PackageList;
