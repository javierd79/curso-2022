import React, { useState, useEffect } from 'react'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/users'

export default function Users () {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get(URL).then((res) => {
      console.log(res)
      setUsers(res.data)
    })
  }, [])
  return (
    <div>
      {
        users.map((user, index) => (
          <div key={index}>
            <hr />
            <div>
              <p>Nombre: {user.name}</p>
              <p>Correo: {user.email}</p>
              <p>Username: {user.username}</p>
              <p>Direaccion: {user.address.street} {user.address.suite}</p>
            </div>
            <hr />
          </div>
        ))
      }
    </div>
  )
}
