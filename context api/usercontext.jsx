
import { createContext } from "react"

export const DataContext=createContext()
const UserContext=({children})=>{

    const data={
        username:"Janvi",
        age:"nottdefined",
        city:"Bhopal"
 
    }

    return(
        <div>
            <DataContext.Provider value={data} >
                {children}

            </DataContext.Provider>
        </div>
    )
}
export default UserContext;