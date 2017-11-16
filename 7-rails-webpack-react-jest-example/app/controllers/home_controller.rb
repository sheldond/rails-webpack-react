class HomeController < ApplicationController
  def index
    @fishes = Fish.all.each_with_object({}) do |fish, hash|
      hash[fish.id] = fish
    end
  end
end
