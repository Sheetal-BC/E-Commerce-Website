import React, { Fragment } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = (props) => {
  const Cartlist = cartElements.map((List) => (
    <CartItem key={List.id}
      item={List.title}
      img={List.imageUrl}
      price={List.price}
      amount={List.quantity}
    />
  ));

  return (
    <Fragment>
      <div className="cart">
        <h2 className="cartName">CART</h2>
        <button className="cart__Button" onClick={props.onClick}>
          X
        </button>
        <div className="cart-row cart-header">
          <span className="cart-item cart-column">ITEM</span>
          <span className="cart-price cart-column">PRICE</span>
          <span className="cart-quantity cart-column">QUANTITY</span>
        </div>
        <div>{Cartlist}</div>
        <div className="cart-total">
          <span>
            <span className="total-title">
              <strong>Total</strong>
            </span>
            $<span id="total-value">00</span>
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