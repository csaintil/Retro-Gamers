import React, { Component } from "react";
import axios from "axios";

class Games extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      hasdata: false
    };

    this.selected = this.selected.bind(this);
  }

  selected(name, image, deck) {
    axios({
      url: "http://localhost:3000/games",
      method: "POST",
      data: {
        game: {
          name: name,
          image_url: image,
          deck: deck
        }
      }
    }).then(response => {
      console.log(response.data);
      this.props.gamesQuery();
    });
  }

  render() {
    return (
      <div className="game_container">
      <div className="sub_container">
        <h1>Games</h1>
                    <div className="divider"></div>

        {this.props.games.map((game, i) => {
          return (
            <div key={i}>
              <div className="game_name"> {game.name} </div>

              <div className="divider2"></div>

                  <div className="game_img">
                    <img src={game.image.thumb_url} alt="" />
                  </div>


                   <div className= "game_deck">{game.deck} </div>

              <div className="paltform">
                {" "}
                {game.platforms.forEach(platform => {
                 // console.log(platform.name)
                })}{" "}
              </div>
              <button className="btn"
                onClick={this.selected.bind(
                  this,
                  game.name,
                  game.image.thumb_url,
                  game.deck
                )}
              >
                Select
              </button>
            </div>
          );
        })}
      </div>
      </div>
    );
  }
}
export default Games;
