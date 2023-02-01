import React from "react";

export const Error = () => {
  return (
    <section className="page_404">
      <div className="container">
        <div className="wrapper">
          <h1 className="text-center ">404</h1>
        </div>

        <div className="msg">
          <h3>Look like you're lost</h3>
          <p>the page you are looking for not avaible!</p>

          <div className="backbtn">
            <a href="/" className="btn">
              <i className="fas fa-arrow-left"></i>
              <span>Back to Home</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
