import React, { Component } from "react";
import axios from "axios";
import Coverflow from "react-coverflow";

class CoverflowPack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  componentWillMount() {
    axios.get("http://localhost:5000/mycards").then(images => {
      this.setState({ images: images.data });
      //   console.log(images);
    });
  }

  render() {
    const { images } = this.state;
    return (
      <Coverflow
        width={960}
        height={480}
        //   infiniteScroll
        displayQuantityOfSide={2}
        navigation={false}
        //   enableScroll={true}
        active={3}
        //   currentFigureScale={0.7}
        enableHeading={true}
      >
        <div role="menuitem" tabIndex="0">
          <img
            src="./images/massage-600x400.jpg"
            alt="title or description"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        {images.map(img => {
          return <img src={img.poster} alt="" />;
        })}
        {/* <img
            src="[image/path/please_change]"
            alt="title or description"
            data-action="http://andyyou.github.io/react-coverflow/"
          />
          <img
            src="[image/path/please_change]"
            alt="title or description"
            data-action="http://andyyou.github.io/react-coverflow/"
          /> */}
      </Coverflow>
    );
  }
}

export default CoverflowPack;
