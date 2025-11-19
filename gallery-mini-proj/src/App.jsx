import axios from "axios";
import { useEffect, useState } from "react";
import {gsap} from "gsap";   //here in react gsap is first insatlled using npm install gsap and then imported here


const App = () => {

  useEffect(() => {
    gsap.to("body", {
      "--c1": "#34ace0",
      "--c2": "#ffb142",
      duration: 4,
      repeat: -1,
      yoyo: true
    });
  }, []);

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
    printdata = userdata.map((elem) => {
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
      <div style={{ height:"630px", display: "flex", flexWrap: "wrap", gap: "30px", justifyContent: "center", marginTop: "30px" }} >
        {printdata}

      </div>
      <div style={{width:"220px", display:"flex", justifyContent:"space-between", marginTop:"50px", marginLeft:"740px" }}>
        <button onClick={prev} style={{ backgroundColor: indx === 1 ? "gray" : "black",color:"white", border:"none", padding:"20px"}}>PREV</button>
        <span style={{color:"white", marginTop:"20px"}}>Page {indx}</span>
        <button onClick={next} style={{backgroundColor:"black", border:"none", padding:"20px",color:"white"}}>NEXT</button>
      </div>
    </div>

  )
}
export default App;