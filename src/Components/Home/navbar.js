import "./navbar.css"
import Facebook from "./HomeImages/facebook.png"
import Insta from "./HomeImages/insta.png"
import Twitter from "./HomeImages/twitter.png"
import Phone from "./HomeImages/phone.png"
function navbarComponent(){
    return(
        <div>
        <div className="container">
        <img className="facebook" src={Facebook} alt="facebook_image" />
        <img className="instagram" src={Insta} alt="instagram_image" />
        <img className="twitter" src={Twitter} alt="twitter_image" />
        <div className="fullcontainer">
        <img className="phone" src={Phone} alt="phone_image" />
        <div className="Text">
               +91-8341015060
        </div>
        </div>
        </div>
        </div>
    );
}
export default navbarComponent;