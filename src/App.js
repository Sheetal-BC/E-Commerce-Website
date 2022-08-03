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
import ContactUs from './Components/Pages/ContactUs';




function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
    <Router>
    <Navbar onShowCart={showCartHandler}/>
    <Routes>
    <Route path='/About' element={<About/>} />
    <Route path='/Store' element={<Store/>} />
    <Route path='/Home' element={<Home/>} />
    <Route path='/Contact' element={<ContactUs/>} />
    </Routes>
  
      
    </Router>
    
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
   
    <Footer/>

    </CartProvider>
  );
}

export default App; 