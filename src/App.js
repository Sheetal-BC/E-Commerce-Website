import React, { useState, useContext, Suspense} from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider';
// import About from './Components/Pages/About';
// import Store from './Components/Pages/Store';
// import Home from './Components/Pages/Home';
// import ContactUs from './Components/Pages/ContactUs';
// import ProductDetail from './Components/Pages/ProductDetail';
// import AuthPage from './Components/Auth/AuthPage';
import AuthContext from './Store/AuthContext';

const Home = React.lazy(()=> import ('./Components/Pages/Home'));
const About = React.lazy(()=> import ('./Components/Pages/About'));
const Store = React.lazy(()=> import ('./Components/Pages/Store'));
const ContactUs = React.lazy(()=> import ('./Components/Pages/ContactUs'));
const ProductDetail = React.lazy(()=> import ('./Components/Pages/ProductDetail'));
const AuthPage = React.lazy(()=> import ('./Components/Auth/AuthPage'));

function App() {
  
  const authCntxt = useContext(AuthContext);
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
    <Suspense>
    <Routes>
    <Route path='/About' element={ <About/>} />
    <Route path='/Home' element={<Home/>} />
    <Route path='/Contact' element={<ContactUs/>} />
    <Route path="/Store/:productId" element={<ProductDetail />} />
    <Route path='/auth' element={!authCntxt.isLoggedIn &&<AuthPage/>} />
    <Route path="/Store" element={!authCntxt.isLoggedIn ? <Navigate to="/auth"/> : <Store/> } />
    
    <Route path="*" element={<Navigate to="/Home" replace />} />
   
    </Routes>
    </Suspense>
  </Router>
    
    
    {cartIsShown &&<Cart onClose={hideCartHandler}/>}
   
    <Footer/>
    
    

    </CartProvider>
  );
}

export default App; 