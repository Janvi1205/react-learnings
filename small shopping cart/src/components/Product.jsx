import { products } from "../../data";


const Product = ({setproduct}) => {

    function addtocart(id){

       setproduct(id);
    }

    return (
        <div>
            {products.map((item) => (
                <div key={item.id} style={{ display: "inline-block", marginLeft: "85px", border: "1px solid black", padding: "20px", width: "200px", marginTop: "20px", textAlign: "center", borderRadius: "10px", backgroundColor: "rgb(249, 245, 240)" }}>

                    <img style={{ width: "80px", height: "80px", borderRadius: "100px" }} src={item.image} alt="" />
                    <h1 style={{ fontSize: "30px", fontFamily: "Arial" }}>{item.name}</h1>
                    <h2>Price:{item.price}</h2>

                    <button onClick={()=>addtocart(item.id)} style={{ backgroundColor: "black", color: "white", padding: "10px", width: "140px", borderRadius: "20px", cursor: "pointer" }}>
                        Add to cart
                    </button>


                    <button style={{ display:"none", fontSize: "26px", borderRadius: "20px", width: "40px", marginRight: "30px" }} >-</button>
                    <span style={{ display:"none", fontSize: "26px" }}>sds</span>
                    <button style={{ display:"none", fontSize: "26px", borderRadius: "20px", width: "40px", marginLeft: "30px" }}>+</button>

                </div>

            ))}

        </div>





    )
}
export default Product;