import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {
    let hasItem = false;
    const newItemArray = [...items];
    newItemArray.forEach((element, index) => {
      if (item.id === element.id) {
        console.log(newItemArray[index]);
        hasItem = true;
        newItemArray[index].quantity = Number(newItemArray[index].quantity) + 1;
      }
    });
    if (hasItem === false) setItems([...items, item]);
    else setItems(newItemArray);
  };
  const removeItemFromCartHandler = (id) => {
    const newItemArray = [...items];
    newItemArray.forEach((index) => {
      if (id === index.id) {
        newItemArray.splice(index, 1);
      }
    });
    setItems(newItemArray);
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;