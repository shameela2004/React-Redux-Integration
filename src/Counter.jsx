import React from 'react'
import {useDispatch,useSelector} from 'react-redux'

function Counter() {
    const dispatch=useDispatch()
    const count=useSelector(state=>state)
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>+</button>
        <button onClick={()=>dispatch({type:"decrement"})}>-</button>

    </div>
  )
}

export default Counter