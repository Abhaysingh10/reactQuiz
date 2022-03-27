import React from 'react'
import 'bootstrap'
import Logo from '../../Assets/Images/logo.png'
import '../Navbar/navbar_css.css'
const Nav = () => {
  return (
    <div className='parent'>

      <nav className="navbar navbar-expand-lg main-navbar" >
        <a class="navbar-brand" href="#">
          <img className='logo-image' src={Logo} alt="Logo" srcset="" /></a>
        <div className='title-heading'>
          <p className='title-heading-child'>Welcome, Leila Martina</p>
        </div>

        <div className='nav-side'>
          <i class="fas fa-bell pr-13" ></i>
          <span className='nav-side-heading'>Leila Martin</span>
          <img width={50} height={50} className='rounded-circle' src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" srcset="" />
        </div>
        <div className='hamburger-menu'> </div>
      </nav>


    </div>
  )
}

export default Nav