import React from 'react'
import PostForm from '../components/PostForm'
import { v4 as uuid } from 'uuid';
import { redirect } from 'react-router-dom';

const CreatePost = () => {
  return (
    <>
        <PostForm heading={"Add New Post"} btn={"Post"} method={"POST"} />
    </>
  )
}

export default CreatePost

