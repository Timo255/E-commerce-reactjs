import React from 'react'
import GgIcon from '/images/Google.jpg'
import { AuthContext } from '../Context/Authentication';
import { useLocation, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const GoogleSignUp = ({googleSignUp}) => {
    // const {SignUpWithGoogle} = useContext(AuthContext);

    // const location = useLocation();
    // const navigate = useNavigate();

    // const from = location.state?.from?.pathname || '/';

    
//   const googleLogin = async () => {
//     await SignUpWithGoogle().then(async(result) =>{
//       const user = result.user;
//       if(result.user){
//         await setDoc(doc(db,"Users", user.uid),{
//           email:user.email,
//           firstName: user.displayName,
//           photo: user.photoURL,
//           lastname : ""
//       });
//       }
//       alert("User logged in Successfully")
//       navigate(from, {replace: true})
//     }).catch((error) => {
//       const errorMsg = error.message;
//       setErrorMessage(errorMsg)
//     })
// }

  return (
    <div>
       <img 
       src={GgIcon} 
       alt=""  
       width={"80px"} 
       height={"80px"} 
       style={{marginTop: "10px", marginBottom: "30px", cursor: "pointer"}}
       onClick={googleSignUp}
       />
    </div>
  )
}

export default GoogleSignUp