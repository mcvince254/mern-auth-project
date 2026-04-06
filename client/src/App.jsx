import react from "react"
import {Routes,Route} from 'react-router-dom'
import Login from "./pages/login"
import Home from "./pages/home"
import VerifyEmail from "./pages/verifyemail"
import ResetPassword from "./pages/ResetPassword"
import { ToastContainer} from 'react-toastify';


const App= () =>{
  return(
    <div>
      <ToastContainer />
      <Routes>
        <Route path = '/' element = {<Home/>}/>
         <Route path = '/login' element = {<Login/>}/>
          <Route path = '/email-verify' element = {<VerifyEmail/>}/>
           <Route path = '/reset-password' element = {<ResetPassword/>}/>
           
      </Routes>
    </div>
  )
}

export default App