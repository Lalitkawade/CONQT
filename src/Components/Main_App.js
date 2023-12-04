import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import FlashSale from './Categories/Flash Sale/FlashSale';
import NewArrival from './Categories/New Arrival/NewArrival';
import SpecialOffers from './Categories/Special Offers/SpecialOffers';
import Footer from './Footer/Footer';
import DealOfTheDay from './Categories/Deal of the Day/DealOfTheDay';
import ShoppingCard from './Categories/Shopping Card/ShoppingCard';
// import Content from './Slidebar/Content/Content';
import "./Slidebar/Content/Content.css"
import EndingOffer from './Categories/Offer Ending Soon/EndingOffer';


const MainApp = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dev-api.conqt.com/api/product/Get-All-Products');
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    console.log(items)

    return (
        <div className='Main-App'>
            <Header />
           <ShoppingCard/>
           {/* <div className='left-sidebar'>
           <Content/>
           </div> */}  
            <FlashSale items={items.data} />
            <NewArrival items={items.data} />
            <SpecialOffers items={items.data}/>
            <DealOfTheDay items={items.data}/>
            <EndingOffer items={items.data}/>
            <Footer/>
            <h1>{items.message}</h1>
        </div>
    );
};

export default MainApp;
