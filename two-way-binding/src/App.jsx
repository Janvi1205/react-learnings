import { useState } from "react"

const App=()=>{

    const[username,setusername]=useState("")
    return (
        <div>

            <form >
                <input
                 value={username}
                  onChange={(e)=>{
                    setusername(e.target.value)

                }} type="text" />
            </form>
           <button>submit</button>



        </div>
    )
}
export default App