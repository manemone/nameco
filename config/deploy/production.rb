set :branch, ENV["BRANCH"] || 'master'

set :unicorn_rack_env, 'production'

role :app, %w{nameco}
role :web, %w{nameco}
role :db,  %w{nameco}

server 'nameco', roles: %w{web app db}
