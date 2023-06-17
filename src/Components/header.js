import React, { Component } from "react";
import "../Styles/header.css";
import logo from "../images/logo.png";
import Menu from "../images/menu.png";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  menutoggler() {
    var id_ = document.getElementById("menu_items");
    id_.style.maxHeight = "0px";
    if (id_.style.maxHeight == "0px") {
      id_.style.maxHeight = "600px";
    } else {
      id_.style.maxHeight = "0px";
    }
  }
  render() {
    return (
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src={logo} width="120px;" />
          </div>
          <nav>
            <ul id="menu_items">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/works">How it works</a>
              </li>
              <li>
                <a href="/residential">Residential</a>
              </li>
              <li>
                <a href="/commercial">Commercial</a>
              </li>
              <li>
                <a href="/vehicles">Vehicles</a>
              </li>
              <li>
                <a href="/aboutus">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
          <img src={Menu} className="menu" onclick={this.menutoggler} />
        </div>
        {/* <Navigations></Navigations> */}
      </div>
    );
  }
}

export default Header;
