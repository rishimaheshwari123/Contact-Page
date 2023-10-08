import { TextField } from "@mui/material";

import React from "react";

const FormDiv = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 firstCol">
          <div classname="content">
            <h1 className="h">Get in Touch</h1>
            <p className="p">
              Reach out to us. We can make something awesome together
            </p>
            <span className="s">
              <i className="fa-solid fa-envelope" />
              info@primefort.net
            </span>
            <br />
            <span className="s1">
              <i class="fa-solid fa-location-dot"></i>
              Raheja Towers, Unit, 812, Alpha <br /> wing, No, 177 Anna Salai,
              Chennai - <br /> 600002
            </span>
          </div>
          <div className="icon">
            <p className="icons">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="border">
            <div className="form">
              <TextField id="filled-basic" label="Full Name" variant="filled" />
              <TextField id="filled-basic" label="Email" variant="filled" />
              <TextField id="filled-basic" label="Subject" variant="filled" />
              <TextField id="filled-basic" label="Message" variant="filled" />
              <br />
              <button className="btn btn2">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormDiv;
