import { useContext } from "react";
import{DataContext} from '../usercontext'
import Header from "../components/Header";

const App=()=>{

  const userdata=useContext(DataContext)
  return(
    <div>
      <h1>this is app.jsx{userdata.username}</h1>
      <Header/>



    </div>

  )
}
export default App;