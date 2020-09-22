import React from "react";

function Footer() {
  return (
    <footer>
      <div
        className="container-fluid text-center"
        style={{ backgroundColor: "black" }}
      >
        <div className="py-5">
          <h2 className="text-light">Interested in working with me?</h2>
          <button className="btn btn-outline-light btn-lg mt-3">
            Let's talk
          </button>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-3">More links</h5>
            <a href="/" className="text-light d-block">
              Blogs
            </a>
            <a href="/" className="text-light d-block">
              Home
            </a>
            <a href="/" className="text-light d-block">
              Projects
            </a>
            <a href="/" className="text-light d-block">
              Contact me
            </a>
            <a href="/" className="text-light">
              Write a recommendation <i className="fas fa-heart text-light"></i>
            </a>
          </div>
          <div className="col-12 col-md-4 text-light text-justify py-3">
            <p>
              Feel free to connect with me.I believe in working hard smartly. You just need believe in your work maintaining healthy 
              relationships.I'm here to willingly work for an organization or an institute that gives me 
              oppurtunities to learn new technologies and skills for the growth of company and 
              my advancement of career. I am comfortable in both java and python. Ready to take up industry level
               projects.Technology makes an impact to solve real world problems.
            </p>
          </div>
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-3">Social</h5>
            <a href="/">
              <i className="fab fa-linkedin text-light h1 d-block"></i>
            </a>
            <a href="/">
              <i className="fab fa-github text-light h1 d-block"></i>
            </a>
            <a href="/">
              <i className="fas fa-envelope text-light h1 d-block"></i>
            </a>
          </div>
        </div>
        <div className="text-muted py-3">
          <p>Copyright © Anudeep Kandula 2020</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
