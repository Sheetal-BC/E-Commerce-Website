import React from 'react';
import HeaderCartButton from './HeaderCartButton';

import classes from './Header.module.css';


const Header= () =>{
    return (
        <React.Fragment>
        <header className={classes.navbar}>
            
            <ul>
                <li>HOME</li>
                <li>STORE</li>
                <li>ABOUT</li>
                <HeaderCartButton/>
            </ul>
        
      
      </header>
      <h6 className={classes.title}>The Generics</h6>
      </React.Fragment>
    )

}
export default Header;