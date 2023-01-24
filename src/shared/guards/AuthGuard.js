import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthGuard = (props) => {
  const Component = props.element;
  const navigate = useNavigate();

  const user = localStorage.getItem("loggedInUser");

  useEffect(() => {
    if (!user) {
      navigate("/auth/login");
    }
  }, []);

  return <Component />;
};
