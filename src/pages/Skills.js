import React from "react";
import { PERSON } from "../profile.data";

const Skill = ({data}) => {
  return (
    <div className="bar">
      <div className="info">
        <img src={data.icon} alt=""/>
        <span>{data.name}</span>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
      </h2>
      <div className="container">
        <div className="row" id="skillsContainer">
          { PERSON.skills.map((data, i) => <Skill data={data} key={i} />) }
        </div>
      </div>
    </section>
  );
};
