import React from "react";

const Footer = () => {
  return (
    <div className="text-light test">
      <footer className="text-center text-lg-start footer text-light text-muted">
        <section className="d-flex justify-content-center footerText  text-light justify-content-lg-between p-4 "></section>

        <section className>
          <div className="container text-center text-light text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  PAT-PRO
                </h6>
                <p>
                  Primefort is a global provider of IT security solutions that
                  solve real business issues. Our dedicated team of security
                  engineers offers solutions to customers throughout the world
                  for securing innovations.
                </p>
              </div>

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-primary fw-bold mb-4">Services</h6>
                <p>
                  <a href="#!" className="text-reset border-none">
                    Web Application Penetration Testing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset border-none">
                    Mobile Application Penetration Testing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset border-none">
                    Network Penetration Testing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset border-none">
                    Cloud Security
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset border-none">
                    Compliance
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset border-none">
                    SOC
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-primary fw-bold mb-4">About Us</h6>
                <p>
                  <a href="#!" className="text-reset border-none">
                    Our Story
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset border-none">
                    Our Journey
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset border-none">
                    Leadership Team
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset border-none">
                    Advisors
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset border-none">
                    Careers
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset border-none">
                    Awards
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <button className="btn mb-3">CONTACT US --></button>
                <p className="icons">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                </p>
                <p>
                  <span className="text-primary">Headquarters</span>
                  <br />
                  Raheja Towers, Unit, 812, Alpha wing, No, 177 Anna Salai,
                  Chennai - 600002
                </p>
                <p>
                  <span className="text-primary">Email</span>
                  <br />
                  info@primefort.net
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4 text-light"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          Privacy Policy | Terms and Conditions
          <br />
          <br />© Copyright - Primefort Private Limited
        </div>
      </footer>
      {/* Footer */}
    </div>
  );
};

export default Footer;
