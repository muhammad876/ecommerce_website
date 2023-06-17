import { Component } from "react";
import Background from '../images/background.png';
import Dashboard from "./dashboard";
import { Link } from 'react-router-dom'
import { auth , db} from './auth';
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
class Registration extends Component {
  
    constructor(props) {
        super(props);
        this.handlelogin = this.handlelogin.bind(this);
        this.handleregistration = this.handleregistration.bind(this);
    }
    login(){
        var registration = document.getElementById("regForm");
        var loginbtn = document.getElementById("loginForm");
        var indicator = document.getElementById("indicator");
           loginbtn.style.left = "0px";
           registration.style.left = "-300px";
           indicator.style.transform = "translateX(115px)";
       }
        register(){
            var registration = document.getElementById("regForm");
            var loginbtn = document.getElementById("loginForm");
            var indicator = document.getElementById("indicator");
           loginbtn.style.left = "-300px";
           registration.style.left = "0px";
           indicator.style.transform = "translateX(215px)";
       }

       
    state = { name: "",
              email: "", password : ""}
    
              handlelogin(){
                const auth = getAuth();
                const email = this.state.email;
                const password = this.state.password;
                signInWithEmailAndPassword(auth, email, password)
                .then((response) => {
                    alert("Successfull Login");
                    console.log("Successfull Login");
                  sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
                  return(<Link to="/" element={<Dashboard></Dashboard>} />);
                }) .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  console.log(errorMessage+" is the error message");
                   alert(errorMessage);
                });
              }
              handleregistration(){
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, this.state.email, this.state.password)
                  .then((userCredential) => {
                    console.log('Handler');
                    const user = userCredential.user;
                    alert("Created Successfully " +user.email);
                    // ...
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                    // ..
                  });
              }
    render() { 
       
     
        //   const createUserWithEmailAndPassword_ = async (name, email, password) => {
        //     try {
        //         name = this.state.name;
        //         email = this.state.email;
        //         password = this.state.password;
        //       const res = await auth.createUserWithEmailAndPassword(email, password);
        //       const user = res.user;
        //       alert("Successfully Created ")
        //       await db.collection("users").add({
        //       uid: user.uid,
        //       name,
        //       authProvider: "local",
        //       email,
        //     });
         
        //     } catch (err) {
        //       console.log(err.message);
        //     }
        //   };
    
        return ( 
            <div class="accountManager" >
                <div class="container">
                    <div class="row">
                        <div class="col-2">
                            <img src={Background}/>
                        </div>
                        <div class="col-2">
                            <div class="form-container">
                                <div class="form-btn">
                                <span onClick={this.login}>Login</span>
                                <span onClick={this.register}>Register</span>
                                <hr id="indicator" />
                            </div>
                            
                                <form id="loginForm" onSubmit={this.handlelogin}>
                                <input type="email" placeholder="email" value= {this.state.email}  onChange={(e) => this.setState({email : e.target.value})}/>
                                    <input type="password" placeholder="password" value= {this.state.password}  onChange={(e) => this.setState({password : e.target.value})}/>
                                    <select name="role">
  
                                        <option value= {this.state.name}  onChange={(e) => this.setState({name : e.target.value})}>Employee</option>
                                        <option value={this.state.name} onChange={(e) => this.setState({name : e.target.value})}>Customer</option>
                                    </select>
                                    <button class="btn" type="submit">Login</button>
                                </form>
                                <form id="regForm" onSubmit={this.handleregistration}>
                                    
                                    <input type="email" placeholder="email" value= {this.state.email}  onChange={(e) => this.setState({email : e.target.value})}/>
                                    <input type="password" placeholder="password" value= {this.state.password}  onChange={(e) => this.setState({password : e.target.value})}/>
                                    <select name="role">
  
                                        <option value= {this.state.name}  onChange={(e) => this.setState({name : e.target.value})}>Employee</option>
                                        <option value={this.state.name} onChange={(e) => this.setState({name : e.target.value})}>Customer</option>
                                    </select>
                                    <button class="btn" type="submit">Register</button>
                                </form>
                            </div>
                            
                        </div>
                     </div>
                </div>
            </div >
         );
    }
}
 
export default Registration;


// Project name
// website
// Project ID 
// website-ffabd
// Project number 
// 15592048091
// Default GCP resource location 
// Not yet selected
// Web API Key
// AIzaSyC6zxERjmDXUnTLho8nBdiFCtTcKabDDsA