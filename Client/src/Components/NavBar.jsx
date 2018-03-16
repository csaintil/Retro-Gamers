import React, { Component } from "react";
import { Link } from "react-router-dom";
var FontAwesome = require('react-fontawesome');


class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      search: " "
    }
  console.log(this.props.logout)
   this.handleSearch = this.handleSearch.bind(this);
this.submitSearch = this.submitSearch.bind(this);
  }
    handleSearch(e) {
  e.preventDefault();
    this.setState({
      search:e.target.value
    })
    }
submitSearch(){
  
}
 // <form onSubmit={this.submitSearch}>
 //                   <div>
 //                     <input 
 //                      type="text"
 //                      onChange={this.handleSearch}
 //                      value ={this.state.search}

 //                     />
 //                     <input type="submit" value="submit" />
 //                   </div>
 //                 </form>

   render() {
       return (
           <div className="nav_bar">
               <div className="nav_links">
                   <Link className="nav_none" to="/news">
                       News
                   </Link>
               </div>
               <div className="nav_links">
                   <Link className="nav_none" to="/profile">
                        <FontAwesome
                                className='super-crazy-colors'
                                name='user'
                                size='2x'
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                              />
                   </Link>
               </div>
               <div className="nav_links">
                   <Link className="nav_none" to="/games">
                       Games
                   </Link>
               </div>
                <div className="nav_links">
                   <Link className="nav_none" to="/carts">

                           <FontAwesome
                                className='super-crazy-colors'
                                name='shopping-cart'
                                size='2x'
                                style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
                              />
                               
                   </Link>
               </div>
            
                <div className="nav_links">
                   <Link className="nav_none" to="/user/login">
                       Sign Out
                   </Link>
               </div>
           </div>
       );
   }
}
export default NavBar;