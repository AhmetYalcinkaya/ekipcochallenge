import React from "react";

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span> Katalog App</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a href="#!" className="me-4 text-reset">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#!" className="me-4 text-reset">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#!" className="me-4 text-reset">
            <i className="bi bi-google"></i>
          </a>
          <a href="#!" className="me-4 text-reset">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#!" className="me-4 text-reset">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          Katalogapp.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
