import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/NavBar/index';
import { BrowserRouter as Router} from 'react-router-dom';
import AvaiableProducts from './Components/Product/Product';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';



function App() {

  const [cart, setCart] = useState(false);

  const hideHandler = () =>{
    setCart(false);
  }
  const showHandler = () => {
     setCart(true);
  }
  return (
    <CartProvider>
    <Router>
   <Navbar onShowCart={showHandler}/>
      
    </Router>
    {cart && <Cart onClick={hideHandler}/>}
   <AvaiableProducts/>
    <Footer/>

    </CartProvider>
  );
}

export default App; 