import React from 'react'
import PropTypes from 'prop-types'

const DashboardListItem = (props) => {



    if (props.sublist != null) {

        return (<>
            <li class="mb-1">
                <div className='list-item'>
                    <img className='icon' src={props.img} width={"15 px"} />
                    <button className="btn" data-bs-toggle="collapse" data-bs-target={'#' + props.id} aria-expanded="false">
                        <span className='heading'>{props.title}</span>
                    </button>
                </div>
                <div class="collapse sub-list" id={props.id} >
                    <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                        {props.sublist.map((e) => {
                            return (<li><a href="#" class="link-dark rounded text-decoration-none">{e}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </li>

        </>)
    } else {
        return (
            <>
                <div class="mb-1">
                    <div className='list-item'>
                        <img className='icon' src={props.img} width={"15 px"} />
                        <button className="btn" data-bs-toggle="collapse" data-bs-target="#" aria-expanded="false">
                            <span className='heading'>{props.title}</span>
                        </button>
                    </div>
                </div>
            </>)
    }



}


export default DashboardListItem