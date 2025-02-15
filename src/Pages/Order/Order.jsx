import React, { useState } from 'react';
import orderImg from '../../assets/shop/banner2.jpg'
import Cover from '../../components/Sheared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderTab from './OrderTab';
import useMenu from '../../Hooks/useMenu';
import { useParams } from 'react-router-dom';
const Order = () => {
    
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    // console.log(initialIndex)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    // console.log(tabIndex)

    const [menu] = useMenu()
    const drinks = menu.filter(item=>item.category === 'drinks')
    const dessert = menu.filter(item=>item.category === 'dessert')
    const soup = menu.filter(item=>item.category === 'soup')
    const salad = menu.filter(item=>item.category === 'salad')
    const pizza = menu.filter(item=>item.category === 'pizza')
    
    // console.log(salad)
    return (
        <div className=''>
            <Cover img={orderImg} height={"h-[700px]"} title='OUR SHOP' subTitle='Would you like to try a dish?'></Cover>
          <div className="mt-10 w-11/12 mx-auto">
          <Tabs defaultIndex={tabIndex}  onSelect={(index) => setTabIndex(index)}>

<TabList >
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
</TabList>

<TabPanel>
    <OrderTab items={salad}></OrderTab>
</TabPanel>
<TabPanel>
    <OrderTab items={pizza}></OrderTab>
</TabPanel>
<TabPanel>
    <OrderTab items={soup}></OrderTab>
</TabPanel>
<TabPanel>
    <OrderTab items={dessert}></OrderTab>
</TabPanel>
<TabPanel>
    <OrderTab items={drinks}></OrderTab>
</TabPanel>
</Tabs>
          </div>
        </div>
    );
};

export default Order;