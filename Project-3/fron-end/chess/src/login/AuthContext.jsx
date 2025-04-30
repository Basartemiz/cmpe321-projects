import { createContext, useContext, useState } from "react"

const AuthContext=createContext()


export const useAuth = () => {

    

    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
    return ctx;
  }

function AuthProvider({children}){
    const API_URL = import.meta.env.VITE_API_URL; //get API
    
    const [user,setUser]=useState("")
    const [type,setType]=useState("")

    const login= async (username,password)=>{

        try {
          const response = await fetch(`${API_URL}chess_app/login/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username, password})
            
          });
          
          if (!response.ok) throw new Error('Login failed');
    
          const data = await response.json();
          
          //save the value
          setUser(username)
          console.log(user)
          setType(data.type)
          return data.type
        } catch (error) {
          console.error('Error during login:', error);
        }
    }

    
    return (
        <AuthContext.Provider value={{user:user,type:type,login:login}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider