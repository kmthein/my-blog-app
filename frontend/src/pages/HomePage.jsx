import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
const isLogin = localStorage.getItem("token");

  return (
    <div className='text-center mt-40'>
            <h1 className='text-5xl'>Welcome from MYBLOG!</h1>
            {
                isLogin ? (
                    <Link to='/posts'>
                    <button className='bg-indigo-950 text-white py-2 px-3 my-8'>View my posts</button>
                </Link>                    
                ) : (
                    <Link to='/auth'>
                    <button className='bg-indigo-950 text-white py-2 px-3 my-8'>Login to view posts</button>
                </Link>
                )
            }

    </div>
  )
}

export default HomePage