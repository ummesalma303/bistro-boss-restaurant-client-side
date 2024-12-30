import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItems from '../../../components/menuItems/MenuItems';
import useMenu from '../../../Hooks/useMenu';

const PopularMenu = () => {
    const [menu,loading] =useMenu()
    if (loading) {
        return <h2>Loading....</h2>
    }
    // const [menus,setMenu] =useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
            
    //         const popularMenu = data.filter(item=>item.category === 'popular')
    //         setMenu(popularMenu)
    //     })
    // },[])
    const popularMenu = menu.filter(item=>item.category === 'popular')
    // setMenu(popularMenu)
    // console.log(popularMenu)
    return (
        <div>
            <SectionTitle heading={'FROM OUR MENU'} subHeading={'Check it out'}></SectionTitle>
            <div className="grid grid-cols-2 gap-8 w-11/12 mx-auto">
                {
                    popularMenu.map(menu=> <MenuItems key={menu?._id} menu={menu}></MenuItems>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;