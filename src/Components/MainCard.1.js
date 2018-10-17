import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import "./Main.css";

const MainCardT = props => {
  const { imageUrl, title } = props;
  return (
    <div className="card-item">
      <div>
        <CardMedia component="img" image={imageUrl} className="card-img" />
        {/* <img className="card-img" src={imageUrl} /> */}
        <p className="card-text">{title}</p>
      </div>
    </div>
  );
};

export default MainCardT;
