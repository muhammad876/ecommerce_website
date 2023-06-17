import { Component } from "react";
import Footer from './footer';
import V1 from '../images/v1.png';
import V2 from '../images/v2.png';
import V3 from '../images/v3.png';
class Vehicles extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (  
                <div>
                   <div className="residential">
                      <div className="col-1">
                            <h1>Vehicles</h1>
                            <h3>We can store any size or type of vehicle, and offer all sorts of additional services from turning over your engine once in a while to battery charging, wheel turning, or taking it for a valet before delivery back to you.
</h3>
                            <button className="btn" >Book a Pick</button>
                      </div>
                  
                    </div> 
                   <div className="two-column_layout">
                        <div className="column_layout_1">
                             <img src={V1}  className="image"></img>
                        </div>
                        <div className="column_layout_2">
                           <h1>Car </h1>
                            <br></br><br></br>
                            <button className="btn" >ENQUIRE NOW</button>
                        </div>
                   </div>
                   <div className="two-column_layout">
                       
                        <div className="column_layout_2">
                           <h1>Boat </h1><br></br>
                          
                            <br></br><br></br>
                            <button className="btn" >ENQUIRE NOW</button>
                        </div>
    
                        <div className="column_layout_1">
                             <img src={V2}  className="image"></img>
                        </div> 
                   </div>
         
    
                    <div className="two-column_layout">
                        <div className="column_layout_1">
                             <img src={V3}  className="image"></img>
                        </div>
                        <div className="column_layout_2">
                           <h1> Heavy Machinery </h1>
                           <br></br>
                                 <h3>& Trucks</h3>
                        
                            <br></br><br></br>
                            <button className="btn" >ENQUIRE NOW</button>
                        </div>
                   </div>
    
                
                    <Footer></Footer>
                </div>
             );
        }
    }
 
export default Vehicles;