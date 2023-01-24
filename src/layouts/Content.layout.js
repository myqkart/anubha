import React from "react";
import { Outlet } from "react-router-dom";

// csss
import '../assets/css/main.css'
import '../assets/css/util.css'

export const ContentLayout = () => {
  return <Outlet />;
};
