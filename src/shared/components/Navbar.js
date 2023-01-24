import React, { useState } from "react";
import { useNavigate, NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setActive] = useState(false);

  const navData = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Skills", url: "/skills" },
    { id: 4, name: "Education", url: "/education" },
    { id: 5, name: "Work", url: "/work" },
    { id: 6, name: "Experience", url: "/experience" },
    { id: 7, name: "Contact", url: "/contact" },
  ];

  const toggleClass = () => {
    setActive(!isActive);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/auth/login", { replace: true });
  };

  return (
    <header>
      <NavLink to="/" className="logo">
        <i className="fab fa-node-js"></i> Anubha Kansal
      </NavLink>

      <div
        id="menu"
        className={`fas fa-${isActive ? "times" : "bars"}`}
        onClick={toggleClass}
      ></div>
      <nav className={`navbar ${isActive ? "nav-toggle" : ""}`}>
        <ul>
          {navData.map((data) => {
            return (
              <li key={data.id}>
                <NavLink to={data.url} onClick={toggleClass}>{data.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
        {/* <div className="home">
          <button onClick={handleLogout} className="btn">
            <span>Logout</span>
          </button>
        </div> */}
    </header>
  );
};
