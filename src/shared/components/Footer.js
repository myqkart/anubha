import React from "react";
import { Link } from "react-router-dom";
import { PERSON } from "../../profile.data";

export const Footer = () => {

    const socialData = [
        { icon: "fab fa-linkedin", class: "linkedin", label: "LinkedIn", url: `${PERSON.social_url.linkedIn}` },
        { icon: "fab fa-github", class: "github", label: "GitHub", url: `${PERSON.social_url.gitHub}` },
        { icon: "fas fa-envelope", class: "", label: "", url: `mailto:${PERSON.email}` },
        { icon: "fab fa-instagram", class: "instagram", label: "Instagram", url: `${PERSON.social_url.insta}` },
      ];

    return (
        <section className="footer">

  <div className="box-container">

      <div className="box">
          <h3>Kamlesh's Portfolio</h3>
          <p>Thank you for visiting my personal portfolio website. Connect with me over socials. <br/> <br/> Keep Rising 🚀. Connect with me over live chat!</p>
      </div>

      <div className="box">
          <h3>quick links</h3>
          <Link to="/home"><i className="fas fa-chevron-circle-right"></i> home</Link>
          <Link to="/about"><i className="fas fa-chevron-circle-right"></i> about</Link>
          <Link to="/skills"><i className="fas fa-chevron-circle-right"></i> skills</Link>
          <Link to="/education"><i className="fas fa-chevron-circle-right"></i> education</Link>
          <Link to="/work"><i className="fas fa-chevron-circle-right"></i> work</Link>
          <Link to="/experience"><i className="fas fa-chevron-circle-right"></i> experience</Link>
      </div>

      <div className="box">
          <h3>contact info</h3>
          <p> <i className="fas fa-phone"></i>{PERSON.number}</p>
          <p> <i className="fas fa-envelope"></i>{PERSON.email}</p>
          <p> <i className="fas fa-map-marked-alt"></i>{PERSON.current_place.city}, {PERSON.current_place.country} - {PERSON.current_place.pincode}</p>
          <div className="share">
        {
            socialData.map((data) => {
                return <a href={data.url} className={data.icon} aria-label={data.label} target="_blank"></a>
            })
        }
          </div>
      </div>
  </div>

  {/* <h1 className="credit">Designed with <i className="fa fa-heart pulse"></i> by <a href="https://www.linkedin.com/in/jigar-sable"> jigar sable</a></h1> */}

</section>
    )
}