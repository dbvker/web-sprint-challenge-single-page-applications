import React from 'react';

// CSS
import './OrderSectionTop.css';

const OrderSectionTop = (props) => {
    const { title, subtitle } = props;
    return (
        <div className='order-section'>
            <div className='order-section-title'>{title}</div>
            <div className='order-section-subtitle'>{subtitle}</div>
        </div>
    )
}

export default OrderSectionTop;