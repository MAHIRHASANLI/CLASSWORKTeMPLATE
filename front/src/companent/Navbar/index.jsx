import React from "react";
import Style from "./index.module.css";
// import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={Style.Header}>
      <div className={Style.Navbar}>
        <div className={Style.SolNav}>
          We believe we helps people for happier lives
        </div>

        <div className={Style.OrtaNav}>
          <img
            src="https://preview.colorlib.com/theme/immigration/img/logo.png"
            alt=""
          />
        </div>

        <div className={Style.SagNav}>
          <a href="">+880 123 12 658 439 </a>
          <div className={Style.iconss}>
            <CallIcon />
          </div>
        </div>
      </div>
      <div className={Style.AltNavbar}>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/addelement">
          <Button>Add Element</Button>
        </Link>
        <Button>ABOUT</Button>
        <Button>IMMIGRATION</Button>
        <Button>COURSE</Button>
        <Button>COUNT</Button>
        <Button>CONTACT</Button>
        <Button>ELEMENTS</Button>
      </div>
    </div>
    // <ul>
    //
    //
    // </ul>
  );
};

export default Navbar;
