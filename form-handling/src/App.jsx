import { useState } from "react";

const App = () => {


   const [formdata,setformdata]=useState({
    name:"",
    password:""
   })

   const handelchange=(e)=>{
     const {name,value}=e.target;

     setformdata((prev)=>({
       ...prev,
      [name]:value
     }))

   }

  const handleSubmit=(e)=>{
    e.preventDefault();

    setformdata({
      name:"",
      password:""
    })
    console.log(formdata.name,formdata.password)  

  }
  return (
    <div>
      <div>Form</div>
      <div>
        <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column"}} action="">

           <input onChange={handelchange} value={formdata.name} type="text" name="name"  />

           <input onChange={handelchange} value={formdata.password} name="password" type="password"  />

           <button>Submit</button>

        </form>
      </div>
    </div>
  )
}

export default App