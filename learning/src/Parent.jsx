import React from 'react'
import Child from './Child';
import {useState,useMemo} from 'react';
const Parent = () => {
    const [count,setCount]=useState(0);
     const users = [
    { id: 1, name: "Anivesh", active: true },
    { id: 2, name: "Ravi", active: false },
    { id: 3, name: "Aman", active: true }
  ];
  const activeUsers=useMemo(()=>{
    return users.filter(user => user.active);
  },[users])
  function handler(e)
  {
    setCount(count+1);
  }
  return (
    <div>
      <button onClick={handler}>{count}</button>
      <Child users={activeUsers}/>
    </div>
  )
}

export default Parent
