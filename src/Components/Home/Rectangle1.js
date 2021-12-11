import React from "react";
import "./Rectanle1.css"
import WOMEN from "./HomeImages/rect-img.png"
import Ellipse1 from "./HomeImages/Ellipse_1.png"
import Ellipse2 from "./HomeImages/Ellipse_2.png"
function Rectangle1() {
  return (
    <div className="Rectangle-1">
    <div className="rect-cont1">Online Live Trainings</div>
    <div className="rect-cont2">Meet your goals by our Online Live training. Well-designed teaching methods 
    for your desired top scores. </div>
    <button className="rect-button">GET STARTED</button>
    
    <img className="Ellipse1" src={Ellipse1} alt="Ellipse1_image" />
    <img className="Ellipse2" src={Ellipse2} alt="Ellipse2_image" />
    <img className="WOMEN" src={WOMEN} alt="WOMEN_image" />
    <div className="rect-forum">
    <div className="forum-head">Enquiry</div>
  
    
    <form>
  <label>
    <input className="form_inp1" type="text" name="name" placeholder="Full name"/>
  </label>
  <label>
  <input className="form_inp2" type="text" name="Email" placeholder="Email"/>
  </label>
  <label>
  <input className="form_inp3" type="text" name="Phone number" placeholder="Phone number"/>
  </label>
  <label>
  <input className="form_inp4" type="text" name="Message" placeholder="Message"/>
  </label>
  <input className="form_button" type="submit" value="GET STARTED" />
</form>
    
    </div>
    </div>
  );
}
export default Rectangle1;