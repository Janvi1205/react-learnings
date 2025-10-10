import Product from "./components/Product";
import Nav from "./components/Nav";
import {products} from "../data"
import { useState } from "react";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
  

const App = () => {

  const [addedproduct,setproduct]=useState('');
   
  const filteredobj=products.filter((prod)=>{prod.id==addedproduct});
 

  return (
    <div>
      <Nav/>
      
   
      <Routes>
          <Route path="/" element={<Product setproduct={setproduct} />} />
          <Route path="/cart" element={<Cart/>}/>
      </Routes>  

    
    </div>


  ); 
}
export default App;