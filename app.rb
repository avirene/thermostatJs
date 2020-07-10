require "sinatra/base"
# require_relative "./public/javascript/src/thermostat.js"

class Thermostat < Sinatra::Base
  get "/" do
    File.read("public/index.html")
  end
  run! if app_file == $0
end