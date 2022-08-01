import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/NavBar/index';
import { BrowserRouter as Router} from 'react-router-dom';
import AvaiableProducts from './Components/Product/Product';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';



function App() {

  const [cart, setCart] = useState(false);

  const hideHandler = () =>{
    setCart(false);
  }
  const showHandler = () => {
     setCart(true);
  }
  return (
    <React.Fragment>
    <Router>
      <Navbar Cart={showHandler}/>
      
    </Router>
    {cart && <Cart onClick={hideHandler}/>}
   <AvaiableProducts/>
    <Footer/>

    </React.Fragment>
  );
}

export default App; 