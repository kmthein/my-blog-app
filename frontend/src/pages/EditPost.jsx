import React from 'react'
import PostForm from '../components/PostForm'
import { useRouteLoaderData } from 'react-router-dom'

const EditPost = () => {
    const data = useRouteLoaderData('post-detail');

  return (
    <>
        <PostForm heading={"Edit Post"} btn={"Update"} oldPostData={data} method={"PATCH"} />
    </>
  )
}

export default EditPost