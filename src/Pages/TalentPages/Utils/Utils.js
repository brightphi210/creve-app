import { Outlet, Navigate } from 'react-router-dom'
import { useContext, useState } from 'react'


const PrivateRoute = () => {
    // let {user} = useContext(AuthContext)

    // const user = localStorage.getItem('authToken');
  let [user, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    return user ? <Outlet/> : <Navigate to="/login"/>

}

export default PrivateRoute;