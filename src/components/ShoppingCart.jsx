import React from 'react'
import Summer from '../assets/images/summer.jpg'

const ShoppingCart = () => {

    const cartItem = [
        {
            id:1,
            name: "Summer T-shirt",
            price: 15.99,
            quantity: 2,
            image:Summer

        },
        {
            id:2,
            name: "Winter T-shirt",
            price: 15.99,
            quantity: 1,
            image:Summer
        },
        {
            id:3,
            name: "Spring T-shirt",
            price: 15.99,
            quantity: 1,
            image:Summer
        },
        {
            id:4,
            name: "Autumn T-shirt",
            price: 15.99,
            quantity: 1,
            image:Summer
        },
        {
            id:5,
            name: "Summer T-shirt",
            price: 15.99,
            quantity: 1,
            image:Summer
        }
    ]
  return (
    <div className='container'>
      <h1>Shooping Cart</h1>
      <ul>
       {cartItem.map((item,index) =>{
            return (
              <li key={index}>
                <img src={item.image} alt={item.name} className='image'/>
                <div>ID: {item.id}</div>
                <div>Name: {item.name}</div>
                <div>Price: ${item.price.toFixed(2)}</div>
                <div>Quantity: {item.quantity}</div>
              </li>
            );
       })}
      </ul>
    </div>
  );
}

export default ShoppingCart