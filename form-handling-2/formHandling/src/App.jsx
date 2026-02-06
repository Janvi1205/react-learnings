import { useState } from "react"

const App = () => {

  const [formdata, setformdata] = useState({

    fullname: "",
    pass: "",

  })

  const [error, seterror] = useState("");
  const [users, setusers] = useState([]);

  const handlechanges = (e) => {
    const { name, value } = e.target;

    setformdata((prevdata) => ({
      ...prevdata,
      [name]: value

    }))





  }

  const handlesubmit = (e) => {
    e.preventDefault();

    if (formdata.pass.length > 5) {
      seterror("password must be smaller than 5");
      return;
    }
    if (!/[@!$%^*()#]/.test(formdata.pass)) {
      seterror("include special charcater in the password");
      return;
    }


    setusers((prevusers) => (
      [ ...prevusers,{ ...formdata, id: Date.now() }]));

    setformdata({
      fullname: "",
      pass: ""

    })
    seterror('')
  }






  return (
    <div className="text-white flex justify-center items-center bg-black h-screen">
      <div className="bg-[#fcb1f0] text-black h-90 w-110  flex justify-center items-center   rounded-2xl">
        <form
          onSubmit={handlesubmit}
          className="flex flex-col gap-3 w-full px-8" >
          <input
            value={formdata.fullname}
            name="fullname"
            onChange={handlechanges}
            type="text"
            className="border w-full px-4 py-2 focus:border-yellow-600 "
            placeholder="Enter your name " />

          <input
            value={formdata.pass}
            onChange={handlechanges}
            name="pass"
            type="password"
            className="border w-full px-4 py-2 focus:border-yellow-600 "
            placeholder="Enter your password" />


          <button className="w-full text-blue-50 bg-black p-2" type="submit">Submit</button>
          {error && (
            <p className="text-red-600 text-xl">{error}</p>
          )}


        </form>

      </div>
      <div>
        {users.map((elem) => (
          <div key={users.id} className="text-white text-xl">
            {elem.fullname} {elem.pass}

          </div>


        ))}
      </div>
    </div>
  )
}

export default App