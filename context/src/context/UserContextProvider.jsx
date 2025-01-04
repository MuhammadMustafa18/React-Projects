import React, { useState } from "react";
import UserContext from "./Usercontext";

const UserContextProvider = ({children}) =>{
    const [user,setuser] = useState(null)
    return(
        <UserContext.Provider value={{user,setuser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider