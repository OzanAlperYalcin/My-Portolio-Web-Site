import { useState } from "react"
import { FaCode } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink, useNavigate } from "react-router-dom"

function Header() {
  const logo = "http://alperyalcin.com.tr/images/alper.png"
  const [sidebar, setSidebar] = useState(false)
  const navigate = useNavigate()
  return (
    <header className='container mx-auto py-6 flex justify-between'>
      <button onClick={() => navigate("/")} className='flex flex-shrink-0 items-center gap-x-5'>
        <div className='border-2 rounded-full overflow-hidden bg-gray-300 border-third'>
          <img src={logo} alt="" className='h-24 w-24 pl-1'/>
        </div>
        <div>
          <h1 className='text-lg lg:text-2xl font-light text-white'>Ozan Alper Yalçın</h1>
          <div className='text-third text-sm font-light flex items-center gap-x-1 justify-end'>
            <FaCode/>
            <span>Frontend Developer</span>
            </div>
        </div>
      </button>
      <button onClick={() => setSidebar(prev => prev ? false:true)} className="md:hidden flex justify-center items-center"><GiHamburgerMenu size={30}/></button>
      <nav className={`navbar ${!sidebar ? "":"side"}`}>
        <NavLink onClick={() => setSidebar(false)} to="/" className={({ isActive }) => isActive ? "navlink active":"navlink"}>Home</NavLink>
        <NavLink onClick={() => setSidebar(false)} to="projects" className={({ isActive }) => isActive ? "navlink active":"navlink"}>Projects</NavLink>
        <NavLink onClick={() => setSidebar(false)} to="blog" className={({ isActive }) => isActive ? "navlink active":"navlink"}>Blog</NavLink>
        <NavLink onClick={() => setSidebar(false)} to="contact" className={({ isActive }) => isActive ? "navlink active":"navlink"}>Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header