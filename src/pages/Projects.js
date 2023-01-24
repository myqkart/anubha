import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PERSON } from "../profile.data";

export const Projects = () => {
  const initCates = [
    { id: 0, checked: true, name: "All Projects" },
    { id: 2, checked: false, name: "MERN Stack" },
    { id: 1, checked: false, name: "MARN Stack" },
    // { id: 3, checked: false, name: "Basic Web" },
    // { id: 4, checked: false, name: "Android App" },
  ];
  const [projects, setProjects] = useState(PERSON.projects);
  const [categories, setCategories] = useState(initCates);

  const filterProjects = (category) => {
    setCategories((pre) => {
      return pre.map((c) => {
        c.checked = c.id === category ? true : false;
        return c;
      });
    });
    const filteredPro = PERSON.projects.filter((p) => p.category === category);
    setProjects(category ? filteredPro : PERSON.projects);
  };

  return (
    <section className="work" id="work">
      <h2 className="heading"><i className="fas fa-laptop-code"></i> Projects <span>Made</span></h2>

      <div id="filters" className="button-group">
        {categories.map((cat) => {
          return (
            <button key={cat.id} className={`btn ${cat.checked ? "is-checked" : ""}`}
              onClick={() => filterProjects(cat.id)}>{cat.name}</button>
          );
        })}
      </div>

        { projects.length ? projects.map((project) => {
          return (
      <div className="box-container" key={project.name}>
            <div className="box tilt">
              <img src={project.image} alt="" />
              <div className="content">
                <div className="tag"><h3>{project.name}</h3></div>
                <div className="desc">
                  <p>{project.desc}</p>
                  <div className="btns">
                    <a href={project.links.view} className="btn" target="_blank"><i className="fas fa-eye"></i>View</a>
                    <a href={project.links.code} className="btn" target="_blank">Code <i className="fas fa-code"></i></a>
                  </div>
                </div>
              </div>
            </div>
      </div>
          );
        }) : (
          <h1 className="heading" style={{color: 'white'}}>No data found!</h1>
        )}

      <div className="backbtn">
        <Link to="/work" className="btn"><i className="fas fa-arrow-left"></i><span>Back to Home</span></Link>
      </div>
    </section>
  );
};
