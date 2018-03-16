import React, { Component } from "react";
import axios from "axios";

class Cart extends Component {
  constructor(props){
    super(props);
   this.state = {
      selectedItems: [],
      hasData: false
   }
   this.delete = this.delete.bind(this);
  }
  componentDidMount(){
    this.props.gamesSelected();
  }

  delete(id){
    console.log(this.props.params)
    axios({
      url:`http://localhost:3000/carts/${id}`,
      method:"DELETE"
    }).then(() => {
      console.log("Game removed");
       this.props.gamesSelected();
    }).catch(err => {
      console.log("there is an error in delete", err)
    });
  }
  render() {
    return (
      <div className="sub_container">
        <h1 className="page_title"> Cart </h1>
            <div className="divider"></div>

        {this.props.selectedItems.map((item, i) => {
          return (
            <div key={i} className="game_container">
            <div className="game_div" key={i}> 

               <div className="image_div">
                          <img className="image" src={item.image_url} alt="" />
                      </div>

                      <div className="content_div">
                          <div className="game_name"> {item.name} </div>
                          <div>{item.deck} </div>
                      </div>

                         <div>
                            <button className="delete_button" onClick={this.delete.bind(this, item.id)}>X</button>
                         </div>
            </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Cart;
