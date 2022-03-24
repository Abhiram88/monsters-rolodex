import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";
import "../card/card.styles.css";

const CardList = (props) => {
  //console.log("render from cardlist");
  //console.log(this.props);
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
