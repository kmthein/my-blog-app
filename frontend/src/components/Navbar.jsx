import React, { useEffect } from "react";
import { Link, NavLink, useRouteLoaderData } from "react-router-dom";
import { getToken } from "../util/auth";

const Navbar = () => {
  const token = useRouteLoaderData('root');

  return (
    <div className="  py-3 flex items-center justify-between">
      <Link to="/">
        <h4 className="font-bold text-lg">MYBLOG</h4>
      </Link>
      <div className="font-semibold flex gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-cyan-950 text-white px-2 py-2 w-[80px] text-center"
              : "py-2"
          }
        >
          Home
        </NavLink>
        <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive
                  ? "bg-cyan-950 text-white px-2 py-2 w-[80px] text-center"
                  : "py-2"
              }
            >
              Posts
            </NavLink>
        {
          token && (
          <> 
            <NavLink
              to="/create-post/"
              className={({ isActive }) =>
                isActive ? "bg-cyan-950 text-white px-2 py-2" : "py-2"
              }
            >
              Create Post
            </NavLink>
          </>
        )}
        {
          !token &&
          (
            <NavLink
              to="/auth?mode=login"
              className={({ isActive }) =>
                isActive ? "bg-cyan-950 text-white px-2 py-2" : "py-2"
              }
            >
              Login
            </NavLink>
          )
        }
        {
          token &&
          (
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive ? "bg-cyan-950 text-white px-2 py-2" : "py-2"
              }
            >
              Logout
            </NavLink>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
