import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/avatar.jpg";
import { PERSON } from "../profile.data";

const socialData = [
  { icon: "fab fa-linkedin", class: "linkedin", label: "LinkedIn", url: `${PERSON.social_url.linkedIn}` },
  { icon: "fab fa-github", class: "github", label: "GitHub", url: `${PERSON.social_url.gitHub}` },
  { icon: "fas fa-envelope", class: "", label: "", url: `mailto:${PERSON.email}` },
  { icon: "fab fa-instagram", class: "instagram", label: "Instagram", url: `${PERSON.social_url.insta}` },
];

const SocialLink = ({data}) => {
  return (
    <li key={data.class}>
      <a className={data.class} aria-label={data.label}
        href={data.url} target="_blank">
        <i className={data.icon}></i>
      </a>
    </li>
  );
};

export const Home = () => {
  return (
    <section className="home" id="home">
      <div id="particles-js"></div>
      <div className="content">
        <h2>Hi There,<br /> I'm {PERSON.first_name} <span>{PERSON.last_name}</span></h2>
        <p>i am into <span className="typing-text">Software Development</span></p>
        <Link to="/about" className="btn">
          <span>About Me</span>
          <i className="fas fa-arrow-circle-right"></i>
        </Link>
        <div className="socials">
          <ul className="social-icons">
            { socialData.map((data, i) => <SocialLink data={data} key={i} /> ) }
          </ul>
        </div>
      </div>
      <div className="image">
        <img draggable="false" className="tilt" src={heroImg} alt="" />
      </div>
    </section>
  );
};
