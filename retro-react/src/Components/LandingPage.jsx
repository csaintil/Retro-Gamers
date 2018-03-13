import React, { Component } from "react";
import MainImg from "./MainImg";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div className="welcome_page">
        <div>
          <NavBar />
        </div>
        <div className="admin_signIn">
          <Link className="admin" to="/admins/SignIN">
            Admin
          </Link>
        </div>
         <div className="user_signIn">
          <Link className="user" to="/users/SignIN">
           User
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
