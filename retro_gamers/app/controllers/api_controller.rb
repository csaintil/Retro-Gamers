class ApiController < ActionController::API
 include ActionController::HttpAuthentication::Token::ControllerMethods

  def encode(payload, exp = 24.hours.from_now)
    payload[:exp] = exp.to_i JWT.encode(payload, Rails.application.secrets.secret_key_base) 
  end 

  def decode(token) 
    body = JWT.decode(token, Rails.application.secrets.secret_key_base)[0] 
    HashWithIndifferentAccess.new body 

  rescue nil 

  end

  def current_user
    @current_user ||= find_current_user
  end

  def find_current_user
    authenticate_with_http_token do | token, options |
      data = decode(token)
      token && User.find(data[:id])
    end
  end

  def ensure_signed_in
    return if current_user
    render nothing: true, status: 401
  end
  # ////////////////////////////////////////////////////

def news_api 
     api_key = ENV['api_key']
    response = HTTParty.get("http://newsapi.org/v2/top-headlines?sources=ign&apiKey=#{api_key}")
   render  json: response

 end

 def gamesQuery 
  
  user_key = ENV['user_key']
  response = HTTParty.get("https://www.giantbomb.com/api/search/?api_key=#{user_key}&format=json&query=#{query}{}&resources=game")
   render json: response
   end

end


  

