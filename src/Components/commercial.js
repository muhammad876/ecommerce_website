import { Component } from "react";
import CommercialImage from '../images/Commercial.png';
import Footer from './footer';
class Commercial extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="commercial">
                    <img src={CommercialImage}></img>
                 
                    <div className="box">
                    <h1 className="mainheading">Commercial</h1>
                        <div className="box1">
                        <h1  className="heading1">Drop</h1>
                        <h1>Shipping</h1>
                        <button className="btn" >ENQUIRE NOW</button>
                        </div>

                        <div className="box1">
                            <h1  className="heading1">Pick</h1>
                            <h1>& Pack</h1>
                            <button className="btn" >ENQUIRE NOW</button>
                        </div>
                       
                        <div className="box1">
                            <h1  className="heading1">3rd party</h1>
                            <h1>logistics</h1>
                            <button className="btn" >ENQUIRE NOW</button>
                        </div>
                        <div className="box1">
                            <h1  className="heading1">Commercial</h1>
                            <h1>Storage</h1>
                            <button className="btn" >ENQUIRE NOW</button>
                        </div>
                    </div>

                    
                </div>
                <Footer></Footer>
            </div>
         );
    }
}
 
export default Commercial;