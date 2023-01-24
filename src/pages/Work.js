import React from "react";
import { Link } from "react-router-dom";
import { PERSON } from "../profile.data";

export const Work = () => {
    return (
        <section className="work" id="work">

  <h2 className="heading"><i className="fas fa-laptop-code"></i> Projects <span>Made</span></h2>

{
  PERSON.projects.map((pro) => {
    return (
    <div className="box-container" key={pro.name}>
      <div className="box tilt">
        <img draggable="false" src={pro.image} alt="" />
        <div className="content">
          <div className="tag">
          <h3>{pro.name}</h3>
          </div>
          <div className="desc">
            <p>{pro.desc}</p>
          </div>
        </div>
      </div>
    </div>
    )
  })
}
</section>
    )
}