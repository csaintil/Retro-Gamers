import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
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
            
           </div>
       );
   }
}
export default NavBar;