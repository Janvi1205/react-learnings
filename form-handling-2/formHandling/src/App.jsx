import React, { useRef, useState } from 'react'





const App = () => {
  const [formData,setFormData]=useState({
    name:"",
    password:""
  });

  const[error,seterror]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(formData.password.length<6)
    {
      seterror("Password should be greater than 6 characters");
      return; 
    }

    seterror("")

    setFormData({
      name:"",
      password:""
    })
    
  }
  const handleChange=(e)=>{
    const {name,value}=e.target;

    setFormData((prev)=>({
      ...prev,
      [name]:value
      
    }))
    
  }
  
  
  return (
    <div class="outerDiv">
      <div>FORM</div>
      <form onSubmit={handleSubmit}>
        <input 
          value={formData.name}
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="EnterYour Name"></input>
        <input
          onChange={handleChange}
          value={formData.password}
          name="password"
          type="password" placeholder="Enter Your Password"></input>
        <button>submit</button>
        {error && 
        <div>{error}</div>}
      </form>
    </div>
    
    
  );
}


export default App