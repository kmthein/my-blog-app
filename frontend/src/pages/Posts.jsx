import React from 'react'
import PostCard from '../components/PostCard'
import { json, useLoaderData } from 'react-router-dom'

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div className=' grid grid-cols-3 gap-10 my-10'>
      {
        posts.length > 0 && 
        posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))
      }      
    </div>
  )
}

export default Posts

export const loader = async () => {
  const response = await fetch(`${process.env.REACT_APP_DOMAIN}/posts`);
  if(!response.ok) {
    throw new Error("")
  } else {
    const data = await response.json();
    return data.posts;
  }
}