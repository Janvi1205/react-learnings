import axios from "axios";
import { useEffect, useState } from "react";


const App = () => {


   const [indx, setindx] = useState(1)
  const [userdata, setuserdata] = useState([])
  useEffect(function () {
    getdata()

    
  },[indx])//this indicate ki jab jab indx change hoga utne baar useeffect chalega!!
  const getdata = async () => {
    const array = await axios.get(`https://picsum.photos/v2/list?page=${indx}&limit=12`)
    setuserdata(array.data)
    console.log(array.data)
  }

  let printdata = <div style={{ fontSize: "50px", color: "white", marginTop: "230px" }}>Loading </div>

  if (userdata.length > 0) {
    printdata = userdata.map((elem, key) => {
      return <div>
        <img style={{ height: "240px", width: "240px", borderRadius: "20px" }} src={elem.download_url} alt="" />

      </div>
    })

  }
  const prev=()=>{
    if(indx>1)
    {
      setindx(indx-1)
      setuserdata([])
    }
    


  }
  const next=()=>{
    setindx(indx+1)
    setuserdata([])

  }

  return (
    <div>
      {/* <div>
        <button onClick={getdata} style={{ backgroundColor: "teal", color: "white", padding: "20px", border: "none" }}>Get data</button>
      </div> */}
      <div style={{ height:"630px", display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center", marginTop: "30px" }} >
        {printdata}

      </div>
      <div style={{width:"220px", display:"flex", justifyContent:"space-between", marginTop:"50px", marginLeft:"740px" }}>
        <button onClick={prev} style={{ backgroundColor: indx === 1 ? "gray" : "goldenrod", border:"none", padding:"20px"}}>PREV</button>
        <span style={{color:"white", marginTop:"20px"}}>Page {indx}</span>
        <button onClick={next} style={{backgroundColor:"goldenrod", border:"none", padding:"20px"}}>NEXT</button>
      </div>
    </div>

 



  )
}
export default App;