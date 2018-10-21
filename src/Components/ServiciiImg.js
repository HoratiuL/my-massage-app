import React from "react";
import CardMedia from "@material-ui/core/CardMedia";

const ServiciiImg = props => {
  const { imageUrl = "" } = props;
  return (
    <div>
      <CardMedia
        component="img"
        // className="card-img"
        image={imageUrl}
        // active={activeIndex}
      />
    </div>
  );
};

export default ServiciiImg;
