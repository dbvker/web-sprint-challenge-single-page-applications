import React from 'react';

// CSS
import './RestaurantList.css';

// Components
import ListItem from './listItem/ListItem';

// Data
import restaurantData from '../../data/Restaurants';

const RestaurantList = () => {
    return (
        <section className='restaurant-list-container'>
            <div className='list-title'>Food Delivery in Gotham City</div>
            {restaurantData.map((item, index) => {
                return (<ListItem key={index} restaurant={item} />)
            })}
        </section>
    )
}

export default RestaurantList;
