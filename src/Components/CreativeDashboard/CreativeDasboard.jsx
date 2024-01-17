
import React,{useState} from 'react'
import { jwtDecode } from "jwt-decode";
const CreativeDasboard = () => {

  let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)

  
    const decoded = jwtDecode(authTokens.access);

  return (
    <div>CreativeDasboard
        <h2>
            {decoded.name}
        </h2>
    </div>
  )
}

export default CreativeDasboard