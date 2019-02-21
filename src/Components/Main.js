import React from "react";
import MainCard from "./MainCard";
// import MainCardT from "./MainCard.1";
import "./Main.css";

function Main(props) {
  const { mycards = [] } = props;

  return (
    <div className="card-container">
      {mycards.map(cards => (
        <MainCard key={cards.id} imageUrl={cards.poster} title={cards.title} />
      ))}
      {/* {mycards.map(cards => (
        <MainCardT key={cards.id} imageUrl={cards.poster} title={cards.title} />
      ))} */}
    </div>
  );
}

export default Main;
