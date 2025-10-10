import { Link } from "react-router-dom"
const Nav=()=>{
    return (
        <div style={{display:"flex"}}>
            <p style={{color:"white",marginTop:"30px",fontSize:"50px",marginLeft:"740px",fontFamily:"Arial"}}>Fruit Shop </p>
            <Link to={"/cart"}><button style={{ marginBottom:"30px",padding:"10px",fontSize:"25px",width:"180px",borderRadius:"50px",marginTop:"30px",marginLeft:"490px"}}>Go to Cart</button></Link>
            

        </div>

    )
}
export default Nav;
