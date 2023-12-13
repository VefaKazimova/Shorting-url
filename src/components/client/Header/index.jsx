import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Header/index.css'
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  return (
   <div className='container'>
     <div className='header'>
     <div className='header-left'>
     <h1>Shortly</h1>
      <ul>
        <li><NavLink className="link" to="features"  onClick={(isActive) => (isActive ? ".active" : "")}>Features</NavLink></li>
        <li><NavLink  className="link" to="pricing" onClick={(isActive) => (isActive ? ".active" : "")}>Pricing</NavLink></li>
        <li><NavLink className="link"  to="resources" onClick={(isActive) => (isActive ? ".active" : "")}>Resources</NavLink></li>
      </ul>
     </div>

      <div className='header-right'>
        <Link className='login'>Login</Link>
        <button>Signup</button>
         <MenuIcon className='header-icon'/>
      </div>
    </div>
   </div>
  )
}

export default Header