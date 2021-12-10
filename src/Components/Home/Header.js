import React from "react";
import "./Header.css";
import Logo from "./HomeImages/logo.png";
function Header() {
  return (
    <div>
      <div className="style">
        <img className="logo" src={Logo} alt="Logo_image" />
        <div className="home_style">HOME</div>
        <div className="IELTS_style">IELTS</div>
        <div className="TOEFL_style">TOEFL</div>
        <button className="button-class">CONTACT</button>
      </div>
    </div>
  );
}
export default Header;
