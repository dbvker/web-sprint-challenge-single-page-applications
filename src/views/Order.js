import React from 'react';

// CSS
import '../App.css';

// Assets
import pizza from '../assets/Pizza.jpg';

// Components
import OrderSectionTop from '../components/orderSectionTop/OrderSectionTop';

const Order = () => {
    return (
        <section className='order-container'>
            <div className='order-title'>Build Your Own Pizza</div>
            <img src={pizza} alt='pizza' />
            <p>Build Your Own Pizza</p>
            <OrderSectionTop title='Choice of Size' subtitle='Required' />
                <div className='order-section-bottom'>
                    <select>
                        <option>Select a Size</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>
            <OrderSectionTop title='Choice of Sauce' subtitle='Required' />
            <div className='order-section-bottom'>
                <label>
                    <input className='sauce-radio' type='radio' />
                    Original Red
                </label>
                <label>
                    <input className='sauce-radio' type='radio' />
                    Garlic Ranch
                </label>
                <label>
                    <input className='sauce-radio' type='radio' />
                    BBQ Sauce
                </label>
                <label>
                    <input className='sauce-radio' type='radio' />
                    Spinach Alfredo
                </label>
            </div>
            <OrderSectionTop title='Add Toppings' subtitle='Choose up to 10' />
            <div className='order-section-bottom'>
                <div className='order-section-half'>Left</div>
                <div className='order-section-half'>Right</div>
            </div>
            <OrderSectionTop title='Choice of Substitute' subtitle='Choose up to 1' />
            <OrderSectionTop title='Special Instructions' />
        </section>
    )
}

export default Order;