import { useState } from "react";
const Product = (props) => {
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        setQuantity(1); // Show qty controls
    };

    const increaseQty = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQty = () => {
        if (quantity === 1) {
            setQuantity(0); // Go back to "Add to cart"
        } else {
            setQuantity(quantity - 1);
        }   
    };

    return (
        <div style={{ display: "inline-block", marginLeft: "85px", border: "1px solid black", padding: "20px", width: "200px", marginTop: "20px", textAlign: "center", borderRadius: "10px", backgroundColor: "rgb(249, 245, 240)" }}>
            <img style={{ width: "80px", height: "80px", borderRadius: "100px" }} src={props.image} alt="" />
            <h1 style={{ fontSize: "30px", fontFamily: "Arial" }}>{props.name}</h1>
            <h2>Price:{props.price}</h2>
            {quantity === 0 ? (
                <button
                    onClick={handleAddToCart}
                    style={{
                        backgroundColor: "black",
                        color: "white",
                        padding: "10px",
                        width: "140px",
                        borderRadius: "20px",
                        cursor: "pointer"
                    }}
                >
                    Add to cart
                </button>
            ) : (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "10px"
                }}>
                    <button style={{fontSize:"26px", borderRadius:"20px", width:"40px", marginRight:"30px"}} onClick={decreaseQty}>-</button>
                    <span style={{fontSize:"26px"}}>{quantity}</span>
                    <button style={{fontSize:"26px", borderRadius:"20px", width:"40px", marginLeft:"30px"}} onClick={increaseQty}>+</button>
                </div>
            )}


            

        </div>

    )
}
export default Product;