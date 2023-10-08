import { TextField } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FormDiv from "./components/FormDiv";

const App = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <FormDiv />
      <br />
      <br />

      <Footer />
    </div>
  );
};

export default App;
