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
import SlackBot from "./Components/SlackBot"


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
      query: 'dark',
      selectedItems: [],
      loadingData: false
    };
    console.log(this.state.query)
    this.getAllAdmin = this.getAllAdmin.bind(this);
    this.newsApi = this.newsApi.bind(this);
    this.changeAdminState = this.changeAdminState.bind(this);
    this.gamesQuery = this.gamesQuery.bind(this);
    this.gamesSelected = this.gamesSelected.bind(this);
  }
  // const url = "http://localhost:3000/admins"

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
        console.log(this.state.admins);
      })
      .catch(err => {
        console.log("there is an error in getAdmin", err);
      });
  }
 

  newsApi() {
    axios(`http://localhost:3000/news`
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
      url:`http://localhost:3000/games`,
      method:"get"
    }).then(response =>{
      this.setState({
        games : response.data.results,
        loadingData:true
      })
      // console.log(response);
      console.log(this.state.games);
    })
  }

  gamesSelected() {
    axios({
      url: "http://localhost:3000/games",
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




  componentDidMount() {
    this.getAllAdmin();
    this.newsApi();
    this.gamesQuery();
    this.gamesSelected();
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
            <Route
              exact
              path="/welcome"
              render={props => {
                return (
                  <div>
                  <SlackBot />
                    <LandingPage />
                  </div>
                );
              }}
            />
            <Route
              exact
              path="/admins/SignIn"
              render={props => {
                return (
                  <SignIn
                    {...props}
                    admins={this.state.admins}
                    getAllAdmin={this.getAllAdmin}
                    changeAdminState={this.changeAdminState}
                  />
                );
              }}
            />
            <Route
              exact
              path="/admins/SignUp"
              render={props => {
                return (
                  <SignUp
                    {...props}
                    admins={this.state.admins}
                    getAllAdmin={this.getAllAdmin}
                    changeAdminState={this.changeAdminState}
                  />
                );
              }}
            />
            <Route
              exact
              path="/admins/News"
              render={props => {
                return (
                <div>
                  <NavBar />
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
              path="/admins/games"
              render={props => {
                return (
                <div>
                  <NavBar
                  games ={this.state.games}
                   gamesQuery={this.gamesQuery}
                  
                  search = {this.state.query}
                   />
                  <Games
                    {...props}
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
              path="/admins/cart"
              render={props => {
                return (
                <div>
                  <NavBar />
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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
