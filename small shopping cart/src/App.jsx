import Product from "./components/Product";
import Nav from "./components/Nav";
import {products} from "../data"
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import { Route, Routes } from "react-router-dom";
  

const App = () => {
     const [isDark, setIsDark] = useState(false);

  const [addedproduct,setproduct]=useState('');
  const[cartprod,setcartprod]=useState([]);

  useEffect(()=>{
      const filteredobj=products.filter((prod)=>prod.id==addedproduct);
      setcartprod([...cartprod,...filteredobj])
  },[addedproduct])

  
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "black" : "white";
  }, [isDark]);
   
  return (
    <div>
      <Nav isDark={isDark} setIsDark={setIsDark}/>
      
   
      <Routes>
          <Route path="/" element={<Product setproduct={setproduct} />} />
          <Route path="/cart" element={<Cart isDark={isDark} cartprod={cartprod} setcartprod={setcartprod} />}/>
      </Routes>  

    
    </div>
    


  ); 
}
export default App;