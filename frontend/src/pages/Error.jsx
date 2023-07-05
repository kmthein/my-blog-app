import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();

  return (
    <div className=' block text-center'>
      <h1 className='text-2xl my-3 font-semibold'>Something went wrong!</h1>
      <p>{error.message}</p>
      <Link to='/' className='underline'>Go Back Home</Link>
    </div>
  )
}

export default Error