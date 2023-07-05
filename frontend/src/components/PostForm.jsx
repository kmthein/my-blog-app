import React from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import {v4 as uuid} from "uuid";
import { getToken } from "../util/auth";

const PostForm = ({heading, btn, oldPostData, method}) => {
const data = useActionData();

const navigate = useNavigation();

const isSubmitting = navigate.state === "submitting";

  return (
    <Form method={method}>
      <div className="post-card p-10 w-[40%] mx-auto rounded-md">
        <h2 className="text-lg font-bold mb-4">{heading}</h2>
        {/* {
            data && data.errors && (
                Object.values(data.errors).map((err) => (
                    <p>{err}</p>
                ))
            )
        } */}
        <div className="my-1">
          <label htmlFor="">Title</label>
        </div>
        <div className="mb-4">
          <input type="text" name="title" className=" bg-gray-200 w-full py-1 px-1" defaultValue={oldPostData ? oldPostData.title : ""} />
        </div>
        <div className="my-1">
          <label htmlFor="">Image URL</label>
        </div>
        <div className="mb-4">
          <input type="url" name="image" className=" bg-gray-200 w-full py-1 px-1" defaultValue={oldPostData ? oldPostData.image : ""} />
        </div>
        <div className="my-1">
          <label htmlFor="">Date</label>
        </div>
        <div className="mb-4">
          <input type="date" name="date" className=" bg-gray-200 w-full py-1 px-1" defaultValue={oldPostData ? oldPostData.date : ""} />
        </div>
        <div className="my-1">
          <label htmlFor="">Description</label>
        </div>
        <div className="mb-4">
          <textarea
            type="date"
            className=" bg-gray-200 w-full py-1 px-1"
            rows={5}
            name="description"
            defaultValue={oldPostData ? oldPostData.description : ""}
          />
        </div>
        <div className="flex justify-end">
          <button className=" bg-cyan-950 text-white py-1 px-5">
            {
              isSubmitting ? "Submitting" : btn
            }
          </button>
        </div>
      </div>
    </Form>
  );
};

export default PostForm;

export const action = async ({request, params}) => {
  const data = await request.formData()
  const newPost = {
      id: uuid(),
      title: data.get("title"),
      image: data.get("image"),
      date: data.get("date"),
      description: data.get("description")
  }
  const method = request.method;

  const token = getToken();

  let url = `${process.env.REACT_APP_DOMAIN}/posts`;
  if(method == "PATCH") {
    const id = params.id;
    url = `${process.env.REACT_APP_DOMAIN}/posts/${id}`;
  }


  const response = await fetch(url, {
      method: method,
      headers: {
          "Content-Type" : "application/json",
          "Authorization" : "Bearer " + token
      },
      body: JSON.stringify(newPost),
  })

  if(response.status === 422) {
      return response;
  }

  if(!response.ok) {
      throw new Error("")
  } 
  return redirect('/');
}