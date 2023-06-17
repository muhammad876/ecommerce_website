import { Component } from "react";
import Footer from './footer';
import R1 from '../images/r1.png';
import R2 from '../images/r2.png';
import R3 from '../images/r3.png';
import R4 from '../images/r4.png';
import R5 from '../images/r5.png';
import R6 from '../images/r6.png';
import R7 from '../images/r7.png';
import R8 from '../images/r8.png';

class Residential extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
               <div className="residential">
                  <div className="col-1">
                        <h1>Residential</h1>
                        <h3>If you are unsure what size you need please enquire</h3>
                        <button className="btn" >Book a Pick</button>
                  </div>
              
                </div> 
               <div className="two-column_layout">
                    <div className="column_layout_1">
                         <img src={R1}  className="image"></img>
                    </div>
                    <div className="column_layout_2">
                       <h1>Closet size </h1>
                       <h1>$24pw </h1><br></br>
                        <h3>Including Pick up</h3>
                        <br></br>
                        <h3>​Total area available 2.25m2​</h3>
                        <br></br>
                        <h3>No individual item can exceed 1m3 & 30kg​</h3>
                        <br></br><br></br>
                        <button className="btn" >ENQUIRE NOW</button>
                    </div>
               </div>
               <div className="two-column_layout">
                   
                    <div className="column_layout_2">
                       <h1>Walk-in </h1><br></br>
                       <h1>Wardrobe size </h1>
                       <h1>$42.75pw </h1><br></br>

                        <h3>Including Pick up</h3>
                        <br></br>
                        <h3>​Total area available 5.0m2​</h3>
                        <br></br>
                        <h3>No individual item can exceed 1m3 & 30kg​</h3>
                        <br></br><br></br>
                        <button className="btn" >ENQUIRE NOW</button>
                    </div>

                    <div className="column_layout_1">
                         <img src={R2}  className="image"></img>
                    </div> 
               </div>
     

                <div className="two-column_layout">
                    <div className="column_layout_1">
                         <img src={R3}  className="image"></img>
                    </div>
                    <div className="column_layout_2">
                       <h1> Single Room size </h1>
                       <h1>$84pw </h1><br></br>
                        <h3>Including Pick up</h3>
                        <br></br>
                        <h3>​Total area available 9.0m2​​</h3>
                        <br></br>
                        <h3>+ $50 packing fee​</h3>
                        <br></br><br></br>
                        <button className="btn" >ENQUIRE NOW</button>
                    </div>
               </div>

               <div className="two-column_layout">
                   
                   <div className="column_layout_2">
                      <h1> Garage size </h1>
                      <h1>$126pw </h1><br></br>
                       <h3>+ Pickup & Packing</h3>
                       <br></br>
                       <h3>​Total area available 13.5m2​</h3>
                       <br></br>
                       <h3>2 packers $139 for first hour +$60 per hour therafter​</h3>
                       <br></br><br></br>
                       <button className="btn" >ENQUIRE NOW</button>
                   </div>

                   <div className="column_layout_1">
                        <img src={R4}  className="image"></img>
                   </div> 
              </div>

              <div className="two-column_layout">
                    <div className="column_layout_1">
                         <img src={R5}  className="image"></img>
                    </div>
                    <div className="column_layout_2">
                       <h1>2 bed home size </h1>
                       <h1>$168pw </h1><br></br>
                        <h3>+ Pickup & Packing</h3>
                        <br></br>
                        <h3>​Total area available 18.0m2​</h3>
                        <br></br>
                        <h3>2 packers $139 for first hour +$60 per hour therafter​</h3>
                        <br></br><br></br>
                        <button className="btn" >ENQUIRE NOW</button>
                    </div>
               </div>

               <div className="two-column_layout">
                   
                    <div className="column_layout_2">
                       <h1>3 bed home size </h1>
                       <h1>$210pw </h1><br></br>
                        <h3>+ Pickup & Packing</h3>
                        <br></br>
                        <h3>​Total area available 22.5m2​</h3>
                        <br></br>
                        <h3>2 packers $139 for first hour +$60 per hour therafter​</h3>
                        <br></br><br></br>
                        <button className="btn" >ENQUIRE NOW</button>
                    </div>

                    <div className="column_layout_1">
                         <img src={R6}  className="image"></img>
                    </div> 
               </div>
       

                <div className="two-column_layout">
                    <div className="column_layout_1">
                         <img src={R7}  className="image"></img>
                    </div>
                    <div className="column_layout_2">
                       <h1>4 bed home size </h1>
                       <h1>$336pw </h1><br></br>
                        <h3>Pickup & Packing</h3>
                        <br></br>
                        <h3>​Total area available 36.0m2​</h3>
                        <br></br>
                        <h3>2 packers $139 for first hour +$60 per hour therafter​</h3>
                        <br></br><br></br>
                        <button className="btn" >ENQUIRE NOW</button>
                    </div>
               </div>
               <div className="two-column_layout">
     

                   <div className="column_layout_2">
                      <h1>  5 bed home size </h1>
                      <h1>$421pw </h1><br></br>
                       <h3>Pickup & Packing</h3>
                       <br></br>
                       <h3>​Total area available 45.0m2​</h3>
                       <br></br>
                       <h3>2 packers $139 for first hour +$60 per hour therafter​</h3>
                       <br></br><br></br>
                        <button className="btn" >ENQUIRE NOW</button>
                   </div>

                   <div className="column_layout_1">
                        <img src={R8}  className="image"></img>
                   </div> 
              </div>
                <Footer></Footer>
            </div>
         );
    }
}
 
export default Residential;