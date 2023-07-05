import React from "react";
import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

const AuthForm = () => {
  const [searchParams] = useSearchParams();

  const isLogin = searchParams.get("mode") == "login";

  const data = useActionData();

  const navigate = useNavigation();

  const isSubmitting = navigate.state == "submitting";

  return (
    <>
      <div className="post-card p-10 w-[40%] mx-auto rounded-md">
        <h2 className="text-lg font-bold mb-4">
          {isLogin ? "Login your account" : "Create new account"}
        </h2>
        <Form method="POST">
          {/* {
            !isLogin && 
            (
                <>
                <div className="my-1">
                <label htmlFor="">Name</label>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="fname"
                  className=" bg-gray-200 w-full py-1 px-1"
                />
              </div>
              </>
            )
          } */}
          <div className="my-1">
            <label htmlFor="">Email</label>
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              className=" bg-gray-200 w-full py-1 px-1"
            />
          </div>
          <div className="my-1">
            <label htmlFor="">Password</label>
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              className=" bg-gray-200 w-full py-1 px-1"
            />
          </div>
          {data && data.errors && (
            <ul>
              {Object.values(data.errors).map((err, index) => (
                <li key={index} className=" text-red-500">
                  {err}
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-center pt-3 mb-5">
            <button className=" bg-cyan-950 text-white py-1 px-5 disabled:bg-gray-300" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : isLogin ? "Login" : "Register"}
            </button>
          </div>
        </Form>
        <div>
          {isLogin ? (
            <span>
              Don't have an account?{" "}
              <Link to="/auth?mode=signup" className=" underline">
                Register here
              </Link>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <Link to="/auth?mode=login" className=" underline">
                Login here
              </Link>
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthForm;
