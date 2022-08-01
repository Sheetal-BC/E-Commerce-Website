import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/NavBar/index';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AvaiableProducts from './Components/Product/Product';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider'; 
import About from './Components/Pages/About';
import Store from './Components/Pages/Store';



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
    <Routes>
    <Route path='/About' element={<About/>} />
    <Route path='/Store' element={<Store/>} />
    </Routes>
  
      
    </Router>
    
    {cart && <Cart onClick={hideHandler}/>}
   
    <Footer/>

    </CartProvider>
  );
}

export default App; 