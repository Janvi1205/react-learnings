import{ useEffect, useState } from 'react'

const App = () => {

  const[time,setTime]=useState("");

    
     useEffect(()=>{
       const interval= setInterval(()=>{
        const now= new Date();
        setTime(now.toLocaleTimeString())
      },1000)
      return ()=>{clearInterval(interval)}
    
     },[])


  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",width:"100vw"}}>
      <div>DigiClock</div>
      <div>

      <span>{time}</span>
      </div>
    </div>
  )
}

export default App