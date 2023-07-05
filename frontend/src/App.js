import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import { loader as postsLoader } from "./pages/Posts";
import {
  action as deleteAction,
  loader as postDetailLoader,
} from "./pages/PostDetail";
import PostDetail from "./pages/PostDetail";
import { action as createPostAction } from "./components/PostForm";
import { action as updatePostAction } from "./components/PostForm";
import EditPost from "./pages/EditPost";
import Error from "./pages/Error";
import Auth, { action as authAction } from "./pages/Auth";
import HomePage from "./pages/HomePage";
import Logout, { loader as logoutLoader } from "./pages/Logout";
import { authLoader, tokenLoader } from "./util/auth";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      loader: tokenLoader,
      id: "root",
      errorElement: <Error />,
      children: [
        { index: true, element: <HomePage />},
        { path: '/posts/', element: <Posts />, loader: postsLoader },
        {
          path: "/create-post",
          element: <CreatePost />,
          action: createPostAction,
          loader: authLoader
        },
        {
          path: "/auth",
          element: <Auth />,
          action: authAction
        },
        {
          path: ":id",
          id: "post-detail",
          loader: postDetailLoader,
          children: [
            {
              index: true,
              element: <PostDetail />,
              action: deleteAction,
            },
            {
              path: "edit-post",
              element: <EditPost />,
              action: updatePostAction,
              loader: authLoader
            },
          ],
        },
        {
          path: 'logout',
          loader: logoutLoader
        }
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
