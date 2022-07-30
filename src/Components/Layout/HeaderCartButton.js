import React, { Fragment } from "react";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton =()=> {
return (
    <Fragment>
    <button className={classes.cart}>Cart</button>
    <span className={classes.badge}>0</span>
    </Fragment>

)

}

export default HeaderCartButton;