import React, { useState } from "react";
import Summer from "../assets/images/summer.jpg";
import Bluetooth from "../assets/images/bluetooth.jpeg";
import Headphone from "../assets/images/headphone.jpeg";

const cartItem = [];

const ShoppingCart = () => {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Summer T-shirt",
      price: 15.99,
      quantity: 2,
      image: Summer,
    },
    {
      id: 2,
      name: "Bluetooth",
      price: 15.99,
      quantity: 1,
      image: Bluetooth,
    },
    {
      id: 3,
      name: "Headphone",
      price: 15.99,
      quantity: 1,
      image: Headphone,
    },
    {
      id: 4,
      name: "Autumn T-shirt",
      price: 15.99,
      quantity: 1,
      image: Summer,
    },
    {
      id: 5,
      name: "Summer T-shirt",
      price: 15.99,
      quantity: 1,
      image: Summer,
    },
  ]);

  const increment = (id) => {
    setCart((prevCount) =>
      prevCount.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCart((prevCount) =>
      prevCount.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return (item.price * item.quantity).toFixed(2);
  };
  
  const total = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);


  return (
    <div className="container">
      <h1>Shopping Cart</h1>
      <div className="items">
        <table>
          <thead>
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="item-image">
                    {" "}
                    <img src={item.image} alt={item.name} className="image" />
                    <span>{item.name}</span>
                  </td>
                  <td>${item.price.toFixed(2)}</td>

                  <td className="qty">
                    <button onClick={() => increment (item.id)}>+</button>
                    <span> {item.quantity}</span>

                    {
                      <button onClick={() => decrement (item.id)}>
                        -
                      </button>
                      // <button onClick={count > 1 ? decrement : undefined}>
                      //   -
                      // </button>
                    }
                  </td>

                  <td>{item.price * item.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="cart-total">
          <div>
            <p>Promotion Code</p>
            <div className="coupon-box">
              <input type="text" placeholder="Coupon Code" />
              <button>Apply Coupon</button>
            </div>
          </div>

          <div className="cart">
            <p>Cart Totals</p>
            <div className="table-cart">
              <table>
                <tr>
                  <th>Subtotal</th>
                  <td>{total}</td>
                </tr>

                <tr>
                  <th>Total</th>
                  <td>{total}</td>
                </tr>
              </table>
            </div>

            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
