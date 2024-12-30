import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../components/Sheared/Cover/Cover';
import useMenu from '../../Hooks/useMenu';
import MenuItems from '../../components/menuItems/MenuItems';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import MenuCategory from './MenuCategory';

const Menu = () => {
    const [menu,loading] =useMenu()
    if (loading) {
        return <h2>Loading....</h2>
    }
    const offered = menu.filter(item=>item.category === 'offered')
    const dessert = menu.filter(item=>item.category === 'dessert')
    const soup = menu.filter(item=>item.category === 'soup')
    const salad = menu.filter(item=>item.category === 'salad')
    const pizza = menu.filter(item=>item.category === 'pizza')
    return (
        <div className=''>
             <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>

            <Cover img={menuImg} height="h-[700px]" title='OUR MENU' subTitle='Would you like to try a dish?'></Cover>
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
            <MenuCategory items={offered} title={''}></MenuCategory>

           

            <MenuCategory items={dessert} img={dessertImg} title={'dessert'}></MenuCategory>
                
            <MenuCategory items={pizza} img={pizzaImg} title={'pizza'}></MenuCategory>
                
            <MenuCategory items={salad} img={saladImg} title={'salad'}></MenuCategory>
            
            <MenuCategory items={soup} img={soupImg} title={'soup'}></MenuCategory>
                
        </div>
    );
};

export default Menu;