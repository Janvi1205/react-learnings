import axios from "axios";
import { useState } from "react";


const App = () => {


  const [userdata,setuserdata] =useState([])
  const getdata = async () => {
    const array= await axios.get("https://picsum.photos/v2/list")
    setuserdata(array.data)
    console.log(array.data)
  }

  let printdata=<div style={{fontSize:"50px", color:"white", marginTop:"230px"}}>No picture present </div>
  if(userdata.length>0)
  {
    printdata=userdata.map((elem,key)=>{
      return <div>
        <img style={{height:"240px", width:"240px", borderRadius:"20px"}} src={elem.download_url} alt="" />

      </div>
    })

  }

  return (
    <div>
      <div>
        <button onClick={getdata} style={{ backgroundColor: "teal", color: "white", padding: "20px", border: "none" }}>Get data</button>
      </div>
      <div style={{display:"flex", flexWrap:"wrap", gap:"30px", justifyContent:"center", marginTop:"30px"}} >
        {printdata}
        
      </div>
    </div>





  )
}
export default App;