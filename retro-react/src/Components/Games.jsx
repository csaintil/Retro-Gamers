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
      <div>
        <h1>Games</h1>
        {this.props.games.map((game, i) => {
          return (
            <div key={i}>
              <p> {game.name} </p>
              <p className="game_img">
                <img src={game.image.thumb_url} alt="" />
              </p>
              <p>{game.deck} </p>
              <div>
                {" "}
                {game.platforms.forEach(platform => {
                 // console.log(platform.name)
                })}{" "}
              </div>
              <button
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
    );
  }
}
export default Games;
