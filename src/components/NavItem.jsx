import React, { useContext, useEffect, useState } from 'react'
import cartIcon from "/images/cart-arrow-down.png"
import MenuIcon from "/images/Menu.png"
import CloseIcon from "/images/close-btn.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ProductCartAuth } from '../Context/OveralProvider'
import { AuthContext } from '../Context/Authentication'

const NavItem = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [menuActive, setMenuActive] = useState("home")
  const {cartNumber,cartItems} = useContext(ProductCartAuth)
  const {user, LogOut} = useContext(AuthContext)
  // const location = useLocation();
  // const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogout = async () => {
    await LogOut().then(() => {
      alert("Sign-out successfull")
      // navigate(from, {replace: true})
      window.location.href = "/"
    }).catch((err) => {
      console.log(err)
   })
  }

  // const handleActive = () =>{

  // }


  return (
    <div className='wrapper-nav-div'>
        <div id="logo-nav-div">
          <Link to="/" style={{textDecoration: 'none'}} className="logo">
              LOGO
          </Link>
          <div id="nav-icons">
            <nav>
             <div id="navLinks" className={menuOpen ? "activeNavLink" : ""}>
              <Link to="/"
              onClick={() => setMenuOpen(false) & setMenuActive("home")} 
              className={`nav-item ${menuActive === "home" ? "active" : ""} navLink`}
              >Home</Link>
              <Link to="/shop"
              onClick={() => setMenuOpen(false) & setMenuActive("shop")}
              className={`nav-item ${menuActive === "shop" ? "active" : ""} navLink`}
              >Shop</Link>
             </div>
             {
              user ? (
              <>
              <p>Welcome {user.firstName}</p>
              <p onClick={handleLogout}>Logout</p>
              </>
              ) : (
                <>
                <Link to="/sign-up" className="nav-item">SignUp</Link>
                <Link to="/login" className="nav-item">Login</Link>
                </>
              )
             }
             <div className="nav-icon" id="cartBtn">
                <Link to="/cart"><img src={cartIcon} alt="" /></Link>
                <span id="num">{cartItems ? cartNumber : 0}</span>
              </div>
              <div id="menuBtn" onClick={(e) => setMenuOpen(!menuOpen)}>
                <img src={menuOpen ? CloseIcon : MenuIcon} alt="" />
              </div>
            </nav>
          </div> 
        </div>
    </div>
  )
}

export default NavItem