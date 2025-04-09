import React, { createContext, useState } from 'react';
export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [ cart, setCart ] = useState([]);

  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1};
    console.log(newItem);
    // console.log(`item ${product.title} added to the cart`);
  }
  return (
    <CartContext.Provider value={{ addToCart }}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;
