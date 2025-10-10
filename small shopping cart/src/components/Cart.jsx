const Cart = ({ setcartprod, cartprod }) => {
    console.log("cartprod", cartprod);
    return (
        <div style={{ display: "flex" }}>
            <div className="addtocartsection">
                {cartprod.map((item) => {
                    return (
                        <div key={item.id} style={{ height: "300px", backgroundColor: "white", width: "300px" }}>
                            <img src={item.image} alt="" />
                            <div>
                                <h1>{item.name}</h1>
                                
                            </div>
                            
                        </div>
                    );
                })}


            </div>
        </div>
    );
};

export default Cart;
