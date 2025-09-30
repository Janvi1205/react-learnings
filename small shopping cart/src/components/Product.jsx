const Product=(props)=>{
    return (
        <div style={{display:"inline-block",marginLeft:"85px",border:"1px solid black",padding:"20px",width:"200px",marginTop:"20px", textAlign:"center",borderRadius:"10px",backgroundColor:"rgb(249, 245, 240)"}}>
            <img style={{width:"80px",height:"80px",borderRadius:"100px"}} src={props.image} alt="" />
            <h1 style={{fontSize:"30px",fontFamily:"Arial"}}>{props.name}</h1>
            <h2>Price:{props.price}</h2>
            <button style={{backgroundColor:"black",color:"white",padding:"12px",width:"160px",borderRadius:"20px"}}>Add to cart</button>
        </div>

    )
}
export default Product;