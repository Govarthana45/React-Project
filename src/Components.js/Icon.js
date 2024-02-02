import React from "react";

import Facebook from "../Assets/facebook.png";
import Instagram from "../Assets/instagram.png";
import Linkedin from "../Assets/linkedin.png";
import Twitter from "../Assets/twitter.png";
import Youtube from "../Assets/youtube.png";

const Icon = () => {
  return (
    <div className="icons d-flex justify-content-end pt-4 pe-4">
      <p className="pe-3">Join the conversation</p>
      <a href="https://www.facebook.com/RoyalEnfield/">
        <img src={Facebook}></img>
      </a>
      <a href="https://www.youtube.com/channel/UCyxUUHqmz9IiAnrROJc0mag">
        <img src={Youtube}></img>
      </a>
      <a href="https://www.instagram.com/royalenfield/">
        <img src={Instagram}></img>
      </a>
      <a href="https://www.linkedin.com/company/royal-enfield/">
        <img src={Linkedin}></img>
      </a>
      <a href="https://twitter.com/royalenfield">
        <img src={Twitter}></img>
      </a>
    </div>
  );
};
export default Icon;
