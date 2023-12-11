import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className="card_container">
      {/* <img src={props.image} alt="card" /> */}
      <div className="description">
        <h2>{props.title}</h2>
        <h2>{`${props.likes} Likes`}</h2>
      </div>

      <div className="small">
        <p>{props.comment}</p>
      </div>
      <div className="rating">
        <div className="stars">
          <p>Rating:</p>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <p>5.3</p>
        </div>

        {/* <button>
          <i className="fa-solid fa-heart"></i>
          Watch
        </button> */}
      </div>
    </div>
  );
}

export default Card;
