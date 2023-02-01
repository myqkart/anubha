import React from "react";
import { PERSON } from "../profile.data";

const ClgList = ({clg}) => {
  return (
    <div className="box">
      <div className="image">
      <img style={{minWidth: '100px'}} draggable="false" src={clg.image} alt="" />
      </div>
      <div className="content">
        <h3>{clg.degree} in {clg.field}</h3>
        <p>{clg.name}</p>
        <h4>{clg.year} | {clg.status}</h4>
      </div>
    </div>
  );
};

const SchList = ({sch}) => {
  return (
    <div className="box" key={sch.year}>
      <div className="image">
        <img draggable="false" src={sch.image} alt=""/>
      </div>
      <div className="content">
        <h3>{sch.degree} | {sch.field}</h3>
        <p>{sch.name} | RBSE</p>
        <h4>{sch.year} | {sch.status}</h4>
      </div>
    </div>
  );
};

export const Education = () => {
  return (
    <section className="education" id="education">
      <h1 className="heading">
        <i className="fas fa-graduation-cap"></i> My <span>Education</span>
      </h1>
      <p className="qoute">
        Education is not the learning of facts, but the training of the mind to think.
      </p>
      <div className="box-container">
        { PERSON.education.college.map((clg, i) => <ClgList clg={clg} key={i}/>) }
        { PERSON.education.school.map((sch, i) => <SchList sch={sch} key={i}/>) }
      </div>
    </section>
  );
};
