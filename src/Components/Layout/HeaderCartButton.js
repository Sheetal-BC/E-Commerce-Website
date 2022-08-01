import React, { Fragment, useContext } from "react";
import CartContext from "../../Store/CartContext";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  let total = 0;
  const cartCntxt = useContext(CartContext);
  cartCntxt.items.forEach((element) => {
    total = total + Number(element.quantity);
  });
  console.log(cartCntxt);

  return (
    <Fragment>
      <button className={classes.cart} onClick={props.onClick}>
        cart
      </button>
      <span className={classes.badge}>{total}</span>
    </Fragment>
  );
};

export default HeaderCartButton;
