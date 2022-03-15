import React, { useState } from 'react'
import Menucard from './menuCard'
import Menu from '../../API/menu.js'
import Navbar from './navbar'
const Restaurant = props => {
 // const [menuData, setMenuData] = useState(Menu);

  return (
    <>
    {/* <Navbar></Navbar> */}
    <Menucard menuData = {Menu} />
    </>
  )
}


export default Restaurant