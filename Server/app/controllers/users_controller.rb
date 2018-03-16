class UsersController < ApplicationController
  def index
       puts 'called'
       session[:session_token] = 3
       render json: [1, 2, 3, 4]
    end

    def gen_token(user_id)
       payload = {id: user_id}
       JWT.encode(payload, Rails.application.secrets.secret_key_base)
     end

     def create
       username = params[:username]
       password = params[:password]

       new_user = User.new({
           password: password,
           username: username
           
           })


        if new_user.valid?
              new_user.save!
              render json: {token: gen_token(new_user.id)}

        else
              render nothing: true, status: 401
        end
     end

     def index
       users = User.all
       render json: users
     end

    def is_logged_in
        if current_user
              render json: current_user
        else render nothing: true, status: 401
        end
    end

     def login
       username = params[:username]
       password = params[:password]

        user = User.find_from_credentials username, password
       if user.nil?
             render nothing: true, status: 401
       else
             render json: {user: user, token: gen_token(user.id)}

       end
     end


    def show 
      user = User.find(params[:id])
      render json: user 

    end
    #  def show 
    #   user = current_user
    #   render json: user 
    # end

    def update
      user = User.find(params[:id])
      user.update!(user_params)
       render json: user
      end

    # def users_post_items 
      

    #    end

   def users_by_cart 
    user = User.find(params[:id])
    render json: user.carts
  end
# /////////////////////////////////////////////////////////////////////////////

def destroy
user = User.find(params[:id])
user.destroy!
render plain: "User delete"
end

private
      def user_params
        params.require(:user).permit(:username, :password_digest)
      end

end
