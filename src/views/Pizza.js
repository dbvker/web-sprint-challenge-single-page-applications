import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import formSchema from "../validation/formSchema";

// CSS
import "../App.css";

// Assets
import pizzaImg from "../assets/Pizza.jpg";

// Components
import OrderSectionTop from "../components/orderSectionTop/OrderSectionTop";

const initialPizzaValues = {
  name: "",
  size: "",
  sauce: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  glutenFree: false,
  special: "",
  numOfPizzas: 1,
};

const initialErrors = {
  name: "",
  size: "",
  sauce: '',
  numOfPizzas: "",
};

const initialPizza = [];
const initialDisabled = true;

const Order = () => {
  const [pizza, setPizza] = useState(initialPizza);
  const [pizzaValues, setPizzaValues] = useState(initialPizzaValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialErrors);

  const postOrder = (newPizza) => {
    axios
      .post("https://reqres.in/api/orders", newPizza)
      .then((resp) => {
        setPizza([resp.data, ...pizza]);
        console.log(resp.data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setPizzaValues(initialPizzaValues);
      });
  };

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const submit = (evt) => {
    evt.preventDefault();
    const newPizza = {
      name: pizzaValues.name.trim(),
      size: pizzaValues.size.trim(),
      sauce: pizzaValues.sauce,
      pepperoni: pizzaValues.pepperoni,
      sausage: pizzaValues.sausage,
      tomatoes: pizzaValues.tomatoes,
      olives: pizzaValues.olives,
      glutenFree: pizzaValues.glutenFree,
      special: pizzaValues.special,
      numOfPizzas: pizzaValues.numOfPizzas,
    };
    postOrder(newPizza);
  };

  const change = (event) => {
    const { name, value, checked, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    inputChange(name, valueToUse);
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setPizzaValues({ ...pizzaValues, [name]: value });
};

  useEffect(() => {
    formSchema
      .isValid(pizzaValues)
      .then(valid => setDisabled(!valid))
  }, [pizzaValues])

  return (
    <form className="order-container" id="pizza-form" onSubmit={submit}>
      <div className="order-title">Build Your Own Pizza</div>
      <img src={pizzaImg} alt="pizza" />
      <p>Build Your Own Pizza</p>
      <p>{formErrors.name}</p>
      <p>{formErrors.size}</p>
      <p>{formErrors.sauce}</p>
      <OrderSectionTop title="Your Name" />
      <div className="order-section-bottom">
        <input
          type="text"
          id="name-input"
          placeholder="Please enter your name"
          name="name"
          value={pizzaValues.name}
          onChange={change}
        />
      </div>
      <OrderSectionTop title="Choice of Size" subtitle="Required" />
      <div className="order-section-bottom">
        <select
          id="size-dropdown"
          name="size"
          value={pizzaValues.size}
          onChange={change}
        >
          <option value="">Select a Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <OrderSectionTop title="Choice of Sauce" subtitle="Required" />
      <div className="order-section-bottom">
        <label>
          <input
            className="sauce-radio"
            type="radio"
            name="sauce"
            value="Red"
            checked={pizzaValues.sauce === "Red"}
            onChange={change}
          />
          Original Red
        </label>
        <label>
          <input
            className="sauce-radio"
            type="radio"
            name="sauce"
            value="Ranch"
            checked={pizzaValues.sauce === "Ranch"}
            onChange={change}
          />
          Garlic Ranch
        </label>
        <label>
          <input
            className="sauce-radio"
            type="radio"
            name="sauce"
            value="BBQ"
            checked={pizzaValues.sauce === "BBQ"}
            onChange={change}
          />
          BBQ Sauce
        </label>
        <label>
          <input
            className="sauce-radio"
            type="radio"
            name="sauce"
            value="Alfredo"
            checked={pizzaValues.sauce === "Alfredo"}
            onChange={change}
          />
          Spinach Alfredo
        </label>
      </div>
      <OrderSectionTop title="Add Toppings" subtitle="Choose up to 4" />
      <div className="order-section-bottom">
        <div className="order-section-half">
          <label>
            <input
              type="checkbox"
              name="pepperoni"
              checked={pizzaValues.pepperoni}
              onChange={change}
            />
            Pepperoni
          </label>
          <label>
            <input
              type="checkbox"
              name="sausage"
              checked={pizzaValues.sausage}
              onChange={change}
            />
            Sausage
          </label>
        </div>
        <div className="order-section-half">
          <label>
            <input
              type="checkbox"
              name="tomatoes"
              checked={pizzaValues.tomatoes}
              onChange={change}
            />
            Diced Tomatoes
          </label>
          <label>
            <input
              type="checkbox"
              name="olives"
              checked={pizzaValues.olives}
              onChange={change}
            />
            Black Olives
          </label>
        </div>
      </div>
      <OrderSectionTop title="Choice of Substitute" subtitle="Choose up to 1" />
      <div className="order-section-bottom">
        <label>
          <input
            type="checkbox"
            name="glutenFree"
            checked={pizzaValues.glutenFree}
            onChange={change}
          />
          Gluten Free Crust (+ $1.00)
        </label>
      </div>
      <OrderSectionTop title="Special Instructions" />
      <div className="order-section-bottom">
        <label>
          <input
            type="text"
            id="special-text"
            placeholder="Anything else you'd like to add?"
            name="special"
            value={pizzaValues.special}
            onChange={change}
          />
        </label>
      </div>
      <div className="add-to-order">
        <input
          type="number"
          name="numOfPizzas"
          value={pizzaValues.numOfPizzas}
          onChange={change}
        />
        <button id="order-button" disabled={disabled}>Add to Order</button>
      </div>
    </form>
  );
};

export default Order;
