import "babel-polyfill";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import News from "./Components/News";
import Games from "./Components/Games";
import MainImg from "./Components/MainImg";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
// import SlackBot from "./Components/SlackBot"
import TokenService from "./services/TokenService"
import Register from "./Components/Register"
import Login from "./Components/Login"
import EditUser from "./Components/EditUser"
import User from "./Components/User"



import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import igdb from "igdb-api-node";
const igdb = require("igdb-api-node").default;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admins: [],
      articles: [],
      games: [],
      selectedItems: [],
      id: "",
      Redirect:false,
      loadingData: false
    };
    // console.log(this.state.query)
    this.getAllAdmin = this.getAllAdmin.bind(this);
    this.newsApi = this.newsApi.bind(this);
    this.changeAdminState = this.changeAdminState.bind(this);
    this.gamesQuery = this.gamesQuery.bind(this);
    this.gamesSelected = this.gamesSelected.bind(this);
    // this.getAllUsers = this.getAllUsers.bind(this);

  }
  // const url = "/admins"

  getAllAdmin() {
    axios({
      url: "http://localhost:3000/admins",
      method: "GET"
    })
      .then(response => {
        // console.log(response);
        this.setState({
          admins: response.data,
          loadingData: true
        });
        // console.log(this.state.admins);
      })
      .catch(err => {
        console.log("there is an error in getAdmin", err);
      });
  }
 

  newsApi() {
    axios("/news"
    ).then(response => {
      this.setState({
        articles: response.data.articles,
        loadingData: true
      });
      // console.log(this.state.articles);
    });
  } 

  gamesQuery(query){
    axios({
      url:`/games`,
      method:"get"
    }).then(response =>{
      this.setState({
        games : response.data.results,
        loadingData:true
      })
      // console.log(response);
      // console.log(this.state.games);
    })
  }

  gamesSelected() {
    // console.log("we are in the selectedItems")
    axios({
      url: "/carts",
      method: "GET"
    })
      .then(response => {
        // console.log(response);
        this.setState({
          selectedItems: response.data,
          loadingData: true
        });
        console.log(this.state.selectedItems);
      })
      .catch(err => {
        console.log("there is an error in gamesSelected", err);
      });
  }


 register(data) {
  axios({
    url:"/users",
    method:"POST",
    data
  }).then(response => {
    TokenService.save(response.data.token)
    console.log(response);
  }).catch(err => {
    console.log("there is an error in register: ", err);
  })
 }



 login(data) {
   axios('/users/login', {
     method: "POST",
     data
   }).then(resp => {
     TokenService.save(resp.data.token);
     this.setState({ redirect: true, currentUser: resp.data.user, id: resp.data.user.id 
             // localStorage.setItem("id", " this.state.id" )

     })


     // console.log("currentUser: ", resp.data.user)
     // console.log('user id: ', this.state.id)
   })
   .catch(err => console.log(`err: ${err}`));
 }

 logout(e) {
   e.preventDefault();
   TokenService.destroy();
   // console.log(window.localStorage)
 }
 checkLogin() {
   axios('/isLoggedIn', {
     headers: {
       Authorization: `Bearer ${TokenService.read()}`,
     },
   }).then(resp => console.log('checkLogin: ',resp))
   .catch(err => console.log(err));
 }

 updateUser(data){
  axios({
    url:`/users/${this.state.id}`,
    method:"PUT",
    data
  }).then(response => {
    TokenService.save(response.data.token)
    // console.log(response);
  }).catch(err => {
    console.log("there is an error in register: ", err);
  })
}


  componentDidMount() {
    this.getAllAdmin();
    this.newsApi();
    this.gamesQuery();
    this.gamesSelected();
    // this.getAllUsers();
  }
  changeAdminState(admin) {
    this.setState({ admin: admin });
  }
   changeQueryState(query) {
    this.setState({ query: query });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/welcome" />} />
           <Route exact path="/user/login" render={props =>  { return    <Login {...props} submit={this.login.bind(this)}  /> }} />
             <Route exact path="/user/register" render={props => {  return <Register {...props} submit={this.register.bind(this)}  /> }} />
              <Route exact path="/profile" render={props => {  return <EditUser {...props} submit={this.updateUser.bind(this)}  /> }} />

            <Route
              exact
              path="/welcome"
              render={props => {
                return (
                  <div>
                  // //<SlackBot />
                    <LandingPage
                     />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/signIn"
              render={props => {
                return (
                  <div>
                  //<SlackBot />
                  <SignIn
                    {...props}
                    admins={this.state.admins}
                    getAllAdmin={this.getAllAdmin}
                    changeAdminState={this.changeAdminState}
                  />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/signUp"
              render={props => {
                return (
                  <div>
                  //<SlackBot />
                  <SignUp
                    {...props}
                    admins={this.state.admins}
                    getAllAdmin={this.getAllAdmin}
                    changeAdminState={this.changeAdminState}
                  />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/news"
              render={props => {
                return (
                <div>
                //<SlackBot />
                  <NavBar 
                  logout={this.logout.bind(this)}
                  /> 
                  <News
                    {...props}
                    state={this.state}
                    articles={this.state.articles}
                    newsApi={this.newsApi}
                  />
                  </div>
                );
              }}
            />
             <Route
              exact
              path="/games"
              render={props => {
                return (
                <div>
                //<SlackBot />
                  <NavBar
                    logout={this.logout.bind(this)}

                  games ={this.state.games}
                  gamesQuery={this.gamesQuery}
                  search = {this.state.query}
                   />
                  <Games
                    {...props}
                    id ={this.state.id}
                    users={this.state.users}
                    getAllUsers={this.getAllUsers}
                    state={this.state}
                    games={this.state.games}
                    gamesQuery={this.gamesQuery}
                  />
                  </div>
                );
              }}
            />

             <Route
              exact
              path="/carts"
              render={props => {
                return (
                <div>
                //<SlackBot />
                  <NavBar
                    logout={this.logout.bind(this)}


                   />
                  <Cart
                    {...props}
                    state={this.state}
                    selectedItems={this.state.selectedItems}
                    gamesSelected={this.gamesSelected}

                  />
                  </div>
                );
              }}
            />
                <Route
              // exact
              // path="users/:id/carts"
              // render={props => {
              //   return (
              //   <div>
              //     <NavBar
              //       logout={this.logout.bind(this)}
              //       />

              //     <Cart
              //       {...props}
              //       state={this.state}
              //       selectedItems={this.state.selectedItems}
              //       gamesSelected={this.gamesSelected}

              //     />
              //     </div>
              //   );
              // }}
            />

            <Route
              exact
              path="/profile"
              render={props => {
                return (
                  <div>
                  //<SlackBot />
                  <EditUser
                    {...props}
                    admins={this.state.admins}
                    getAllAdmin={this.getAllAdmin}
                    changeAdminState={this.changeAdminState}
                  />

                  </div>
                );
              }}
            />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
