import React, { Component } from 'react';
import {Link} from "react-router-dom"

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // preventDefault and lift state back up to the parent
  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }

  // update form state
  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
     <div className="edit_container">
          <div className = "edit">
                <form onSubmit={this.handleSubmit}>
                <h1 className='edit_title'>Login/Register</h1>
                  <label>
                    <input 
                     className="edit_field"
                      type="text" 
                      name="username" 
                      onChange={this.handleChange}
                      value={this.state.username} />
                  </label>
                  <label>
                    <input 
                      className="edit_password"
                      type="password" 
                      name="password" 
                      onChange={this.handleChange}
                      value={this.state.password} />
                  </label>
                  <div className="submit_div">
                  <button className='edit_submit'type="submit" value="Submit">Submit</button>

                  </div>
                </form>
          </div>
          
      </div>
    );
  }
}
