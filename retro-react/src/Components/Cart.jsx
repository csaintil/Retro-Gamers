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
      url:`http://localhost:3000/games/${id}`,
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
      <div className="game_container">
      <div className="sub_container">
        <h1> Cart </h1>
                            <div className="divider"></div>

        {this.props.selectedItems.map((item, i) => {
          return (
            <div key={i}>
              <div  className="game_name"> {item.name} </div>
                            <div className="divider2"></div>

              <div className="game_img2"> <img src={item.image_url} alt="" /> </div>
            <button className="delete_button" onClick={this.delete.bind(this, item.id)}>X</button>

            </div>
          );
        })}
      </div>
      </div>
    );
  }
}
export default Cart;
