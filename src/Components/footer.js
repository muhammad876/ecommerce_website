import { Component } from "react";
import '../Styles/header.css';
class Footer extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="footer">
                 <button className="btn" >Book a Pick</button>
                <h2>Auckland, New Zealand</h2>
            </div>
         );
    }
}
 
export default Footer;