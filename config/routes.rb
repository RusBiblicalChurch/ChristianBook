Rails.application.routes.draw do
  devise_for :users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'books#index'
  resources :books

  namespace :api do
    resources :books
  end

  get '/info' => 'books#index'
end
