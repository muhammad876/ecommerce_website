import { Component } from "react";
import Footer from "./footer";
import App from '../images/background.png';
class Works extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="navigator">
                
                <div className="col-2">

                  
                   <img  className="mainImage" src={App} />
                   <div className="text-area">
                    <div className="textalign">
                        <div className="left">
                            <h1>01</h1>
                        </div>
                        <div className="right">
                             <p>
                                Click on 'Book a pick up' to arrange<br></br> a time for your items to be collected
                            </p>
                            <hr></hr>
                        </div>
                        
                    </div>
                    <div className="textalign">
                        <div className="left">
                            <h1>02</h1>
                        </div>
                        <div className="right">
                             <p>
                                Click on 'Book a pick up' to arrange<br></br> a time for your items to be collected
                            </p>
                            <hr></hr>
                        </div>
                        
                    </div>
                    <div className="textalign">
                        <div className="left">
                            <h1>03</h1>
                        </div>
                        <div className="right">
                             <p>
                                Click on 'Book a pick up' to arrange<br></br> a time for your items to be collected
                            </p>
                            <hr></hr>
                        </div>
                        
                    </div>
                    <div className="textalign">
                        <div className="left">
                            <h1>04</h1>
                        </div>
                        <div className="right">
                             <p>
                                Click on 'Book a pick up' to arrange<br></br> a time for your items to be collected
                            </p>
                            <hr></hr>
                        </div>
                        
                    </div>
                    <div className="textalign">
                        <div className="left">
                            <h1>05</h1>
                        </div>
                        <div className="right">
                             <p>
                                Click on 'Book a pick up' to arrange<br></br> a time for your items to be collected
                            </p>
                            <hr></hr>
                        </div>
                        
                    </div>
                   </div> 
                </div>
                <Footer></Footer>
           </div>
         );
    }
}
 
export default Works;