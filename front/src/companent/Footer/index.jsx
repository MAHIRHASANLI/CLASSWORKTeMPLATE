import React from "react";
import style from "./index.module.css"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FiberDvrIcon from "@mui/icons-material/FiberDvr";
const Footer = () => {
  return (
    <div className={style.esas}>
      <div className={style.iceri}>
      <div className={style.ss}>
        Copyright ©2023 All rights reserved | This template is made with by &&
        <a style={{color:'red'}} href="">Colorlib</a>
      </div>
      <div className={style.ss}>
        <a href=""><FacebookIcon className={style.iconlar} /></a>
        <a href=""><InstagramIcon className={style.iconlar} /></a>
        <a href=""><InstagramIcon className={style.iconlar} /> </a>
        <a href=""><TwitterIcon className={style.iconlar} /> </a>
       <a href=""><FiberDvrIcon className={style.iconlar} /></a>
      </div>
      </div>
    </div>
  );
};

export default Footer;
