import { Link } from "react-router-dom"

const Header=()=>{
    return(
        
        <div style={{backgroundColor:"purple",color:"white",display:"flex",alignItems:"center", justifyContent:"space-between"}}>
            <h1 style={{marginLeft:"30px"}}>Janvi</h1>
            <div style={{display:"flex",gap:"20px",marginRight:"30px"}}>
               <Link style={{fontSize:"25px",color:"white",textDecoration:"none"}} to='/'>Home</Link>
                <Link style={{fontSize:"25px",color:"white",textDecoration:"none"}} to='/about'>About</Link>
                 <Link style={{fontSize:"25px",color:"white",textDecoration:"none"}} to='/contact'>Contact</Link>
               

            </div>

        </div>

    )
}
export default Header;
