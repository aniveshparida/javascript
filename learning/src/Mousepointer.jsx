import React from 'react'
import { useState } from 'react';
const Mousepointer = ({render}) => {
    const [pos,setPos]=useState({x:0,y:0});
    function handleChange(e)
    {
        setPos({x:e.clientX,y:e.clientY});
    }
  return (
    <div onMouseMove={handleChange} style={{ height: "100vh" }}>
      {render(pos)}
    </div>
  )
}

export default Mousepointer
