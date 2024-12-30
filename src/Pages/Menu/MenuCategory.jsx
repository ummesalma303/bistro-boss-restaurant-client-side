import React from 'react';
import MenuItems from '../../components/menuItems/MenuItems';
import Cover from '../../components/Sheared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,img}) => {
    // console.log(title)
    return (
       <>
      {
       title&& <Cover img={img} height="h-[600px]" title={title} subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></Cover>
       }
        <div className="grid grid-cols-2 gap-8 w-11/12 mx-auto my-20">
                {
                    items.map(menu=> <MenuItems key={menu?._id} menu={menu}></MenuItems>)
                }
        </div>
      <div className="flex justify-center mb-12">
      <Link to={`/order/${title}`}> <button className="btn btn-outline border-0 border-b-4 mt-4">ORDER YOUR FAVOURITE FOOD</button></Link>
      </div>
       </>
    );
};

export default MenuCategory;