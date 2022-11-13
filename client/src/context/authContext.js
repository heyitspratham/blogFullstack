import axios from "axios";
import { createContext, useState, React, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)

    const login = async(input)=>{
      const res = await axios.post("/auth/login", input);
      setCurrentUser(res.data)
    }
    const logout = async(input)=>{
      await axios.post("/auth/logout", input);
      setCurrentUser(null)
    }

    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(currentUser))
    }, [currentUser])
    

    return(
        <AuthContext.Provider value={{login, logout, currentUser}} >
            {children}
        </AuthContext.Provider>
    )
}
