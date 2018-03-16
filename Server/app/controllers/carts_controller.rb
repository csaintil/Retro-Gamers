class CartsController < ApplicationController
  # before_action :ensure_signed_in

  def index
    carts = Cart.where(params[:id])
    render json: carts
    # render plain: "We are in Index"
  end

  # def grab_cart
  #   carts = Cart.find (params.id)
  #   render json: cart
  #   # render plain: "We are in Index"
  # end

  def show 
    cart = Cart.find(params[:id])
    render json: cart
  end

  
    def create
       cart = Cart.create!(cart_params)
       render json: cart.user

       end

       def destroy
      cart = Cart.find(params[:id])
      cart.destroy!
       render plain: "Game put off the selves"
     end

       private
      def cart_params
        params.require(:cart).permit(:name, :image_url, :deck, :user_id)
      end
end
