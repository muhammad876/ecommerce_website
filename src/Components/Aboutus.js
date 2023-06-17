import { Component } from "react";
import Footer from './footer';
import Brother from '../images/b2.png';
class Aboutus extends Component {
    state = {  } 
    render() { 
        return (
            <div className="navigator">
                
                <div className="aboutus">
                  <div className="col-1">
                        <h1>Aboutus</h1>
                        <h3>A kiwi son, his dad, and a great idea</h3>
                  </div>
                  <div className="col-2">
                    <p>
                    Storable is born from the spark of creativity and fueled by good 
                  old-fashioned Kiwi ingenuity. Founded by Elmo Jackson and his dad Jacks; Storable
                   has redefined the storage game by crafting storage solution that's refreshingly simple and secure, 
                   backed by cutting-edge technology and genuine Kiwi hospitality
                    </p>
                  </div>
                </div> 
                <img src={Brother}  className="image"></img>
                <Footer></Footer>
           </div>
        );
    }
}
export default Aboutus;