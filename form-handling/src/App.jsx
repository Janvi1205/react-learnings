import { useState } from "react";

const App=()=>{
  const[username,setusername]=useState('')
  const formhandle=(e)=>{
    e.preventDefault()
    console.log(username)
    setusername("")

  }
  return(
    <div>
      <form onSubmit={(e)=>{
        formhandle(e)
      }}>
        <input
        value={username}
        onChange={(e)=>{
         
          setusername(e.target.value)
        }}
         type="text" />
          <button>submit</button>
      </form>
     

    </div>
  )
}
export default App;