import React from 'react'

const Child = ({users}) => {
  return (
    <div>
      <ul>
        {
        users.map((user)=>(
            <li key={user.id}>{user.name}</li>
        ))
        }
      </ul>
    </div>
  )
}

export default React.memo(Child);
