import React, { useReducer, useState }  from 'react'



const reducer = (state, action) => {
    if (action.type === "INCR") {
        state = state + 1; 
        console.log("Increase button clicked", state);
    }

    return state;
};
const UseReducer = () => {
    // let mydata = 10;
    // const [myNum, setmyNum] = useState(mydata);
    let initialData = 10;
    const [state, dispatch] = useReducer(reducer, initialData);


    return (
        <>

            <div className='col-md-8 offset-md-2'>
                <p>{state}</p>
                <div className='form-group py-3'><button type="button" class="btn btn-success "  onClick={() => dispatch({type:"INCR"})}>Increase</button></div>
                <button type="button" class="btn btn-danger"  >Decrease</button>

            </div>
        </>
    )
}

export default UseReducer