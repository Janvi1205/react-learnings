const Cards=(props)=>{


     return (
        <div style={{display:"inline-block",padding:"45px", textAlign:"center" ,border:"1px solid black",marginLeft:"43px",width:"190px"}}>
            <img style={{height:"70px",width:"70px",borderRadius:"100px",marginBottom:"10px"}} src={props.pic} alt="" />
            <h1 style={{fontSize:"27px",fontFamily:"Arial"}}>{props.username}</h1>
            <h2 style={{fontSize:"23px", color:"blue"}}>{props.proff}</h2>
            <h2 style={{fontSize:"20px"}}>{props.city},{props.age} </h2>
            <button style={{color:"white", backgroundColor:"green",borderRadius:"18px",padding:"10px",width:"150px",fontSize:"20px"}}>Add frnd</button>

        </div>

     )

}
export default Cards;