import React, { useEffect, useState } from 'react'

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
    <div>
      <div>DigiClock</div>
      <div>

      <span>{time}</span>
      </div>
    </div>
  )
}

export default App