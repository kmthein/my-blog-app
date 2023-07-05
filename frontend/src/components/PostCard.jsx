import React from "react";
import { Link } from "react-router-dom";
import { AiFillCalendar } from "react-icons/ai";

const PostCard = ({ post }) => {
  const { id, title, image, date } = post;

  return (
    <div className="post-card w-[100%] mx-auto pb-5 rounded-md mb-2">
      <Link to={`/${id}`}>
        <img
          src={image}
          className="w-full h-[200px] rounded-t-md object-cover mx-auto "
          alt={title}
        />
      </Link>
      <div className="ml-6 my-2">
        <Link to={`${id}`}>
          <p className="font-bold post-card py-2 pr-2">{title}</p>
        </Link>
        <div className="flex items-center gap-2 bg-white">
          <AiFillCalendar />
          <p className="post-card date w-full">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
