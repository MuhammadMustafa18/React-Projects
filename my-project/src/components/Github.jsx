import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const Data = useLoaderData()

  // const [Data, setData] = useState(0)
  // useEffect(() => {
  //   fetch("https://api.github.com/users/hiteshchoudhary").then(response => response.json()).then(data => {
  //     console.log(data);
  //     setData(data)
  //   });
  // }, [])
  return (
    <div className='text-center bg-gray-400 text-white'>Followers: {Data.followers}</div>
  )
}

export default Github

export const gitinfo = async () => {
  const resp = await fetch("https://api.github.com/users/hiteshchoudhary");
  return resp.json();
}