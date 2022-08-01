import React from "react";
import "./CartItem.css";


const CartItem = (props) => {
    
  const imgsrc = props.img;
  const price = `$${props.price.toFixed(2)}`;

  return (
    <div className="cart-items">
      <div className="cartitems-row">
        <span className="cart-item cart-column">
        <img src={imgsrc} alt="products" className="img" />{props.item}</span>
        <span className="cart-price cart-column">{price}</span>
        <span className="cart-quantity cart-column">{props.quantity}
        <input type="text" className="" value="1" />
        <button className="remove-button">REMOVE</button></span> 
      </div>
    </div>
  );
};

export default CartItem;