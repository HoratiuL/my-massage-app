import React, { Component } from "react";
import { Label, Accordion, Image } from "semantic-ui-react";
import CardMedia from "@material-ui/core/CardMedia";

import ServiciiList from "./ServiciiList";
import ServiciiImg from "./ServiciiImg";

class Servicii extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      mymassages: [],
      activeIndex: 0
    };
  }

  // expandPanel = id => {
  //   console.log("click 1");

  //   this.expandPanel(id).then(expanded => {
  //     const { mymassages } = this.state;
  //     const filtered = mymassages.filter(m => m.id !== id);
  //     this.setState({ mymassages: filtered });
  //   });
  // };

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
    const { mymassages } = this.props;

    let panels = mymassages.map(item => ({
      title: {
        content: <Label content={item.title} />,
        key: `title-${item.id}`
      },
      content: {
        content: <p> {item.jobDescription} </p>,
        key: `content-${item.id}`
      },
      key: `${item.id}`,
      imageUrl: `${item.poster}`
    }));

    const { activeIndex } = this.state;
    const { image } = this.props;

    return (
      <div>
        {/* <ServiciiImg /> */}
        {/* {mymassages.map(info => (
          <ServiciiList
            expandPanel={this.expandPanel}
            key={info.id}
            title={info.title}
            descr={info.jobDescription}
          />
        ))} */}
        <Accordion
          activeIndex={activeIndex}
          panels={panels}
          onTitleClick={this.handleTitleClick}
        />
        <Image component="img" src={image} />
      </div>
    );
  }
}

export default Servicii;
