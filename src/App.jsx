import { Outlet } from "react-router-dom"
import NavItem from "./components/NavItem"
import Footer from "./components/Footer"

function App() {

  return (
    <>
     <NavItem />
     <div className="body-background">
     <Outlet />
     </div>
     <Footer />
    </>
  )
}

export default App
