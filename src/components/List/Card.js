import React from "react";

const Card = ({ movie }) => {
  return (
    <div>
      <h3>{ `#${movie.ranking} - ${movie.title} (${movie.year})` }</h3>
      <img src={ movie.img.src } alt={ movie.img.alt } width="200" />
      <p>{ `Distributor: ${ movie.distributor }`}</p>
      <p>{ `Amount: ${ movie.amount }`}</p>
    </div>
  )
};

export default Card;
