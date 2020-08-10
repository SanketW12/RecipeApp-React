import React, { useEffect, useState } from "react";
import "./Recipe.css";

export default function Recipe(props) {
  return (
    <>
      <div className="card">
        <img src={props.imgsrc}></img>
        <h1>{props.tittle}</h1>
        <p>Calories : {props.calories.toFixed(2)}</p>
      </div>
    </>
  );
}
