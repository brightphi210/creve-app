
import React,{useState} from 'react'
import { jwtDecode } from "jwt-decode";
const CreativeDasboard = () => {

    const token = localStorage.getItem('authToken');
    const [user, setUser] = useState(() => token)
  
    const decoded = jwtDecode(token);

  return (
    <div>CreativeDasboard
        <h2>
            {decoded.name}
        </h2>
    </div>
  )
}

export default CreativeDasboard