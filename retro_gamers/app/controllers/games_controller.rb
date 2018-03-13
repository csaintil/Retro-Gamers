class GamesController < ApplicationController
  def index
    games = Game.all
    render json: games
    # render plain: "We are in Index"
  end

  def show 
    game = Game.find(params[:id])
    render json: game

  end
# ////////////////////////////////////////////////////////////////

     
       def create 
       game = Game.create!(game_params)
       render json: game

       end

# //////////////////////////////////////////////////////////////////////////

      def update
      game = Game.find(params[:id])
      game.update!(game_params)
       render json: game
      end


# /////////////////////////////////////////////////////////////////////////////

def destroy
game = Game.find(params[:id])
game.destroy!
render plain: "Game put off the selves"
end





#////////////////////////////////////////////////////
      private
      def game_params
        params.require(:game).permit(:name, :image_url, :deck)
      end
end
