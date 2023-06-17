import { Component } from "react";
import Registration from './registration';

class Home extends Component {
    constructor(props) {
        super(props);
    }//How it works Residential Commercial Vehicles About Us Box Shop Contact
    state = {  }
    render() { 
        return ( 
            <div>
                <Registration />
            </div>
         );
    }
}
 
export default Home;