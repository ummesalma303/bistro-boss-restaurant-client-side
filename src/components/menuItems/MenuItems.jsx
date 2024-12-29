import React from 'react';

const MenuItems = ({menu}) => {
    const {image,name,recipe,price} =menu
    // console.log(menu)
    return (
        <div className="flex space-x-2">
            <img className="w-[80px] h-[80px] rounded-r-full rounded-bl-full" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItems;