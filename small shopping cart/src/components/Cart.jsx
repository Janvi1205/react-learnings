import { useState } from "react";
import { MdDelete } from "react-icons/md";
const Cart = ({ setcartprod, cartprod }) => {
    console.log("cartprod", cartprod);

    const [count,setcount]=useState(1);
    function incqty()
    {
        setcount(count+1)

    }
   
    function decqty()
    {
        if(count>1)
        {
            setcount(count-1)
        }

    }

    
    return (
        <div style={{ display: "flex" }}>
            <div className="addtocartsection">
                {cartprod.map((item) => {
                    return (
                        <div key={item.id} style={{ height: "300px", backgroundColor: "white", width: "850px",display:"flex",marginTop:"45px",marginLeft:"75px",borderRadius:"40px" }}>
                            <img style={{height:"220px",width:"250px",marginTop:"35px",marginLeft:"20px"}} src={item.image} alt="" />
                            <div>
                                <h1 style={{fontFamily:"Arial",marginLeft:"40px",marginTop:"40px",fontSize:"40px"}}>{item.name}</h1>
                                <h2 style={{fontSize:"25px",fontFamily:"Arial",marginLeft:"40px"}}>Price:{item.price*count}</h2>
                                
                                <button   onClick={decqty} className="dec">-</button>
                                <span style={{fontSize:"25px",marginLeft:"30px"}}>{count}</span>
                                <button onClick={incqty}  className="inc">+</button>
                                <button style={{backgroundColor:"red",border:"none",padding:"7px",fontSize:"30px",marginLeft:"280px",marginTop:"30px",borderRadius:"10px"}}><MdDelete /></button>

                                

                            </div>
                          
                            
                        </div>
                    );
                })}


            </div>
        </div>
    );
};

export default Cart;
