import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import GgIcon from '/images/Google.jpg'
import { AuthContext } from '../Context/Authentication';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';
import GoogleSignUp from './GoogleSignUp';

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {createUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate(); 

  const from = location.state?.from?.pathname || '/login';



  const handleSignup = async (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value
    const password = form.password.value
    const confirmPassword = form.confirmPassword.value
    const fname = form.firstName.value
    const lname = form.lastName.value

    if(password !== confirmPassword){
      setErrorMessage("Password doesn't match Please, provide a correct password")
    }else{
      setErrorMessage("")
      await createUser(email, password).then((results) =>{
        const user = results.user;
        if(user){
          setDoc(doc(db,"Users", user.uid),{
            email:user.email,
            firstName: fname,
            lastName: lname,
            photo: ""
        });
        }
        alert("Account created sucessfully done!!");
        navigate(from, {replace: true})
      }).catch((error) => {
        console.log(error.message);
        alert(`${error.message}`)
    })
    }
  }



  return (
    <div className='wrapper-login'>
    <div className="form-container">
     <Link to="/" onClick={() => window.scroll(0,0)} className="logo">
            LOGO
     </Link>
     <h2 className='h2Login'>SignUp</h2>
     <form onSubmit={handleSignup} className='account-form'>
       <div className="form-group">
          <input type="text" name='firstName' id='firstName' placeholder='First Name *' required/>   
       </div> 
       <div className="form-group">
          <input type="text" name='lastName' id='lastName' placeholder='Last Name *' required/>   
       </div> 
       <div className="form-group">
          <input type="email" name='email' id='email' placeholder='Email Address *' required/>   
       </div> 
       <div className="form-group">
          <input type="password" name='password' id='password' placeholder='Password *' required/>   
       </div>
       <div className="form-group">
          <input type="password" name='confirmPassword' id='confirmPassword' placeholder='Confirm Password *' required/>   
       </div>
          {/* showing message*/}
          <div>
          {
            errorMessage && (
              <div className="errorMessage">
                  {errorMessage}
              </div> 
          )   
          }
          </div>
      <div className="form-group">
         <button type='submit' className='btnForm'>
            <span>SignUp</span>    
          </button>   
      </div>      
     </form>

     <div className="account-bottom">
     <span className='txtSignUp'>
          Have an Account <Link to="/login" className='txtColor'>Login</Link>
      </span>
       <p className='or'>or</p>
       <p className='or'>sign in with Google</p>
       <GoogleSignUp />
     </div>
    </div>      
  </div>
  )
}

export default SignUp