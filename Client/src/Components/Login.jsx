import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserForm from './UserForm';
import { Redirect } from 'react-router'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
    redirect: false

    }
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    console.log(`handling submit: ${data}`);
    this.props.submit(data);
    
     this.props.history.push("/news");

  }


  render() {
    return (
      <div>

        <UserForm submit={this.onSubmit} />
          <p className="register">
        Don't have an account?
        <Link to="/user/register" className="link"> Register Now</Link>
        </p>
      </div>
    )
  }
}
