import React, { Component } from 'react';
import axios from "axios"
import TokenService from "../services/TokenService"
import NavBar from "./NavBar";



export default class EditUser extends Component {
  constructor(props){
  super(props)
  this.state = {
    users:[],
    username: '',
      password: ''
  }
this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.updateUser=this.updateUser.bind(this);
}

// updateUser(data){
//     console.log(this.props.match.params.id);

//   axios({
//     url:`http://localhost:3000/users/1`,
//     method:"PUT",
//     data
//   }).then(response => {
//     TokenService.save(response.data.token)
//     console.log(response);
//   }).catch(err => {
//     console.log("there is an error in register: ", err);
//   })
// }

handleSubmit(e) {
    e.preventDefault();
    // this.updateUser()
    this.props.submit(this.state);
    console.log(this.props.submit)
  }


  // update form state
  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value
    });
  }


  render(){
    return(

      <div className="edit_container">
       <NavBar />
      <div className = "edit">
      <form onSubmit={this.handleSubmit}>
      <h1 className='edit_title'>Edit Your Profile</h1>
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
            type="text" 
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