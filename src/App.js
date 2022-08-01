import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/NavBar/index';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider'; 
import About from './Components/Pages/About';
import Store from './Components/Pages/Store';
import Home from './Components/Pages/Home';



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
    <Route path='/Home' element={<Home/>} />
    </Routes>
  
      
    </Router>
    
    {cart && <Cart onClick={hideHandler}/>}
   
    <Footer/>

    </CartProvider>
  );
}

export default App; 