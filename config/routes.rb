Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users
  root 'home#index'
  namespace :api do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
    end
  end
  
	namespace :api do
    namespace :v1 do
      resources :simulation_results do
        collection do
          get 'simulation_index/:id' => 'simulation_results#simulation_index'
        end
        member do
          get 'simulation_show/:simulation_id' => 'simulation_results#simulation_show'
        end
      end
    end  
  end  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
