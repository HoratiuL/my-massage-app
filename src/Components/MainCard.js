import React from "react";
import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./Main.css";

const MainCard = props => {
  const { imageUrl, title } = props;
  return (
    <Card className="card-item">
      <CardMedia component="img" image={imageUrl} className="card-img" />
      {/* <img className="card-img" src={imageUrl} /> */}
      <Typography className="card-text">{title}</Typography>
    </Card>
  );
};

export default MainCard;
