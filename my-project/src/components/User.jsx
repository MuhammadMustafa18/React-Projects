import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {id} = useParams()
  return (
    <div>User: {id}</div> // same as router one
  )
}

export default User