import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/Authentication';
import GoogleSignUp from './GoogleSignUp';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {Login} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = async (e) => {
    e.preventDefault()
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    await Login(email, password).then((result) => {
      const user = result.user;
      alert("Login Successful")
      navigate(from, {replace: true})
    }).catch((error) => {
      const errorMsg = error.message;
      setErrorMessage("Please provide valid email & password")
  })

  }

  return (
    <div className='wrapper-login'>
      <div className="form-container">
       <Link to="/" className="logo">
              LOGO
       </Link>
       <h2 className='h2Login'>Login</h2>
       <form className='account-form' onSubmit={handleLogin}>
         <div className="form-group">
            <input type="email" name='email' id='email' placeholder='Email Address *' required/>   
         </div> 
         <div className="form-group">
            <input type="password" name='password' id='password' placeholder='Password *' required/>   
         </div>
         <div className="form-group">
            <div className='rmFrPwd'>
              {/* <div className="checkgroup">
                 <input type="checkbox" name='remember' id='remember' />
                 <label htmlFor="remember">Remember Me</label>
              </div> */}
              <Link to="/forgetpass" className='pwdForget'>Forget Password</Link>   
            </div>
        </div>
        {
        errorMessage && (
          <div className="error-message text-danger mb-1">
                {errorMessage}
          </div> 
        )   
        }
        <div className="form-group">
           <button type='submit' className='btnForm'>
              <span>Login</span>    
            </button>   
        </div>      
       </form>

       <div className="account-bottom">
          <span className='txtSignUp'>
              Don't Have an Account <Link to="/sign-up" className='txtColor'>Sign Up</Link>
         </span>
         <p className='or'>or</p>
         <p className='or'>sign in with Google</p>
         <GoogleSignUp /> 
       </div>
      </div>      
    </div>
  )
}

export default Login