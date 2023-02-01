import React from "react";
import { PERSON } from "../profile.data";

const ExpList = ({exp, i}) => {
  return (
    <div className={`container ${ (i%2) ? 'left' : 'right'}`}>
      <div className="content">
        <div className="tag">
          <h2>{exp.company_name}</h2>
        </div>
        <div className="desc">
          <h3>{exp.role}</h3>
          <p>{exp.join_from} - {exp.till}</p>
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="heading"> <i className="fas fa-briefcase"></i> Experience</h2>
      <div className="quote">
        <span>
          every experience in your life is being orchestrated to teach you
          something you need to know to move forward.
        </span>
      </div>
      <div className="timeline">
        { PERSON.experience.map((exp, i) => <ExpList exp={exp} key={i} i={i}/>) }
      </div>
      <div className="morebtn">
        <a href="/#experience" className="btn">
          <i className="fas fa-arrow-left"></i>
          <span> Back to Home</span>
        </a>
      </div>
    </section>
  );
};
