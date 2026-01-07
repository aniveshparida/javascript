import React from 'react'
import Mousepointer from './Mousepointer'
const Car = () => {
  return (
    <div>
      <Mousepointer render={(pos)=>(<h1>car is at X:{pos.x} Y:{pos.y}</h1>)}/>
    </div>
  )
}

export default Car;
