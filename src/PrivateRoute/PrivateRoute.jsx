import React, { useContext } from 'react'
import { AuthContext } from '../Context/Authentication'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation();

    // if(loading){
    //     return(
    //      <div>Loading...</div>   
    //     )
    // }
    // console.log(loading)

    if(user){
        return children;
    }

  return (
    <Navigate to="/login" state={{from: location}} replace></Navigate> // this code means "Navigate to login page if user has not login"
  )
}

export default PrivateRoute