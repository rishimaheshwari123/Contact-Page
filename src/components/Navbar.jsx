import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid p-4 test">
          <a className="navbar-brand textcolor" href="#">
            PrimeFort
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon menuicon" />
          </button>
          <div
            className="collapse navbar-collapse marginControll"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 element textcolor">
              <li className="nav-item">
                <a className="nav-link textcolor" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Managed Security Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link " aria-disabled="true">
                  Initiatices
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-disabled="true">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-disabled="true">
                  Blog
                </a>
              </li>
            </ul>
            <button className="btn">CONTACT US</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
