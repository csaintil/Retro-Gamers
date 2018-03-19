import React, { Component } from "react";
import axios from "axios";
import TokenService from "../services/TokenService"


class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      hasdata: false,
      user_id: this.props.id
    };
    this.selected = this.selected.bind(this);
    // console.log(this.props.users)
      console.log(this.props.logout)

  }


  selected(name, image, deck) {
    axios("/carts", {
     headers: {
       Authorization: `Bearer ${TokenService.read()}`,
     },
      method: "POST",
     data: {
        cart: {
          name: name,
          image_url: image,
          deck: deck,
          user_id: this.state.user_id
        }
      }
   }).then(resp => {
   console.log(resp) 
         this.props.gamesQuery();

   } 
   ).catch(err => console.log(err));
  }


  render() {
    return (
      <div className="sub_container">
        <h1 className="page_title">Games</h1>
          <div className="divider"></div>
              {this.props.games.map((game, i) => {
                return (
                  <div key={i} className="game_container">
                    <div className="game_div" key={i}>

                      <div className="image_div">
                          <img className="image" src={game.image.thumb_url} alt="" />
                      </div>

                      <div className="content_div">
                          <div className="game_name"> {game.name} </div>
                          <div className="game_deck">{game.deck} </div>
                      </div>
                      
                      <div className="button">
                    <button className="btn" onClick={this.selected.bind(this,game.name,game.image.thumb_url,
                      game.deck)}>Select </button>
                      </div>
                    </div>
                    <div>
                      {game.platforms.forEach(platform => {
                       // console.log(platform.name)
                      })}
                    </div>
                  </div>
          );
        })}
      </div>
    );
  }
}
export default Games;
