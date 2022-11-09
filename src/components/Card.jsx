import React from "react";

function Card(props) {
  return (
    <div className="card">
      <a href={props.pageURL} target="_blank"><img src={props.imgURL} alt="project image" /></a>
      <a href={props.pageURL} target="_blank">{props.title}</a>
      <p>{props.description}</p>
    </div>
  );
}

export default Card;
