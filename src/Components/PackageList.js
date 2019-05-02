import React, { Component, useState, useEffect } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Row, Col } from "react-bootstrap";
import "./PackageList.css";
import axios from "axios";

// class PackageList extends Component {
//   state = {
//     expanded: ""
//   };

//   handleChange = item => (event, expanded) => {
//     this.setState({
//       expanded: expanded ? item : false
//     });
//   };

//   render() {
//     const { mymassages = [] } = this.props;
//     const { expanded } = this.state;
//     return (
//       <div>
//         {mymassages.map(item => (
//           <div>
//             <ExpansionPanel
//               expanded={expanded === item}
//               onChange={this.handleChange(item)}
//             >
//               <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//                 <Typography variant="headline">{item.title}</Typography>
//               </ExpansionPanelSummary>
//               <ExpansionPanelDetails className="panel-bck">
//                 <Typography variant="subheading" className="panel-text">
//                   {item.jobDescription}
//                 </Typography>
//                 <CardMedia
//                   component="img"
//                   alt=""
//                   image={item.poster}
//                   title={item.title}
//                   style={{ alignItems: "flex - end" }}
//                   className=" card-img"
//                 />
//               </ExpansionPanelDetails>
//             </ExpansionPanel>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// HOOKS STYLE

function PackageList() {
  const [expanded, setExpanded] = useState("");
  const [data, setData] = useState([]);

  const handleChange = item => (event, isExpanded) => {
    setExpanded(isExpanded ? item : false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/mymassages/");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map(item => (
        <div>
          <ExpansionPanel
            expanded={expanded === item}
            onChange={handleChange(item)}
            className=""
          >
            <ExpansionPanelSummary className="" expandIcon={<ExpandMoreIcon />}>
              <Typography variant="headline">{item.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className="panel-bck ">
              <Typography variant="subheading" className="panel-text">
                {item.jobDescription}
              </Typography>
              <CardMedia
                component="img"
                alt=""
                image={item.poster}
                title={item.title}
                // style={{
                //   alignItems: "flex-end"
                // }}
                className="card-img "
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      ))}

      {/* {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))} */}
    </div>
  );
}
export default PackageList;
