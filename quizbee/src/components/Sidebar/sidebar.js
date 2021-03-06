import React from 'react'
import PropTypes from 'prop-types'
import '../Sidebar/sidebar.css'
import GridIcon from '../../Assets/Icons/grid.png'
import DashboardTitleItem from '../Sidebar/item'

const Sidebar = props => {


function sidebarToggle(){
  console.log("Clicked on sidebar icon")
}

  return (
    <>
      <div className="flex-shrink-0 parent-sidebar" id='sidebarCollapse'>
        <a className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
          <svg className="bi me-2" width="6" height="24"> </svg>
          <div className='menu-icon'>
          <span className="fs-5 fw-semibold">Menus</span>
          <img className='sidebar-icon' src="https://img.icons8.com/stickers/100/000000/menu-rounded.png" width={"25 px"} onClick = {sidebarToggle}/>
          </div>
        </a>
        {/* <ul class="list-unstyled main-ul"> */}
        <DashboardTitleItem
          title={"Dashboard"}
          id={"id1"}
          img={"https://img.icons8.com/external-gradak-royyan-wijaya/24/000000/external-dashboard-basic-interface-ii-gradak-royyan-wijaya.png"} />

        <DashboardTitleItem
          title={"Freelancers"}
          sublist={["Overview", "Monthly", "Weekly", "Annually"]}
          id={"id2"}
          img={"https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-layers-design-thinking-kmg-design-detailed-outline-kmg-design.png"} />

        <DashboardTitleItem
          title={"Projects"}
          sublist={["New", "Processed", "Shipped", "Returned"]}
          id={"id3"}
          img={"https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-dashboard-blogger-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"} />

        <DashboardTitleItem
        title={"Finances"}
          id={"id4"}
          img={"https://img.icons8.com/ios/50/000000/pie-chart.png"} />

        <DashboardTitleItem
          title={"Queries"}
          id={"id5"}
          img={"https://img.icons8.com/external-tal-revivo-light-tal-revivo/24/000000/external-queries-and-help-for-a-new-user-closeupman-light-tal-revivo.png"} />

        <DashboardTitleItem
          
          title={"Reports"}
          sublist={["New", "Profile", "Settings", "Sign Out"]}
          id={"id6"}
          img={"https://img.icons8.com/ios/50/000000/us-dollar-circled--v1.png"} />

<DashboardTitleItem
          title={"Help"}
          id={"id7"}
          img={"https://img.icons8.com/ios/50/000000/help.png"} />


    
      
    
          
         
        {/* 
        <li class="mb-1">
          <img src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/64/000000/external-layers-design-thinking-kmg-design-detailed-outline-kmg-design.png" width="22px" />
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
            <span className='heading'>Freelancers</span>
          </button>
          <div class="collapse  sub-list" id="dashboard-collapse" >
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded text-decoration-none">Overview</a></li>
              <li><a href="#" class="link-dark rounded text-decoration-none">Weekly</a></li>
              <li><a href="#" class="link-dark rounded text-decoration-none">Monthly</a></li>
              <li><a href="#" class="link-dark rounded text-decoration-none">Annually</a></li>
            </ul>
          </div>
        </li> 
        <li class="mb-1">
          <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/000000/external-dashboard-blogger-vitaliy-gorbachev-lineal-vitaly-gorbachev.png" width={"22px"} />
          <button className=" btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
            <span className='heading'>Projects</span>
          </button>
          <div class="collapse  sub-list" id="orders-collapse" >
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded text-decoration-none">New</a></li>
              <li><a href="#" class="link-dark rounded text-decoration-none">Processed</a></li>
              <li><a href="#" class="link-dark rounded text-decoration-none">Shipped</a></li>
              <li><a href="#" class="link-dark rounded text-decoration-none">Returned</a></li>
            </ul>
          </div>
          <li className='mb-1'>
            <img src="" width={"22px"} />
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#" aria-expanded="false">
              <span className='heading'>Reports</span>
            </button>
          </li>
          <li className='mb-1'>
            <img src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/24/000000/external-queries-and-help-for-a-new-user-closeupman-light-tal-revivo.png" width={"22px"} />
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#" aria-expanded="false">
              <span className='heading'>Queries</span>
            </button>

          </li>

          <li className='mb-1'>
            <img src="https://img.icons8.com/ios/50/000000/us-dollar-circled--v1.png" width={"22px"} />
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#" aria-expanded="false">
              <span className='heading'>Finances</span>
            </button>
          </li>

          <li className='mb-1'>
            <img src="https://img.icons8.com/ios/50/000000/help.png" width={"22px"} />
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#" aria-expanded="false">
              <span className='heading'>Help</span>
            </button>
          </li>

        </li>
        <li class="border-top my-3"></li>
        <li class="mb-1">
          <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
            Reports
          </button>
          <div class="collapse" id="account-collapse" >
            <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" class="link-dark rounded">New...</a></li>
              <li><a href="#" class="link-dark rounded">Profile</a></li>
              <li><a href="#" class="link-dark rounded">Settings</a></li>
              <li><a href="#" class="link-dark rounded">Sign out</a></li>
            </ul>
          </div>
        </li>
        {/* </ul> */}
      </div>

    </>
    
  )
  
}


Sidebar.propTypes = {}

export default Sidebar