import React from "react";
import fac from "./Facebook.png";
import ins from "./Instagram.png";
import git from "./GitHub.png";
import lin from "./Linkedin.png";
import twit from "./Twitter.png";
function Footer() {
  return (
    <div className="foot">
      <img src={fac} alt="" />
      <img src={ins} alt="" />
      <img src={git} alt="" />
      <img src={lin} alt="" />
      <img src={twit} alt="" />
    </div>
  );
}

export default Footer;
