import React, { Fragment, useContext } from "react";
import CartContext from "../../Store/CartContext";
import CartItem from "./CartItem";
import "./Cart.css";

// const cartElements = [
//   {
//     title: "Colors",

//     price: 100,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

//     quantity: 2,
//   },

//   {
//     title: "Black and white Colors",

//     price: 50,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

//     quantity: 3,
//   },

//   {
//     title: "Yellow and Black Colors",

//     price: 70,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

//     quantity: 1,
//   },
// ];

const Cart = (props) => {
  const cartCntxt = useContext(CartContext);
  console.log(cartCntxt.items);

  const CartList = cartCntxt.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      item={item.title}
      img={item.imgsrc}
      price={item.price}
      quantity={item.quantity}
    />
  ));
  let grandTotal = 0;
  cartCntxt.items.forEach((item) => {
    grandTotal = grandTotal + Number(item.quantity) * Number(item.price);
  });
  console.log(grandTotal);

  return (
    <Fragment>
      <div className="cart">
        <h3 className="cartName">Cart</h3>
        <button className="cart__Button" onClick={props.onClick}>
          X
        </button>
        <div className="cart-row cart-header">
          <span className="cart-item cart-column">ITEM</span>
          <span className="cart-price cart-column">PRICE</span>
          <span className="cart-quantity cart-column">QUANTITY</span>
        </div>
        <div>{CartList}</div>
        <div className="cart-total">
          <span>
            <span className="total-title">
              <strong>Total ${grandTotal}</strong>
            </span>
          </span>
        </div>
        <button className="purchase-btn" type="button">
          PURCHASE
        </button>
      </div>
    </Fragment>
  );
};

export default Cart;
