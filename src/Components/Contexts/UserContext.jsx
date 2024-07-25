import React, { createContext, useState } from 'react'
export const UserContext = createContext();

function UserContextProvider({ children }) {

    const [userdata, setUserData] = useState({
        userName: "",
    })
    return (
        <UserContext.Provider value={{ userdata, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;