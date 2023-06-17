
import { Component } from "react";
import Carton from '../images/cartoon.png';
import Footer from "./footer";
class Contact extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="contactus">
                  <h1>Contactus <span>022 408 9110</span></h1>
                  <ul>
                    <li>Phone us now on 022 408 9110</li>
                    <li>Email us using the form below</li>
                    <li>Or live chat using the 'Chat now' button below</li>
                  </ul>
                  <div className="row">
                    <div className="col">
                       <img src={Carton}></img>
                    </div>
                    <div className="col">
                        <h1>Email us</h1>
                      
                       <div class="feedback-form">
                        <form>
                                    <input type="text" placeholder="Firstname" />
                                    <input type="text" placeholder="Lastname" />
                                    <input type="email" placeholder="Lastname" />
                                    <textarea type="text" placeholder="Message"></textarea>
                                    <button class="form-btn">Login</button>
                                
                            </form>
                        </div>
                    </div>
                  </div>
                  <Footer></Footer>
            </div>
         );
    }
}
 
export default Contact;