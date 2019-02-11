import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <img src={ movie.img.src } className="card-img-top" alt={ movie.img.alt } />
      <div className="card-body">
        <h3 className="card-title">{ `#${movie.ranking} - ${movie.title} (${movie.year})` }</h3>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{ `Distributor: ${ movie.distributor }`}</li>
        <li className="list-group-item">{ `Amount: ${ movie.amount }`}</li>
      </ul>
    </div>
  )
};

export default Card;
