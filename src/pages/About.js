import React from "react";

import { PERSON } from "../profile.data";
import resume from '../assets/files/resume.pdf';

export const About = () => {
    return (
        <section className="about" id="about">
    <h2 className="heading"><i className="fas fa-user-alt"></i> About <span>Me</span></h2>
    
    <div className="row">

    <div className="image">
        <img draggable="false" className="tilt" src={PERSON.image} alt="" />
    </div>
    <div className="content">
        <h3>I'm {PERSON.first_name} {PERSON.last_name}</h3>
        <span className="tag">{PERSON.current_role}</span>
        
        <p>{PERSON.about}</p>
        
        <div className="box-container">
            <div className="box">
              <p><span> age: </span> {PERSON.age}</p>
              <p><span> phone : </span> {PERSON.number}</p>
            </div>
            <div className="box">
              <p><span> email : </span> {PERSON.email}</p>
              <p><span> place : </span> {PERSON.current_place.city}, {PERSON.current_place.country} - {PERSON.current_place.pincode}</p>
            </div>
        </div>
        
        <div className="resumebtn">
            <a href={resume} className="btn"><span>Resume</span>
                <i className="fas fa-chevron-right"></i>
            </a>
        </div>

    </div>
    </div>
</section>
    )
}