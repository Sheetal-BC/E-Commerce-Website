import React, { useContext } from "react";
import cartContext from "../../Store/CartContext";
import "./CartItem.css";

const CartItem = (props) => {
  const cartCntxt = useContext(cartContext);

  console.log('cart-props', props);

  const changeHandler = () =>{
       
  }


  const removeFromCart = (event) => {
    event.preventDefault();
    cartCntxt.removeItem(props.id);
  };

 

  const imgsrc = props.img;
  const price = `$${props.price.toFixed(2)}`;
  return (
    <div className="cart-items">
      <div className="cartitems-row">
        <span className="cart-item cart-column">
          <img src={imgsrc} alt="products" className="cartimg" />
          {props.item}
        </span>
        <span className="cart-price cart-column">{price}</span>
        <span className="cart-quantity cart-column">
          <input type="text" className="quanty" value={props.quantity} onChange={changeHandler} />
          <button className="remove-button" onClick={removeFromCart}>
            REMOVE
          </button>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
