import React, { Component } from "react";
import axios from "axios";
import Slider from "react-slick";
import "./SlickCarousel.css";

class SlickCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: []
    };
  }

  componentWillMount() {
    axios.get("http://localhost:5000/mycards").then(resp => {
      this.setState({ slides: resp.data });
      console.log(resp);
    });
  }

  render() {
    const { slides } = this.state;
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      width: "550px",
      autoplay: true,
      display: true,
      centerPadding: "-0px",
      // lazyLoad: true,
      slidesToShow: 3,
      speed: 5000
      //   fade: true
    };
    return (
      <Slider {...settings}>
        {slides.map(img => (
          <div>
            <img src={img.poster} />
            <h4>{img.title}</h4>
          </div>
        ))}
      </Slider>
    );
  }
}

export default SlickCarousel;
