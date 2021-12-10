import React from "react";
import "./Rectanle1.css"
import WOMEN from "./HomeImages/rect-img.png"
function Rectangle1() {
  return (
    <div className="Rectangle-1">
    <div className="rect-cont1">Online Live Trainings</div>
    <div className="rect-cont2">Meet your goals by our Online Live training. Well-designed teaching methods 
    for your desired top scores. </div>
    <button className="rect-button">GET STARTED</button>
    <img className="WOMEN" src={WOMEN} alt="WOMEN_image" />
    </div>
  );
}
export default Rectangle1;