import React, { Component} from "react"
import axios from "react";
import TokenService from "../services/TokenService"


export default class User extends Component {
  constructor(props){
    super(props)
    this.state ={
      users:[]
    }
    this.getAllUsers= this.getAllUsers.bind(this);
  }

  getAllUsers(){
 axios('/users', {
     headers: {
       Authorization: `Bearer ${TokenService.read()}`,
     },
     method: "GET",

   }).then(response => {
    console.log(response);
     this.setState({
      users: response.data
     }) 
    console.log('users: ',this.state.users)
  }).catch(err => console.log(err));
}
componentDidMount(){
  this.getAllUsers();
} 

  render(){
    return(
    <h1>hello </h1>
    
      );
  }
}
