import React from 'react'

const Person = () => {
    // const users = [
    //     {
    //         name: 'Qudus',
    //         age: 28,
    //         occupation: 'Software Engineer',
    //     },
    //     {
    //         name: 'Daniel',
    //         age: 21,
    //         occupation: 'Student',
    //     },
       
    // ]

    const users = ["Qudus", "Freed", "Janet", "Oracle"];

  return (
    <div>
        <h1>Array of Users</h1>
        {/* <ul>
            {users.map((user,id) => {

          return (
            <li key={id}>
              {user.name} is {user.age} years old and  he is  a {user.occupation}
            </li>
          );
            })}
        </ul> */}

        <ul>
            {users.map((user) =>{
                return <li key={user}>{user}</li>
            })}
        </ul>
    </div>
  )
}

export default Person