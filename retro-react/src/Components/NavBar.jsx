import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: this.props.search
    }
   this.handleSearch = this.handleSearch.bind(this);
this.submitSearch = this.submitSearch.bind(this);
  }
    handleSearch(e) {
  e.preventDefault();
    // const key = e.target.name;
    // const value = e.target.value;
    // this.setState(prevState => {
    //   prevState[key] = value;
    //   return prevState;
    // });
    this.setState({
      search:e.target.value
    })
    }
submitSearch(){
  this.props.handleQueryState(this);
  console.log(this.props.handleQueryState)
}

   render() {
       return (
           <div className="nav_bar">
               <div className="nav_links">
                   <Link className="nav_none" to="/admins/news">
                       News
                   </Link>
               </div>
               <div className="nav_links">
                   <Link className="nav_none" to="/admins/profile">
                       Profile
                   </Link>
               </div>
               <div className="nav_links">
                   <Link className="nav_none" to="/admins/games">
                       Games
                   </Link>
               </div>
                <div className="nav_links">
                   <Link className="nav_none" to="/admins/cart">
                       Cart
                   </Link>
               </div>
                <form onSubmit={this.submitSearch}>
                   <div>
                     <input 
                      type="text"
                      onChange={this.handleSearch}
                      value ={this.state.search}

                     />
                     <input type="submit" value="submit" />
                   </div>
                 </form>
            
           </div>
       );
   }
}
export default NavBar;