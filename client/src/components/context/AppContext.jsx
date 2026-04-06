import { createContext,useEffect,useState } from "react";
import { toast } from "react-toastify";
import axios from "../../api/axios";

export const AppContext = createContext()

export const AppContextProvider = (prop)=>{
    axios.defaults.withCredentials = true
    const backendurl = import.meta.env.VITE_BACKEND_URL

    
    const [isLoggedin,setIsLoggedin] = useState(false)
    const [userData,setUserData] = useState(false)
    
    const getAuthState= async ()=>{
        try {
            const {data} = await axios.get(backendurl + '/api/auth/is-auth')
            if(data.success){
                setIsLoggedin(true)
                getUserData()
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const getUserData = async () => {
        try {
            const {data} = await axios.get(backendurl + '/api/user/data')
            data.success ? setUserData(data.userData) : toast.error(data.message)
        } catch (error) {
        toast.error(
            error.response?.data?.message || "Something went wrong"
        )
    }
    }

    useEffect(()=>{
        getAuthState()},
    [])

    const value = {backendurl,isLoggedin,setIsLoggedin,userData,setUserData,getUserData}
    return (
        <AppContext.Provider value ={value }>
            {prop.children}
        </AppContext.Provider>
        
    )
}