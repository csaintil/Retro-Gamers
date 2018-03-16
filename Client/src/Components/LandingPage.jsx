import React, { Component } from "react";
import MainImg from "./MainImg";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  // <div className="user_signIn">
  //         <Link className="user" to="/user/login">
  //         <i className="fa fa-angle-double-left" aria-hidden="true"></i>

  //          User
  //         </Link>
          // </div>

  render() {
    return (
      <div className="welcome_page">
        <div>
          <NavBar
           />
        </div>
        <div className="admin_signIn">
          <Link className="admin" to="/user/login">
          <i className="fa fa-angle-double-left" aria-hidden="true"></i>
            User
          </Link>
        </div>
         
      </div>
    );
  }
}

export default LandingPage;
