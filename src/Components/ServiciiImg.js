import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import "./Servicii.css";

const ServiciiImg = props => {
  const { imageUrl = "" } = props;
  return (
    <div>
      <CardMedia
        component="img"
        className="serv-img img-fluid rounded img-thumbnail"
        image={imageUrl}
        // active={activeIndex}
      />
    </div>
  );
};

export default ServiciiImg;
