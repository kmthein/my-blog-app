import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Form, Link, useRouteLoaderData, useSubmit } from "react-router-dom";
import { AiFillCalendar } from "react-icons/ai";

const PostDetailCard = ({ post }) => {
  const { id, title, date, image, description } = post;

  const submit = useSubmit();

  const deletePostHandler = () => {
    const confirmStatus = window.confirm(
      "Are you sure want to delete this post ?"
    );

    if (confirmStatus) {
      submit(null, { method: "DELETE" });
    }
  };

  const token = useRouteLoaderData("root");

  return (
    <>
      <div className=" float-right mr-40">
        <Link to="/">
          <IoMdArrowRoundBack className="text-2xl" />
        </Link>
      </div>
      <div className="w-[70%] mx-auto mt-10 px-8">
        <h2 className="font-bold text-3xl my-2">{title}</h2>
        <div className="flex items-center gap-2">
          <AiFillCalendar className="text-lg" />
          <h4> {date}</h4>
        </div>
        <img src={image} className="pt-3 h-[400px] mx-auto my-5" alt="" />
        <p className="mx-auto text-left leading-relaxed py-5">{description}</p>
        <div className="flex gap-3 justify-end mb-5">
          {token && (
            <>
              <Link to={`edit-post`}>
                <button className="bg-indigo-950 text-white w-[60px] py-1">
                  Edit
                </button>
              </Link>
              <button
                onClick={deletePostHandler}
                className="bg-red-700 text-white w-[60px] py-1"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PostDetailCard;
