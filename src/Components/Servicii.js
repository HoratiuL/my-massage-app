import React, { Component } from "react";
import { Accordion } from "semantic-ui-react";
import ServiciiImg from "./ServiciiImg";
import "./Servicii.css";

class Servicii extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  // expandPanel = (id, expanded) => {
  //   // event.preventDefault();
  //   // const mymassages = this.state;
  //   const newState = this.state.mymassages.id !== expanded ? expanded : false;
  //   this.setState({
  //     id: newState
  //   });
  //   console.log("test");
  // };

  handleTitleClick = (e, itemProps) => {
    const { index } = itemProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { mymassages = [] } = this.props;
    const { activeIndex } = this.state;

    const panels = mymassages.map(item => ({
      title: `${item.title}`,
      content: `${item.jobDescription}`,
      image: `${item.poster}`,
      id: `${item.id}`,
      key: `key-${item.id}`,
      imageUrl: `${item.poster}`
    }));

    return (
      <div className="serv-container">
        <Accordion
          activeIndex={activeIndex}
          panels={panels}
          onTitleClick={this.handleTitleClick}
          className="serv-list"
        />

        {mymassages.map((item, index) => {
          const val = this.state.activeIndex === index ? `${item.poster}` : {};
          return (
            <ServiciiImg
              activeIndex={activeIndex}
              imageUrl={val}
              className="serv-img"
            />
          );
        })}

        {/* {mymassages
          .filter(val => {
            return val.active === true;
          })
          .map(val => {
            return <p>{val.title}</p>;
          })} */}
      </div>
    );
  }
}

export default Servicii;
