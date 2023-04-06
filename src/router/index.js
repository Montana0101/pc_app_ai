import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Login from "../renderer/login/index"

 export const router = createBrowserRouter([
    {
      path: "/",
    //   element: <Root />,
    //   loader: rootLoader,
      children: [
        {
          path: "login",
          element: <Login />,
        //   loader: teamLoader,
        },
      ],
    },
  ]);
  