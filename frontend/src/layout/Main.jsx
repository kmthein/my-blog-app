import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import {
  Outlet,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { getExpireTime } from "../util/auth";
import { MagnifyingGlass } from "react-loader-spinner";

const Main = () => {
  const token = useLoaderData();

  const submit = useSubmit();

  const navigate = useNavigation();

  const isLoading = navigate.state == "loading";

  useEffect(() => {
    const duration = getExpireTime();

    if (!token) {
      return submit(null, { action: "/logout" }, { method: "post" });
    }

    setTimeout(() => {
      return submit(null, { action: "/logout" }, { method: "post" });
    }, [duration]);
  }, [token, submit]);

  return (
    <div className="w-[80%] mx-auto">
      <Navbar />
      {isLoading ? (
        <div className=" flex items-center justify-center h-[80vh]">
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#E9E9E9"
            color="#080703"
          />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Main;
