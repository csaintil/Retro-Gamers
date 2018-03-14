Rails.application.routes.draw do
  # For details on the DSL available within this file,  see http://guides.rubyonrails.org/routing.html
  get '/news', :to => 'api#news_api'
  get '/games', :to => 'api#gamesQuery'

  resources :users
  resources :admins
  resources :games
      get "admins/:id/games", to: 'games#admins_by_games'
 get 'isLoggedIn', :to => 'users#is_logged_in'
 post 'users/login', :to => 'users#login'

end
