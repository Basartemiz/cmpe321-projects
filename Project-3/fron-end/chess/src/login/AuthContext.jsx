import { createContext, useContext, useState } from "react"

const AuthContext=createContext()


export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
    return ctx;
  }

function AuthProvider({children}){
    const [user,setUser]=useState("")
    const [type,setType]=useState("")

    const login= async ()=>{
        return true
    }

    
    return (
        <AuthContext.Provider value={{user:user,type:type}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider