Rails.application.routes.draw do
  root "comments#index"

  namespace :api, format: :json do
    namespace :v1 do
      resources :comments, only: [:index, :create]
    end
  end
end
