import React from "react";
import "../Components/Card.css";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="mypic" />

          <div className="card_info">
            <span className="card_cat">{props.title}</span>
            <h2 className="card_title">{props.pname}</h2>
            {/* target="_blank" */}
            <a href={props.link}>
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
