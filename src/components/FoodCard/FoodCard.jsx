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
        <p className="absolute top-4 right-6 bg-slate-900 text-white">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
                    <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
        </div>
      </div>
    );
};

export default FoodCard;