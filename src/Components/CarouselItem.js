import React from "react";
import "./Carousel.css";

const CarouselItem = props => {
  const { imageUrl } = props;

  return (
    <div className="carousel-items">
      <div className="carousel-item">
        <img alt="" src={imageUrl} />
      </div>
    </div>
  );
};

export default CarouselItem;
