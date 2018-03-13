Rails.application.routes.draw do
  # For details on the DSL available within this file,  see http://guides.rubyonrails.org/routing.html
 
  resources :users
  resources :admins
  resources :games
      get "admins/:id/games", to: 'games#admins_by_games'

end
