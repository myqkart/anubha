import React from "react";
import { PERSON } from "../profile.data";

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
      </h2>

      <div className="container">
        <div className="row" id="skillsContainer">
          {PERSON.skills.map((data) => {
            return (
              <div className="bar" key={data.name}>
                <div className="info">
                  <img src={data.icon} alt=""/>
                  <span>{data.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
