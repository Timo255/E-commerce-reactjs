import React from 'react'
import GgIcon from '/images/Google.jpg'

const GoogleLogin = ({googleLogin}) => {
  return (
    <div>
      <img 
       src={GgIcon} 
       alt=""  
       width={"80px"} 
       height={"80px"} 
       style={{marginTop: "10px", marginBottom: "30px", cursor: "pointer"}}
       onClick={googleLogin}
       />
    </div>
  )
}

export default GoogleLogin
