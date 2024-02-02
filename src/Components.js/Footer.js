import React from "react";
import Icon from "./Icon";

const Footer = () => {
  return (
    <div className="bg-light">
      <Icon />
      <div className="bg-light d-flex justify-content-between p-4 ">
        <div className="footerlist font-weight-bold ">
          <h4>Motorcycles</h4>
          <li>New Himalayan</li>
          <li>Bullet 300</li>
          <li>Super Metero 650</li>
          <li>Hunter 350</li>
          <li>Scram 411</li>
          <li>Classic 350</li>
          <li>Continental GT</li>
        </div>
        <div className="footerlist font-weight-bold">
          <h4>Support</h4>
          <li>Service Centers</li>
          <li>Stores</li>
          <li>Owners Manual</li>
          <li>Contact Us</li>
          <li>Book a test ride</li>
        </div>
        <div className="footerlist font-weight-bold">
          <h4>New & Media</h4>
          <li>News</li>
          <li>Press Releases</li>
          <li>Media Kit</li>
          <li>Events</li>
        </div>
        <div className="footerlist font-weight-bold">
          <h4>About Us</h4>
          <li>Since 1901</li>
          <li>About Eicher Motors</li>
        </div>
      </div>
    </div>
  );
};
export default Footer;
