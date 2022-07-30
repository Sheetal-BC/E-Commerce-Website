import React from "react";
import AvailableItem from "./Components/Item/AvailableItem";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";


function App() {
  return (
    <React.Fragment>
     <Header/>
   <main>
    <AvailableItem/>
   </main>
   <Footer/>
   </React.Fragment>

  );
}

export default App;
