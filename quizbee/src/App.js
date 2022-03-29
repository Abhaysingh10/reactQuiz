import React from 'react'
import Restaurant from './components/Basics/Restaurant';
import Quizbee from './components/Basics/Quizbee'
import UseState from './components/hooks/useState'
import UserEffect from './components/hooks/useEffect'
import UseEffect from './components/hooks/useEffect';
import UseReducer from './components/hooks/useReducer';
import Todo from './components/Todo/todo';
import Sidebar from './components/Sidebar/sidebar';
import Nav from './components/Navbar/nav'
import Dashboard from './components/Main/Dashboard/Dashboard';
import '../src/App.css'
// import '../src/custom.css'
const App = () => {
  return (
    <>

      {/* <Quizbee></Quizbee> */}
      <Nav></Nav>
      <div className='body-parent'>
        <div className='sidebar'><Sidebar /></div>
        <div className='empty-space'></div>
        <div className='main-content'><Dashboard></Dashboard></div>
      </div>
    </>

  )
}

export default App