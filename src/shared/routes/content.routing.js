import React from "react";
import { Forget } from "../../auth/Forget";
import { Login } from "../../auth/Login";
import { Signup } from "../../auth/Signup";
import { Error } from "../components/Error";

export const CONTENT_ROUTES = [
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "forget-password",
    element: <Forget />,
  },  {
    path: "*",
    element: <Error />,
  },
];
