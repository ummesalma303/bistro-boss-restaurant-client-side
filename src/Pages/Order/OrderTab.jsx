import React from 'react';
import FoodCard from '../../components/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-3 gap-12 w-11/12 mx-auto my-20">
        {
            items?.map(menu=> <FoodCard key={menu?._id} menu={menu}></FoodCard>)
        }
    </div>
    );
};

export default OrderTab;