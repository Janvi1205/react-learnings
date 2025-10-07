import { Route,Routes } from "react-router-dom";
import About from "../pages/about";
import Contact from "../pages/contact";
import Home from "../pages/home";
import Header from "../components/Header";


const App=()=>{

  
  return(
      <div>
        <Header/>
         <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>

         </Routes>
        
      </div>

  )
}
export default App;

//React does not support routing so we have to use external library(react-router-dom) to perform that
//it helps us create routing without reloading the page again and again