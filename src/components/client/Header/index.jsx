import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../Header/index.css'
import MenuIcon from '@mui/icons-material/Menu';
import  { useState } from 'react';
import { Drawer } from 'antd';

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
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
        <button className='signUp'> Signup</button>
         <MenuIcon className='header-icon' onClick={showDrawer}  />
         <Drawer className='drawer' placement="right" onClose={onClose} open={open}>
        <p>Features</p>
        <p>Pricing</p>
        <p>Resources</p>
        <p className="p-login">Login</p>
        <button className='sign'> Signup</button>
      </Drawer>
      </div>
    </div>
   </div>
  )
}

export default Header