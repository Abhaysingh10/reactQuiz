import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap';

const Todo = props => {


    const [myData, setmyData] = useState("");
    const [items, setItems] = useState([])

    const adding = () => {
        if(!myData){
            alert("Are you stupid or what");
        }else{
            setItems([...items, myData])
    
        }
    }

    return (
        <>
            <div className=''>
                <p>Add your list here</p>
            </div>

            <div className='input-group'>
                <input type="text"
                    placeholder='Add Item'
                    className='form-control'
                    value={myData}
                    onChange={(event) => setmyData(event.target.value)}

                />
                <span class="input-group-text bg-transparent"><i class="fas fa-plus" onClick={adding}></i></span>
            {/* showing the items */}

                
            
                  


            </div>
                
            {
                items.map((currentElemetn, index) => {
                   return(
                       <h1>{currentElemetn }</h1>
                   )
                    
                })
                }

                

            {/* <div className='py-3'>
                <button type="button" class="btn btn-success"  >Add</button>
            </div> */}
        </>
    )
}

export default Todo