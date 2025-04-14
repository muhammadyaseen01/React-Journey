import React from "react";

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <p>Name state Variabel value inside {props.title} :<b> {props.name} </b></p>
    </div>
  );
};

export default Card;
