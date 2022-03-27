import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    
 let mydata = 10;
 const[myNum, setmyNum] = useState(mydata);
 useEffect(() =>{
     console.log("Hi");
 }, [])
  return (
    <>
    <div className='col-md-8 offset-md-2'>
    <p>{myNum}</p>
<button type="button" class="btn btn-success" onClick={ () => {setmyNum(myNum + 1)}}>Increase</button>


{/* <button type="button" class="btn btn-danger"  onClick={ () => {myNum>0?setmyNum(myNum - 1) : setmyNum(0)}} >Decrease</button> */}

</div>
    </>
  )
}

export default UseEffect