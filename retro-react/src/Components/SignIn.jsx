import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // admin: " ",
      // name: " ",
      // password: " ",
      // actualPassword: " ",

      admin: this.props.admins.id
      // adminId: this.props.
    };
    console.log(this.state);
    // console.log(this.state.adminId);

    this.handleChange = this.handleChange.bind(this);
    this.getAdminById = this.getAdminById.bind(this);
    this.checkCredentials = this.checkCredentials.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
   e.preventDefault();
    const key = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      prevState[key] = value;
      return prevState;
    });
    console.log(this.state.name);
    console.log(this.state.password);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.getAdminById();
  }
  getAdminById(e) {
    axios({
      url: `http://localhost:3000/admins/${this.state.admin}`,
      method: "GET"
    }).then(response => {
      console.log(response.data.password);
       console.log(response);
      this.setState(
        {
          admin: response.data,
          actualPassword: response.data.password
        },
        this.checkCredentials
      );
      console.log("getAdminById", this.state.admin);
    });
  }


  checkCredentials() {
    console.log("checking");
    if (this.state.actualPassword === this.state.password) {
      this.props.changeAdminState(this.state.admin);
      // this.props.history.push("/games");
    } else {
      console.log("no match");
      this.props.history.push("/admins/SignIn");
    }
  }

  render() {
    return (
      <center>
        {" "}
        <div>
          <h1> Welcome Admin </h1>
          <form onSubmit={this.handleSubmit}>
            <input
              className="sign_in_field"
              type="text"
              placeholder="name"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <input
              type="text"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <input type="submit" name="submit" value="Sign In" />
          </form>
          <p className="register">
            Don't have an account?
            <Link to="/admins/SignUp" className="link">
              {" "}
              Register Now
            </Link>
          </p>
        </div>
      </center>
    );
  }
}
export default SignIn;
