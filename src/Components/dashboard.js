import { Component } from "react";
import logo from '../images/logo.png';
import Background from '../images/background.png';
import App from '../images/app.png';
import Footer from "./footer";   
class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="dashbaord">
           
               <div className="image-container">
                <img className="image-1" src={logo} />
                <img className="image-2" src={Background} /> 
                <button class="btn" >Book a Pick</button>
               </div>
               <div className="dashboard-text">
                <h1>
                Storable's <span>'one click storage'</span> system offers<br></br>
                    the <i>easiest</i> most <i>convenient</i><br></br>
                    storage solution in NZ
                </h1>
               </div>
           
               <div className="image-container">
                 <img className="image-2" src={App} />
                </div>
                <div className="d_end">
                 <button className="btn" >Book a Pick</button>
                <h2>Auckland, New Zealand</h2>
                </div>
            </div>
         );
    }
}
 
export default Dashboard;