import React,{Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom"

class SignUp extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: " ",
      password: " "
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createAdmin = this.createAdmin.bind(this);
  }
  handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key]: value });
    console.log(this.state.name);
    console.log(this.state.password);
  }



  handleSubmit(e) {
    e.preventDefault();
    this.createAdmin();
  }
  createAdmin(e){
    // e.preventDefault();
    axios({
      url:"http://localhost:3000/admins",
      method:"POST",
      data: this.state
    }).then(response => {
      // console.log(response);
      this.props.changeAdminState(response.data);
      // console.log(response.data);
      this.props.history.push("/admins/SignIn");

    })
  }
  // componentDidMount(){
  //   this.createAdmin();
  // }


  render(){
    return(
     <center> <div>
      <h1> Sign up </h1>
       <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="name"
         placeholder="Name"
          onChange={this.handleChange}
          value={this.state.name} 
        />

        <input
         type="text"
         placeholder ="Password"
         name="password"
         onChange = {this.handleChange}
         value = {this.state.password}
         />
         <input type="submit" name="submit" value="Sign Up" />
       </form>
        <Link to="/admins/SignIn" className="link"> Sign In</Link> to your account?

      </div>
      </center>
      );
  }
}
export default SignUp ;
