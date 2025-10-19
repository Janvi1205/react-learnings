import { Link } from "react-router-dom"
const Nav=()=>{
    return (
        <div style={{display:"flex"}}>
            <p style={{color:"white",marginTop:"30px",fontSize:"50px",marginLeft:"740px",fontFamily:"Arial"}}>Fruit Shop </p>
            <Link to={"/cart"}><img style={{ marginBottom:"30px",fontSize:"10px",width:"35px",borderRadius:"50px",marginTop:"39px",marginLeft:"470px",height:"35px"}} src=".\public\images\cart.png" alt="" /></Link>

             <img style={{width:"30px",height:"30px",padding:"5px",borderRadius:"30px",cursor:"pointer",marginTop:"35px",marginLeft:"30px"}} src=".\public\images\lightmode.png" alt="" />
            

        </div>

    )
}
export default Nav;
