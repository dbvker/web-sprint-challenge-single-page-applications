import React, {useState} from 'react';

// CSS
import '../App.css';

// Assets
import pizzaImg from '../assets/Pizza.jpg';

// Components
import OrderSectionTop from '../components/orderSectionTop/OrderSectionTop';

const initialPizzaValues = {
    name: '',
    size: '',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    glutenFree: false,
    special: '',
    numOfPizzas: 1,
};

const initialPizza = [];
const initialDisabled = true;

const Order = () => {
    const [pizza, setPizza] = useState(initialPizza);
    const [pizzaValues, setPizzaValues] = useState(initialPizzaValues);

    const submit = (evt) => {
        evt.preventDefault();
        const newPizza = {
            name: pizzaValues.name.trim(),
            size: pizzaValues.size.trim(),
            pepperoni: pizzaValues.pepperoni,
            sausage: pizzaValues.sausage,
            tomatoes: pizzaValues.tomatoes,
            olives: pizzaValues.olives,
            glutenFree: pizzaValues.glutenFree,
            special: pizzaValues.special,
            numOfPizzas: pizzaValues.numOfPizzas,
        };
        setPizza(newPizza);
      };
      
    const change = (event) => {
        const { name, value, checked, type } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        setPizzaValues({ ...pizzaValues, [name]: valueToUse })
    }

    return (
        <form className='order-container' id='pizza-form' onSubmit={submit}>
            <div className='order-title'>Build Your Own Pizza</div>
            <img src={pizzaImg} alt='pizza' />
            <p>Build Your Own Pizza</p>
            <OrderSectionTop title='Your Name' />
                <div className='order-section-bottom'>
                    <input
                        type='text'
                        id='name-input'
                        placeholder='Please enter your name'
                        name='name'
                        value={pizzaValues.name}
                        onChange={change}
                    />
                </div>
            <OrderSectionTop title='Choice of Size' subtitle='Required' />
                <div className='order-section-bottom'>
                    <select
                        id='size-dropdown'
                        name='size'
                        value={pizzaValues.size}
                        onChange={change}
                    >
                        <option value=''>Select a Size</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                    </select>
                </div>
            <OrderSectionTop title='Choice of Sauce' subtitle='Required' />
            <div className='order-section-bottom'>
                <label>
                    <input
                        className='sauce-radio'
                        type='radio'
                        name='sauce'
                        value='Original Red'
                        checked={pizzaValues.sauce === 'Original Red'}
                        onChange={change}
                    />
                    Original Red
                </label>
                <label>
                    <input
                        className='sauce-radio'
                        type='radio'
                        name='sauce'
                        value='Garlic Ranch'
                        checked={pizzaValues.sauce === 'Garlic Ranch'}
                        onChange={change}
                    />
                    Garlic Ranch
                </label>
                <label>
                    <input
                        className='sauce-radio'
                        type='radio'
                        name='sauce'
                        value='BBQ Sauce'
                        checked={pizzaValues.sauce === 'BBQ Sauce'}
                        onChange={change}
                    />
                    BBQ Sauce
                </label>
                <label>
                    <input
                        className='sauce-radio'
                        type='radio'
                        name='sauce'
                        value='Spinach Alfredo'
                        checked={pizzaValues.sauce === 'Spinach Alfredo'}
                        onChange={change}
                    />
                    Spinach Alfredo
                </label>
            </div>
            <OrderSectionTop title='Add Toppings' subtitle='Choose up to 4' />
            <div className='order-section-bottom'>
                <div className='order-section-half'>
                    <label>
                        <input
                            type='checkbox'
                            name='pepperoni'
                            checked={pizzaValues.pepperoni}
                            onChange={change}
                        />
                        Pepperoni
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='sausage'
                            checked={pizzaValues.sausage}
                            onChange={change}
                        />
                        Sausage
                    </label>
                </div>
                <div className='order-section-half'>
                    <label>
                        <input
                            type='checkbox'
                            name='tomatoes'
                            checked={pizzaValues.tomatoes}
                            onChange={change}
                        />
                        Diced Tomatoes
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            name='olives'
                            checked={pizzaValues.olives}
                            onChange={change}
                        />
                        Black Olives
                    </label>
                </div>
            </div>
            <OrderSectionTop title='Choice of Substitute' subtitle='Choose up to 1' />
            <div className='order-section-bottom'>
                <label>
                    <input
                        type='checkbox'
                        name='glutenFree'
                        checked={pizzaValues.glutenFree}
                        onChange={change}
                    />
                    Gluten Free Crust (+ $1.00)
                </label>
            </div>
            <OrderSectionTop title='Special Instructions' />
            <div className='order-section-bottom'>
                <label>
                    <input
                        type='text'
                        id='special-text'
                        placeholder="Anything else you'd like to add?"
                        name='special'
                        value={pizzaValues.special}
                        onChange={change}
                    />
                </label>
            </div>
            <div className='add-to-order'>
                <input
                    type='number'
                    name='numOfPizzas'
                    value={pizzaValues.numOfPizzas}
                    onChange={change}
                />
                <button id='order-button'>Add to Order</button>
            </div>
            {console.log(pizza)}
        </form>
    )
}

export default Order;