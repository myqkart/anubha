import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navData = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Skills", url: "/skills" },
  { id: 4, name: "Education", url: "/education" },
  { id: 5, name: "Work", url: "/work" },
  { id: 6, name: "Experience", url: "/experience" },
  { id: 7, name: "Contact", url: "/contact" },
];

const NavList = ({data, toggleClass}) => {
  return (
    <li>
      <NavLink to={data.url} onClick={toggleClass}>{data.name}</NavLink>
    </li>
  );
}

export const Navbar = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <header>
      <NavLink to="/" className="logo">
        <i className="fab fa-react"></i> Anubha Kansal
      </NavLink>
      <div id="menu" className={`fas fa-${isActive ? "times" : "bars"}`} onClick={toggleClass} ></div>
      <nav className={`navbar ${isActive ? "nav-toggle" : ""}`}>
        <ul>
          { navData.map((data, i) => <NavList data={data} toggleClass={toggleClass} key={i} />) }
        </ul>
      </nav>
    </header>
  );
};
