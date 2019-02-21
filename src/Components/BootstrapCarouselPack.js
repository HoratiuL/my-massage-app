import React, { Component } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import $ from "jquery";
// import "./BootstrapCarouselPack.css";

class BootstrapCarouselPack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      index: 0,
      direction: null
    };
  }
  componentWillMount() {
    axios.get("http://localhost:5000/mycards").then(resp => {
      this.setState({ images: resp.data });
    });
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });

    var itemPositions = [];
    var numberOfItems = this.state.images.length;

    for (var i = 0; i < numberOfItems; i++) {
      if (i === 0) {
        itemPositions[i] = "left-hidden";
      } else if (i === 1) {
        itemPositions[i] = "left";
      } else if (i === 2) {
        itemPositions[i] = "middle";
      } else if (i === 3) {
        itemPositions[i] = "right";
      } else {
        itemPositions[i] = "right-hidden";
      }
    }

    $(".carousel-item").each(function(index) {
      $(this).addClass(itemPositions[index]);
    });
  };
  assignPosition = () => {};

  render() {
    const { images, index, direction } = this.state;
    return (
      <div>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          // onChange={this.assignPosition}
          fade={true}
          pauseOnHover={false}
          interval={3000}
          controls={true}
        >
          {images.map(img => (
            <Carousel.Item>
              <img className="d-block w-100" src={img.poster} alt="" />
            </Carousel.Item>
          ))}
          {/* <Carousel.Caption>Text1</Carousel.Caption> */}
        </Carousel>
      </div>
    );
  }
}

export default BootstrapCarouselPack;
