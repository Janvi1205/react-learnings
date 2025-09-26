import { useState } from "react";

const App=()=>{
  const[c,setc]=useState(0)
  const incchange=()=>{
    setc(c+10)
  }
  const decchange=()=>{
    if(c>0)
    {
        setc(c-10)
    }
   

   
  }
  return (
    <div>
      <div class="heading">This is a counter:{c} </div>
      <button onClick={incchange} class="inc">INC</button>
      <button onClick={decchange} class="dec">Dec</button>
    </div>
    

  )

}
export default App;