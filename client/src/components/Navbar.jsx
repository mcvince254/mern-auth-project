import React, { useContext } from "react";
import { assets } from "../assets/assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import {toast} from 'react-toastify'
import axios from "../api/axios"

const Navbar = ()=>{
    const navigate = useNavigate()
    const {userData,backendurl,setUserData,setIsLoggedin} = useContext(AppContext)


const sendVerificationOtp = async()=>{
	try{
          axios.defaults.withCredentials = true
	  const {data} =await axios.post(backendurl +'/api/auth/send-verify-otp')
	  if(data.success){
		navigate('/email-verify')
		toast.success(data.message)
		}else{
		toast.error(data.message)
		}	
		
	   }
	
	catch(error)
			{
          toast.error(error.message)
			}
		}

const logout = async()=>{
       try{
          axios.defaults.withCredentials = true
          const {data} = await axios.post(backendurl + '/api/auth/logout')
          data.success && setIsLoggedin(false)	
          data.success && setUserData(false)
          navigate('/')

	}catch(error){
		toast.error(error.message)
                    }


    }
    return(
        <div className = 'w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0'>
           
            <img src={assets.logo} alt= "" className="w-28 sm:w-32"/>

             {userData ? 
             <div className="w-8 h-8 flex justify-center items-center rounded-full bg-black text-white relative group" >
                {userData.name[0].toUpperCase()}
                <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black pt-10 rounded min-w-[120px]">
			<ul className = "list-none m-0 text-sm p-2 bg-gray-100">
				{!userData.isAccountVerified && <li   onClick={sendVerificationOtp} className = ' cursor-pointer py-1 px-2 hover:bg-gray-200 flex justify-between'>
								Verify email</li>}

				<li onClick = {logout} className= ' cursor-pointer py-1 px-2 hover:bg-gray-200'>Logout</li>
			</ul>

                </div>
             </div>
             : <button onClick={()=>navigate('/login')} className = 'flex items-center gap-2 border border-gray-500 py-2 px-6 text-gray-800 rounded-full hover:bg-gray-100 transition-all'>Login
            <img src={assets.arrow_icon} alt="arrow"/></button>            
             
             }     

            

        </div>

    )
}
 

export default Navbar