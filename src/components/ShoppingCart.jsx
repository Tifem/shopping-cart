import React, { useState } from "react";
import Summer from "../assets/images/summer.jpg";
import Bluetooth from "../assets/images/bluetooth.jpeg";
import Headphone from "../assets/images/headphone.jpeg";


  const cartItem = [
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
  ];


const ShoppingCart = () => {
  const [count, setCount] = useState(1);

  const increment = () =>{
    setCount(count +1)
  }

  const decrement = () =>{
    setCount(count -1)
  }



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
            {cartItem.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    {" "}
                    <img src={item.image} alt={item.name} className="image" />
                    <span>{item.name}</span>
                  </td>
                  {/* <td>{item.id}</td> */}
                  <td>${item.price.toFixed(2)}</td>
                  <td className="qty">
                    <button onClick={increment}>+</button>
                    <span> {count}</span>

                    {
                      <button onClick={count > 1 ? decrement : undefined}>
                        -
                      </button>
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
            <div>
              <input type="text" placeholder="Coupon Code" />
              <button>Apply Coupon</button>
            </div>
          </div>
          <div>
            <p>Cart Totals</p>
            <div className="table-cart">
              <table>
                <tr>

                <th>Subtotal</th>
                <td>$281.00</td>
                </tr>
                <tr>

                <th>Total</th>
                <td>$281.00</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
