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
      <div>
        <h1> Cart </h1>
        {this.props.selectedItems.map((item, i) => {
          return (
            <div key={i}>
              <div> {item.name} </div>
              <div> <img src={item.image_url} alt="" /> </div>
            <button onClick={this.delete.bind(this, item.id)}>DELETE ITEMS</button>

            </div>
          );
        })}
      </div>
    );
  }
}
export default Cart;
