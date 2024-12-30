import React from 'react';

const FoodCard = ({menu}) => {
    const {image,name,recipe,price} =menu
    return (
        <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;