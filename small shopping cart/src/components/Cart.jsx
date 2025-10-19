import { MdDelete } from "react-icons/md";
const Cart = ({ setcartprod, cartprod, isDark }) => {
    console.log("cartprod", cartprod);


    function incqty(id) {
        setcartprod((prevcart) =>
            prevcart.map((item) => item.id == id ? { ...item, count: (item.count || 1) + 1 } : item)

        )

    }

    function decqty(id) {
        setcartprod((prevcart) =>
            prevcart.map((item) => item.id == id ? { ...item, count: item.count > 1 ? item.count - 1 : 1 } : item)

        )


    }

    function deleteItem(id) {
        setcartprod((prevcart) => prevcart.filter((item) => item.id !== id));
    }


    const total = cartprod.reduce((sum, item) => {
        const qty = item.count || 1;
        return sum + item.price * qty;
    }, 0);



    return (
        <div >
            {cartprod.length === 0 ? (
                <div style={{color: isDark ? "white" : "black",fontSize:"45px",marginLeft:"650px",marginTop:"250px"}}>Oops!No item in cart...</div>

            ) : (
                <div style={{ display: "flex" }}>
                    <div className="addtocartsection">
                        {cartprod.map((item) => {
                            const qty = item.count || 1;
                            return (
                                <div key={item.id} style={{ height: "300px", backgroundColor: "white", width: "850px", display: "flex", marginTop: "45px", marginLeft: "75px", borderRadius: "40px" }}>
                                    <img style={{ height: "220px", width: "250px", marginTop: "35px", marginLeft: "20px" }} src={item.image} alt="" />
                                    <div>
                                        <h1 style={{ fontFamily: "Arial", marginLeft: "40px", marginTop: "40px", fontSize: "40px" }}>{item.name}</h1>
                                        <h2 style={{ fontSize: "25px", fontFamily: "Arial", marginLeft: "40px" }}>Price:{item.price * qty}</h2>

                                        <button onClick={() => decqty(item.id)} className="dec">-</button>
                                        <span style={{ fontSize: "25px", marginLeft: "30px" }}>{qty}</span>
                                        <button onClick={() => incqty(item.id)} className="inc">+</button>
                                        <button onClick={() => deleteItem(item.id)} style={{ backgroundColor: "red", border: "none", padding: "7px", fontSize: "30px", marginLeft: "280px", marginTop: "30px", borderRadius: "10px" }}><MdDelete /></button>



                                    </div>


                                </div>
                            );
                        })}


                    </div>

                    <div className="addtocartsection2">
                        <h1 style={{ fontSize: "35px", justifyContent: "center", display: "flex", }}>Bill</h1>
                        <p style={{ fontSize: "27px", marginLeft: "30px", marginTop: "40px", color: "white", fontFamily: "Arial" }}> Total amount to be paid:{total}</p>



                    </div>

                </div>

            )}





        </div>
    );
};

export default Cart;
