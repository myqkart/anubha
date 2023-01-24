import React from "react";

import { About } from "../../pages/About";
import { Contact } from "../../pages/Contact";
import { Home } from "../../pages/Home";
import { Skills } from "../../pages/Skills";
import { Education } from "../../pages/Education";
import { Experience } from "../../pages/Experience";
import { Projects } from "../../pages/Projects";
import { Work } from "../../pages/Work";
import { Error } from "../components/Error";

export const FULL_ROUTES = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/projects",
    element: <Projects />,
  }
];
