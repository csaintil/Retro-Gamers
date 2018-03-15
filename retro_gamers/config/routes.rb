Rails.application.routes.draw do
  # For details on the DSL available within this file,  see http://guides.rubyonrails.org/routing.html
  get '/news', :to => 'api#news_api'
  get '/games', :to => 'api#gamesQuery'
   
  resources :carts
  resources :users
  resources :admins
  resources :games
      get "users/:id/carts", to: 'users#users_by_cart'
      post "users/carts", to:  'carts#create'
      
 get 'isLoggedIn', :to => 'users#is_logged_in'
 post 'users/login', :to => 'users#login'

end
