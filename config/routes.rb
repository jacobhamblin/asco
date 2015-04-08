Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
  get 'session/delete', :to => 'sessions#delete'
  get 'users/session/delete', :to => 'sessions#delete'
end
