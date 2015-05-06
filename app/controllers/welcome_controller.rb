class WelcomeController < ApplicationController
  def index
    @welcomes = Welcome.all
    # @name = "Hello World!"
    # @getName = Welcome.setName
    # @getArray = Welcome.setArray
    # @getNumbers = Welcome.setNumbers
  end
end

