import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItems from '../../../components/menuItems/MenuItems';

const PopularMenu = () => {
    const [menus,setMenu] =useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            
            const popularMenu = data.filter(item=>item.category === 'popular')
            setMenu(popularMenu)
        })
    },[])
    // console.log(menus)
    return (
        <div>
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'}></SectionTitle>
            <div className="grid grid-cols-2 gap-8 w-11/12 mx-auto">
                {
                    menus.map(menu=> <MenuItems key={menu?._id} menu={menu}></MenuItems>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;