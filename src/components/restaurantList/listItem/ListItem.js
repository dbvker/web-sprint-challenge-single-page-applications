import React from 'react';

// CSS
import './ListItem.css';

const ListItem = (props) => {
    const { restaurant } = props;
    return (
        <div className='restaurant-item-container'>
            <img src={restaurant.image} alt={restaurant.name} />
            <h3>{restaurant.name}</h3>
            <span>{restaurant.price} - {restaurant.categories}</span><br />
            <div className='item-square'>{restaurant.wait} Min</div>
            <div className='item-square'>${restaurant.deliveryFee} Delivery Fee</div>
        </div>
    )
}

export default ListItem;