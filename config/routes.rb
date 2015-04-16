Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]
  get 'session/delete', :to => 'sessions#delete'
  get 'users/session/delete', :to => 'sessions#delete'
  namespace :api, defaults: { format: :json } do
    delete 'follow/:recipient_id/delete', :to => 'followings#destroy'
    post 'follow/:recipient_id/create', :to => 'followings#create'
    resources :followings, only: [:create, :destroy]
    resources :images
    resources :users
  end
end
