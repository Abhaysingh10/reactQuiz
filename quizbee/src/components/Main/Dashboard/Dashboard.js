import React from 'react'
import '../Dashboard/dashboard.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
const Dashboard = () => {
  return (
    <>
      <div className='parent-div'>
        <div className="dashboard-parent">
          <div className="dashboard-title-block">
            <div className="dashboard-text">Dashboard</div>
            <div className="dashboard-updates">
              <span>You've got 24 new updates</span></div>
          </div>
          <div className='dashboard-calendar-block'>
            <div className='calendar'>
              <i class="fa fa-calendar calendar-icon" aria-hidden="true"></i>
              <div className='calendar-text'> 19.12.2020 - 25.12.2020</div>
            </div>
            <div className='button'>
              <p className='span-text'>
                Create new project
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard