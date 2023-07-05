import React from "react";
import PostDetailCard from "../components/PostDetailCard";
import { redirect, useLoaderData, useNavigate, useRouteLoaderData } from "react-router-dom";
import { getToken } from "../util/auth";

const PostDetail = () => {
  const post = useRouteLoaderData("post-detail");

  return (
    <>
      <PostDetailCard post={post} />
    </>
  );
};

export default PostDetail;

export const loader = async ({ request, params }) => {
  const response = await fetch(`${process.env.REACT_APP_DOMAIN}/posts/${params.id}`);

  if (!response.ok) {
    return redirect('/');
  } else {
    const data = await response.json();
    return data.post;
  }
};

const token = getToken();

export const action = async ({ request, params }) => {
  const response = await fetch(`${process.env.REACT_APP_DOMAIN}/posts/${params.id}`, {
    method: request.method,
    headers: {
      "Authorization" : "Bearer " + token
  }
})

if(response.status === 422) {
    return response;
}

if(!response.ok) {
    throw new Error("")
} 
return redirect('/');
};
