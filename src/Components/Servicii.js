import React, { Component } from "react";
import { Accordion, Image } from "semantic-ui-react";
import ServiciiImg from "./ServiciiImg";
import "./Servicii.css";

class Servicii extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      image: ""
    };
  }

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
      <div className="serv-container row">
        <Accordion
          activeIndex={activeIndex}
          panels={panels}
          onTitleClick={this.handleTitleClick}
          className="serv-list col-lg-3"
          onClick={this.setImage}
        />
        {/* <Image src={image} /> */}

        {mymassages.map((item, index) => {
          const val =
            this.state.activeIndex === index ? `${item.poster}` : null;
          return (
            <ServiciiImg
              key={index}
              activeIndex={activeIndex}
              imageUrl={val}
              // className="serv-img img-fluid rounded img-thumbnail"
            />
          );
        })}
      </div>
    );
  }
}

export default Servicii;
