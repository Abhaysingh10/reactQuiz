import React from 'react'
import PropTypes from 'prop-types'

const DashboardListItem = (props) => {
    return (
        <>
            <div class="mb-1">
                <div className='abhay'>
                    <img className='icon' src={props.img} width={"15 px"} />
                    <button className="btn" data-bs-toggle="collapse" data-bs-target="#" aria-expanded="false">
                        <span className='heading'>{props.title}</span>
                    </button>
                </div>
            </div>


            <div class="collapse  sub-list" id="orders-collapse" >
                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" class="link-dark rounded text-decoration-none">New</a></li>
                    <li><a href="#" class="link-dark rounded text-decoration-none">Processed</a></li>
                    <li><a href="#" class="link-dark rounded text-decoration-none">Shipped</a></li>
                    <li><a href="#" class="link-dark rounded text-decoration-none">Returned</a></li>
                </ul>
            </div>

        </>
    )
}


export default DashboardListItem